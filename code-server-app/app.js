const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require("./database/database");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send("Hello World");
})

app.post('/api/code-snippets', (req, res) => {
  const { username, codeLanguage, stdin, sourceCode } = req.body;
  let code_language = codeLanguage;
  let source_code = sourceCode

  const sql = 'INSERT INTO sourceCode (username, code_language, stdin, source_code) VALUES (?, ?, ?, ?)';
  db.query(sql, [username, code_language, stdin, source_code], (err, result) => {
    if (err) throw err;
    res.send('Code snippet submitted successfully');
  });

});

app.get('/api/code-snippets', (req, res) => {
  const sql = 'SELECT id, username, code_language, stdin, LEFT(source_code, 100) AS source_code_preview, created_at FROM sourceCode';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = app;