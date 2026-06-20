ALTER TABLE intemporal_workflows DROP COLUMN IF EXISTS owner;
--;;
DROP INDEX IF EXISTS idx_intemporal_workflows_owner ON intemporal_workflows;