import React, { useEffect, useState } from 'react';

const MatchReplay = () => {
    const [replays, setReplays] = useState([]);

    useEffect(() => {
        fetch('http://localhost/get_match_replays.php')
            .then(response => response.json())
            .then(data => setReplays(data));
    }, []);

    return (
        <div>
            <h2>Match Replays</h2>
            {replays.map(replay => (
                <div key={replay.replay_id}>
                    <h3>Match {replay.match_id}</h3>
                    <video controls width="500">
                        <source src={replay.video_url} type="video/mp4" />
                    </video>
                    <p><strong>Transcript:</strong> {replay.transcript}</p>
                </div>
            ))}
        </div>
    );
};

export default MatchReplay;
