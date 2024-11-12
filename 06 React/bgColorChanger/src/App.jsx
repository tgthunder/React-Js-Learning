import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color , setColor] = useState('olive')
   return (
   <div className="w-full h-screen"
   style={{backgroundColor:color}}  // need to open bracket inside bracket
   >
    <div className="fixed flex flex-wrap 
    justify-center bottom-12 inset-x-0 px-2" 
    // Now we have set the position of bar 
    >
      <div className="flex flex-wrap justify-center 
      gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">  
      {/* this is actual Bar */}
        <button onClick={()=> setColor("red")} className="outline-none px-4 py-1 rounded-full shadow-sm text-white"
        style={{backgroundColor:"red"}} >Red</button>
        <button onClick={()=> setColor("green")} className="outline-none px-4 py-1 rounded-full shadow-sm text-white"
        style={{backgroundColor:"green"}}>Green</button>
        <button onClick={()=> setColor("orange")} className="outline-none px-4 py-1 rounded-full shadow-sm text-white"
        style={{backgroundColor:"orange"}}>Orange</button>
        <button onClick={()=> setColor("blue")} className="outline-none px-4 py-1 rounded-full shadow-sm text-white"
        style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={()=> setColor("yellow")} className="outline-none px-4 py-1 rounded-full shadow-sm text-white"
        style={{backgroundColor:"yellow"}}>Yellow</button>
      </div>
    </div>
    {/* flex-wrap -> used to wrap text or elements into multiple lines */}
    {/* inser-x-0 -> used to give value 0px from left and right */}
    {/* px-2 padding from left and right */}
    
   </div>
  )
}

export default App
