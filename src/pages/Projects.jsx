import React from "react";
import ProjectsHeader from "../components/projects/header/ProjectsHeader";
import ProjectsSection from "../components/projects/sections/ProjectsSection";
import AnimatedSection from "../components/AnimatedSection";

const Projects = () => {
  return (
    <div className="projects">
      <AnimatedSection>
        <ProjectsHeader />
      </AnimatedSection>
      <AnimatedSection>
        <ProjectsSection />
      </AnimatedSection>
    </div>
  );
};

export default Projects;
