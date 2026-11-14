# Benchmarks

## What

Compare execution across several stores. Each store runs two scenarios, 1000 workflows each:

- **1 activity**: one activity per workflow.
- **10 async activities**: ten concurrent `async` activities per workflow, joined with `join-all`.

Activities are trivial (`inc`), so results measure engine + store overhead.

## How

```bash
docker compose up -d postgresql mariadb foundation
bin/bench                    # all stores: memory postgres mariadb fdb
bin/bench memory postgres    # subset
```

Source: `test/intemporal/benchmarks/store_bench.clj`.

- Same engine for every store: `:workflow-concurrency 16`, telemetry off, spec checks off, logs at WARN.
- 50 untimed warmup workflows per scenario.
- Time: submit all 1000 workflows, then await all 1000.
- `ms/act`: wall time / activities, not per-activity latency.
- `vs best`: slowdown against the fastest store in the scenario.
- FDB uses a fresh subspace per run. Postgres and MariaDB reuse the `root` database; rows persist between runs.

## Results

### 1 owner

2026-11-14. Apple M2 Pro (10 cores, 16 GB), macOS 15.7.5, OpenJDK 22.0.2.
Docker (OrbStack): PostgreSQL 16.2, MariaDB 10.6.11, FoundationDB 7.3.62.
Empty databases. No failed workflows. Includes MariaDB migration `20261114000010-history-order-index`.

| Scenario            | Store    | Total ms | wf/s | act/s | ms/act | vs best |
|---------------------|----------|---------:|-----:|------:|-------:|--------:|
| 1 activity          | memory   |     1107 |  903 |   903 |   1.11 |    1.00 |
| 1 activity          | postgres |     3386 |  295 |   295 |   3.39 |    3.06 |
| 1 activity          | mariadb  |     3874 |  258 |   258 |   3.87 |    3.50 |
| 1 activity          | fdb      |     9467 |  106 |   106 |   9.47 |    8.55 |
| 10 async activities | memory   |     1145 |  873 |  8730 |   0.11 |    1.00 |
| 10 async activities | postgres |     4752 |  210 |  2104 |   0.48 |    4.15 |
| 10 async activities | mariadb  |     6137 |  163 |  1629 |   0.61 |    5.36 |
| 10 async activities | fdb      |     9469 |  106 |  1056 |   0.95 |    8.27 |

### 2 owners

### Observations

- Postgres is the fastest durable store.
- Fan-out is nearly free on memory, Postgres and FDB: 10 activities cost about the same per workflow as 1. MariaDB fan-out costs 1.6x its single-activity run.
- MariaDB slowed as tables grew until the history index migration. Run 2 starts with 2100 workflows / 48300 history rows from run 1:

| Scenario            | Store    | Before: run 1 ms | Before: run 2 ms | After: run 1 ms | After: run 2 ms |
|---------------------|----------|-----------------:|-----------------:|----------------:|----------------:|
| 1 activity          | postgres |             3727 |             3430 |            3386 |            3365 |
| 1 activity          | mariadb  |             3964 |             7752 |            3874 |            4473 |
| 10 async activities | postgres |             4806 |             4875 |            4752 |            4875 |
| 10 async activities | mariadb  |            25883 |            54604 |            6137 |            8081 |

Cause: history reads (`WHERE workflow_id = ? ORDER BY id`) scanned the whole `intemporal_history` primary key while InnoDB statistics were stale, as they are for tables that grow from empty. Each read cost O(table), so total time grew quadratically. Fan-out suffered most: more history rows and more reads per workflow.

Fix: migration `20261114000010-history-order-index` adds `intemporal_history (workflow_id, id)`, matching filter and order, so the plan no longer depends on statistics. MariaDB run 2 is still 15–32% slower than run 1; Postgres is flat. Not investigated.
