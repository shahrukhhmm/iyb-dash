const [predictedScore, setPredictedScore] = useState(null);

const handlePredict = async () => {
    const response = await fetch('http://localhost:5000/predict_score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clarity: 8, accuracy: 9, engagement: 7, depth: 8 })
    });

    const data = await response.json();
    setPredictedScore(data.predicted_score);
};
