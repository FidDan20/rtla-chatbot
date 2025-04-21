import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [node, setNode] = useState('start');
  const [data, setData] = useState({ message: '', options: [] });

  const baseUrl = "https://rtla-chatbot-backend.onrender.com";


  useEffect(() => {
    axios.get(`${baseUrl}/chat?node=${node}`)
      .then(res => setData(res.data))
      .catch(err => {
        console.error("Failed to load chatbot data:", err);
      });
  }, [node]);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl max-w-xl w-full p-6 space-y-4">
        <h2 className="text-2xl font-bold text-blue-700">🤖 RTLA Chatbot</h2>
        <p className="text-gray-700 whitespace-pre-line">{data.message}</p>
        <div className="flex flex-wrap gap-2">
          {data.options?.map((opt, index) => (
            <button
              key={index}
              onClick={() => setNode(opt.next)}
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
