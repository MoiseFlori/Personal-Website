import styles from "./AboutHeader.module.css";

const AboutHeader = () => {
  return (
    <header className={styles.header}>
      <div className = {styles.imageContainer}>
      <img src="images/about-header-png.png" alt="About" className={styles.image} /> 
      </div>
      <div className={styles.textContainer}>
      <h1 className={styles.title}>Beyond Code: My Journey</h1>
      <p className={styles.subtitle}>
        Exploring my transition from healthcare to programming.
      </p>
      </div>
    </header>
  );
};

export default AboutHeader;
