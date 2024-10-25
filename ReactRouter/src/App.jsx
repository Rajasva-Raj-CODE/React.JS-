import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import PageNotFound from './PageNotFound'


const App = () => {

  return (
    <div>
      <BrowserRouter>
      {/* <Link to="/home">Home</Link>
      <br />
      <Link to="/about">About</Link> */}
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/*' element={<PageNotFound/>}/> */}
        <Route path='/*' element={<Navigate to='/home'/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App