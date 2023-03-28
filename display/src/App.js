// import logo from './logo.svg';
// import './App.css';

// import React, { useState, useEffect } from 'react';

// function App() {
//   const [data, setData] = useState([]);
  
//   useEffect(() => {
//     const apiKey = process.env.REACT_APP_API_KEY;

//     const fetchData = async () => {
//       const response = await fetch('https://api.occuspace.io/v1/location/986/now', {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: 'Bearer ' + apiKey,
//           // any other headers you need to add
//         },
//       });
//       const jsonData = await response.json();
//       setData(jsonData);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>DATA</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function App() {
  const [data, setData] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;
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
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <h1>TEST</h1>

      <div style={{ width: '33%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ textAlign: 'center' }}>{data.data.name}</h1>
        <div style={{ width: '70%', height: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgressbar
            value={data.data.percentage * 100}
            text={`${Math.round((data.data.percentage) * 100)}%`}
            styles={buildStyles({
              textColor: 'black',
              pathColor: `rgba(100, 0, 0, ${data.data.percentage})`,
              trailColor: '#d6d6d6',
            })}
          />
        </div>
      </div>

      <div style={{ width: '33%', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {data.data.childCounts.map((location) => (
          <div key={location.id} style={{ width: '100%', height: '33%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgressbar
              value={location.percentage * 100}
              text={`${Math.round((location.percentage) * 100)}%`}
              styles={buildStyles({
                textColor: 'black',
                pathColor: `rgba(0, 0, 100, ${location.percentage})`,
                trailColor: '#d6d6d6',
              })}
            />
            <p style={{ textAlign: 'center', margin: '10px' }}>{location.name}</p>
          </div>
        ))}
      </div>

      <div style={{ width: '33%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img src="https://via.placeholder.com/150x150" alt="Image 1" style={{ margin: '10px' }} />
        <img src="https://via.placeholder.com/150x150" alt="Image 2" style={{ margin: '10px' }} />
      </div>
    </div>
  );
}

export default App;