import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        fetch('http://localhost/get_matches.php')
            .then(response => response.json())
            .then(data => setMatches(data));
    }, []);

    return (
        <div>
            <h1>Science Fight Management</h1>
            <Leaderboard />
            <h2>Upcoming Matches</h2>
            <table>
                <thead>
                    <tr>
                        <th>Match ID</th>
                        <th>Team 1</th>
                        <th>Team 2</th>
                        <th>Juror</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {matches.map(match => (
                        <tr key={match.match_id}>
                            <td>{match.match_id}</td>
                            <td>{match.team_1}</td>
                            <td>{match.team_2}</td>
                            <td>{match.juror_id}</td>
                            <td>{match.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
