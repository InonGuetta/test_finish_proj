import { useState } from 'react'
import './App.css'
import Home from './components/pages/Home'
import Navbar from './components/application-layout/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <Navbar/>
    </nav>
      <main>
        <Home/>
      </main>
    </>
  )
}

export default App
