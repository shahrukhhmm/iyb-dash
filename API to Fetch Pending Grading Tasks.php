<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "science_fight";

$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "SELECT * FROM pending_grades WHERE notified = FALSE";
$result = $conn->query($sql);

$pending = [];
while ($row = $result->fetch_assoc()) {
    $pending[] = $row;
}

header('Content-Type: application/json');
echo json_encode($pending);

$conn->close();
?>
