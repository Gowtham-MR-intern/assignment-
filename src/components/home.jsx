import React from 'react';
import bg from '../assets/bg.png';

function home(){
  return (
    <div
      className="w-full h-screen bg-cover bg-no-repeat opacity-150" style={{ backgroundImage: `url(${bg})`} }>
      <div className="flex items-center justify-center h-full">
        <h1 className="text-6xl font-bold text-white text-center">
          SteinnLabs React Exercise
        </h1>
      </div>
    </div>
  );
};

export default home;