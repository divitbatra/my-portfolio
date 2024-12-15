// Project1.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import styles from './Project1.module.css';

const Project1 = () => {
  return (
    <>
      <Header />
      <section className={styles.projectSection}>
        <div className="container">
          <motion.div
            initial={{opacity:0, y:30}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.7}}
          >
            <h2>Project 1: Awesome Web App</h2>
            <hr />
            <div className={styles.projectContent}>
              <div className={styles.imageWrapper}>
                <img src="https://via.placeholder.com/800x500" alt="Project 1 Screenshot" />
              </div>
              <div className={styles.textWrapper}>
                <p>
                  This project is a cutting-edge web application designed to deliver a seamless user experience. Built using React, Node.js, and a modern design system, it focuses on responsiveness, accessibility, and performance.
                </p>
                <p>
                  Key features include:
                </p>
                <ul>
                  <li>Intuitive user interface and navigation.</li>
                  <li>Optimized loading times with code-splitting and lazy loading.</li>
                  <li>Responsive design across all devices.</li>
                  <li>Integrated with external APIs for real-time data.</li>
                </ul>
                <p>Technologies used: React, CSS Modules, Node.js, Express, MongoDB.</p>
                <p>
                  <Link to="/" className={styles.btn}>Back to Home</Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Project1;
