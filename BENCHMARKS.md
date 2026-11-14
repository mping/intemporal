# Benchmarks

## What

Compare execution across several stores. Each store runs two scenarios, 1000 workflows each:

- **1 activity**: one activity per workflow.
- **10 async activities**: ten concurrent `async` activities per workflow, joined with `join-all`.

Activities are trivial (`inc`), so results measure engine + store overhead.

## How

```bash
docker compose up -d postgresql mariadb foundation
bin/bench                                  # all stores: memory postgres mariadb fdb
bin/bench memory postgres                  # subset
BENCH_SQL_POOL_SIZE=10 bin/bench postgres  # JDBC pool size (default 64)
BENCH_FDB_CLIENT_THREADS=1 bin/bench fdb   # FDB client threads (default 4)
```

Source: `test/intemporal/benchmarks/store_bench.clj`.

- Same engine for every store: telemetry off, spec checks off, logs at WARN.
- `:workflow-concurrency` swept over 4, 16, 64; one fresh engine per level.
- 50 untimed warmup workflows per scenario.
- Time: submit all 1000 workflows, then await all 1000, from 16 client threads.
- `ms/act`: wall time / activities, not per-activity latency.
- `vs best`: slowdown against the fastest store in the same scenario and concurrency.
- FDB uses a fresh subspace per run, deleted afterwards. Postgres and MariaDB reuse the `root` database; rows persist between runs.

## Results

### 1 owner

2026-11-14. Apple M2 Pro (10 cores, 16 GB), macOS 15.7.5, OpenJDK 22.0.2.
Docker (OrbStack): PostgreSQL 16.2, MariaDB 10.6.11, FoundationDB 7.3.62 (single process, `memory` engine).
Empty databases. No failed workflows. JDBC pool 64, FDB 4 client threads.

Throughput in wf/s per `:workflow-concurrency` (higher is better):

| Scenario            | Store    |    4 |   16 |   64 |
|---------------------|----------|-----:|-----:|-----:|
| 1 activity          | memory   |  236 |  792 | 2583 |
| 1 activity          | postgres |  152 |  356 |  451 |
| 1 activity          | mariadb  |  144 |  210 |  203 |
| 1 activity          | fdb      |  104 |  309 |  439 |
| 10 async activities | memory   |  222 |  729 | 2248 |
| 10 async activities | postgres |  112 |  246 |  329 |
| 10 async activities | mariadb  |   73 |   99 |  165 |
| 10 async activities | fdb      |   84 |  200 |  247 |

Detail at `:workflow-concurrency 64`:

| Scenario            | Store    | Total ms | wf/s | act/s | ms/act | vs best |
|---------------------|----------|---------:|-----:|------:|-------:|--------:|
| 1 activity          | memory   |      387 | 2583 |  2583 |   0.39 |    1.00 |
| 1 activity          | postgres |     2216 |  451 |   451 |   2.22 |    5.72 |
| 1 activity          | fdb      |     2277 |  439 |   439 |   2.28 |    5.88 |
| 1 activity          | mariadb  |     4926 |  203 |   203 |   4.93 |   12.73 |
| 10 async activities | memory   |      445 | 2248 | 22484 |   0.04 |    1.00 |
| 10 async activities | postgres |     3038 |  329 |  3291 |   0.30 |    6.83 |
| 10 async activities | fdb      |     4042 |  247 |  2474 |   0.40 |    9.09 |
| 10 async activities | mariadb  |     6055 |  165 |  1652 |   0.61 |   13.61 |

#### JDBC pool size

wf/s, one run per pool size:

| Scenario            | Store    | Pool |    4 |   16 |   64 |
|---------------------|----------|-----:|-----:|-----:|-----:|
| 1 activity          | postgres |   10 |  138 |  309 |  313 |
| 1 activity          | postgres |   64 |  152 |  356 |  451 |
| 1 activity          | mariadb  |   10 |  124 |  248 |  325 |
| 1 activity          | mariadb  |   64 |  144 |  210 |  203 |
| 10 async activities | postgres |   10 |  105 |  203 |  223 |
| 10 async activities | postgres |   64 |  112 |  246 |  329 |
| 10 async activities | mariadb  |   10 |   72 |  189 |  210 |
| 10 async activities | mariadb  |   64 |   73 |   99 |  165 |

#### FDB client threads

wf/s, round 1 / round 2. Runs alternate thread counts; benchmark subspaces cleared before each run.

| Scenario            | Threads |       4 |      16 |      64 |
|---------------------|--------:|--------:|--------:|--------:|
| 1 activity          |       1 | 124/126 | 288/330 | 348/404 |
| 1 activity          |       4 | 122/114 | 251/328 | 423/434 |
| 10 async activities |       1 |   90/90 | 214/207 | 204/226 |
| 10 async activities |       4 |   84/78 | 181/199 | 272/255 |

### 2 owners

### Observations

- Memory is engine-bound: ~3.2x per 4x concurrency step. The engine loop claims at most its free permits per scan, then sleeps `:poll-ms` (10 ms), so drives/s ≤ concurrency × 100.
- Postgres is the fastest durable store. The default 10-connection pool capped it: at concurrency 64, pool 64 is 44% (1 activity) and 48% (10 async) faster than pool 10.
- MariaDB gets slower with a larger pool at 16 and 64. Concurrent submits deadlock on InnoDB gap locks (`SELECT … FOR UPDATE` on the missing id, then `INSERT`); the JDBC store retries transactions rolled back with SQLSTATE 40001/40P01, up to 5 attempts. Full sweep: 23 deadlocks with pool 64, 11 with pool 10. Whether retries explain the slowdown is not verified.
- FDB: 4 client threads are 6–10% slower at concurrency 4 and 16, 14–23% faster at 64 (round averages). Runs with identical settings differ by up to 15%; an earlier 1-thread run reached 575 wf/s (1 activity, 64), not reproduced.
- FDB per-call latency is high but flat under load: ~1 ms per read-only transaction (read version + network round trip; server reads take ~15 µs), ~5 ms per write (commit latency 1–10 ms).
- With one client thread (earlier harness), FDB looked slowest: ~8 ms of sequential submit/await calls per workflow capped it near 120 wf/s.
- Fan-out at 64: 10 activities cost 1.1x (memory), 1.2x (MariaDB), 1.4x (Postgres), 1.8x (FDB) the time of 1.

#### MariaDB history index (1 client thread)

MariaDB slowed as tables grew until the history index migration. Run 2 starts with 2100 workflows / 48300 history rows from run 1:

| Scenario            | Store    | Before: run 1 ms | Before: run 2 ms | After: run 1 ms | After: run 2 ms |
|---------------------|----------|-----------------:|-----------------:|----------------:|----------------:|
| 1 activity          | postgres |             3727 |             3430 |            3386 |            3365 |
| 1 activity          | mariadb  |             3964 |             7752 |            3874 |            4473 |
| 10 async activities | postgres |             4806 |             4875 |            4752 |            4875 |
| 10 async activities | mariadb  |            25883 |            54604 |            6137 |            8081 |

Cause: history reads (`WHERE workflow_id = ? ORDER BY id`) scanned the whole `intemporal_history` primary key while InnoDB statistics were stale, as they are for tables that grow from empty. Each read cost O(table), so total time grew quadratically. Fan-out suffered most: more history rows and more reads per workflow.

Fix: migration `20261114000010-history-order-index` adds `intemporal_history (workflow_id, id)`, matching filter and order, so the plan no longer depends on statistics. MariaDB run 2 is still 15–32% slower than run 1; Postgres is flat. Not investigated.
