import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
