-- A1: the engine records multiple event types at the same seq; UNIQUE
-- (workflow_id, seq) collapsed them to one last-writer-wins row. Re-key per
-- event type (see the postgres migration of the same name for details).
-- event_type must become VARCHAR to participate in a unique key.
ALTER TABLE intemporal_history MODIFY event_type VARCHAR(128);
--;;
-- ORDER MATTERS: add the new key BEFORE dropping the old one. The FK on
-- workflow_id (intemporal_history_ibfk_1) requires an index whose leftmost
-- column is workflow_id at all times; dropping first fails with errno 150.
ALTER TABLE intemporal_history ADD CONSTRAINT uq_intemporal_history_wf_seq_type UNIQUE (workflow_id, seq, event_type);
--;;
ALTER TABLE intemporal_history DROP INDEX IF EXISTS workflow_id;
