import React,{useState, useEffect} from 'react'

const Fetchapi = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            const curr = data.slice(0,100);
            setData(curr);
        });
    },[]);

  return (
    <div>
        <div className='flex flex-wrap justify-evenly bg-gray-300'>
            {data.map((element,index) =>(
                <div className='border w-100 p-4 m-4 bg-indigo-800 rounded-lg text-slate-200 ' key={index}> 
                    <p>Data : {index+1}</p>
                    <p>Country Name : {element.name.common}</p>
                    <p>Official : {element.name.official}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Fetchapi