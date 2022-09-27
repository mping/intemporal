CREATE TABLE events (
	id        INTEGER PRIMARY KEY AUTOINCREMENT,
	runid     TEXT NOT NULL, -- uuid
	type      TEXT NOT NULL, --::workflow/[invoke success failure] | ::activity/[invoke success failure]
	uid       TEXT NOT NULL, -- ex: intemporal.example.protocol-activity/simpleflow
    payload   BLOB,
    deleted   BOOLEAN,
    timestamp DATETIME
);
-- example
-- #:intemporal.example.protocol-activity{simpleflow {#uuid"8d43d7dd-437f-40c0-aef0-5d966bd22b82"
-- :type :intemporal.workflow/invoke,
-- :uid intemporal.example.protocol-activity/simpleflow,
-- :payload ("foo"),
-- :id 1,
-- :deleted? nil,
-- :timestamp "2022-09-16T16:03:22.314382287"]}