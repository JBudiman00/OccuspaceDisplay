import React, { useState, useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import './App.css'
import HSSE from "./pages/HSSE";
import Layout from "./pages/Layout";
import Libraries from "./pages/Libraries";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout />} />
        <Route path="/hsse" element={<HSSE />} />
        <Route path="/libraries" element={<Libraries />} />
      </Routes>
    </Router>
  );
}

export default App;