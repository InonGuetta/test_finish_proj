import { useState } from 'react'
import './App.css'
import PostUsers from './components/pages/PostUsers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PostUsers/>
    </>
  )
}

export default App
