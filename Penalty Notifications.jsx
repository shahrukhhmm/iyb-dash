import React, { useEffect, useState } from 'react';

const PenaltyNotifications = () => {
    const [penalties, setPenalties] = useState([]);

    useEffect(() => {
        fetch('http://localhost/get_penalties.php')
            .then(response => response.json())
            .then(data => setPenalties(data));
    }, []);

    return (
        <div>
            <h2>Penalty Notifications</h2>
            {penalties.length === 0 ? (
                <p>No recent penalties.</p>
            ) : (
                penalties.map(penalty => (
                    <div key={penalty.penalty_id} className="penalty-alert">
                        <strong>Team {penalty.team_id}:</strong> {penalty.penalty_reason}
                    </div>
                ))
            )}
        </div>
    );
};

export default PenaltyNotifications;
