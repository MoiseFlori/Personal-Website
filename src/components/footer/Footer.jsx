import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className={styles.footer}>
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
      </nav>
      <p className={styles.description}>
        Crafting code, building dreams. Passionate about turning ideas into
        interactive experiences, one commit at a time. Let's connect and create
        something amazing together!"
      </p>
      <p className={styles.copy}>&copy; 2025 | Built with ❤️ by Flori</p>
      <div className={styles.socialLinks}>
        <a
          href="https://www.linkedin.com/in/flori-moise/"
          target="_blank"
          aria-label="LinkedIn"
          className={styles.socialIcon}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/moiseflori"
          target="_blank"
          aria-label="GitHub"
          className={styles.socialIcon}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/moiseflori"
          target="_blank"
          aria-label="Instagram"
          className={styles.socialIcon}
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
