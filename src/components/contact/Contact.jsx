import { useEffect, useState } from "react";
import "./contact.css";
import AnimatedLetter from "../animatedLetters/AnimatedLetter";
import ContactInfo from "./contact-info/ContactInfo";
import Form from "./form/Form";

// contact component here
const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const anyQString = "Any Question?";
  const feelFString = "Feel Free to Contact";
  const contactTitleAnyArray = [...anyQString];
  const contactTitleFeelArray = [...feelFString];
  useEffect(() => {
    setLetterClass("text-animate-hover");
  }, []);
  return (
    <section id="contact" title="Any Question? Feel Free to Contact">
      <h2>
        <AnimatedLetter
          letterClass={letterClass}
          strArray={contactTitleAnyArray}
          idx={15}
        />{" "}
        <span className="opacity-70">
          <AnimatedLetter
            letterClass={letterClass}
            strArray={contactTitleFeelArray}
            idx={25}
          />
        </span>
      </h2>
      <div className="contact-content-wrapper">
        <section className="bg-transparent w-full">
          <div className="px-0 sm:px-4 py-12 mx-auto">
            <div className="lg:flex lg:-mx-6">
              {/* contact me left component */}
              <ContactInfo />
              {/* contact me right component */}
              <Form />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
