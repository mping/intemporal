ALTER TABLE intemporal_history ADD COLUMN event_key TEXT;
--;;
UPDATE intemporal_history
   SET event_key = '[' || ':' || event_type || ' ' || seq || ' nil]';
--;;
ALTER TABLE intemporal_history ALTER COLUMN event_key SET NOT NULL;
--;;
ALTER TABLE intemporal_history
    DROP CONSTRAINT intemporal_history_workflow_id_seq_event_type_key;
--;;
ALTER TABLE intemporal_history
    ADD CONSTRAINT uq_intemporal_history_workflow_event
    UNIQUE (workflow_id, event_key);
--;;
CREATE INDEX idx_intemporal_history_lookup
    ON intemporal_history (workflow_id, event_type, seq);
--;;
ALTER TABLE intemporal_signals ALTER COLUMN signal_name TYPE VARCHAR(255);
--;;
CREATE INDEX idx_intemporal_signals_fifo
    ON intemporal_signals (workflow_id, signal_name, id);
