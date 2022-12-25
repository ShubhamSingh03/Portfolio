import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./skills.css";
import Section from "../shared/section/Section";
// icons
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiHtml5,
  SiExpress,
  SiSass,
  SiTailwindcss,
  SiGit,
  SiFirebase,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";

// skills section component
const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Section background="light" id="skills">
        <div className="skills-content-wrapper" title="Skills">
          <div className="right-col">
            {/* skills icons with title */}
            <div className="techsection">
              <div data-aos="fade-down">
                <SiJavascript color="var(--yellow)" />
                <h5>Javascript</h5>
              </div>
              <div data-aos="fade-down">
                <SiHtml5 color="#cc5635" />
                <h5>HTML</h5>
              </div>
              <div data-aos="fade-down">
                <DiCss3 color="#146CAD" />
                <h5>CSS</h5>
              </div>
              <div data-aos="fade-down">
                <FaReact color="#61DAFB" />
                <h5>React</h5>
              </div>
              <div data-aos="fade-down">
                <FaNodeJs color="#5CA945" />
                <h5>Nodejs</h5>
              </div>
              <div data-aos="fade-down">
                <DiMongodb color="#537A2C" />
                <h5>MongoDb</h5>
              </div>

              <div data-aos="fade-down">
                <SiExpress />
                <h5>Express</h5>
              </div>

              <div data-aos="fade-down">
                <SiTailwindcss color="#35B3EB" />
                <h5>Tailwind</h5>
              </div>
              <div data-aos="fade-down">
                <BsBootstrap color="#670FE8" />
                <h5>Bootstrap</h5>
              </div>
              <div data-aos="fade-down">
                <SiSass color="#C36291" />
                <h5>Sass</h5>
              </div>
              <div data-aos="fade-down">
                <SiGit color="#E44C30" />
                <h5>Git</h5>
              </div>
              <div data-aos="fade-down">
                <SiFirebase color="var(--yellow)" />
                <h5>Firebase</h5>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Skills;
