ALTER TABLE intemporal_workflows DROP COLUMN IF EXISTS status;
--;;
DROP INDEX IF EXISTS idx_intemporal_workflows_status ON intemporal_workflows;