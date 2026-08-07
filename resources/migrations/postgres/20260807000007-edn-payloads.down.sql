-- Reverting only restores the COLUMN TYPE, not the wire format: rows written by
-- the EDN codec are not valid JSON, so this cast fails unless the table is empty
-- or was written by the pre-#22 cheshire codec. Truncate history/signals first if
-- you need to roll back with data present.
ALTER TABLE intemporal_history ALTER COLUMN data TYPE jsonb USING data::jsonb;
--;;
ALTER TABLE intemporal_signals ALTER COLUMN payload TYPE jsonb USING payload::jsonb;
