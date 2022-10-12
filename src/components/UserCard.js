import React from 'react'

function UserCard({ user }) {


  return (

    <div className='card'>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.address.street}</p>
      <p>{user.address.city}</p>
      <p>{user.address.zipcode}</p>
      <a href={"http://" + user.website}>Website</a>
    </div >
  )
}

export default UserCard