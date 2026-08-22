DELETE FROM jepsen_signals_sent newer
USING jepsen_signals_sent older
WHERE newer.test_run = older.test_run
  AND newer.workflow_id = older.workflow_id
  AND newer.id > older.id;
--;;
ALTER TABLE jepsen_signals_sent
    ADD CONSTRAINT uq_jepsen_signal_once UNIQUE (test_run, workflow_id);
