CREATE TABLE IF NOT EXISTS tasks (
    id        varchar(50) NOT NULL,
    proto     varchar(200)NULL,
    type      varchar(50) NOT NULL,
    ref       varchar(50) NULL,
    root      varchar(50) NULL,
    sym       varchar(50) NOT NULL,
    args      bytea       NULL,
    result    bytea       NULL,
    state     varchar(20) NOT NULL,
    lease_end timestamp,
    runtime   bytea,
    PRIMARY KEY (id),
    FOREIGN KEY (ref) REFERENCES tasks(id),
    FOREIGN KEY (root) REFERENCES tasks(id)
)

--;;

CREATE TABLE IF NOT EXISTS events (
    id        SERIAL PRIMARY KEY,
    type      varchar(50) NOT NULL,
    ref       varchar(50) NULL, --NOT NULL,
    root      varchar(50) NOT NULL,
    sym       varchar(50) NOT NULL,
    args      bytea       NULL,
    result    bytea       NULL,
    --FOREIGN KEY (ref) REFERENCES tasks(id)  on delete set null,
    FOREIGN KEY (root) REFERENCES tasks(id) on delete set null
)