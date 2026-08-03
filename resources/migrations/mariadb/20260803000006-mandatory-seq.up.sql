-- A8: :seq was optional; backfill legacy NULL-seq control events with unique
-- per-workflow negative sentinels before enforcing NOT NULL (see the postgres
-- migration of the same name for the full rationale).
UPDATE intemporal_history h
JOIN (
  SELECT id, ROW_NUMBER() OVER (PARTITION BY workflow_id ORDER BY id) - 1 AS rn
  FROM intemporal_history
  WHERE seq IS NULL
) sub ON h.id = sub.id
SET h.seq = -2 - sub.rn;
--;;
ALTER TABLE intemporal_history MODIFY seq INTEGER NOT NULL;
