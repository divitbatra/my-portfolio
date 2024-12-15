import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay}></div>
      <motion.div className={styles.heroContent}
        initial={{opacity:0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration:1}}
      >
        <h1>Hi, I’m Divit Batra</h1>
        <p>2nd Year CS Undergraduate Student at UofA</p>
        <a href="#portfolio" className={styles.btn}>View My Work</a>
      </motion.div>
    </section>
  );
};

export default Hero;
