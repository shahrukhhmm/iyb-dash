CREATE TABLE match_replays (
    replay_id INT PRIMARY KEY AUTO_INCREMENT,
    match_id INT NOT NULL,
    video_url VARCHAR(500),
    transcript TEXT,
    ai_scores JSON,
    juror_scores JSON,
    FOREIGN KEY (match_id) REFERENCES matches(match_id)
);
