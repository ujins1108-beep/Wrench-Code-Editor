import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </>
  )
}

export default App
