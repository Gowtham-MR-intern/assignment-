import React, {useState } from 'react';
import Loading from '../common/Loading';
import { FaSearch } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";
import { LuWind } from "react-icons/lu";


interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
}

const Weather:React.FC = () =>{
  const [city, setCity] = useState<WeatherData | null>(null);
  const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const API_KEY = "57aa643b62c1dcc77824e18445049404";

  const generateReport = async (): Promise<void> => {
    if (!search) {
      setError("City is required");
      setCity(null);
      return;
    }
    setLoading(true);
    
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`
      );
      const result = await response.json();
      if (response.ok) {
        setCity(result);
        console.log(city);
        setError(null);
      } else {
        console.error("Error:", result.message);
        setCity(null);
        setError("City not found");
      }
    } catch (error) {
      setError("Failed to fetch weather data");
      setCity(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex items-center justify-center h-full bg-gray-800'>
      <div className='w-100 h-100 bg-gray-700 rounded-lg p-5 shadow-gray-500 shadow-lg'>
        <h1 className='text-2xl text-white font-bold text-center'>Weather Report</h1>
        <input
          type='text'
          placeholder='Enter city name'
          className='w-70 px-3 py-2 border border-gray-300 rounded-lg bg-white m-5'
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className='bg-purple-600 text-white px-3 py-3 rounded-lg cursor-pointer'
          onClick={generateReport}
        >
          <FaSearch />
        </button>

        {error && <p className='text-red-500 text-center'>{error}</p>}

        {loading && <Loading className='w-7 h-7'/>}

        {!loading && city && (
          <div className='flex flex-col px-5 rounded-lg'>
            <div className='flex flex-col items-center mb-5'>
              <img
                src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png"
                width="150"
                alt="Free Svg Weather"
              />
              <p className='text-white text-3xl'>{city.main.temp}°C</p>
            </div>

            <div className='flex justify-between'>
              <div className='flex'>
                <MdOutlineWaterDrop className='text-white text-2xl' />
                <p className='text-white text-xs ml-1'>
                  {city.main.humidity}% <br /> humidity
                </p>
              </div>
              <div className='flex'>
                <LuWind className='text-white text-2xl' />
                <p className='text-white text-xs ml-1'>
                  {city.wind.speed} Km/H <br /> Speed
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
