import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './Component/Register'
import Home from './Component/Home'
import Log from './Component/Log'

function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/dashboard' element={<><Home/></>}></Route>
      <Route path='/' element={<Log/>}></Route>
      <Route path='/register' element={<><Register/></>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
