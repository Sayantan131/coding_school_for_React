import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    userName:"Sayantan",
    age:22,
  }
  let myArr = [1,2,3]

  return (
    <>
   <h1 className='bg-green-400 rounded-xl text-black p-4 mb-4'  >Tailwind Test</h1>
   <Card userName="ChaiaurCode" btnText = "Click Here" />
   <Card userName="Sayantan" />
   
    </>
  )
}

export default App
