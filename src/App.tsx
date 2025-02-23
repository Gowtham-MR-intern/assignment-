import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import FlexPlayground from './components/Flexbox';
import FetchAPI from './components/Fetchapi'
import Home from './components/home'
import UIcomponent from './components/UIcomponent'
import Login from './components/login';
import Weather from './components/Weather';

const App:React.FC = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}/>
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
