DELETE FROM intemporal_signals WHERE consumed = TRUE;
--;;
DROP INDEX idx_intemporal_signals_fifo;
--;;
ALTER TABLE intemporal_signals DROP COLUMN consumed;
--;;
CREATE INDEX idx_intemporal_signals_fifo
    ON intemporal_signals (workflow_id, signal_name, queue_id);
