import React, { useState, useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import PieChart from './components/piechart.jsx';

function App() {
  const [mainChart, setMain] = useState();
  const [chartArray, setChart2] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;
  const fetchData = async () => {
    const response = await fetch('https://api.occuspace.io/v1/location/986/now', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + apiKey,
      },
    });
    const jsonData = await response.json();

    return jsonData;
  };

  const getCharts = (response) => {
    //console.log(response.data.name);
    const chart = <PieChart name={response.data.name} percent={response.data.percentage}/>;
    //const chart2 = <PieChart name={response.data.name} percent={response.data.percentage}/>;

    const chartA = response.data.childCounts.map((location) => {
      return (
        <PieChart name={location.name} percent={location.percentage} />
      );
    });

    setMain(chart);
    setChart2(chartA);
  }
  
  useEffect(() => {
    fetchData()
    .then(getCharts);
  }, []);

  return (
    <>    
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {mainChart}
        <div style={{ width: '33%', height: '100%', display: 'flex', flexDirection: 'column' }}>
          {chartArray}
        </div>

        <div style={{ width: '33%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img src="https://via.placeholder.com/150x150" alt="Image 1" style={{ margin: '10px' }} />
        <img src="https://via.placeholder.com/150x150" alt="Image 2" style={{ margin: '10px' }} />
      </div>
      </div>
    </>

    //   <div style={{ width: '33%', height: '100%', display: 'flex', flexDirection: 'column' }}>
    //     {data.data.childCounts.map((location) => (
    //       <div key={location.id} style={{ width: '100%', height: '33%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    //         <CircularProgressbar
    //           value={location.percentage * 100}
    //           text={`${Math.round((location.percentage) * 100)}%`}
    //           styles={buildStyles({
    //             textColor: 'black',
    //             pathColor: `rgba(0, 0, 100, ${location.percentage})`,
    //             trailColor: '#d6d6d6',
    //           })}
    //         />
    //         <p style={{ textAlign: 'center', margin: '10px' }}>{location.name}</p>
    //       </div>
    //     ))}
    //   </div>


    // </div>
  );
}

export default App;