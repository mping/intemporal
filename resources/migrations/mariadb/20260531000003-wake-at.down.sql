ALTER TABLE intemporal_workflows DROP COLUMN IF EXISTS wake_at;
--;;
DROP INDEX IF EXISTS idx_intemporal_workflows_wake_at ON intemporal_workflows;