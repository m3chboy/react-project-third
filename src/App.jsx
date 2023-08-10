import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './pages/home'
import { Features } from './pages/features'
import { Navbar } from './components/navbar'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/features' element={<Features />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
