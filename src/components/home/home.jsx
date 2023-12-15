import "./home.scss";
import Photo from "../../media/me.png";
import { useEffect, useState } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import { Link } from "react-scroll";

import About from "../about/about";
import Resume from "../resume/resume";
import Projects from "../projects/projects";
import Contact from "../contact/contact";

export default function Home() {
    const [navBar, setNavBar] = useState(false);

  
    const handleResize = () => {
      if (window.innerWidth > 942) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    };
  
    useEffect(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    window.addEventListener("resize", handleResize);

  return (
    <div className="home" id="home">
      <div className="left">
        <div className="left-top">
          <div className="img-container">
            <img src={Photo} alt="" />
          </div>
          <h1>Julia L. Wang</h1>
          <h2>Software Engineer</h2>
          {navBar ? 
          <div className="nav">
            <ul className="nav-list">
              <li className="nav-element">
                <Link
                  to="about"
                  className="nav-links"
                  activeClass="active"
                  spy={true}
                  offset={-65}
                  smooth={true}
                  duration={500}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-element">
                <Link
                  to="experiences"
                  className="nav-links"
                  activeClass="active"
                  spy={true}
                  offset={-65}
                  smooth={true}
                  duration={500}
                >
                  EXPERIENCE
                </Link>
              </li>
              <li className="nav-element">
                <Link
                  to="projects"
                  className="nav-links"
                  activeClass="active"
                  spy={true}
                  offset={-65}
                  smooth={true}
                  duration={500}
                >
                  PROJECTS
                </Link>
              </li>
            </ul>
          </div>
            : <div></div>}
        </div>
        <div className="links">
          <div className="link-wrapper">
            <a
              href="https://www.linkedin.com/in/julia-long-wang/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="link" />
            </a>
          </div>
          <div className="link-wrapper">
            <a
              href="https://github.com/JuliaLWang8"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="link-smaller" />
            </a>
          </div>
          <div className="link-wrapper">
            <a href="mailto:wang.julia08@gmail.com">
              <EmailIcon className="link" />
            </a>
          </div>
        </div>
      </div>
      <div className="right">
        <About />
        <Resume />
        <Projects />
      </div>
    </div>
  );
}
