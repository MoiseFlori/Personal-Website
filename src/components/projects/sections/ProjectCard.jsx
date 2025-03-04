import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  title,
  description,
  longDescription,
  liveLink,
  codeLink,
  videoSrc,
}) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        <p className={styles.longDescription}>{longDescription}</p>
        <div className={styles.links}>
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <FaGithub /> Code
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>

      <div className={styles.projectVideo}>
        <iframe
          className={styles.video}
          src={videoSrc}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default ProjectCard;
