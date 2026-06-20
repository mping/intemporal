ALTER TABLE intemporal_workflows DROP COLUMN IF EXISTS parent_close_policy;
--;;
ALTER TABLE intemporal_workflows DROP COLUMN IF EXISTS parent_seq;
--;;
ALTER TABLE intemporal_workflows DROP COLUMN IF EXISTS parent_workflow_id;
--;;
DROP INDEX IF EXISTS idx_intemporal_workflows_parent ON intemporal_workflows;