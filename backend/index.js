const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: process.env.MESSAGE });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
