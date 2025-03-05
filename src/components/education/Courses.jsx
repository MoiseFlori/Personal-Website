import React from "react";
import styles from "./Courses.module.css"; // Stilurile (dacă folosești CSS Modules)

const courses = [
  {
    id: 1,
    title: "Full-Stack Developer",
    image: "images/goit-logo.png",
    provider: "GoIT Romania",
    duration: "June 2024 - Present (10 months)",
    description:
      "An intensive program covering front-end and back-end development, focusing on JavaScript, React, Node.js, databases, and best coding practices.",
  },
  {
    id: 2,
    title: "Java Developer",
    image: "images/itschool-logo.jpg",
    provider: "IT School",
    duration: "November 2023 - March 2024",
    description:
      "A structured course on Java programming, covering OOP principles, Spring Boot, databases, and building real-world applications.",
  },
];

const Courses = () => {
  return (
    <section className={styles.courses}>
      <h2 className={styles.title}>Courses</h2>
      <ul className={styles.courseList}>
        {courses.map((course) => (
          <li key={course.id} className={styles.courseItem}>
            <h3>{course.title}</h3>
            <p>
              <img
                src={course.image}
                alt={course.title}
                className={styles.image}
              />
            </p>
            <p>{course.provider}</p>
            <p> {course.duration}</p>
            <p className={styles.description}>{course.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Courses;
