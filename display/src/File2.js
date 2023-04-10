import React, { useState, useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import PieChart from './components/pieChart2.jsx';
import purdueTHINK from './PurdueTHINK.jpg';

function File2() {
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
    //Update very 5 seconds
    const interval = setInterval(() => {
      fetchData()
      .then(getCharts);
    }, 5000);
    
    //Fetch Data
    fetchData()
    .then(getCharts);

    //Clear memory of interval
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <>    
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {mainChart}
        <div style={{ width: '33%', height: '100%', display: 'flex', flexDirection: 'column' }}>
          {chartArray}
        </div>

        <div style={{ width: '33%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img src="https://via.placeholder.com/150x150" style={{ margin: '10px' }} />
        <img src={purdueTHINK} style={{ margin: '10px' }} />
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

export default File2;