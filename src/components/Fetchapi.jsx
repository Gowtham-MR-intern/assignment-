import React,{useState, useEffect} from 'react'

const Fetchapi = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            const curr = data.slice(0,102);
            console.log(curr)
            setData(curr);
        });
    },[]);

  return (
    <div className=' bg-gray-800'>
        <h1 className='text-white text-center text-5xl p-8 font-bold'>Fetching Data From API</h1>
        <div className='flex flex-wrap justify-evenly'>
        
            {!data[0] ? (
                <p>Loading</p>
            ):(
            data.map((element,index) =>(
                <div className='w-100 p-4 m-4 bg-cyan-500  rounded-lg  text-white' key={index}> 
                    <p>Data : {index+1}</p>
                    <p>Country Name : {element.name.common}</p>
                    <p>Official : {element.name.official}</p>
                    <p>Region : {element.region}</p>
                </div>
            ))
            )}
    
        </div>
    </div>
  )
}

export default Fetchapi