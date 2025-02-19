import React from 'react';

function TextField({ type,label, placeholder}) {
  return (
    <div className="w-full flex flex-col gap-2 ml-8">
      <label className="text-base font-medium text-gray-700 text-white">{label}</label>
      <input
        type={type}
        className="w-60 px-3 py-2 border border-gray-300 rounded-lg bg-white ml-2"
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextField;
