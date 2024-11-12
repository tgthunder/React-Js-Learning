import { useState , useCallback , useEffect , useRef } from 'react'

import './App.css'
// PassWord Generator consits of a input box and copy button then length, checkbox for including numbers and special characters
function App() {
  
  // list down all the variables that are needed
  const [length , setLength] = useState(8)
  const [isNumAllowed , setIsNumAllowd] = useState(false)
  const [isCharAllowed , setIsCharAllowed] = useState(false)
  const [password , setPassword] = useState("")

  // useref is a hook used to store the reference of an object
  let copyRef = useRef(null)

  // useCallback is a meoizable hook which stores some result using which we can generate same results with extra functionalities
  // it acceptes a function and dependencies
  const generatePassWord = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(isNumAllowed) str += "0123456789"
    if(isCharAllowed) str+= "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

    for(let i=1;i<=length;i++){
      let strIdx = (Math.floor(Math.random()*str.length+1))
      pass += str[strIdx]
    }

    setPassword(pass)
  } ,[length,isCharAllowed , isNumAllowed,setPassword])

  const copyPassWordToClipboard = useCallback(()=>{
    copyRef.current?.select()  //? -> ternary operator (to check the current is not null)
    copyRef.current?.setSelectionRange(0,5)  // select the content within a specified range
    window.navigator.clipboard.writeText(password)
    // clipboard is used to copy text 
    // writeText is used to write copied text
  },
  [password])
  // Now What next -> how to run the project one thing we can do is we call onclick for each button or either we can use useEffect

  // useEffect takes callback and dependecies
  useEffect(()=>{
    generatePassWord()
  } ,
[length , isNumAllowed , isCharAllowed , generatePassWord])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div  className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
          value={password}
          placeholder='Password'
           className="outline-none w-full py-1 px-3"
          readOnly
          ref={copyRef} 
          // reference is hold using ref keyword
           />
           <button 
           onClick={copyPassWordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={17}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={isNumAllowed}
          id="numberInput"
          onChange={() => {
              setIsNumAllowd((prev) => !prev);
          }}
      />
      <label >Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={isCharAllowed}
              id="characterInput"
              onChange={() => {
                  setIsCharAllowed((prev) => !prev )
              }}
          />
          <label>Characters</label>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
