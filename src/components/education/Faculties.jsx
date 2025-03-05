import React from "react";
import styles from "./Faculties.module.css"; 

const faculties = [
  {
    id: 1,
    title: "Computer Science",
    institution: "Titu Maiorescu University",
    duration: "Present (3rd year)",
    description:
      "Studying software development, algorithms, databases, and computer systems. Gaining both theoretical and practical knowledge for a career in IT.",
  },
  {
    id: 2,
    title: "Mathematics & Informatics",
    institution: "Scoala Centrala, Bucharest",
    duration: "2012 - 2016",
    description:
      "High school education with a focus on mathematics and computer science, developing problem-solving skills and a strong analytical mindset.",
  },
];

const Faculties = () => {
  return (
    <section className={styles.faculties}>
      <h2 className={styles.title}>Academic Journey</h2>
      <ul className={styles.facultyList}>
        {faculties.map((faculty) => (
          <li key={faculty.id} className={styles.facultyItem}>
            <h3>{faculty.title}</h3>
            <p>{faculty.institution}</p>
            <p> {faculty.duration}</p>
            <p className={styles.description}>{faculty.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Faculties;
