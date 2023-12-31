'use client';
import axios from 'axios';
import React, { useState } from 'react';

const Home: React.FC = () => {
  const javaapi_endpoint = process.env.javaapi_endpoint as string;
  const goapi_endpoint = process.env.goapi_endpoint as string;

  const [response, setResponse] = useState('');

  const callJavaAPI = async () => {
    const result = await axios.get(javaapi_endpoint);
    setResponse(result.data);
  };

  const callGoAPI = async () => {
    const result = await axios.get(goapi_endpoint);
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