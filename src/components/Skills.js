import React, { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.css';

const skills = [
  {name:'HTML & CSS', percent:'90%'},
  {name:'JavaScript', percent:'85%'},
  {name:'React', percent:'80%'},
  {name:'Node.js', percent:'75%'}
];

const Skills = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      });
    });
    observer.observe(ref.current);
  }, []);

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <h2>Skills</h2>
        <hr />
        <div className={styles.list}>
          {skills.map((skill, i) => (
            <div className={styles.skillItem} key={i}>
              <p>{skill.name}</p>
              <div className={styles.bar}>
                <span style={{width: visible ? skill.percent : '0%'}}></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
