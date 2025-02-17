import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 flex items-center relative">
      <h1 className="text-xl font-bold">Steinnlabs-react-exercise</h1>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="ml-auto flex rounded cursor-pointer px-4 py-2 text-gray-900 bg-gray-300 hover:bg-gray-50"
      >
        Exercises
        <ChevronDownIcon className="w-5 h-6 text-gray-400 " />
      </button>
      {isOpen && (
        <div className="absolute right-4 top-16 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg  transition-opacity">
          <ul className="py-1">
    
            <li className="block p-2 text-black text-sm hover:bg-gray-100">
              <Link to="/" className='px-20'>Flex</Link>
            </li>
            <li className="block p-2 text-black text-sm hover:bg-gray-100">
              <Link to="/fetch" className='px-17'>Fetch API</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
