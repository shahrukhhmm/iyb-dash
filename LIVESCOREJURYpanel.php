<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tournament";

// Connect to MySQL
$conn = new mysqli($servername, $username, $password, $dbname);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $match_id = $_POST["match_id"];
    $team_id = $_POST["team_id"];
    $juror_id = $_POST["juror_id"];
    $role = $_POST["role"];
    $score = $_POST["score"];

    $sql = "INSERT INTO scores (match_id, team_id, juror_id, role, score) VALUES ($match_id, $team_id, $juror_id, '$role', $score)";
    $conn->query($sql);
}

$conn->close();
?>
