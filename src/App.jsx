import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Tagline from './Components/Tagline/Tagline';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';


const App = () => {
  return (
    <Router>
      <Navbar/>
    <div id="tagline"><Tagline /></div>
    <div id="about"><About /></div>
    <div id="skills"><Skills /></div>
    <div id="projects"><Projects /></div>
    <div id="contact"><Contact /></div>
    </Router>
    
  );
};

export default App;
