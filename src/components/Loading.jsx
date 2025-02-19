import React from 'react';


function Loading() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-solid rounded-full border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;