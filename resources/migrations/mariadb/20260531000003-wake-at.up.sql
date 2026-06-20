-- C2: earliest-wake filter for the ownership scan. A workflow suspended on a
-- timer (sleep / signal-with-timeout) records when it next needs attention, so
-- the recovery worker can skip long-sleeping workflows until they are due
-- instead of replaying them every poll. NULL = always eligible (e.g. waiting on
-- an external signal, not the clock).
ALTER TABLE intemporal_workflows
    ADD COLUMN IF NOT EXISTS wake_at TIMESTAMP;
--;;
-- MariaDB does not support partial indexes (WHERE clause on CREATE INDEX).
-- The application filters NULL wake_at values in list-pending via SQL.
CREATE INDEX IF NOT EXISTS idx_intemporal_workflows_wake_at
    ON intemporal_workflows (wake_at);