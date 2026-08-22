DROP INDEX idx_intemporal_signals_fifo ON intemporal_signals;
--;;
ALTER TABLE intemporal_signals MODIFY signal_name TEXT;
--;;
DROP INDEX idx_intemporal_history_lookup ON intemporal_history;
--;;
ALTER TABLE intemporal_history DROP INDEX uq_intemporal_history_workflow_event;
--;;
DELETE newer FROM intemporal_history newer
JOIN intemporal_history older
  ON newer.workflow_id = older.workflow_id
 AND newer.seq = older.seq
 AND newer.event_type = older.event_type
 AND newer.id > older.id;
--;;
ALTER TABLE intemporal_history
    ADD CONSTRAINT uq_intemporal_history_wf_seq_type UNIQUE (workflow_id, seq, event_type);
--;;
DROP INDEX idx_intemporal_history_workflow ON intemporal_history;
--;;
ALTER TABLE intemporal_history DROP COLUMN event_key;
