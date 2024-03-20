import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashbord = () => {
  const [codeSnippets, setCodeSnippets] = useState([]);

  useEffect(() => {
    axios.get('/api/code-snippets')
      .then(res => {
        setCodeSnippets(res.data);
      })
      .catch(err => {
        console.error('Error fetching code snippets:', err);
      });
  }, []);

  return (
    <div>
      <h1>Code Snippets</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Code Language</th>
            <th>Standard Input</th>
            <th>Source Code Preview</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {codeSnippets.map(snippet => (
            <tr key={snippet.id}>
              <td>{snippet.username}</td>
              <td>{snippet.code_language}</td>
              <td>{snippet.stdin}</td>
              <td>{snippet.source_code_preview}</td>
              <td>{snippet.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashbord