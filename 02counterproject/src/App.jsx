import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let  [counter,setCounter]= useState(15)

  const addValue = ()=>{
    if(counter == 20){
      setCounter(counter)
    }
else{
  counter = counter+1;
  setCounter(counter)
}
    
  }
  
  const removeValue = ()=>{
    if(counter == 0){
      setCounter(counter)
    }
    else{
      setCounter(counter -1)
    }
   
  }

  return (
    <>
      <h1>Chai aur Sayantan</h1>
      
      <h2> Counter value : {counter}</h2>

      
      <button
    onClick={addValue}
    >Add Value</button>
    <br />
    <button
    onClick={removeValue}
    >remove value</button>
      
    </>
  )
}

export default App
