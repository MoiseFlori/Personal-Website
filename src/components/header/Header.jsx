import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";


const Header = () => {
  return (
    <header>
      <nav className={styles.headerContainer}>
        <ul className={styles.navList}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <motion.div
          className={styles.lineTop}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        <p className={styles.description}>
          "Building, learning, and evolving—one project at a time. Passion
          drives me, code shapes my ideas."
        </p>

        <motion.div
          className={styles.lineBottom}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
        />
      </nav>
    </header>
  );
};

export default Header;
