-- A8: :seq was optional. Four control event types (:workflow-started,
-- :workflow-completed, :workflow-failed, :workflow-cancelled, and
-- :workflow-terminated) were historically saved with seq = NULL — Postgres
-- treats NULLs as distinct in a unique index, so the (workflow_id, seq,
-- event_type) upsert never matched on re-save and duplicate terminal rows
-- accumulated (P6). The engine now assigns every event a deterministic seq
-- (:workflow-started = -1, terminal events = one past the last real op seq —
-- see execution.clj's next-terminal-seq / core.cljc). Backfill any pre-existing
-- NULL-seq rows with unique per-workflow negative sentinels (below -1, so they
-- can't collide with the new :workflow-started seq) before enforcing NOT NULL.
UPDATE intemporal_history h
SET seq = -2 - sub.rn
FROM (
  SELECT id, ROW_NUMBER() OVER (PARTITION BY workflow_id ORDER BY id) - 1 AS rn
  FROM intemporal_history
  WHERE seq IS NULL
) sub
WHERE h.id = sub.id;
--;;
ALTER TABLE intemporal_history ALTER COLUMN seq SET NOT NULL;
