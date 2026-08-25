-- Clean FSM storage baseline. Existing pre-FSM schemas are intentionally not
-- migrated; initialize an empty database instead.
CREATE TABLE IF NOT EXISTS intemporal_workflows (
    id VARCHAR(512) PRIMARY KEY,
    status VARCHAR(64) NOT NULL DEFAULT 'running',
    run_state VARCHAR(32) NOT NULL DEFAULT 'RUNNABLE',
    owner VARCHAR(255) NULL,
    next_run_at BIGINT NULL,
    wake_version BIGINT NOT NULL DEFAULT 0,
    revision BIGINT NOT NULL DEFAULT 0,
    history_revision BIGINT NOT NULL DEFAULT 0,
    next_signal_id BIGINT NOT NULL DEFAULT 0,
    cancelled BOOLEAN NOT NULL DEFAULT FALSE,
    parent_workflow_id VARCHAR(512) NULL,
    parent_seq INTEGER NULL,
    parent_close_policy VARCHAR(32) NULL,
    created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    CHECK ((parent_workflow_id IS NULL AND parent_seq IS NULL AND parent_close_policy IS NULL)
           OR (parent_workflow_id IS NOT NULL AND parent_seq IS NOT NULL
               AND parent_close_policy IN ('cascade-cancel', 'abandon', 'terminate')))
);
--;;
CREATE INDEX idx_intemporal_workflows_schedule
    ON intemporal_workflows (owner, run_state, next_run_at, created_at);
--;;
CREATE INDEX idx_intemporal_workflows_parent
    ON intemporal_workflows (parent_workflow_id);
--;;
CREATE TABLE IF NOT EXISTS intemporal_history (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    workflow_id VARCHAR(512) NOT NULL,
    event_key CHAR(64) NOT NULL,
    seq INTEGER NOT NULL,
    event_type VARCHAR(128) NOT NULL,
    data LONGTEXT NOT NULL,
    CONSTRAINT uq_intemporal_history_workflow_event UNIQUE (workflow_id, event_key)
);
--;;
CREATE INDEX idx_intemporal_history_lookup
    ON intemporal_history (workflow_id, event_type, seq);
--;;
CREATE TABLE IF NOT EXISTS intemporal_signals (
    workflow_id VARCHAR(512) NOT NULL,
    queue_id BIGINT NOT NULL,
    signal_key CHAR(64) NOT NULL,
    signal_id TEXT NOT NULL,
    signal_name VARCHAR(255) NOT NULL,
    payload LONGTEXT NOT NULL,
    PRIMARY KEY (workflow_id, signal_key),
    CONSTRAINT uq_intemporal_signals_queue UNIQUE (workflow_id, queue_id)
);
--;;
CREATE INDEX idx_intemporal_signals_fifo
    ON intemporal_signals (workflow_id, signal_name(128), queue_id);
