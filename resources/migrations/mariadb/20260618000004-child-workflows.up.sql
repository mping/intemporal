-- Tier 2: independent child workflows.
-- A child is a first-class workflow row that also records its parent linkage.
ALTER TABLE intemporal_workflows
    ADD COLUMN IF NOT EXISTS parent_workflow_id   VARCHAR(512),
    ADD COLUMN IF NOT EXISTS parent_seq           INTEGER,
    ADD COLUMN IF NOT EXISTS parent_close_policy  TEXT;
--;;
-- MariaDB does not support partial indexes. The application filters NULL
-- parent_workflow_id values in list-children via SQL WHERE clause.
CREATE INDEX IF NOT EXISTS idx_intemporal_workflows_parent
    ON intemporal_workflows (parent_workflow_id);