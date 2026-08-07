CREATE TABLE IF NOT EXISTS intemporal_workflows (
    id TEXT PRIMARY KEY,
    cancelled BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    -- Phase B2: O(1) workflow status, instead of scanning intemporal_history to
    -- derive it. Also gives the Phase C recovery poller a cheap predicate.
    status TEXT NOT NULL DEFAULT 'running',
    -- Phase C: ownership-based recovery. A workflow is owned by at most one pod
    -- (a stable owner-id). A worker resumes the non-terminal workflows it
    -- owns-or-null; a crashed pod's work is reclaimed when it restarts with the
    -- same owner-id. No time-based leases.
    owner TEXT,
    -- C2: earliest-wake filter for the ownership scan. A workflow suspended on
    -- a timer (sleep / signal-with-timeout) records when it next needs
    -- attention, so the recovery worker can skip long-sleeping workflows until
    -- they are due instead of replaying them every poll. NULL = always
    -- eligible (e.g. waiting on an external signal, not the clock).
    wake_at TIMESTAMPTZ,
    -- Tier 2: independent child workflows. A child is a first-class workflow
    -- row that also records its parent linkage: which workflow scheduled it
    -- (parent_workflow_id), at which parent sequence number (parent_seq, used
    -- to write the parent's :child-workflow-* completion event), and what
    -- should happen to it if the parent closes first (parent_close_policy:
    -- cascade-cancel | abandon | require-join). NULL columns = a top-level
    -- workflow with no parent.
    parent_workflow_id   TEXT,
    parent_seq           INTEGER,
    parent_close_policy  TEXT
);
--;;
CREATE INDEX IF NOT EXISTS idx_intemporal_workflows_status
    ON intemporal_workflows (status);
--;;
CREATE INDEX IF NOT EXISTS idx_intemporal_workflows_owner
    ON intemporal_workflows (owner);
--;;
-- Partial index for the due-scan: only non-terminal rows with a future wake_at
-- are interesting to the poller's "skip until due" predicate.
CREATE INDEX IF NOT EXISTS idx_intemporal_workflows_wake_at
    ON intemporal_workflows (wake_at)
    WHERE wake_at IS NOT NULL;
--;;
-- list-children enumerates a parent's children for close-policy enforcement.
CREATE INDEX IF NOT EXISTS idx_intemporal_workflows_parent
    ON intemporal_workflows (parent_workflow_id)
    WHERE parent_workflow_id IS NOT NULL;
--;;
-- A1: the engine intentionally records multiple event types at the same seq
-- (:activity-scheduled + :activity-completed, :timer-scheduled + :timer-fired,
-- :child-workflow-scheduled + :child-workflow-completed + the :async-completed
-- alias, ...), so history is keyed per event type rather than per seq alone.
--
-- A8: seq is NOT NULL — the engine assigns every event a deterministic seq
-- (:workflow-started = -1, terminal events = one past the last real op seq —
-- see execution.clj's next-terminal-seq / core.cljc).
--
-- Bug #22: data is plain text, not JSONB — the stores serialize payloads with
-- EDN (intemporal.internal.codec) instead of cheshire, so keyword VALUES
-- survive the round-trip (cheshire's (parse-string s true) keywordized keys
-- but not values). EDN is not valid JSON.
CREATE TABLE IF NOT EXISTS intemporal_history (
    id SERIAL PRIMARY KEY,
    workflow_id TEXT REFERENCES intemporal_workflows(id) ON DELETE CASCADE,
    seq INTEGER NOT NULL,
    event_type TEXT,
    data TEXT,
    UNIQUE (workflow_id, seq, event_type)
);
--;;
-- Bug #22: payload is plain text (EDN), not JSONB — see intemporal_history.data
-- above.
CREATE TABLE IF NOT EXISTS intemporal_signals (
    id SERIAL PRIMARY KEY,
    workflow_id TEXT REFERENCES intemporal_workflows(id) ON DELETE CASCADE,
    signal_name TEXT,
    payload TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
