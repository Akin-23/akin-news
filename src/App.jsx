import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import { Routes, Route } from 'react-router'
import SingleTopic from './components/SingleTopic'
import Users from './components/Users'
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/topics/:topic" element={<SingleTopic />} />
        <Route path="/UserLogin" element={<Users/>}/>
      </Routes>
    </>
  );
}

export default App
