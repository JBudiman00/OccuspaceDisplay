import React, { useState, useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import PieChart from '../components/piechart.jsx';
import purdueTHINK from '../PurdueTHINK.jpg';
import QrCode  from '../QRcode.png';
import '../App.css'
import CARD from '../components/card.jsx'

function HSSE () {
    const [chartArray, setChart2] = useState([[], []]);
    const cardData = [{floorName:'1st Floor',capacity:'195',chart:chartArray[0][0]},{floorName:'2nd Floor',capacity:'150',chart:chartArray[0][0]},{floorName:'3rd Floor', capacity:'130',chart:chartArray[0][0]}]
    const apiKey = process.env.REACT_APP_API_KEY;

    const fetchData = async () => {
        const response = await Promise.all([
        fetch('https://api.occuspace.io/v1/location/985/now', {
            headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + apiKey,
            },
        }),
        fetch('https://api.occuspace.io/v1/location/986/now', {
            headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + apiKey,
            },
        }),
        fetch('https://api.occuspace.io/v1/location/987/now', {
            headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + apiKey,
            },
        }),
        fetch('https://api.occuspace.io/v1/location/988/now', {
            headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + apiKey,
            },
        }),
        fetch('https://api.occuspace.io/v1/location/989/now', {
            headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + apiKey,
            },
        }),
        ]);
        const jsonResponses = await Promise.all(response.map((res) => res.json()));
        return jsonResponses;
    };

    const getCharts = (responses) => {
        const charts = responses.map((response) => {
        const chart = <PieChart name={response.data.name} percent={response.data.percentage} />;
        return chart;
        });
    
        const newChart = <PieChart name={responses[0].data.name} percent={responses[0].data.percentage} />;
        charts.splice(0, 0, newChart);
    
        // Split the remaining charts into two arrays of 3 and 2
        setChart2([charts.slice(1, 4), charts.slice(4)]);
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
        
    return(
        <div className = "card">
        <h1 style={{ textAlign: 'left', fontSize:'30px', fontFamily:'Georgia, serif', marginBottom:'2px'}}>HSSE Library Real Time Occupancy Data</h1>
        <h1 style={{ textAlign: 'left', fontSize:'20px', fontFamily:'Georgia, serif'}}>Open From 8-10 pm</h1>
          {cardData.map((card,index) => (
            <CARD key={index} floorName={card.floorName} capacity = {card.capacity} chart = {card.chart}/>))}
        </div>
    );
}

export default HSSE;