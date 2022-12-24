import { useEffect, useState } from "react";
import "./app.css";
import Loader from "./components/loader/Loader";
import Contact from "./components/contact/Contact";
import Intro from "./components/Intro/Intro";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import BacktoTop from "./components/backToTop/BacktoTop";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Intro />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <BacktoTop />
        </>
      )}
    </div>
  );
}

export default App;
