import React from 'react';

type chipprops = {
  label:string,
  onClose:()=>void,
  color:string
}

const Chip = ({ label, onClose, color = 'blue' }:chipprops) => {
  return (
    <div 
      className={`flex items-center px-3 py-1 rounded-full text-white bg-${color}-500 text-sm border-2`}
    >
      <span>{label}</span>
      {onClose && (
        <button 
          onClick={onClose}
          className="ml-2 text-white hover:text-gray-300 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Chip;
