import React, {useState, useRef, useEffect} from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

function Dropdown(){
    const dropdownRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
    
    return (
        <div className='ml-auto' ref={dropdownRef}>
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex rounded cursor-pointer px-4 py-2 text-gray-900 bg-gray-300 hover:bg-gray-50"
        >
            Exercises
            <ChevronDownIcon className="w-5 h-6 text-gray-400 " />
        </button>

        {isOpen && (
            <div className="absolute right-4 top-16 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg  transition-opacity">
            <ul className="py-1">
                <li className="block p-2 text-black text-sm hover:bg-gray-200 ps-4 " >
                    <Link to="/flexbox" className='pr-45 cursor-pointer' onClick={() =>{setIsOpen(false)}}>Flex</Link>
                </li>
                <li className="block p-2 text-black text-sm hover:bg-gray-200  ps-4">
                    <Link to="/fetch" className='pr-35 cursor-pointer' onClick={() =>{setIsOpen(false)}}>Fetch API</Link>
                </li>
                <li className="block p-2 text-black text-sm hover:bg-gray-200  ps-4">
                    <Link to="/uicomponent" className='pr-27 cursor-pointer' onClick={() =>{setIsOpen(false)}}>UI Component</Link>
                </li>
                
            </ul>
            </div>
        )}
        </div>

    )
}

export default Dropdown