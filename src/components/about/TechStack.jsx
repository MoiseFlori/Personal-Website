import React, { useState } from "react";
import styles from "./TechStack.module.css";

const techIcons = [
  { id: "html", icon: "icons/Tech/HTML.svg", name: "HTML5" },
  { id: "css", icon: "icons/Tech/CSS.svg", name: "CSS3" },
  { id: "js", icon: "icons/Tech/JavaScript.svg", name: "JavaScript" },
  { id: "java", icon: "icons/Tech/Java.svg", name: "Java" },
  { id: "mysql", icon: "icons/Tech/MySQL.svg", name: "MySQL" },
  { id: "nodejs", icon: "icons/Tech/NodeJS.svg", name: "Node.js" },
  { id: "spring", icon: "icons/Tech/Spring.svg", name: "Spring" },
  { id: "hibernate", icon: "icons/Tech/hibernate.svg", name: "Hibernate" },
];

const toolIcons = [
  { id: "figma", icon: "icons/Tools/Figma.svg", name: "Figma" },
  { id: "git", icon: "icons/Tools/Git.svg", name: "Git" },
  { id: "Github", icon: "icons/Tools/Github.svg", name: "GitHub" },
  { id: "intelliJ", icon: "icons/Tools/IntelliJ.svg", name: "IntelliJ" },
  { id: "NPM", icon: "icons/Tools/NPM.svg", name: "NPM" },
  { id: "Postman", icon: "icons/Tools/Postman.svg", name: "Postman" },
  { id: "vs-code", icon: "icons/Tools/vs-code.svg", name: "Vs Code" },
  { id: "maven", icon: "icons/Tools/maven.svg", name: "Maven" },
];

const TechStack = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>TECH STACK</h2>
      <div className={styles.grid}>
        {techIcons.map((tech) => (
          <div key={tech.id} className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <img src={tech.icon} alt={tech.name} className={styles.icon} />
              </div>
              <div className={styles.cardBack}>
                <p>{tech.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className={styles.title}>TOOLS STACK</h2>
      <div className={styles.grid}>
        {toolIcons.map((tech) => (
          <div key={tech.id} className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <img src={tech.icon} alt={tech.name} className={styles.icon} />
              </div>
              <div className={styles.cardBack}>
                <p>{tech.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
