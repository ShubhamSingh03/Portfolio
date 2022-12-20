import { useState } from "react";
import "./navbar.css";
import logo from "../../../assets/logo.png";
import CallToAction from "../../shared/callToAction/CallToAction";
import { scrollToSection } from "../../../utilities/helper";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

// navbar component
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuClickHandler = (section) => {
    setMobileMenu(!mobileMenu);
    scrollToSection(section);
  };

  return (
    <div className="top-navigation-bar">
      {/* logo */}
      <div className="app-logo">
        <img src={logo} alt="logo" />
      </div>
      {/* hamburger for mobile screens */}
      <div
        className="mobile-menu"
        onClick={() => {
          setMobileMenu(!mobileMenu);
        }}
      >
        {mobileMenu ? (
          <IoMdClose size={40} color="var(--white)" />
        ) : (
          <CgMenuRight size={40} color="var(--white)" />
        )}
      </div>
      {/* navbar items */}
      <div className={`navigation ${mobileMenu ? "active" : ""}`}>
        <span
          className="navigation-item"
          onClick={() => menuClickHandler("skills")}
        >
          Skills
        </span>
        <span
          className="navigation-item"
          onClick={() => menuClickHandler("portfolio")}
        >
          Projects
        </span>
        <span className="navigation-item">
          <a
            href="https://shubhambhoj.hashnode.dev/"
            rel="noopener noreferrer"
            target={"_blank"}
          >
            Blogs & Articles
          </a>
        </span>
        <CallToAction
          text="Contact me"
          action={() => menuClickHandler("contact")}
        />
      </div>
    </div>
  );
};

export default Navbar;
