DROP INDEX IF EXISTS idx_intemporal_signals_fifo;
--;;
ALTER TABLE intemporal_signals ALTER COLUMN signal_name TYPE TEXT;
--;;
DROP INDEX IF EXISTS idx_intemporal_history_lookup;
--;;
ALTER TABLE intemporal_history
    DROP CONSTRAINT IF EXISTS uq_intemporal_history_workflow_event;
--;;
DELETE FROM intemporal_history a USING intemporal_history b
 WHERE a.workflow_id = b.workflow_id
   AND a.seq = b.seq
   AND a.event_type = b.event_type
   AND a.id > b.id;
--;;
ALTER TABLE intemporal_history
    ADD CONSTRAINT intemporal_history_workflow_id_seq_event_type_key
    UNIQUE (workflow_id, seq, event_type);
--;;
ALTER TABLE intemporal_history DROP COLUMN event_key;
