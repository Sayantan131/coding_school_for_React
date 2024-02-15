import { useState } from 'react'

import './App.css'

function App() {
 const[length, setlength] = useState(8)
 const[numberAllowed, setNumberAllowed]=useState(false);
 const[charAllowed, setCharAllowed] = useState(false);
const[password, setPassword] = useState("")
const passwordGenerator = () =>{}

  return (
    <>
     <h1 className='text-4xl text-center text-white'>password generator</h1>
    </>
  )
}

export default App
