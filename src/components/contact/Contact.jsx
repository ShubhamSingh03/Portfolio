import { useEffect, useState } from "react";
import "./contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { SecondSection } from "../shared/section/Section";
import AnimatedLetter from "../animatedLetters/AnimatedLetter";
import ContactInfo from "./contact-info/ContactInfo";
import Form from "./form/Form";

// contact component here
const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const anyQString = "Any Questions?";
  const contactTitleAnyArray = [...anyQString];
  useEffect(() => {
    Aos.init({});
    setLetterClass("text-animate-hover");
  }, []);
  return (
    <section id="contact">
      <SecondSection />
      <h2 className="opacity-70" data-aos="zoom-out">
        <AnimatedLetter
          letterClass={letterClass}
          strArray={contactTitleAnyArray}
          idx={15}
        />{" "}
      </h2>
      <div className="contact-content-wrapper lg:px-[4.5%]">
        <section className="bg-transparent w-full">
          <div className="px-0 sm:px-4 py-12 lg:py-8 mx-auto">
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
