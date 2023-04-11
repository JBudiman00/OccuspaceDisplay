import React, { useState, useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import PieChart from '../components/piechart.jsx';
import purdueTHINK from '../PurdueTHINK.jpg';
import QrCode  from '../QRcode.png';
import '../App.css'
import CARD from '../components/card.jsx'
import File2 from './Libraries.jsx' // this the main file
import '../styles/libraries.css';


function MATH () {
    const [chartArray, setChart2] = useState([[], []]);
    const [cardData,setCard] = useState([{},{},{}]);
    const apiKey = process.env.REACT_APP_API_KEY;
    const [showFile2, setShowFile2] = useState(false); // File2 is the main file

    const fetchData = async () => {
        const response = await Promise.all([
          fetch('https://api.occuspace.io/v1/location/988/now', {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + apiKey,
            },
          }),
          
        ]);
        const jsonResponses = await Promise.all(response.map((res) => res.json()));
        return jsonResponses;
      };

    async function fetchCapacity(target) {
        const response = await Promise.all([fetch('https://api.occuspace.io/v1/locations', {
                    headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + apiKey,
                    },
            })
        ]);
        const jsondata = await Promise.all(response.map((res) => res.json()));
        const found  = jsondata[0].data.find(item => item.id == target);
        return found.capacity;
        
    }


    const getCharts = (responses) => {
        //console.log(responses[0].data.childCounts)
        const res = []
        const elems = responses[0].data.childCounts.length;
        responses[0].data.childCounts.map((response) => {
            var name = response.name;
            if (name.includes('Lower Level')) {
                name = 'Basement Level'
            }
            const chart = <PieChart name="" percent={response.percentage} />;
            const result = {};
            result['floorName'] = name;
            result['chart'] = chart;
            //console.log(name)
            const x = fetchCapacity(response.id).then(
                data => {result['capacity'] = data; 
                res.push(result);
                if (res.length === elems) {
                    res.sort((a,b)=>{
                        if (a.floorName.toUpperCase() > b.floorName.toUpperCase()) {
                            return 1;
                        } else if (a.floorName.toUpperCase() < b.floorName.toUpperCase()){
                            return -1;
                        } else {
                            return 0;
                        }
                    });
                    console.log(res)
                    setCard(res);
                }
                return result});
            
        });
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
          }, 15000); // Hide after 3 seconds
        }, 30000); // Show every 6 seconds
      
        return () => {
          clearInterval(file2Interval);
        };
      }, []);
        
    return(
        <>

        {showFile2 ? (
            <File2 />
          ) : (
          <div className="box">
            <div className="libraries">
              <div className = "card">
                <h1 style={{ fontFamily:'tahoma', textAlign: 'left', fontSize:'30px', marginBottom:'2px',fontWeight:'bolder'}}>MATH Library Real Time Occupancy Data</h1>
                <h2 style={{ fontFamily:'tahoma', textAlign: 'left', fontSize:'15px',fontWeight:'bolder' }}>8am - 10pm</h2>
                  {cardData.map((card,index) => (
                    <CARD key={index} floorName={card.floorName} capacity = {card.capacity} chart = {card.chart}/>))}
              </div>
            </div>
            <div className="waitz">
              <img style={{height: '300px'}} src={QrCode} />
            </div>
            <div className="think">
              <img src={purdueTHINK} />
            </div> 
          </div>
        )}

        </>
    );
}

export default MATH;