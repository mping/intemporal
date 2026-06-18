DROP INDEX IF EXISTS idx_intemporal_workflows_parent;
--;;
ALTER TABLE intemporal_workflows
    DROP COLUMN IF EXISTS parent_workflow_id,
    DROP COLUMN IF EXISTS parent_seq,
    DROP COLUMN IF EXISTS parent_close_policy;
