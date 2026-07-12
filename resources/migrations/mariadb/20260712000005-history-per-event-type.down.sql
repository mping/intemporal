ALTER TABLE intemporal_history DROP INDEX IF EXISTS uq_intemporal_history_wf_seq_type;
--;;
ALTER TABLE intemporal_history ADD CONSTRAINT workflow_id UNIQUE (workflow_id, seq);
--;;
ALTER TABLE intemporal_history MODIFY event_type TEXT;
