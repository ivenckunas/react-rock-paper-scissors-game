import React, { useState } from 'react'

function ColorMap({ color }) {

  const [getColor, setColor] = useState("white")

  const changeColor = () => {
    setColor(color.hex)
  }


  return (
    <div onClick={changeColor} className='box' style={{ backgroundColor: getColor }}></div >
  )
}

export default ColorMap