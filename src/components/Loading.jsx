import React from 'react';


function Loading({ text }) {
  return (
    <div className="flex justify-center items-center">
      <div className="w-8 h-8 border-4 border-white border-solid rounded-full border-t-transparent rounded-full animate-spin"></div>
      <p className='text-white ml-2'>{text}</p>
    </div>
  );
};

export default Loading;