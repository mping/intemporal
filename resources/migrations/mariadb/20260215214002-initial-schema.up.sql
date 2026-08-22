CREATE TABLE IF NOT EXISTS intemporal_workflows (
    id VARCHAR(512) PRIMARY KEY,
    cancelled BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- O(1) workflow status, instead of scanning intemporal_history to derive it.
    status VARCHAR(64) NOT NULL DEFAULT 'running',
    -- Ownership-based recovery. A workflow is owned by at most one process
    -- (a stable owner-id). A worker resumes the non-terminal workflows it
    -- owns-or-null; a crashed pod's work is reclaimed when it restarts with the
    -- same owner-id. No time-based leases.
    owner VARCHAR(255),
    -- Durable scheduling is independent of the public workflow status.
    run_state VARCHAR(32) NOT NULL DEFAULT 'RUNNABLE',
    next_run_at TIMESTAMP(3) NULL,
    wake_version BIGINT NOT NULL DEFAULT 0,
    -- Tier 2: independent child workflows. A child is a first-class workflow
    -- row that also records its parent linkage.
    parent_workflow_id   VARCHAR(512),
    parent_seq           INTEGER,
    parent_close_policy  TEXT
);
--;;
CREATE INDEX IF NOT EXISTS idx_intemporal_workflows_status
    ON intemporal_workflows (status);
--;;
CREATE INDEX IF NOT EXISTS idx_intemporal_workflows_schedule
    ON intemporal_workflows (owner, run_state, next_run_at, created_at);
--;;
-- MariaDB does not support partial indexes. The application filters NULL
-- parent_workflow_id values in list-children via SQL WHERE clause.
CREATE INDEX IF NOT EXISTS idx_intemporal_workflows_parent
    ON intemporal_workflows (parent_workflow_id);
--;;
-- The engine records multiple event types at the same seq, so history is
-- keyed per event type rather than per seq alone (see the postgres migration
-- of the same era for the full rationale). event_type is VARCHAR, not TEXT, so
-- it can participate in the unique key below.
--
-- seq is NOT NULL — the engine assigns every event a deterministic seq
-- (:workflow-started = -1, terminal events = one past the last real op seq).
--
-- Bug #22: data is LONGTEXT, not JSON — the stores serialize payloads with EDN
-- (intemporal.internal.codec) instead of cheshire, so keyword VALUES survive
-- the round-trip. EDN is not valid JSON, and MariaDB's JSON type carries an
-- implicit CHECK (json_valid(col)), so this column must be plain text.
-- LONGTEXT, not TEXT: MariaDB implements JSON as LONGTEXT (4 GiB); TEXT would
-- cap payloads at 64 KiB and silently truncate large events.
CREATE TABLE IF NOT EXISTS intemporal_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    workflow_id VARCHAR(512),
    seq INTEGER NOT NULL,
    event_type VARCHAR(128),
    data LONGTEXT,
    UNIQUE (workflow_id, seq, event_type),
    FOREIGN KEY (workflow_id) REFERENCES intemporal_workflows(id) ON DELETE CASCADE
);
--;;
-- Bug #22: payload is LONGTEXT (EDN), not JSON — see intemporal_history.data
-- above.
CREATE TABLE IF NOT EXISTS intemporal_signals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    workflow_id VARCHAR(512),
    signal_name TEXT,
    payload LONGTEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (workflow_id) REFERENCES intemporal_workflows(id) ON DELETE CASCADE
);
