import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FlexPlayground from './components/Exercise/Flexbox';
import FetchAPI from './components/Exercise/FetchApi'
import Home from './components/Home'
import UIcomponent from './components/Exercise/UiComponent'
import Login from './components/Exercise/Login';
import Weather from './components/Exercise/Weather';

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
