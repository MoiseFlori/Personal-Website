import React from "react";
import ProjectCard from "../sections/ProjectCard";
import styles from "./ProjectsSection.module.css";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Filmoteka Project",
    description: "A movie database app that lets users search and save movies.",
    longDescription:
      "Filmoteka is a dynamic movie search and bookmarking application built using JavaScript, REST APIs, and modern front-end development techniques. It fetches real-time movie data from an external API and allows users to explore trending films, search by title, and add favorites to their watchlist. The project emphasizes asynchronous JavaScript, API integration, modular code structure, and responsive UI/UX. Technologies used: JavaScript (ES6+), Axios, Parcel, SCSS, HTML5, CSS3, Notiflix for notifications, and Local Storage for user preferences.",
    liveLink: "https://moiseflori.github.io/filmoteka-project-team3/",
    codeLink: "https://github.com/moiseflori/filmoteka-project-team3",
    videoSrc: "https://www.youtube.com/embed/aC0cKraSDnM",
  },

  {
    id: 2,
    title: "IceCream Project",
    description: "A visually engaging landing page for an ice cream brand.",
    longDescription:
      "IceCream Project is a fully responsive, modern landing page designed with a focus on UI/UX principles, CSS animations, and accessibility. The project showcases a structured SCSS architecture, reusable CSS components, and cross-browser compatibility. It includes smooth animations, a mobile-friendly design, and a flexible layout using CSS Grid and Flexbox. Technologies: HTML5, SCSS, JavaScript (ES6+), Parcel bundler, and CSS animations.",
    liveLink: "https://moiseflori.github.io/IceCream2/",
    codeLink: "https://github.com/moiseflori/IceCream2",
    videoSrc: "https://www.youtube.com/embed/b2Nd0oBlfJQ",
  },
  {
    id: 3,
    title: "Chat App",
    description: "A real-time chat application built with React and Redux.",
    longDescription:
      "Chat App is a real-time messaging application developed using React, Redux, and Axios. It features state management with Redux Toolkit and persistence using Redux Persist, ensuring a seamless user experience. The app supports dynamic theming, an interactive UI, and an intuitive emoji picker for enhanced communication. API requests are efficiently managed with Axios for retrieving and sending messages. Designed with a modern UI, the project follows component-based architecture and ensures responsiveness across all devices. Key technologies used: React.js, Redux Toolkit, Redux Persist, Axios, and Emoji Picker.",
    liveLink: "https://moiseflori.github.io/chat-app/",
    codeLink: "https://github.com/moiseflori/chat-app",
    videoSrc: "https://www.youtube.com/embed/j5Bwdt1hQe4",
  },

  {
    id: 4,
    title: "Trending Movies",
    description:
      "A React-based movie search app with API integration and navigation.",
    longDescription:
      "Trending Movies is a React-powered web application that integrates with an external movie API to fetch and display trending films. It uses React Router for seamless navigation, lazy loading for performance optimization, and responsive design principles. The app follows a modular component-based structure and implements state management using React Context API. Technologies used: React.js, React Router, Axios, Styled Components, JavaScript (ES6+), and CSS3.",
    liveLink: "https://moiseflori.github.io/trending-movies/",
    codeLink: "https://github.com/moiseflori/trending-movies",
    videoSrc: "https://www.youtube.com/embed/pQGI7rXJXnU",
  },
  {
    id: 5,
    title: "WebStudio Page",
    description: "A modern business landing page with responsive design.",
    longDescription:
      "WebStudio Page is a corporate-style landing page designed with a clean UI and accessible navigation. It implements modern CSS techniques, including Flexbox and Grid for a fully responsive layout. The page is optimized for SEO and performance, ensuring fast loading times and mobile responsiveness. Technologies used: HTML5, CSS3, SCSS, JavaScript (ES6+), Parcel bundler, and AOS for smooth scrolling animations.",
    liveLink: "https://moiseflori.github.io/WebStudio-Page-/",
    codeLink: "https://github.com/moiseflori/WebStudio-Page-",
    videoSrc: "https://www.youtube.com/embed/j5Bwdt1hQe4",
  },
  {
    id: 6,
    title: "YachJet",
    description: "A premium yacht booking website with interactive UI.",
    longDescription:
      "YachJet is a high-end yacht booking platform that features an interactive UI, advanced filtering options, and a seamless user experience. The project showcases skills in building complex UI components, API data fetching, and form validation. It implements a fully responsive layout using CSS Grid and Flexbox. Technologies: JavaScript (ES6+), SCSS, HTML5, CSS3, Axios, Parcel, and Notiflix for user-friendly notifications.",
    liveLink: "https://moiseflori.github.io/YachtJet/",
    codeLink: "https://github.com/moiseflori/YachtJet",
    videoSrc: "https://www.youtube.com/embed/58SabbiRRAU",
  },
  {
    id: 7,
    title: "Search Images",
    description: "A dynamic image search app powered by Pixabay API.",
    longDescription:
      "Search Images is a JavaScript-based web application that allows users to search and browse high-quality images using the Pixabay API. The project implements infinite scrolling, asynchronous data fetching, and user-friendly interactions. Features include lazy loading, modal previews using SimpleLightbox, and modern form validation. Technologies used: JavaScript (ES6+), Axios, Parcel, Notiflix for notifications, SimpleLightbox for image previews, and SCSS for responsive styling.",
    liveLink: "https://moiseflori.github.io/search-images/",
    codeLink: "https://github.com/moiseflori/search-images",
    videoSrc: "https://www.youtube.com/embed/6Re0dI-XUpU",
  },
  {
    id: 8,
    title: "Gastro Tracker",
    description:
      "A performance-driven health tracking app built with Java and Spring Boot.",
    longDescription:
      "Gastro Tracker is a full-stack health tracking application designed for both patients and healthcare providers. Built with Java and Spring Boot, it enables patients to log symptoms, track meals, manage documents, and schedule appointments, while doctors can review patient history, prescribe treatments, and manage medical records. The application integrates a Thymeleaf-based frontend with dynamic HTML and CSS, utilizes Hibernate for ORM, and employs a MySQL database for efficient data storage. The backend ensures secure authentication, API endpoints, and optimized performance using Maven for dependency management. Git is used for version control, and the project follows RESTful architecture best practices.",
    liveLink: "https://moiseflori.github.io/gastroproject/",
    codeLink: "https://github.com/moiseflori/gastroproject",
    videoSrc: "https://www.youtube.com/embed/j5Bwdt1hQe4",
  },
];

const ProjectsSection = () => {
  return (
    <div className={styles.projectsContainer}>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: index * 0.1,
          }}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsSection;
