import React from 'react';

function Checkbox({ label, defaultChecked }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer ml-16">
      <input 
        type="checkbox" 
        defaultChecked={defaultChecked} 
        className="w-5 h-5 accent-blue-500 cursor-pointer"
      />
      <span className="text-base font-sans">{label}</span>
    </label>
  );
}

export default Checkbox;
