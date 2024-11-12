import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './components/Card_props'  // You need to import the component

function App() {

  const myObj = {
    username:"Sudarshan",
    isLoggedIn:true
  }
  return (
    <>
      <h1 className='bg-green-500 text-white p-2 rounded-xl mb-2  mt-0'>TailWind Css Tutorial</h1>
      {/* bg is background color and that number is opacity */}
      {/* text is text color */}
      {/* p means padding */}
      {/* rounded means border radius  */}
      {/* If you want to add img then you should close the img tag  */}

      <Card username="ChaiAurCode"  newObj = {myObj}  buttonText = "Click"/>
    </>
  )
}

export default App
