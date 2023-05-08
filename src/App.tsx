import React from 'react';
import './App.css';
import Menu from './Components/Menu/Menu';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import SideBar from './Components/SideBar/SideBar';
import Projects from './Components/Projects/Projects';
import bg from './assets/flight.mp4';
import Skills from './Components/Skills/Skills';

function App() {


  return (
    <div className="App">
      <video className='videoTag' autoPlay loop muted>
        <source src={bg} type='video/mp4' />
      </video>
      <SideBar />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/ABOUT" element={<About />} />

      </Routes>
    </div>
  );
}

export default App;
