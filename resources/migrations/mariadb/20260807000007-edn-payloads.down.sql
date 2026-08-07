-- Reverting restores the COLUMN TYPE only. MariaDB's JSON type enforces
-- CHECK (json_valid(col)), so this fails unless the table is empty or still holds
-- pre-#22 cheshire-written rows. Truncate history/signals first if rolling back
-- with data present.
ALTER TABLE intemporal_history MODIFY data JSON;
--;;
ALTER TABLE intemporal_signals MODIFY payload JSON;
