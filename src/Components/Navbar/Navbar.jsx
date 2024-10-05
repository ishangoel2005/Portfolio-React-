import React from 'react';
import './Navbar.css'; // Optional: For styling

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={() => scrollToSection('about')}>About</a>
        </li>
        <li>
          <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
        </li>
        <li>
          <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
        </li>
        <li>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
