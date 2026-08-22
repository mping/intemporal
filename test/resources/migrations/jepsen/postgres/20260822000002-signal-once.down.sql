ALTER TABLE jepsen_signals_sent
    DROP CONSTRAINT IF EXISTS uq_jepsen_signal_once;
