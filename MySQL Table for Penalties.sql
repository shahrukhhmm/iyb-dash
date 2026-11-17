CREATE TABLE penalties (
    penalty_id INT PRIMARY KEY AUTO_INCREMENT,
    team_id INT NOT NULL,
    match_id INT NOT NULL,
    penalty_reason TEXT NOT NULL,
    penalty_points INT NOT NULL,
    notified BOOLEAN DEFAULT FALSE,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (team_id) REFERENCES teams(team_id),
    FOREIGN KEY (match_id) REFERENCES matches(match_id)
);
