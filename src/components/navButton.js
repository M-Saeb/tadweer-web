import React from 'react'

const navButton = ({title, children}) => {
  return (
    <div className="gird place-items-center item-center bg-yellow-500 rounded-2xl w-40 h-10 pt-2 my-10 cursor-pointer
    hover:bg-green-500 transition duration-500">
      <p className="">
        {title}
      </p>
    </div>
  )

}

export default navButton