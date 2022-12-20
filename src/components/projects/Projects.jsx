import React, { useEffect, useState } from "react";
import projectsData from "./projectsData";
import "./projects.css";
import AnimatedLetter from "../animatedLetters/AnimatedLetter";
import Filter from "./filter/Filter";
import ShowCase from "./showcase/ShowCase";

// Projects section component here
const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [transition, setTransition] = useState(false);
  const [letterClass, setLetterClass] = useState("text-animate");
  const projectsTitleString = "Check my Projects";
  const projectsTitleArray = [...projectsTitleString];

  const filterProjects = (tag) => {
    setTransition("zoomout");
    // checking tag from filter component
    setTimeout(() => {
      if (tag !== "featured") {
        const filteredProjects = projectsData.filter((f) =>
          f.tags.includes(tag)
        );
        setProjects(filteredProjects);
      } else {
        const filteredProjects = projectsData.filter((f) =>
          f.tags.includes(tag)
        );
        setProjects(filteredProjects);
      }
      setTransition("zoomin");
    }, 200);

    setTimeout(() => {
      setTransition(false);
    }, 600);
  };
  // on load by default
  useEffect(() => {
    filterProjects("featured");
    setLetterClass("text-animate-hover");
  }, []);

  return (
    <section
      id="portfolio"
      title="Check my Projects"
      className="projects-section"
    >
      <h2>
        <AnimatedLetter
          letterClass={letterClass}
          strArray={projectsTitleArray}
          idx={22}
        />
      </h2>
      <div className="portfolio-content-wrapper">
        {/* Filter section component */}
        <Filter filterProjects={(tag) => filterProjects(tag)} />

        {/* Showcase section component */}
        <ShowCase data={projects} transition={transition} />
      </div>
    </section>
  );
};

export default Projects;
