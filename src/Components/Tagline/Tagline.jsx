import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './Tagline.css';

const Tagline = () => {
  return (
    <section className="tagline">
      <motion.div
        className="tagline-text"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hi, I am Ishan Goel</h1>
        <p>A Passionate FrontEnd Developer, currently studying in SRMIST in Chennai</p>
      </motion.div>

      <motion.div
        className="tagline-image"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* The image is styled using CSS */}
      </motion.div>

      {/* Social media icons below the tagline text */}
      <motion.div
        className="social-icons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <a href="https://www.linkedin.com/in/ishangoel2005/" target="_blank" rel="">
          <FaLinkedin size={30} color="#0077B5" />
        </a>
        <a href="https://github.com/ishangoel2005" target="_blank" rel="">
          <FaGithub size={30} color="#FFFFFF" />
        </a>
        <a href="https://www.instagram.com/ishan.goel2005/" target="_blank" rel="">
          <FaInstagram size={30} color="#E4405F" />
        </a>
      </motion.div>
    </section>
  );
};

export default Tagline;
