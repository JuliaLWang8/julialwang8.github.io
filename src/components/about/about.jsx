import "./about.scss";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import { Link } from "react-scroll";

export default function About() {
  return (
    <div className="about" id="about">
      {/* <div className="title">
        <h1>ABOUT</h1>
        <h2>ME.</h2>
      </div>
      <div className="subtitle">
        <h4>SWE @ Intel • ML and AI Engineering @ UofT</h4>
      </div> */}
      <div className="description">
        <p>
          I am a senior Engineering Science student in <b>Machine Learning & Artificial Intelligence</b> and have completed a minor in Business at the <b>University of Toronto</b>.
          </p>
          <p>          
          Passionate
          about innovation in technology, I am eager make a global impact
          through hard work, commitment to quality, and a growth mindset. I have previously
          worked as a software engineer at <b>Intel</b> and as a data engineer at a <b>start-up</b>.</p>
          <p>
            When I am not coding, you will most likely find me reading books or playing board games with friends. 
          </p>
        
        
      </div>
    </div>
  );
}
