import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

// Define professional and soft skills
const professionalSkills = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'React' },
  { name: 'C/C++' },
];

const softSkills = [
  { name: 'Communication' },
  { name: 'Teamwork' },
  { name: 'Problem-Solving' },
  { name: 'Adaptability' },
  { name: 'Time Management' },
];

const Skills = () => {
  return (
    <section className="skills">
      <h2 className='heading'>Skills</h2>
      <div className="skills-container">
        <div className="skills-column">
          <h3>Professional Skills</h3>
          <div className="skills-list">
            {professionalSkills.map((skill, index) => (
              <motion.div
                className="skill-card"
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="icon">✔️</span> {/* Tick icon */}
                <h4>{skill.name}</h4>
                <p>{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="skills-column">
          <h3>Soft Skills</h3>
          <div className="skills-list">
            {softSkills.map((skill, index) => (
              <motion.div
                className="skill-card"
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="icon">✔️</span> {/* Arrow icon */}
                <h4>{skill.name}</h4>
                <p>{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
