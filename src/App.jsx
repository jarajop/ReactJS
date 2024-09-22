import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Layout from './pages/Layout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/layout" element={<Layout />} />
      </Routes>

    </>
  )
}

export default App
