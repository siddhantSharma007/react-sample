import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL);
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error fetching the message:', error);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p style={{color:"red"}}>{message}</p>
      </header>
    </div>
  );
}

export default App;
