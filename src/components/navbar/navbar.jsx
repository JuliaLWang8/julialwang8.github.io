import React, { useState, useEffect } from "react";
import "./navbar.scss";
import Logo from "../../media/logo512.png";
import { Link } from "react-scroll";

function Navbar() {
  const [click, setClick] = useState(false);
  const [navBar, setNavBar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
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
    <>
      {navBar ? (
        <nav className="navbar active">
          <div className="navbar-container">
            <Link
              to="home"
              className="navbar-logo"
              onClick={closeMobileMenu}
              spy={true}
              smooth={true}
              duration={500}
            >
              <img src={Logo} alt=""></img>
              <p> Julia L. Wang</p>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {/* <i className={click ? "fas fa-times" : "fas fa-bars"} /> */}
              <div className={click ? "hamburger active" : "hamburger"}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
              </div>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="projects"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-65}
                >
                  PROJECTS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="resume"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-65}
                >
                  RESUME
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-65}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
}

export default Navbar;
