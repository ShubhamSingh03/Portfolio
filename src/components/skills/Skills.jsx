import { useEffect, useState } from "react";
import "./skills.css";
import Section from "../shared/section/Section";
import AnimatedLetter from "../animatedLetters/AnimatedLetter";
// icons
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiHtml5,
  SiExpress,
  SiSass,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

// skills section component
const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const skillsTitleArray = ["S", "k", "i", "l", "l", "s"];
  useEffect(() => {
    setLetterClass("text-animate-hover");
  }, []);
  return (
    <>
      <Section background="light" id="skills">
        <div className="skills-content-wrapper" title="Skills">
          <h2>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={skillsTitleArray}
              idx={10}
            />
          </h2>
          <div className="right-col">
            {/* skills icons with title */}
            <div className="techsection">
              <div>
                <SiJavascript color="var(--yellow)" />
                <h5>Javascript</h5>
              </div>
              <div>
                <SiHtml5 color="#cc5635" />
                <h5>HTML</h5>
              </div>
              <div>
                <DiCss3 color="#146CAD" />
                <h5>CSS</h5>
              </div>
              <div>
                <FaReact color="#61DAFB" />
                <h5>React</h5>
              </div>
              <div>
                <FaNodeJs color="#5CA945" />
                <h5>Nodejs</h5>
              </div>
              <div>
                <DiMongodb color="#537A2C" />
                <h5>MongoDb</h5>
              </div>

              <div>
                <SiExpress />
                <h5>Express</h5>
              </div>

              <div>
                <SiTailwindcss color="#35B3EB" />
                <h5>Tailwind</h5>
              </div>
              <div>
                <BsBootstrap color="#670FE8" />
                <h5>Bootstrap</h5>
              </div>
              <div>
                <SiSass color="#C36291" />
                <h5>Sass</h5>
              </div>
              <div>
                <SiGit color="#E44C30" />
                <h5>Git</h5>
              </div>
              <div>
                <VscGithub color="var(--white)" />
                <h5>Github</h5>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Skills;
