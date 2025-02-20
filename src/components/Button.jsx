import React from 'react'
import Loading from './Loading'

function Button({text,onClick,disabled=false,loading}) {
  return (
        <button
            className={`bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full mx-auto my-4 block
            ${disabled ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
            onClick={onClick}
            disabled={disabled}
        >
            {loading ? (
              <Loading />
            ): (
              text
            )}
        </button>
  )
}



export default Button