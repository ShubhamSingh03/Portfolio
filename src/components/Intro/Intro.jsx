import "./intro.css";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import ParticlesBg from "./particlesIntro/ParticlesBg";

// intro component here
const Intro = () => {
  return (
    <>
      <div className="Intro-section" id="home">
        <ParticlesBg />
        <div className="content">
          <Navbar />
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Intro;
