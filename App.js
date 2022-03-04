import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './responsive.css'
import Navbar from './Navbar'
import Home from './Home'
import Movies from './Movies'
import Restaurant from './Restaurant'
import Quiz from './quiz/Quiz.js'
import Footer from './Footer'
import Projects from './Projects'

const App = () => {
  return(
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path='/restaurant' element={<Restaurant/>}/>
          <Route path='/quiz' element={<Quiz/>}/>
          <Route path='/projects' element={<Projects/>}></Route>

        </Routes>
      <Footer/>
      </Router>      
  )
}

export default App