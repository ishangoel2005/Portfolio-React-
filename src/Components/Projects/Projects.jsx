import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'SRM Website Clone',
    description:
      'The SRM website clone is a dynamic and responsive web application developed using React and CSS. This project features a clean and modern design, complete with intuitive navigation and interactive elements to enhance user engagement. The website is optimized for various devices, ensuring a seamless browsing experience for users on desktops, tablets, and smartphones. Through this clone, the project demonstrates a solid understanding of front-end development principles and showcases the potential of React for building interactive web applications.',
    className: 'project-image-srm', 
    githubLink: 'https://srmistwebsiteclone.vercel.app/',
  },
  {
    title: 'URL Shortener',
    description:
      'The URL shortener project is a web application built with MongoDB, Express, and EJS, designed to transform long URLs into shorter, shareable links. The user-friendly interface allows for easy input of lengthy URLs, which are then converted and stored in a MongoDB database through Express. EJS is utilized for dynamic content rendering, providing a seamless user experience. Featuring link tracking and error handling, this project highlights key full-stack development skills and the effectiveness of modern web technologies.',
    className: 'project-image-url-shortener', 
    githubLink: 'https://github.com/ishangoel2005/URL-Shortner', 
  },
  {
    title: 'Take You Forward Clone',
    description:
      'The Take You Forward clone is a web application designed to replicate the functionality of the original site, showcasing services and features aimed at personal and professional development. Built using modern web technologies, this project includes an intuitive interface that allows users to explore various resources and offerings easily. The application emphasizes user engagement with dynamic content and responsive design, ensuring accessibility across devices. This project serves as a practical demonstration of front-end development skills and the ability to create functional and appealing web applications.',
    className: 'project-image-take-you-forward', 
    githubLink: 'https://takeyouforwardclone-zeta.vercel.app/', 
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2 className='heading'>Projects</h2>
      {projects.map((project, index) => (
        <div className={`project ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
          <motion.div
            className="project-info"
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                {project.title} <span className="arrow">↗️</span>
              </a>
            </h3>
            <p>{project.description}</p>
          </motion.div>
          <motion.div
            className={`project-image ${project.className}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      ))}
    </section>
  );
};

export default Projects;
