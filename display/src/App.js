import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;

    console.log('test');
    console.log(apiKey);

    const fetchData = async () => {
      const response = await fetch('https://api.occuspace.io/v1/location/986/now', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + apiKey,
          // any other headers you need to add
        },
      });
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>DATA</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
