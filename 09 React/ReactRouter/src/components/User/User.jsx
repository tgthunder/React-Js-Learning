import React from 'react'
import { useParams } from 'react-router-dom'
// This is the component from which we can get data from database and displays it to the UI

function User() {
    const {userId} = useParams()
  return (
    <div className='bg-yellow-400 text-white p-3 text-3xl'>User: {userId}</div>
  )
}

export default User