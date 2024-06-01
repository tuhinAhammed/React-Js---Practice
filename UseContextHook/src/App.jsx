import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Components1 from './Components/Components1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Components1></Components1>
    </>
  )
}

export default App
