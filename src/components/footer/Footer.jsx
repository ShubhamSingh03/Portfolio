import "./footer.css";
import Section from "../shared/section/Section";
import Logo from "../../assets/logo.png";
import SocialIcon from "./social-icon/SocialIcon";
import { scrollToSection } from "../../utilities/helper";
import { FaYoutube, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// footer section component
const Footer = () => {
  return (
    <Section background="dark" className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-logo">
          <img src={Logo} alt="logo" />
        </div>
        {/* footer menu items */}
        <ul className="footer-menu-items">
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("portfolio")}
          >
            Projects
          </li>
          <a
            href=" https://shubhambhoj.hashnode.dev"
            rel="noopener noreferrer"
            target={"_blank"}
          >
            <li
              className="footer-menu-item"
              onClick={() => scrollToSection("blogs")}
            >
              Blog & Articles
            </li>
          </a>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("contact")}
          >
            Contact me
          </li>
        </ul>
        {/* social links here */}
        <div className="social-icons">
          <SocialIcon
            color="#0D2636"
            icon={<FaGithub />}
            link="https://github.com/ShubhamSingh03"
          />
          <SocialIcon
            color="#0A66C2"
            icon={<FaLinkedinIn />}
            link="https://www.linkedin.com/in/shubham-singh-b122b7171/"
          />
          <SocialIcon
            color="#FF0000"
            icon={<FaYoutube />}
            link="https://www.youtube.com/channel/UCmBcF63DSMqM9k3-O2hxFow"
          />
          <SocialIcon
            color="#1D9BF0"
            icon={<FaTwitter />}
            link="https://twitter.com/bhoj_shubham"
          />
        </div>
      </div>
    </Section>
  );
};

export default Footer;
