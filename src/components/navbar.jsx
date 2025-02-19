import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const Navbar = () => {


  return (
    <nav className="bg-purple-700 py-3 px-5 flex items-center relative justify-between">
      <h1 className="text-xl text-white font-bold">
        <Link to='/'>Steinnlabs-react-exercise</Link>
        </h1>
      <Dropdown/>
      
    </nav>
  );
};

export default Navbar;
