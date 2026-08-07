-- Bug #22: the JDBC and FDB stores serialized payloads with cheshire, whose
-- (parse-string s true) keywordizes map KEYS but never VALUES. The library's own
-- canonical activity result [:processed 5] was read back as ["processed" 5], and
-- {:status :active} as {:status "active"}. Because replayed results are handed
-- straight back to workflow code and workflow args are re-read from the persisted
-- :workflow-started event on every resume, a workflow branching on a keyword
-- behaved differently after a crash-resume on JDBC/FDB than on InMemory — a
-- silent, store-dependent break of replay determinism.
--
-- The stores now serialize with EDN (intemporal.internal.codec), which round-trips
-- keywords, sets, symbols, ratios, instants and non-string map keys faithfully.
-- EDN is not valid JSON, so these columns can no longer be JSONB.
--
-- NOTE: this is a CLEAN BREAK. Rows written by the previous cheshire codec remain
-- syntactically valid EDN in some cases but decode to different values (JSON
-- objects lose their keyword keys), and in others fail to read at all. Existing
-- history is not migrated — drop and recreate any development database.
ALTER TABLE intemporal_history ALTER COLUMN data TYPE text USING data::text;
--;;
ALTER TABLE intemporal_signals ALTER COLUMN payload TYPE text USING payload::text;
