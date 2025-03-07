import React, { useState, useMemo } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./ProjectCard.module.css";


const getYoutubeThumbnail = (url) => {
  if (!url) return "";
  const videoId = url.split("/embed/")[1];
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

const ProjectCard = ({
  title,
  description,
  longDescription,
  liveLink,
  codeLink,
  videoSrc,
}) => {
  const [showVideo, setShowVideo] = useState(false);


  const videoThumbnail = useMemo(
    () => getYoutubeThumbnail(videoSrc),
    [videoSrc]
  );


  const autoplayVideoSrc = useMemo(() => `${videoSrc}?autoplay=1`, [videoSrc]);

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
        {!showVideo ? (
          <div
            className={styles.thumbnailContainer}
            onClick={() => setShowVideo(true)}
          >
            <img
              src={videoThumbnail}
              alt="Video Thumbnail"
              className={styles.videoThumbnail}
            />
          </div>
        ) : (
          <iframe
            className={styles.video}
            src={autoplayVideoSrc} 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
