import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <motion.div
        className="about-text"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className='about-heading'>About Me</h2>
        <div className="about-text-box">
          <p>
            I am a first-year Computer Science undergraduate studying in SRM Institute of Science and Technology, Kattankulathur, Chennai. My academic journey has been kick-started through an unwavering passion for innovations. With a particular interest in web development, artificial intelligence, and cybersecurity, I am enthusiastic about the transformative power of technology and eager to explore the dynamic intersections of these fields. I believe in staying a student forever and am committed to continuous learning and staying at the forefront of emerging trends. Keen to connect with like-minded professionals and enthusiasts, I'm excited about the potential collaborations and opportunities that lie ahead in this ever-evolving landscape.
          </p>
        </div>
      </motion.div>
      
      <motion.div
        className="about-image"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image is styled using CSS */}
      </motion.div>
    </section>
  );
};

export default About;
