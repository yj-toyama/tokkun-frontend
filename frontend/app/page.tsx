'use client';
import axios from 'axios';
import React, { useState } from 'react';

const Home: React.FC = () => {
  const [response, setResponse] = useState('');

  const callJavaAPI = async () => {
    const result = await axios.get('http://localhost:8080');
    setResponse(result.data);
  };

  const callGoAPI = async () => {
    const result = await axios.get('http://localhost:8081');
    setResponse(result.data);
  };

  return (
    <div>
      <button onClick={callJavaAPI}>JavaBF Button</button>
      <br></br>
      <button onClick={callGoAPI}>GOBF Button</button>
      <p>{response}</p>
    </div>
  );
};

export default Home;