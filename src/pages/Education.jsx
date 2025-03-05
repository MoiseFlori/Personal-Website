import React from "react";
import EducationHeader from "../components/education/EducationHeader";
import Courses from "../components/education/Courses";
import Faculties from "../components/education/Faculties";
import "../index.css";

const Education = () => {
  return (
   <div className="education">
     <EducationHeader />
     <Courses />
     <Faculties />
      
   </div>
  
  );
};

export default Education;
