-- Phase C: ownership-based recovery.
-- A workflow is owned by at most one pod (a stable owner-id). A worker resumes
-- the non-terminal workflows it owns-or-null; a crashed pod's work is reclaimed
-- when it restarts with the same owner-id. No time-based leases.
ALTER TABLE intemporal_workflows
    ADD COLUMN IF NOT EXISTS owner TEXT;
--;;
CREATE INDEX IF NOT EXISTS idx_intemporal_workflows_owner
    ON intemporal_workflows (owner);
