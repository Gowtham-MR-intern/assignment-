import React from 'react';

function TextField({ type,label, placeholder,onChange}) {

  return (
    <div className="w-full flex flex-col gap-2 ml-6">
      <label className="text-base font-medium text-white">{label}</label>
      <input
        type={type}
        className="w-60 px-3 py-2 border border-gray-300 rounded-lg bg-white mb-2"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default TextField;
