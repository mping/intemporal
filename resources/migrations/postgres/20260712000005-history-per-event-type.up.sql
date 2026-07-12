-- A1: the engine intentionally records multiple event types at the same seq
-- (:activity-scheduled + :activity-completed, :timer-scheduled + :timer-fired,
-- :child-workflow-scheduled + :child-workflow-completed + the :async-completed
-- alias, ...). UNIQUE (workflow_id, seq) collapsed them to one last-writer-wins
-- row, silently destroying earlier events (e.g. a child's :async-completed could
-- be overwritten by a replayed :child-workflow-scheduled, deadlocking join).
-- Key history per event type instead, matching the append semantics of the
-- in-memory and FDB stores while keeping replay re-writes idempotent.
ALTER TABLE intemporal_history DROP CONSTRAINT IF EXISTS intemporal_history_workflow_id_seq_key;
--;;
ALTER TABLE intemporal_history ADD CONSTRAINT uq_intemporal_history_wf_seq_type UNIQUE (workflow_id, seq, event_type);
