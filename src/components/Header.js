import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    const offsetTop = section.offsetTop - 60;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>MyBrand</div>
        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          <ul>
            <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
            <li><a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')}>Portfolio</a></li>
            <li><a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a></li>
            {/* <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li> */}
          </ul>
        </nav>
        <div className={styles.hamburger} onClick={() => setOpen(!open)}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
