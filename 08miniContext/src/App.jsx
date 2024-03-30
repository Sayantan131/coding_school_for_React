import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContext'

function App() {
 

  return (
    <UserContextProvider>
   <h1>Chai or React</h1>
    </UserContextProvider>
  )
}

export default App
