CREATE TABLE ai_vs_juror_grades (
    id INT PRIMARY KEY AUTO_INCREMENT,
    match_id INT NOT NULL,
    team_id INT NOT NULL,
    juror_id INT NOT NULL,
    role ENUM('Reporter', 'Opponent', 'Reviewer') NOT NULL,
    ai_score FLOAT NOT NULL,
    juror_score FLOAT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (match_id) REFERENCES matches(match_id),
    FOREIGN KEY (team_id) REFERENCES teams(team_id),
    FOREIGN KEY (juror_id) REFERENCES jurors(juror_id)
);
