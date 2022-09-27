-- will contain workflows and activities, example:
-- #:intemporal.example.protocol-activity{simpleflow #'intemporal.example.protocol-activity/simpleflow}
CREATE TABLE metadata (
	id   INTEGER PRIMARY KEY AUTOINCREMENT,
    uid  TEXT NOT NULL,  -- ex: :intemporal.example.protocol-activity/simpleflow
    var  TEXT NOT NULL,  -- the full var, eg: #'intemporal.example.protocol-activity/simpleflow
    type TEXT NOT NULL   -- ex: workflow/activity
);
