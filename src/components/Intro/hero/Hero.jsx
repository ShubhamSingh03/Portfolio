import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import "./hero.css";
import AnimatedLetter from "../../animatedLetters/AnimatedLetter";
import { scrollToSection } from "../../../utilities/helper";
// icons imported from react-icons
import {
  FaGithub,
  FaLinkedinIn,
  FaCrown,
  FaYoutube,
  FaReact,
} from "react-icons/fa";
// images & gifs
import mainimage from "../../../assets/mainimage.png";
import smmainimage from "../../../assets/smmainimage.jpg";
import hand from "../../../assets/hand.png";
import linkedInGif from "../../../assets/mobileLogoGifs/linkedin.gif";
import githubGif from "../../../assets/mobileLogoGifs/github.gif";
import youtubeGif from "../../../assets/mobileLogoGifs/youtube.gif";
import twitterGif from "../../../assets/mobileLogoGifs/twitter.gif";

// hero component here
const Hero = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const helloarray = ["H", "e", "l", "l", "o"];
  const firstnameArray = ["S", "h", "u", "b", "h", "a", "m"];
  const lastnameArray = ["S", "i", "n", "g", "h"];
  useEffect(() => {
    setLetterClass("text-animate-hover");
  }, []);
  return (
    <>
      {/* hero component for larger screens starts here */}
      <div className="intro-content">
        <div className="layout">
          {/* left hero here */}
          <div className="left-col">
            {/* main image */}
            <img src={mainimage} alt="main Image" />
            <div className="highlights horizontal">
              <div className="icon">
                <FaCrown color="var(--yellow)" />
              </div>
              <div className="text">Web Developer</div>
            </div>

            <div className="highlights vertical">
              <div className="icon">
                <FaReact color="var(--react-logo-color)" />
              </div>
              <div className="text">MERN Stack</div>
            </div>
          </div>
          {/* right hero here */}
          <div className="right-col">
            {/* right hero title */}
            <h1 className="title">
              <span className="small-text">
                <span className="text">
                  <AnimatedLetter
                    letterClass={letterClass}
                    strArray={helloarray}
                    idx={10}
                  />
                </span>
                <span className="icon">
                  <img src={hand} alt="hello" />
                </span>
                {", "} <span className={`text ${letterClass} px-2`}> I</span>
                <span className={`text ${letterClass} _13`}> A</span>
                <span className={`text ${letterClass} _14`}> m</span>
              </span>
              <span className="big-text">
                <span className="text-yellow firstName">
                  <AnimatedLetter
                    letterClass={letterClass}
                    strArray={firstnameArray}
                    idx={15}
                  />
                </span>{" "}
                <span className="lastName">
                  <AnimatedLetter
                    letterClass={letterClass}
                    strArray={lastnameArray}
                    idx={15}
                  />
                </span>
              </span>
              {/* typewriter component */}
              <Typewriter
                options={{
                  strings: [
                    "Frontend Web Developer",
                    "UI/UX Developer",
                    "MERN Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p>
              I am Computer science graduate and passionate frontend web
              developer and I design and develop the quality work code with
              beautifully simple things
            </p>
            {/* social links here */}
            <div className="flex w-1/2 space-x-6">
              <a
                href="https://github.com/ShubhamSingh03"
                rel="noopener noreferrer"
                target={"_blank"}
              >
                <FaGithub
                  size={40}
                  color="var(--yellow)"
                  className="hover:scale-110"
                  style={{
                    transition: "all 0.5s ease 0s",
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/shubham-singh-b122b7171/"
                rel="noopener noreferrer"
                target={"_blank"}
              >
                <FaLinkedinIn
                  size={40}
                  color="var(--yellow)"
                  className="hover:scale-110"
                  style={{
                    transition: "all 0.5s ease 0s",
                  }}
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCmBcF63DSMqM9k3-O2hxFow"
                rel="noopener noreferrer"
                target={"_blank"}
              >
                <FaYoutube
                  size={40}
                  color="var(--yellow)"
                  className="hover:scale-110"
                  style={{
                    transition: "all 0.5s ease 0s",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* hero component for larger screens ends here */}

      {/* hero component for mobile screens here */}
      <div className="max-w-4xl flex items-center h-auto flex-wrap mx-auto mt-20 mb-32 lg:my-0 for-mobile-screen">
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            {/* logo image */}
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              style={{
                backgroundImage: `url(${smmainimage})`,
              }}
            ></div>
            <h1 className="text-3xl font-bold pt-8 lg:pt-0 font-play">
              Shubham Singh
            </h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <div className="pt-2 text-lg font-bold flex items-center justify-center lg:justify-start">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Web Developer",
                    "UI/UX Developer",
                    "UI/UX Designer",
                    "MERN Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="pt-4 text-gray-700 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-green-700 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
              </svg>
              Pilani, Rajasthan
            </p>
            <p className="pt-8 text-sm">
              I am Computer science graduate and passionate frontend web
              developer and I design and code beautifully simple things
            </p>
            <div className="pt-12 pb-8">
              <button
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </button>
            </div>
            {/* social links here */}
            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
              <a
                className="link"
                href="https://www.linkedin.com/in/shubham-singh-b122b7171/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedInGif}
                  alt="linkedin"
                  className="h-[45px]"
                  title="LinkedIn"
                />
              </a>
              <a
                className="link"
                href="https://github.com/ShubhamSingh03"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={githubGif}
                  alt="github"
                  className="h-[45px]"
                  title="Github"
                />
              </a>
              <a
                className="link"
                href="https://twitter.com/bhoj_shubham"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={twitterGif}
                  alt="twitter"
                  className="h-[40px] rounded-full border-solid border-2 border-blue-400"
                  title="Twitter"
                />
              </a>
              <a
                className="link"
                href="https://www.youtube.com/channel/UCmBcF63DSMqM9k3-O2hxFow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={youtubeGif}
                  alt="youtube"
                  className="h-[45px]"
                  title="YouTube"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* hero component for mobile screens ends here */}
    </>
  );
};

export default Hero;
