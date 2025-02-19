import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { BrowserRouter, Routes, Route } from "react-router";

const Body = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/Browse' element={<Browse />} />
      </Routes>
    </main>
  )
}

export default Body