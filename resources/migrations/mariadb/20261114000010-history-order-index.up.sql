-- History reads filter by workflow_id and order by id. Without a matching
-- index, stale InnoDB stats make the optimizer scan the whole primary key
-- per read (O(table) cost). This index serves both, independent of stats.
CREATE INDEX idx_intemporal_history_order
    ON intemporal_history (workflow_id, id);
