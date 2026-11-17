import React, { useEffect, useState } from 'react';

const JurorAlerts = () => {
    const [pending, setPending] = useState([]);

    useEffect(() => {
        fetch('http://localhost/get_pending_grades.php')
            .then(response => response.json())
            .then(data => setPending(data));
    }, []);

    return (
        <div>
            <h2>Pending Grading Alerts</h2>
            {pending.length === 0 ? (
                <p>No pending tasks.</p>
            ) : (
                pending.map(task => (
                    <div key={task.id} className="alert">
                        <strong>Match {task.match_id}:</strong> Team {task.team_id} ({task.role}) needs grading.
                    </div>
                ))
            )}
        </div>
    );
};

export default JurorAlerts;
