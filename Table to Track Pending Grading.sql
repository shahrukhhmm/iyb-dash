CREATE TABLE pending_grades (
    id INT PRIMARY KEY AUTO_INCREMENT,
    juror_id INT NOT NULL,
    match_id INT NOT NULL,
    team_id INT NOT NULL,
    role ENUM('Reporter', 'Opponent', 'Reviewer') NOT NULL,
    notified BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (juror_id) REFERENCES jurors(juror_id),
    FOREIGN KEY (match_id) REFERENCES matches(match_id),
    FOREIGN KEY (team_id) REFERENCES teams(team_id)
);
