import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./showcase.css";
import { FaYoutube, FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

// Projects showcase section component here
const ShowCase = ({ data, transition }) => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    // project cards
    <div className="projects-showcase" title="Check this App">
      {data.map((project) => (
        <div key={project.name} className="showcase-item" data-aos="zoom-out">
          {/* content on hover on project cards */}
          <div className="meta-content">
            <h3>{project.name}</h3>
            <div className="go-to-cta">
              <div className="flex space-x-2 uppercase font-bold tracking-wide showcaseTextHover">
                <a
                  href={project.links?.live}
                  className="text-[8px] text-center"
                  rel="noopener noreferrer"
                  title="Live Link"
                  target={"_blank"}
                >
                  <TbWorld
                    size={30}
                    color="var(--black)"
                    className="hover:scale-110"
                    style={{
                      transition: "all 0.5s ease 0s",
                    }}
                  />
                  Live
                </a>
                <a
                  href={project.links?.github}
                  className="text-[8px] text-center"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  title="Github Repo"
                >
                  <FaGithub
                    size={30}
                    color="var(--black)"
                    className="hover:scale-110"
                    style={{
                      transition: "all 0.5s ease 0s",
                    }}
                  />
                  Github
                </a>
                <a
                  href={project.links?.ytvideo}
                  className="text-[8px] text-center"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  title="YouTube Video"
                >
                  <FaYoutube
                    size={30}
                    color="#F10002"
                    className="hover:scale-110"
                    style={{
                      transition: "all 0.5s ease 0s",
                    }}
                  />
                  YouTube
                </a>
              </div>
            </div>
          </div>
          {/* project image */}
          <img src={project.media.thumbnail} alt="project" />
        </div>
      ))}
    </div>
  );
};

export default ShowCase;
