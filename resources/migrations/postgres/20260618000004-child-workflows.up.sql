-- Tier 2: independent child workflows.
-- A child is a first-class workflow row that also records its parent linkage:
-- which workflow scheduled it (parent_workflow_id), at which parent sequence
-- number (parent_seq, used to write the parent's :child-workflow-* completion
-- event), and what should happen to it if the parent closes first
-- (parent_close_policy: cascade-cancel | abandon | require-join). NULL columns =
-- a top-level workflow with no parent.
ALTER TABLE intemporal_workflows
    ADD COLUMN IF NOT EXISTS parent_workflow_id   TEXT,
    ADD COLUMN IF NOT EXISTS parent_seq           INTEGER,
    ADD COLUMN IF NOT EXISTS parent_close_policy  TEXT;
--;;
-- list-children enumerates a parent's children for close-policy enforcement.
CREATE INDEX IF NOT EXISTS idx_intemporal_workflows_parent
    ON intemporal_workflows (parent_workflow_id)
    WHERE parent_workflow_id IS NOT NULL;
