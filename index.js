const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Node.js App via Harness CI/CD!</h1><p>Status: High Quality & Secure</p>');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});