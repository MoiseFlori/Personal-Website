import styles from "./WhatIDo.module.css";
import { nanoid } from "nanoid";

const WhatIDo = () => {
  const skills = [
    {
      id: nanoid(),
      title: "Crafting Digital Experiences",
      description:
        "I create engaging and dynamic web applications, turning ideas into reality. My focus is on crafting clean, efficient, and user-friendly designs that offer a seamless experience.",
    },
    {
      id: nanoid(),
      title: "Designing for Every Screen",
      description:
        "A great website adapts to any screen. I design flexible layouts and components that ensure smooth functionality and aesthetics across all devices.",
    },
    {
      id: nanoid(),
      title: "Writing Future-Proof Code",
      description:
        "Well-structured code is the backbone of any project. I prioritize readability, modularity, and best coding practices to keep projects scalable and easy to maintain.",
    },
    {
      id: nanoid(),
      title: "Seamless System Integration",
      description:
        "Seamless communication between systems is key. I work with APIs and external services to ensure efficient data flow and smooth user interactions.",
    },
    {
      id: nanoid(),
      title: "Always Learning, Always Growing",
      description:
        "Technology evolves rapidly, and so do I. I'm always exploring new tools, frameworks, and methodologies to stay ahead and improve my development skills.",
    },
    {
      id: nanoid(),
      title: "Stronger Together: Teamwork in Tech",
      description:
        "Building great software is a team effort. I value knowledge-sharing, teamwork, and strong communication to create impactful digital solutions.",
    },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>WHAT I DO</h2>
      <div className={styles.grid}>
        {skills.map((skill) => (
          <div key={skill.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{skill.title}</h3>
            <p className={styles.cardDescription}>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
