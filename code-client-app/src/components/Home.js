import React, { useState } from 'react';
import axios from 'axios';
import Dashbord from './Dashbord';

export default function Home() {
    const [username, setUsername] = useState('');
    const [codeLanguage, setCodeLanguage] = useState('');
    const [stdin, setStdin] = useState('');
    const [sourceCode, setSourceCode] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/code-snippets', { username, codeLanguage, stdin, sourceCode });
            setSubmitted(true);
        } catch (error) {
            console.error('Error submitting code snippet:', error);
        }
    };

    return (
        <div>
            <h1>Submit Code Snippet</h1>
            {submitted ? (
                <p>Code snippet submitted successfully!</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label>Preferred Code Language:</label>
                        <input type="text" value={codeLanguage} onChange={(e) => setCodeLanguage(e.target.value)} />
                    </div>
                    <div>
                        <label>Standard Input (stdin):</label>
                        <input type="text" value={stdin} onChange={(e) => setStdin(e.target.value)} />
                    </div>
                    <div>
                        <label>Source Code:</label>
                        <textarea value={sourceCode} onChange={(e) => setSourceCode(e.target.value)} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
            <Dashbord />
        </div>
    );
}