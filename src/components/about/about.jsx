import "./about.scss";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import { Link } from "react-scroll";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="title">
        <h1>ABOUT</h1>
        <h2>ME.</h2>
      </div>
      <div className="subtitle">
        <h4>SWE @ Intel • ML and AI Engineering @ UofT</h4>
      </div>
      <div className="description">
        <p>
          I am a rising senior in Machine
          Learning & Artificial Intelligence and have completed a minor in Business at the
          University of Toronto. Passionate about innovation in technology, I am
          eager make a global impact through hard work, commitment to quality, and a
          growth mindset. I have worked as a software engineer at Intel Corporation and as a data engineer at a start-up. In the future, I hope to work at the intersection of business and machine learning.{" "}
        </p>
        <p>
          Want to know more about me? Download
          <a
            href="https://github.com/JuliaLWang8/JuliaLWang8/blob/main/JuliaWangResume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            my resume
          </a>{" "}
          or
          <Link
            to="contact"
            className="contactt"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            {" "}
            contact me
          </Link> about anything!
        </p>
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
          <a href="mailto:julialong.wang@mail.utoronto.ca">
            <EmailIcon className="link" />
          </a>
        </div>
      </div>
    </div>
  );
}
