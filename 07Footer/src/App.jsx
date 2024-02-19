import { useState } from 'react'
import './App.css'
import Body from "./body/body";
import Footer from "./Footer/footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Body/>
      <Footer/>
    </>
  )
}

export default App
