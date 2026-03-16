import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Services from './Pages/Services'

export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </Router>
    </>
  )
}
