import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const AIvsJurorChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost/get_ai_vs_juror_scores.php')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            const ctx = document.getElementById('aiVsJurorChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.map(row => row.timestamp),
                    datasets: [
                        {
                            label: 'AI Suggested Score',
                            data: data.map(row => row.ai_score),
                            borderColor: 'blue',
                            fill: false
                        },
                        {
                            label: 'Juror Final Score',
                            data: data.map(row => row.juror_score),
                            borderColor: 'red',
                            fill: false
                        }
                    ]
                }
            });
        }
    }, [data]);

    return <canvas id="aiVsJurorChart"></canvas>;
};

export default AIvsJurorChart;
