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


export default function Home() {
  const [navBar, setNavBar] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [otherCursor, setOtherCursor] = useState("default");

  const handleResize = () => {
    if (window.innerWidth > 942) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  useEffect(() => {
    const mouseMoveHandler = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  window.addEventListener("resize", handleResize);

  const variants = {
    default: {
      x: mousePos.x - 16,
      y: mousePos.y - 16,
      transition: {
        ease: "linear",
      },
    },
    grey: {
      x: mousePos.x - 16,
      y: mousePos.y - 16,
      backgroundColor: "#f2f2f2",
      mixBlendMode: "difference",
      transition: {
        ease: "linear",
      },
    },
  };

  const textEnter = () => setOtherCursor("grey");
  const textLeave = () => setOtherCursor("default");

  return (
    <div
      className="home"
      id="home"
      style={{
        backgroundImage: `radial-gradient( circle at ${mousePos.x}px ${mousePos.y + window.scrollY}px, #f0ebeb , #f2f2f2 10% )`,
      }}
    >
      {/* <motion.div
        className="cursor"
        variants={variants}
        animate={otherCursor}
      ></motion.div> */}
      <div className="left">
        <div className="left-top">
          <div className="img-container">
            <img src={Photo} alt="" />
          </div>
          <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='name'>
            Julia L. Wang
          </h1>
          <h2>Software Engineer</h2>
          {navBar ? (
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
          ) : (
            <div></div>
          )}
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
