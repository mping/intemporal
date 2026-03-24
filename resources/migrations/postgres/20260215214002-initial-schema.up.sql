CREATE TABLE IF NOT EXISTS intemporal_workflows (
    id TEXT PRIMARY KEY,
    cancelled BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
--;;
CREATE TABLE IF NOT EXISTS intemporal_history (
    id SERIAL PRIMARY KEY,
    workflow_id TEXT REFERENCES intemporal_workflows(id) ON DELETE CASCADE,
    seq INTEGER,
    event_type TEXT,
    data JSONB,
    UNIQUE (workflow_id, seq)
);
--;;
CREATE TABLE IF NOT EXISTS intemporal_signals (
    id SERIAL PRIMARY KEY,
    workflow_id TEXT REFERENCES intemporal_workflows(id) ON DELETE CASCADE,
    signal_name TEXT,
    payload JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);