import '../App.css'
import React, { useState, useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import PieChart from '../components/piechart.jsx';
import purdueTHINK from '../PurdueTHINK.jpg';
import QrCode  from '../QRcode.png';
import '../App.css'
import CARD from '../components/card.jsx'
import '../styles/libraries.css';
export default function card({floorName,capacity,chart}){
    return (
    <>
       <div className = "card">
          <div className='card-row'>
            <div className='card-leftCol'>
              <p className='card-space'>{floorName}</p>
              <p className='card-capacity'>Capacity: {capacity}</p>
            </div>
            <div className='card-rightCol'>
            {chart} {/* change this to the actual value for that specific floor */}
            </div>
          </div>
        </div>
    
    
    
    </>
 
    );
}