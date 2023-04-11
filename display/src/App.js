import React, { useState, useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import './App.css'
import HSSE from "./pages/HSSE";
import WALC from "./pages/WALC";
import PARRISH from "./pages/PARRISH";
import MATH from "./pages/MATH";
import HICKS from "./pages/HICKS";
import Layout from "./pages/Layout";
import AV from "./pages/AV";  //Still experimental/not entirely working
import Libraries from "./pages/Libraries";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout />} />
        <Route path="/hsse" element={<HSSE />} />
        <Route path="/walc" element={<WALC />} />
        <Route path="/parrish" element={<PARRISH />} />
        <Route path="/math" element={<MATH />} />
        <Route path="/hicks" element={<HICKS />} />
        <Route path="/av" element={<AV />} />
        <Route path="/libraries" element={<Libraries />} />
      </Routes>
    </Router>
  );
}

export default App;