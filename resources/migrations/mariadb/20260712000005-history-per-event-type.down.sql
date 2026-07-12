-- Re-add the old key BEFORE dropping the new one: the FK on workflow_id needs
-- an index with workflow_id as its leftmost column at all times.
ALTER TABLE intemporal_history ADD CONSTRAINT workflow_id UNIQUE (workflow_id, seq);
--;;
ALTER TABLE intemporal_history DROP INDEX IF EXISTS uq_intemporal_history_wf_seq_type;
--;;
ALTER TABLE intemporal_history MODIFY event_type TEXT;
