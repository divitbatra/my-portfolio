// Portfolio.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Portfolio.module.css';

const projects = [
  { title: "Project 1", img: "https://via.placeholder.com/600x400", link: "/project/1" },
  { title: "Project 2", img: "https://via.placeholder.com/600x400", link: "#" },
  { title: "Project 3", img: "https://via.placeholder.com/600x400", link: "#" },
  { title: "Project 4", img: "https://via.placeholder.com/600x400", link: "#" }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2>Portfolio</h2>
        <hr />
        <div className={styles.grid}>
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={styles.imageWrapper}>
                <img src={proj.img} alt={proj.title} />
                <div className={styles.overlay}>
                  <h3>{proj.title}</h3>
                  {proj.link.startsWith('/') ? (
                    <Link to={proj.link} className={styles.btnSm}>View Details</Link>
                  ) : (
                    <a href={proj.link} className={styles.btnSm}>View Details</a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
