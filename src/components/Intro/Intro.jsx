import "./intro.css";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";

// intro component here
const Intro = () => {
  return (
    <>
      <div className="Intro-section" id="home">
        <div className="vector-bg" id="parallax"></div>
        <div className="content">
          <Navbar />
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Intro;
