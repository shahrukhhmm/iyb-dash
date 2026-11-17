<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "science_fight";

$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "SELECT team_name, total_matches, total_score FROM teams ORDER BY total_score DESC";
$result = $conn->query($sql);

$leaderboard = [];
while($row = $result->fetch_assoc()) {
    $leaderboard[] = $row;
}

header('Content-Type: application/json');
echo json_encode($leaderboard);

$conn->close();
?>
