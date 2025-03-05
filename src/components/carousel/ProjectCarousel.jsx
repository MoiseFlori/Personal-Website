import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./ProjectCarousel.module.css";
import { useNavigate } from "react-router-dom";

 export const projects = [
  {
    id: 1,
    title: "Filmoteka Project",
    img: "images/filmoteka.png",
    link: "https://moiseflori.github.io/filmoteka-project-team3/",
  },
  {
    id: 2,
    title: "IceCream Project",
    img: "images/icecream.png",
    link: "https://moiseflori.github.io/IceCream2/",
  },
  {
    id: 3,
    title: "Chat App",
    img: "images/chatbot.png",
    link: "https://moiseflori.github.io/chat-app/",
  },
  {
    id: 4,
    title: "Trending Movies",
    img: "images/trending-movies.png",
    link: "https://moiseflori.github.io/goit-react-hw-05-movies/",
  },
  {
    id: 5,
    title: "WebStudio Page",
    img: "images/webstudio.png",
    link: "https://moiseflori.github.io/WebStudio-Page-/",
  },
  {
    id: 6,
    title: "YachJet",
    img: "images/yachtjet.png",
    link: "https://moiseflori.github.io/YachtJet/",
  },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1023 }, items: 3 },
  tablet: { breakpoint: { max: 1023, min: 767 }, items: 2 },
  mobile: { breakpoint: { max: 767, min: 0 }, items: 1 },
};
const ProjectCarousel = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const navigate = useNavigate();

  return (
    <div className={styles.section}>
      <div className={styles.carouselContainer}>
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={2000}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${styles.projectCard} ${
                hoveredId !== null && hoveredId !== project.id
                  ? styles.blurred
                  : ""
              }`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <a className={styles.link} href={project.link}>
                <img
                  src={project.img}
                  alt={project.title}
                  className={styles.projectImage}
                />
              </a>
                <h3 className={styles.projectName}>{project.title}</h3>
            </div>
          ))}
        </Carousel>
      </div>

      <div className={styles.textContainer}>
        <h2 className={styles.title}>
          Building the Future, <span>One Line at a Time</span>
        </h2>
        <p className={styles.description}>
          Hey there, curious recruiter! If you're looking for a developer who
          turns ideas into reality, you're in the right place. Below, you'll
          find a small selection of my projects—each one built with passion,
          problem-solving skills, and a little bit of caffeine-fueled magic.
        </p>
        <p className={styles.description}>
          Want to see more? Click the "Keep Exploring" button and explore the
          full collection!
        </p>
        <button
          className={styles.seeMore}
          onClick={() => navigate("/projects")}
        >
          Keep Exploring
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;
