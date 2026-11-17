<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "science_fight";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $match_id = $_POST["match_id"];
    $team_id = $_POST["team_id"];
    $juror_id = $_POST["juror_id"];
    $role = $_POST["role"];
    $ai_score = $_POST["ai_score"];
    $juror_score = $_POST["juror_score"];

    $sql = "INSERT INTO ai_vs_juror_grades (match_id, team_id, juror_id, role, ai_score, juror_score)
            VALUES ($match_id, $team_id, $juror_id, '$role', $ai_score, $juror_score)";
    $conn->query($sql);
}

$conn->close();
?>
