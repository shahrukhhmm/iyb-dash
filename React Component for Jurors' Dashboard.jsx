import React, { useState } from 'react';

const JurorPanel = () => {
    const [clarity, setClarity] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    const [engagement, setEngagement] = useState(0);
    const [depth, setDepth] = useState(0);
    const [aiScore, setAiScore] = useState(null);
    const [finalScore, setFinalScore] = useState(null);

    const generateAIScore = async () => {
        const response = await fetch('http://localhost:5000/generate_grade', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ clarity, accuracy, engagement, depth })
        });
        const data = await response.json();
        setAiScore(data.ai_suggested_score);
    };

    const submitFinalScore = async () => {
        await fetch('http://localhost/submit_final_score.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ match_id: 1, team_id: 2, juror_id: 3, role: "Reporter", final_score: finalScore })
        });
        alert("Final Score Submitted!");
    };

    return (
        <div>
            <h2>Juror Panel</h2>
            <label>Clarity: </label>
            <input type="number" value={clarity} onChange={e => setClarity(e.target.value)} />
            <label>Accuracy: </label>
            <input type="number" value={accuracy} onChange={e => setAccuracy(e.target.value)} />
            <label>Engagement: </label>
            <input type="number" value={engagement} onChange={e => setEngagement(e.target.value)} />
            <label>Depth: </label>
            <input type="number" value={depth} onChange={e => setDepth(e.target.value)} />
            
            <button onClick={generateAIScore}>Generate AI Score</button>
            {aiScore && <p>AI Suggested Score: {aiScore}</p>}

            <label>Final Score: </label>
            <input type="number" value={finalScore} onChange={e => setFinalScore(e.target.value)} />
            <button onClick={submitFinalScore}>Submit Final Score</button>
        </div>
    );
};

export default JurorPanel;
