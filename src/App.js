import "./app.css";
import Contact from "./components/contact/Contact";
import Intro from "./components/Intro/Intro";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { scrollToSection } from "./utilities/helper";

function App() {
  return (
    <div>
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <span className="fixed right-1 bottom-2 md:right-4 cursor-pointer text-[#989898] hover:text-opacity-50 focus:text-opacity-50">
        <BsFillArrowUpSquareFill
          size={40}
          onClick={() => scrollToSection("home")}
        />
      </span>
    </div>
  );
}

export default App;
