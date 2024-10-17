import React from 'react'
import {BrowserRouter,  Route, Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
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
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App