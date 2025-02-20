import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import FlexPlayground from './components/Flexbox';
import FetchAPI from './components/Fetchapi'
import Homepage from './components/home.jsx'
import UIcomponent from './components/UIcomponent.jsx'
import Login from './components/login.jsx';
import Weather from './components/weather.jsx';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/flexbox" element={<FlexPlayground/>}/>
            <Route path="/fetch" element={<FetchAPI/>}/>
            <Route path="/uicomponent" element={<UIcomponent/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/weather" element={<Weather/>}/>
        </Routes>
      </Router>
  );
}

export default App;
