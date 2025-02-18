import React, { useState } from 'react';

import Dropdownmenu from './Dropdownmenu';

const Navbar = () => {


  return (
    <nav className="bg-blue-600 py-3 px-5 flex items-center relative justify-between">
      <h1 className="text-xl text-white font-bold">Steinnlabs-react-exercise</h1>
      <Dropdownmenu/>
      
    </nav>
  );
};

export default Navbar;
