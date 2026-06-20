-- Phase B2: O(1) workflow status. Avoids scanning intemporal_history to derive
-- the current status, and gives the Phase C recovery poller a cheap predicate.
ALTER TABLE intemporal_workflows
    ADD COLUMN IF NOT EXISTS status VARCHAR(64) NOT NULL DEFAULT 'running';
--;;
CREATE INDEX IF NOT EXISTS idx_intemporal_workflows_status
    ON intemporal_workflows (status);