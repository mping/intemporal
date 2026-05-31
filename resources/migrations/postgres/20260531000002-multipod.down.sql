DROP INDEX IF EXISTS idx_intemporal_runnable_claim;
--;;
DROP TABLE IF EXISTS intemporal_runnable;
--;;
ALTER TABLE intemporal_workflows
    DROP COLUMN IF EXISTS owner_id,
    DROP COLUMN IF EXISTS lease_until;
