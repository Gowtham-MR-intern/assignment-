import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import FlexPlayground from './components/Flexbox';
import FetchAPI from './components/Fetchapi'

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<FlexPlayground/>}/>
            <Route path="/fetch" element={<FetchAPI/>}/>
            
        </Routes>
      </Router>
  );
}

export default App;
