import React, { useState, useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import PieChart from '../components/piechart.jsx';
import purdueTHINK from '../PurdueTHINK.jpg';
import QrCode  from '../QRcode.png';
import '../App.css'
import CARD from '../components/card.jsx'
import File2 from './Libraries.jsx'

function HSSE () {

    const [chartArray, setChart2] = useState([[], []]);
    const cardData = [{floorName:'1st Floor',capacity:'195',chart:chartArray[0][0]},{floorName:'2nd Floor',capacity:'150',chart:chartArray[0][0]},{floorName:'3rd Floor', capacity:'130',chart:chartArray[0][0]}]
    const apiKey = process.env.REACT_APP_API_KEY;

    const [showFile2, setShowFile2] = useState(false);

    const fetchData = async () => {
        const response = await fetch('https://api.occuspace.io/v1/location/986/now', {
            headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + apiKey,
            },
        });
        const jsonResponse = await response.json();

        return jsonResponse;
    };

    const getCharts = (response) => {
        const chart = <PieChart name={response.data.name} percent={response.data.percentage} />

        console.log(response.data.childCounts)

        //@Pranav was planning to map each child component and add it to a new usestate array  instead of using carddata.
        //This function pulls each child component from a location, haven't gotten to looking at the data inside though.
        const chartList = response.data.childCounts.map((item) => {
            return (
                {floorName:'1st Floor',capacity:'195',chart:chartArray[0][0]}
            );
        })

        console.log(chartList)

        setChart2([[chart], []]);
    };
    

    useEffect(() => {
        //Update every 5 seconds
        const interval = setInterval(() => {
        fetchData().then(getCharts);
        }, 5000);

        //Fetch Data
        fetchData().then(getCharts);

        //Clear memory of interval
        return () => {
        clearInterval(interval);
        };
    }, []);


    // for toggling between this page and the all libraries page
    useEffect(() => {
        const file2Interval = setInterval(() => {
          setShowFile2(true);
          setTimeout(() => {
            setShowFile2(false);
          }, 3000); // Hide after 3 seconds
        }, 6000); // Show every 6 seconds
      
        return () => {
          clearInterval(file2Interval);
        };
      }, []);
        
    return(
        <>

        {showFile2 ? (
            <File2 />
          ) : (

        <div className = "card">
        <h1 style={{ textAlign: 'left', fontSize:'30px', fontFamily:'Georgia, serif', marginBottom:'2px'}}>HSSE Library Real Time Occupancy Data</h1>
        <h1 style={{ textAlign: 'left', fontSize:'20px', fontFamily:'Georgia, serif'}}>Open From 8-10 pm</h1>
          {cardData.map((card,index) => (
            <CARD key={index} floorName={card.floorName} capacity = {card.capacity} chart = {card.chart}/>))}
        </div>

          )}

</>
    );
}

export default HSSE;