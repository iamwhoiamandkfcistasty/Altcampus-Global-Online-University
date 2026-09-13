-- Architectural ledger database configuration map for AltCampus Global Uni
CREATE TABLE IF NOT EXISTS university_waitlist_nodes (
    node_id INT AUTO_INCREMENT PRIMARY KEY,
    student_email VARCHAR(255) NOT NULL UNIQUE,
    selected_track_id VARCHAR(50) NOT NULL,
    payment_status VARCHAR(20) DEFAULT 'ACTIVE_₹600_YEAR',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
