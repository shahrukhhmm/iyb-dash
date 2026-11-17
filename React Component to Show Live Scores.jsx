import React, { useEffect, useState } from 'react';

const LiveScores = () => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080');

        ws.onmessage = (event) => {
            const updatedScore = JSON.parse(event.data);
            setScores(prevScores => [...prevScores, updatedScore]);
        };

        return () => ws.close();
    }, []);

    return (
        <div>
            <h2>Live Scores</h2>
            {scores.map((score, index) => (
                <p key={index}>Team {score.team_id}: {score.score} points</p>
            ))}
        </div>
    );
};

export default LiveScores;
