-- Keep consumed IDs so retries cannot deliver the same signal twice.
ALTER TABLE intemporal_signals ADD COLUMN consumed BOOLEAN NOT NULL DEFAULT FALSE;
--;;
DROP INDEX idx_intemporal_signals_fifo ON intemporal_signals;
--;;
CREATE INDEX idx_intemporal_signals_fifo
    ON intemporal_signals (workflow_id, consumed, signal_name(128), queue_id);
