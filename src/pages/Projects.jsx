import React from "react";
import ProjectsHeader from "../components/projects/header/ProjectsHeader";
import ProjectsSection from "../components/projects/sections/ProjectsSection";
import AnimatedSection from "../components/animation/AnimatedSection";

const Projects = () => {
  return (
    <div className="projects">
      <ProjectsHeader />

      <AnimatedSection>
        <ProjectsSection />
      </AnimatedSection>
    </div>
  );
};

export default Projects;
