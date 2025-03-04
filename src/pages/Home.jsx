import React from "react";
import ProjectCarousel from "../components/carousel/ProjectCarousel";
import Header from "../components/header/Header";
import Intro from "../components/intro/Intro";
import Footer from "../components/footer/Footer";
import AnimatedSection from "../components/AnimatedSection"; 

const Home = () => {
  return (
    <div>
      <AnimatedSection>
        <Header />
      </AnimatedSection>

      <AnimatedSection>
        <Intro />
      </AnimatedSection>

      <AnimatedSection>
        <ProjectCarousel />
      </AnimatedSection>

      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default Home;
