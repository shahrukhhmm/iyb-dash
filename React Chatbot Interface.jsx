import React, { useState } from 'react';

const Chatbot = () => {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');

    const askBot = async () => {
        const res = await fetch('http://localhost:5000/chatbot', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question })
        });

        const data = await res.json();
        setResponse(data.response);
    };

    return (
        <div>
            <h2>Rule Clarification Chatbot</h2>
            <input type="text" placeholder="Ask about rules..." value={question} onChange={e => setQuestion(e.target.value)} />
            <button onClick={askBot}>Ask</button>
            <p>{response}</p>
        </div>
    );
};

export default Chatbot;
