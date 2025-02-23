import React from 'react'
import Loading from './Loading'

type Btnprops ={
  text:string,
  onClick?:()=>void ,
  disabled?:boolean,
  loading?:boolean
}

const Button = ({text,onClick,disabled=false,loading}:Btnprops) => {
  return (
        <button
            className={`bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full mx-auto my-4 block
            ${disabled ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
            onClick={onClick}
            disabled={disabled}
        >
            {loading ? (
              <Loading className="w-4 h-4"/>
            ): (
              text
            )}
        </button>
  )
}



export default Button