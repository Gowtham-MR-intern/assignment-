import React from 'react';

const Home = () => {
  return (
    <div className="relative bg-blue-500 h-178">
      <img 
        src="https://blog.talent500.co/wp-content/uploads/2022/04/ReactToolKit_Banner03-1200x500.png" 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />

      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-6xl font-bold text-white">SteinnLabs React Exercise</h1>
      </div>
    </div>
  );
};

export default Home;
