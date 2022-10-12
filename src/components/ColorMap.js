import React, { useState } from 'react'

function ColorMap() {

  const [getColor, setColor] = useState("white")


  const changeColor = () => {
    setColor()
  }


  return (
    <div onClick={changeColor} className='box' style={{ backgroundColor: setColor.hex }}></div >
  )
}

export default ColorMap