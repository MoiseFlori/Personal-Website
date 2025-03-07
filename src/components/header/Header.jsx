import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const text = "CREATIVE PORTFOLIO";

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

  
        <p className={styles.description}>
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 2.5, delay: Math.random() * 2.5 }}
              className={styles.letter}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </p>

   
      </nav>
    </header>
  );
};

export default Header;
