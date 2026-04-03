import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import ScrollToTop from './Hooks/scrollToTOp'

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </>
  )
}
