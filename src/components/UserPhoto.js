import React from 'react'

function UserPhoto({ name, age, src }) {
  return (
    <div>
      <h2>Labas, cia {name}. Man {age} metai</h2>
      <img src={src} alt="" />
    </div>
  )
}

export default UserPhoto