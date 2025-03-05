import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <section className={styles.contactHeader}>
      <h2 className={styles.title}>Connect with Me</h2>
      <div className={styles.socialLinks}>
        <a
          href="https://www.linkedin.com/in/moiseflori"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className={styles.icon} />
        </a>

        <a
          href="https://github.com/moiseflori"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={styles.icon} />
        </a>

        <a
          href="https://www.instagram.com/your_instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareInstagram className={styles.icon} />
        </a>

        <a href="mailto:moiseflori19@gmail.com">
          <FaEnvelope className={styles.icon} />
        </a>
      </div>
    </section>
  );
};

export default ContactHeader;
