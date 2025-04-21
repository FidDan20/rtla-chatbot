import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



app.get('/chat', (req, res) => {
  const node = req.query.node || 'start';
  const response = chatbotFlow[node];

  if (response) {
    res.json(response);
  } else {
    res.status(404).json({ message: 'Node not found' });
  }
});

app.get('/', (req, res) => {
  res.send('RTLA Chatbot Backend is Running ✅');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
