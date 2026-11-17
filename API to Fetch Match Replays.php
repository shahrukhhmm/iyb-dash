<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "science_fight";

$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "SELECT * FROM match_replays ORDER BY replay_id DESC";
$result = $conn->query($sql);

$replays = [];
while ($row = $result->fetch_assoc()) {
    $replays[] = $row;
}

header('Content-Type: application/json');
echo json_encode($replays);

$conn->close();
?>
