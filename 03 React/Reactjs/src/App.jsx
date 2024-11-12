import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// If you have same data in your UI at many places and you want to change that you need to change the data everywhere it would require lot of time to change the data in every element 
// but React handle it using hooks (these are methods used to change data in UI)

function App() {
    // let counter = 15  // this will not change the value of counter in UI
    // To propagate the change we should use React 

    let [counter , setCounter ] = useState(0) // 15 is intial value
    // first value is counter holder and another is function in which we need to write the code to change the counter

    const addVal = () =>{
      console.log("Clicked on Button" , Math.random());
      counter = counter+1
      // console.log(counter);
      setCounter(counter)
         }

      const removeVal = () =>{
        const text = "Can not decrease below 0"
        console.log("Counter has Decreased By 1");
        if(counter <= 0){
          counter = 0
          
        }
        else{
          counter = counter -1
        }
        
        setCounter(counter)
        
      }

      const resetVal = () =>{
        console.log("Counter Has reseted");
        counter = 0
        setCounter(counter)
        
      }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h3>Add Counter: {counter}</h3>
      <h2>Counter Val: {counter}</h2>
      <button  onClick={addVal} className='bg-green-900'>Counter++</button>
      <br />
      <button onClick={removeVal} className='bg-red-900'>Counter--</button>
      <br />
      <button onClick={resetVal} className='bg-blue-200'>Reset Counter</button>
      <p >Footer: {counter}</p>
      </>
  )
}

export default App
