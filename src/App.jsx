import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HomePage from './components/HomePage'
import { Routes, Route } from 'react-router'
import SingleTopic from './components/SingleTopic'
import Users from './components/Users'
import SingleArticle from './components/SingleArticle'
import Sort from './components/Sort'
import NotFound from './components/NotFound'
import Navigation from './components/Navigation'
function App() {

  return (
    <>
      <Header />
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/topics/:topic" element={<SingleTopic />} />
        <Route path="/userLogin" element={<Users />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/articles" element={< Sort />} /> 
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App
