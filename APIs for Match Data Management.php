<?php
$conn = new mysqli("localhost", "root", "", "science_fight");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $team1 = $_POST["team_1"];
    $team2 = $_POST["team_2"];
    $team3 = $_POST["team_3"];
    $juror = $_POST["juror_id"];
    
    $sql = "INSERT INTO matches (team_1, team_2, team_3, juror_id) VALUES ('$team1', '$team2', '$team3', '$juror')";
    $conn->query($sql);
}

$conn->close();
?>
