import React from 'react'

function Button() {
  function works() {
    console.log('ook')
  }
  return (
    <div>
      <button onClick={works} className='btn'>Button</button>
    </div>
  )
}

export default Button