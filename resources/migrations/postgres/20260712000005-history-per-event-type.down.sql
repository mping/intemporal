ALTER TABLE intemporal_history DROP CONSTRAINT IF EXISTS uq_intemporal_history_wf_seq_type;
--;;
ALTER TABLE intemporal_history ADD CONSTRAINT intemporal_history_workflow_id_seq_key UNIQUE (workflow_id, seq);
