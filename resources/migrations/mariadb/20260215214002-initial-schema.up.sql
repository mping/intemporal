CREATE TABLE IF NOT EXISTS intemporal_workflows (
    id VARCHAR(512) PRIMARY KEY,
    cancelled BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
--;;
CREATE TABLE IF NOT EXISTS intemporal_history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    workflow_id VARCHAR(512),
    seq INTEGER,
    event_type TEXT,
    data JSON,
    UNIQUE (workflow_id, seq),
    FOREIGN KEY (workflow_id) REFERENCES intemporal_workflows(id) ON DELETE CASCADE
);
--;;
CREATE TABLE IF NOT EXISTS intemporal_signals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    workflow_id VARCHAR(512),
    signal_name TEXT,
    payload JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (workflow_id) REFERENCES intemporal_workflows(id) ON DELETE CASCADE
);