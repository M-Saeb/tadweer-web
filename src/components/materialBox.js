import React from 'react'
import { Link as a } from 'react-router-dom'
const Box = ({image, title, path, className}) => {
  
  return (
    <a className={`w-56 h-56 bg-cover bg-center bg-no-repeat mx-10 my-8 ${className}`}
    style={{backgroundImage: `url(${image})`}} href="#">

      <div className="w-full h-12 bg-gray-200 bg-opacity-50 mt-32 grid place-items-center transition duration-200 hover:bg-green-600 hover:bg-opacity-50">
        <p className="text-2xl">{title}</p>
      </div>

    </a>
  )
}

export default Box