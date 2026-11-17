<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "science_fight";

$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "SELECT * FROM penalties WHERE notified = FALSE";
$result = $conn->query($sql);

$penalties = [];
while ($row = $result->fetch_assoc()) {
    $penalties[] = $row;
}

header('Content-Type: application/json');
echo json_encode($penalties);

$conn->close();
?>
