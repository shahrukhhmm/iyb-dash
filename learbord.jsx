import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('http://localhost/get_leaderboard.php')
            .then(response => response.json())
            .then(data => setTeams(data));
    }, []);

    return (
        <div>
            <h2>Leaderboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Team</th>
                        <th>Matches</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{team.team_name}</td>
                            <td>{team.total_matches}</td>
                            <td>{team.total_score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
