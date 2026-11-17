<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "science_fight";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $team_id = $_POST["team_id"];
    $score = $_POST["score"];

    $sql = "UPDATE teams SET score = score + $score WHERE team_id = $team_id";
    $conn->query($sql);

    // Send score update via WebSockets
    $socket = stream_socket_client("tcp://localhost:8080", $errno, $errstr);
    fwrite($socket, json_encode(["team_id" => $team_id, "score" => $score]));
    fclose($socket);
}

$conn->close();
?>
