<?php
$conn = new mysqli("localhost", "root", "", "science_fight");

$sql = "SELECT * FROM matches";
$result = $conn->query($sql);

$matches = [];
while ($row = $result->fetch_assoc()) {
    $matches[] = $row;
}

header('Content-Type: application/json');
echo json_encode($matches);

$conn->close();
?>
