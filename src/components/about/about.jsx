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
        <h4>UofT Machine Intelligence Engineering Student</h4>
      </div>
      <div className="description">
        <p>
          I am a third-year Engineering Science student studying Machine
          Learning and pursuing a minor in Engineering Business at the
          University of Toronto. Passionate about innovation in technology, I am
          eager make a global impact through hard work, commitment to quality, and a
          growth mindset. In the future, I hope to continue developing my skills
          and work at the intersection of business and machine learning.{" "}
        </p>
        <p>
          Want to know more about me? Download
          <a
            href="https://github.com/JuliaLWang8/JuliaLWang8/blob/main/JuliaWangResume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            my CV
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
