import React, { useState, useEffect } from "react";
import "./navbar.scss";
import Logo from "../../media/Logo.png";
import { Link } from "react-scroll";

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);
  const [navBar, setNavBar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 750) {
  //     setButton(false);
  //     setClick(!click);
  //   } else if (window.innerHeight > window.innerWidth) {
  //     setClick(!click);
  //   }
  //   else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);
  // window.addEventListener("resize", showButton);

  const changeNavBar = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 70) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeNavBar);

  return (
    <>
      <nav className={navBar ? "navbar active" : "navbar"}>
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
                to="home"
                className="nav-links"
                onClick={closeMobileMenu}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
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
                About
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
                Projects
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
                Resume
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
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
