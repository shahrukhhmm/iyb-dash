CREATE DATABASE IF NOT EXISTS science_fight;
USE science_fight;

-- Teams Table (Stores Team Info)
CREATE TABLE teams (
    team_id INT PRIMARY KEY AUTO_INCREMENT,
    team_name VARCHAR(255) NOT NULL,
    members JSON, -- Stores team members with roles
    score INT DEFAULT 0,
    wins INT DEFAULT 0,
    losses INT DEFAULT 0
);

-- Matches Table (Stores Match Information)
CREATE TABLE matches (
    match_id INT PRIMARY KEY AUTO_INCREMENT,
    round_id INT,
    team_1 INT NOT NULL,
    team_2 INT NOT NULL,
    team_3 INT NULL, -- Optional for 3-team fights
    juror_id INT NOT NULL,
    status ENUM('Scheduled', 'Ongoing', 'Completed') DEFAULT 'Scheduled',
    FOREIGN KEY (team_1) REFERENCES teams(team_id),
    FOREIGN KEY (team_2) REFERENCES teams(team_id),
    FOREIGN KEY (team_3) REFERENCES teams(team_id),
    FOREIGN KEY (juror_id) REFERENCES jurors(juror_id)
);

-- Rounds Table (Stores Round Details)
CREATE TABLE rounds (
    round_id INT PRIMARY KEY AUTO_INCREMENT,
    round_number INT NOT NULL,
    status ENUM('Scheduled', 'Ongoing', 'Completed') DEFAULT 'Scheduled',
    scheduled_time DATETIME NOT NULL
);

-- Roles Table (Assigns Reporter, Opponent, and Reviewer roles)
CREATE TABLE roles (
    role_id INT PRIMARY KEY AUTO_INCREMENT,
    match_id INT NOT NULL,
    team_id INT NOT NULL,
    role ENUM('Reporter', 'Opponent', 'Reviewer') NOT NULL,
    FOREIGN KEY (match_id) REFERENCES matches(match_id),
    FOREIGN KEY (team_id) REFERENCES teams(team_id)
);

-- Jurors Table (Stores Juror Details)
CREATE TABLE jurors (
    juror_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    assigned_matches JSON -- Stores a list of match_ids assigned to this juror
);

-- Scores Table (Stores Scores for Each Role in a Match)
CREATE TABLE scores (
    score_id INT PRIMARY KEY AUTO_INCREMENT,
    match_id INT NOT NULL,
    team_id INT NOT NULL,
    juror_id INT NOT NULL,
    role ENUM('Reporter', 'Opponent', 'Reviewer') NOT NULL,
    score INT CHECK (score BETWEEN 1 AND 30), -- Max 30 for Reporter, 20 for Opponent, 10 for Reviewer
    FOREIGN KEY (match_id) REFERENCES matches(match_id),
    FOREIGN KEY (team_id) REFERENCES teams(team_id),
    FOREIGN KEY (juror_id) REFERENCES jurors(juror_id)
);

-- Penalties Table (Tracks Yellow Cards & Score Deductions)
CREATE TABLE penalties (
    penalty_id INT PRIMARY KEY AUTO_INCREMENT,
    team_id INT NOT NULL,
    match_id INT NOT NULL,
    penalty_reason TEXT NOT NULL,
    penalty_points INT NOT NULL, -- Yellow Card = 10% Deduction
    FOREIGN KEY (team_id) REFERENCES teams(team_id),
    FOREIGN KEY (match_id) REFERENCES matches(match_id)
);
ALTER TABLE teams ADD COLUMN total_matches INT DEFAULT 0;
ALTER TABLE teams ADD COLUMN total_score INT DEFAULT 0;
