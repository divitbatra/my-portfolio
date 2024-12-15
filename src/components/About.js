import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About Me</h2>
        <hr />
        <div className={styles.aboutContent}>
          <motion.div 
            className={styles.aboutText}
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:1, x:0}}
            viewport={{ once: true }}
            transition={{duration:0.7}}
          >
            <p>Dedicated Computer Science undergraduate at the University of Alberta, poised to graduate in 2027. Equipped with robust skills in software development and cloud computing. Proficient in key technologies such as HTML5, CSS, JavaScript, ReactJS, NodeJS, Python, and more. 
            <br></br><br></br>Passion for technology has led to the development of a social media moderator tool during HackED 2024 at the University of Alberta, showcasing the ability to integrate technical knowledge with practical solutions. This tool, developed using Flutter and Android Studio, intelligently flags inappropriate content to enhance civility on platforms like Instagram, Reddit, and YouTube.
            <br></br><br></br>Committed to leveraging technology for impactful solutions, continuously exploring new ways to enhance expertise and contribute to the evolving field of computer science. 
            <br></br><br></br>Let's connect to discuss collaborative exploration of the limitless possibilities within software development and cloud computing.</p>
          <p>Currently based in Edmonton, I'm open to remote projects and collaborations worldwide.</p>
          </motion.div>
          <motion.div 
            className={styles.aboutImage}
            initial={{opacity:0, x:50}}
            whileInView={{opacity:1, x:0}}
            viewport={{ once: true }}
            transition={{duration:0.7}}
          >
            <img src={ require('./assets/dp.jpeg') } />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
