# Known limitations

intemporal is not production ready. Its replay and scheduling invariants are tested
across the included stores, but the following design gaps remain.

## Distributed ownership

Ownership uses a stable process identity, not a renewable lease or fencing token. A
replacement process can recover work only by using the same `:owner-id`, and that id
must identify at most one live process. Overlapping processes with one owner can both
write; an owner that never returns can strand its `RUNNING` work. General multi-replica
deployment needs lease expiry plus fencing on every state-changing drive write.

## Cross-workflow atomicity

A workflow's terminal event is committed before child close policies and parent
notification are applied. Those cross-workflow effects are idempotent, but a hard crash
between the writes can make them undiscoverable because the terminal workflow is no
longer driven. Child seeding/linking is repairable by parent replay, but terminal parent
notification needs an atomic transition or durable outbox/reconciler.

## Identity and replay compatibility

- Reusing a workflow id is not a defined public operation. A repeated submission uses
  first-write-wins history identity and may observe an earlier or already-terminal run;
  there is no atomic create/conflict result or distinct run id.
- A custom child id can collide with an existing workflow. Callers must currently ensure
  child ids are globally unique.
- Replay checks activity-name mismatches, but it does not yet persist and validate a
  normalized command signature for timers, signals, async operations, children, and all
  behavior-affecting options. Workflow upgrades can therefore require operationally
  pinning old code even when no non-determinism error is raised.

## Signals and cancellation

- `:signal-id` is returned and stored in the payload but is not enforced as an
  idempotency key. Sending the same id twice can enqueue two signals.
- Signal consumption and timed-wait completion are not one store transaction. A signal
  racing exactly with timeout arbitration may be consumed even when the competing
  first-write-wins timeout outcome becomes durable.
- Cancelling an unknown workflow currently creates backend cancellation state. Treat
  workflow ids as validated inputs until cancel-before-create semantics are defined.
- Public `:cancelled` status can mean a request is present before the terminal
  `:workflow-cancelled` event. `await-workflow` additionally waits for terminal history,
  so it does not return early.

## Activity delivery and scale

Activities are at-least-once. A process can crash after an external side effect but
before its completion event commits, and a timed-out JVM task may continue despite
interruption. Activity code must make external effects idempotent; the library does not
yet expose a stable execution/idempotency context to the activity.

Each drive pass reloads and replays the full history. Long workflows therefore accumulate
roughly quadratic replay work, and the default 1,000-iteration drive budget currently
fails rather than yields a valid very-long workflow. There is no continue-as-new,
incremental history, or sticky execution cache yet.

## Persistence and observability

The JDBC/FDB codec supports EDN values but not arbitrary JVM objects or records, and the
API does not yet validate backend payload/transaction size limits before side effects.
InMemory can accept values that a persistent backend cannot encode.

Workflow tracing keeps a live process-local span until terminal completion. Very long
waits can retain spans in memory and delay export; task/drive spans would be a better
long-lived model.
