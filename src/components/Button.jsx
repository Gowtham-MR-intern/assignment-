import React from 'react'

function Button({text,onClick,disabled=false}) {
  return (
        <button
            className={`bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full  
            ${disabled ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
            // Only attach the onClick handler if not disabled
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
  )
}



export default Button