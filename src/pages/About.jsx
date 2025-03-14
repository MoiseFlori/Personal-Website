import React from "react";
import AboutHeader from "../components/about/AboutHeader";
import "../index.css";
import WhatIDo from "../components/about/WhatIDo";
import TechStack from "../components/about/TechStack";
import Myself from "../components/about/Myself";
import AnimatedSection from "../components/animation/AnimatedSection"; 

const About = () => {
  return (
    <div className="about-page">
   
        <AboutHeader />
  

      <AnimatedSection>
        <Myself />
      </AnimatedSection>

      <AnimatedSection>
        <WhatIDo />
      </AnimatedSection>

      <AnimatedSection>
        <TechStack />
      </AnimatedSection>
    </div>
  );
};

export default About;
