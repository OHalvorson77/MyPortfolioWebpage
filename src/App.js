import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Pages/main';
import About from './Pages/about';
import Header from './header.js';
import Resume from './Pages/resume';
import Contact from './Pages/contact';
import Portfolio from './Pages/portfolio';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element ={<About/>}/>
        <Route path="/home" element ={<Home/>}/>
        <Route path="/resume" element ={<Resume/>}/>
        <Route path="/contact" element ={<Contact/>}/>
        <Route path="/portfolio" element ={<Portfolio/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}


export default App;
