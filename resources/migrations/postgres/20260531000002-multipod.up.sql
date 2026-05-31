-- Phase C: multi-pod safety primitives.

-- C1: lease / ownership. A worker claims a workflow before executing it; every
-- save-events validates the lease so a worker that lost ownership cannot keep
-- writing (closes the silent concurrent-execution path, bug 1.2).
ALTER TABLE intemporal_workflows
    ADD COLUMN IF NOT EXISTS owner_id    TEXT,
    ADD COLUMN IF NOT EXISTS lease_until TIMESTAMPTZ;
--;;
-- C3: durable runnable markers. Whenever a workflow needs attention (a signal
-- arrived, it was cancelled, a timer fired) a marker is written here. Workers
-- poll this table instead of relying on a process-local callback (closes the
-- lost-wake-across-pods path, bug 1.1). PRIMARY KEY collapses duplicates: a
-- workflow is either runnable or it isn't.
CREATE TABLE IF NOT EXISTS intemporal_runnable (
    workflow_id   TEXT PRIMARY KEY REFERENCES intemporal_workflows(id) ON DELETE CASCADE,
    reason        TEXT,
    enqueued_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
    claimed_until TIMESTAMPTZ NOT NULL DEFAULT to_timestamp(0)
);
--;;
CREATE INDEX IF NOT EXISTS idx_intemporal_runnable_claim
    ON intemporal_runnable (claimed_until, enqueued_at);
