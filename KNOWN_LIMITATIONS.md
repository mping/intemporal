# Known limitations

intemporal is not production ready. These design gaps remain.

## Distributed ownership

Ownership uses a stable process identity, not a renewable lease or fencing token.
One owner must identify at most one live engine. An owner that never returns can
strand its work. General multi-replica deployment needs lease expiry and fencing
on every state-changing drive write.

## Cross-workflow transactions

Terminal events, parent notification, and descendant close actions commit atomically.
Large workflow trees can exceed backend transaction limits; there is no bounded
close protocol or payload-size validation yet.

## Identity and replay compatibility

Identical submissions with the same workflow ID return the existing run, including
terminal runs. Different creations conflict; child-ID conflicts fail the parent.
There is no distinct run ID or workflow-ID reuse policy.

Replay checks activity-name mismatches, but does not validate normalized command
signatures for every operation and behavior-affecting option. Workflow upgrades
can require pinning old code even when no non-determinism error is raised.

## Signals and cancellation

Signal consumption and its history event commit atomically. Signal IDs remain
reserved after consumption, so receipts accumulate for the workflow's lifetime.
The JDBC migration preserves queued IDs; receipts for signals consumed before
this change cannot be recovered automatically.

Public `:cancelled` status can indicate a request before terminal cancellation.
`await-workflow` also waits for terminal history. Cancellation is cooperative and
requires workflow code to reach an unresolved operation.

## Activity delivery and scale

Activities are at-least-once. A process can crash after an external side effect
but before its completion event commits. Timed-out activity code may ignore
interruption. Activities must make external effects idempotent; the library does
not yet expose a stable activity execution/idempotency context.

Each pass replays full history, so long workflows accumulate roughly quadratic
replay work. The drive budget yields to the scheduler without failing the workflow,
but there is no continue-as-new, incremental history, or sticky execution cache.

## Persistence and observability

The JDBC/FDB codec supports EDN values, not arbitrary JVM objects or records.
InMemory can accept values that persistent backends cannot encode.

Workflow tracing retains a process-local span until terminal completion. Long
waits retain spans and delay export; drive spans would suit long-lived workflows.
