import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import FlexPlayground from './components/Flexbox';
import FetchAPI from './components/Fetchapi'
import Homepage from './components/home.jsx'
import UIcomponent from './components/UIcomponent.jsx'
function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/flexbox" element={<FlexPlayground/>}/>
            <Route path="/fetch" element={<FetchAPI/>}/>
            <Route path="/uicomponent" element={<UIcomponent/>}/>
        </Routes>
      </Router>
  );
}

export default App;
