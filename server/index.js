const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const chatbotFlow = require('./chatbotFlow.json');

app.get('/chat', (req, res) => {
  const node = req.query.node || 'start';
  res.json(chatbotFlow[node]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

