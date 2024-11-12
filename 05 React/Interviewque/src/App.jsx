import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Interviwer will write specified number of counters using setCounter.....
// And will ask about the output without running the code
function App() {
  const [counter , setCounter] = useState(10)

  const addVal = () =>{
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1) This code will not going to work for 4 increaments
    // setCounter(counter+1)  beacuase React will treat all the four setCounter as a bundle or bunch 

    // setCounter is a special function which can accept a callBack and using callBack when we write our increament code then each and every setcounter will update the value
    
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    // the callBack accept the prevCounter parameter 
    // It is ok if you dont write the parenthesis when you write parameter
  }
  return (
    <>
     <h1>Chai Aur React</h1>
     <p>Value: {counter}</p>
     <button onClick={addVal}>Counter++</button>
     <br />
     <button>Counter--</button>
    </>
  )
}

export default App
