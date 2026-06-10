-- Jepsen test side-channel tables.
-- Applied by the Jepsen runner (not by make-jdbc-store) against the same
-- Postgres instance as intemporal itself.

-- Work queue: the test client inserts workflow specs here; worker JVMs poll and
-- claim items with FOR UPDATE SKIP LOCKED.
CREATE TABLE IF NOT EXISTS jepsen_work_queue (
    id         BIGSERIAL PRIMARY KEY,
    test_run   TEXT NOT NULL,
    workflow_id TEXT NOT NULL UNIQUE,
    wf_type    TEXT NOT NULL,  -- signal-wait | activity-chain | cancel-sleep | rapid-signal
    nonce      TEXT NOT NULL,
    args       JSONB,
    claimed_by TEXT,
    claimed_at TIMESTAMP WITH TIME ZONE,
    completed  BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
--;;
CREATE INDEX IF NOT EXISTS idx_jepsen_work_queue_unclaimed
    ON jepsen_work_queue (test_run, claimed_by, id)
    WHERE claimed_by IS NULL AND completed = FALSE;
--;;
-- Side-channel: one row per activity invocation. Written with auto-commit so
-- rows survive a SIGKILL between :begin and :end.
CREATE TABLE IF NOT EXISTS jepsen_invocations (
    id          BIGSERIAL PRIMARY KEY,
    test_run    TEXT NOT NULL,
    workflow_id TEXT NOT NULL,
    step        TEXT NOT NULL,
    nonce       TEXT,
    phase       TEXT NOT NULL,  -- begin | end | fail
    owner       TEXT,
    ts          TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
--;;
CREATE INDEX IF NOT EXISTS idx_jepsen_invocations_lookup
    ON jepsen_invocations (test_run, workflow_id, nonce);
--;;
-- Signals sent by the test client.  Used by the checker to verify that every
-- sent signal was eventually consumed.
CREATE TABLE IF NOT EXISTS jepsen_signals_sent (
    id          BIGSERIAL PRIMARY KEY,
    test_run    TEXT NOT NULL,
    workflow_id TEXT NOT NULL,
    signal_name TEXT NOT NULL,
    sent_at     TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
--;;
-- Cancels issued by the client.  Used by the checker to verify that cancelled
-- workflows eventually reach a terminal state.
CREATE TABLE IF NOT EXISTS jepsen_cancels_sent (
    id          BIGSERIAL PRIMARY KEY,
    test_run    TEXT NOT NULL,
    workflow_id TEXT NOT NULL,
    sent_at     TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
