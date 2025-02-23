import React from 'react';

type loadprops ={
  text?:string,
  className?:string
}
function Loading({ text, className }:loadprops) {
  return (
    <div className="flex justify-center items-center">
      <div className={`${className} border-4 border-white border-solid rounded-full border-t-transparent rounded-full animate-spin`}></div>
      <p className='text-white ml-2'>{text}</p>
    </div>
  );
};

export default Loading;