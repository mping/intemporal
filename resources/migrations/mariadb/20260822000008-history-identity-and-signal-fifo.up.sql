ALTER TABLE intemporal_history ADD COLUMN event_key VARCHAR(512) NULL;
--;;
UPDATE intemporal_history
   SET event_key = CONCAT('[:', event_type, ' ', seq, ' nil]');
--;;
ALTER TABLE intemporal_history MODIFY event_key VARCHAR(512) NOT NULL;
--;;
CREATE INDEX idx_intemporal_history_workflow ON intemporal_history (workflow_id);
--;;
ALTER TABLE intemporal_history DROP INDEX workflow_id;
--;;
ALTER TABLE intemporal_history
    ADD CONSTRAINT uq_intemporal_history_workflow_event UNIQUE (workflow_id, event_key);
--;;
CREATE INDEX idx_intemporal_history_lookup
    ON intemporal_history (workflow_id, event_type, seq);
--;;
ALTER TABLE intemporal_signals MODIFY signal_name VARCHAR(255);
--;;
CREATE INDEX idx_intemporal_signals_fifo
    ON intemporal_signals (workflow_id, signal_name, id);
