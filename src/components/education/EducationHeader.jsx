import React from 'react';
import styles from './EducationHeader.module.css';


const EducationHeader = () => { 
  return (
    <div className={styles.educationHeader}>
      <h1 className={styles.educationTitle}>Education</h1>
      <p className={styles.educationDescription}>
        A journey of continuous learning, building skills, and expanding
        knowledge in technology.
      </p>
    </div>
  );
}

export default EducationHeader;