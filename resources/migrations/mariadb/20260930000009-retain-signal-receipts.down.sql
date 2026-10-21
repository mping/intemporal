DELETE FROM intemporal_signals WHERE consumed = TRUE;
--;;
DROP INDEX idx_intemporal_signals_fifo ON intemporal_signals;
--;;
ALTER TABLE intemporal_signals DROP COLUMN consumed;
--;;
CREATE INDEX idx_intemporal_signals_fifo
    ON intemporal_signals (workflow_id, signal_name(128), queue_id);
