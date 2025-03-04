import styles from "./ProjectsHeader.module.css";

const ProjectsHeader = () => {
  return (
    <div className={styles.projectHeader}>
      <p className={styles.projectHeaderText}>
        Every project tells a story—of challenges tackled, ideas brought to
        life, and code crafted with care. Explore my work, where creativity
        meets functionality, and innovation drives every line of code.
      </p>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          Clean, efficient, and maintainable code (because spaghetti belongs on
          a plate, not in a codebase).
        </li>
        <li className={styles.listItem}>
          Responsive, user-friendly designs (so no user gets lost in the digital
          void).
        </li>
        <li className={styles.listItem}>
          Real-world problem-solving (because coding is 90% debugging and 10%
          bragging about it).
        </li>
      </ul>
    </div>
  );
};

export default ProjectsHeader;
