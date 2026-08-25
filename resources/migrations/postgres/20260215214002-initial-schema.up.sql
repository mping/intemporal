-- Clean FSM storage baseline. Existing pre-FSM schemas are intentionally not
-- migrated; initialize an empty database instead.
CREATE TABLE IF NOT EXISTS intemporal_workflows (
    id TEXT PRIMARY KEY,
    status TEXT NOT NULL DEFAULT 'running',
    run_state TEXT NOT NULL DEFAULT 'RUNNABLE',
    owner TEXT,
    next_run_at BIGINT,
    wake_version BIGINT NOT NULL DEFAULT 0,
    revision BIGINT NOT NULL DEFAULT 0,
    history_revision BIGINT NOT NULL DEFAULT 0,
    next_signal_id BIGINT NOT NULL DEFAULT 0,
    cancelled BOOLEAN NOT NULL DEFAULT FALSE,
    parent_workflow_id TEXT,
    parent_seq INTEGER,
    parent_close_policy TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CHECK ((parent_workflow_id IS NULL AND parent_seq IS NULL AND parent_close_policy IS NULL)
           OR (parent_workflow_id IS NOT NULL AND parent_seq IS NOT NULL
               AND parent_close_policy IN ('cascade-cancel', 'abandon', 'terminate')))
);
--;;
CREATE INDEX IF NOT EXISTS idx_intemporal_workflows_schedule
    ON intemporal_workflows (owner, run_state, next_run_at, created_at)
    WHERE status NOT IN ('completed', 'failed', 'cancelled', 'terminated');
--;;
CREATE INDEX IF NOT EXISTS idx_intemporal_workflows_parent
    ON intemporal_workflows (parent_workflow_id)
    WHERE parent_workflow_id IS NOT NULL;
--;;
CREATE TABLE IF NOT EXISTS intemporal_history (
    id BIGSERIAL PRIMARY KEY,
    workflow_id TEXT NOT NULL REFERENCES intemporal_workflows(id) ON DELETE CASCADE,
    event_key CHAR(64) NOT NULL,
    seq INTEGER NOT NULL,
    event_type TEXT NOT NULL,
    data TEXT NOT NULL,
    UNIQUE (workflow_id, event_key)
);
--;;
CREATE INDEX IF NOT EXISTS idx_intemporal_history_lookup
    ON intemporal_history (workflow_id, event_type, seq);
--;;
CREATE TABLE IF NOT EXISTS intemporal_signals (
    workflow_id TEXT NOT NULL REFERENCES intemporal_workflows(id) ON DELETE CASCADE,
    queue_id BIGINT NOT NULL,
    signal_key CHAR(64) NOT NULL,
    signal_id TEXT NOT NULL,
    signal_name VARCHAR(255) NOT NULL,
    payload TEXT NOT NULL,
    PRIMARY KEY (workflow_id, signal_key),
    UNIQUE (workflow_id, queue_id)
);
--;;
CREATE INDEX IF NOT EXISTS idx_intemporal_signals_fifo
    ON intemporal_signals (workflow_id, signal_name, queue_id);
