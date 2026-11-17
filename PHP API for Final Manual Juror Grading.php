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
    $final_score = $_POST["final_score"];

    $sql = "INSERT INTO scores (match_id, team_id, juror_id, role, score) 
            VALUES ($match_id, $team_id, $juror_id, '$role', $final_score)";
    $conn->query($sql);
}

$conn->close();
?>
