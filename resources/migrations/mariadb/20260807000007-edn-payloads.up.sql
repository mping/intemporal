-- Bug #22 — see the postgres copy of this migration for the full rationale.
-- The stores now serialize payloads with EDN (intemporal.internal.codec) instead
-- of cheshire, so keyword VALUES survive the round-trip. EDN is not valid JSON,
-- and MariaDB's JSON type carries an implicit CHECK (json_valid(col)), so these
-- columns must become plain text.
--
-- LONGTEXT, not TEXT: MariaDB implements JSON as LONGTEXT (4 GiB). Narrowing to
-- TEXT would cap payloads at 64 KiB and silently truncate large events — an
-- error map with deep ex-data can exceed that.
--
-- CLEAN BREAK: existing rows are not migrated. Drop and recreate any development
-- database.
ALTER TABLE intemporal_history MODIFY data LONGTEXT;
--;;
ALTER TABLE intemporal_signals MODIFY payload LONGTEXT;
