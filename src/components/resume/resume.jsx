import "./resume.scss";
import { Link } from "react-scroll";
import SchoolIcon from "@material-ui/icons/School";

export default function Resume() {
  return (
    <div className="resume" id="resume">
      <div className="title">
        <h1>MY</h1>
        <h2>RESUME.</h2>
      </div>
      <div className="row">
        <div className="nav">
          <ul className="nav-list">
            <li className="nav-element">
              <Link
                to="education"
                className="nav-links"
                activeClass="active"
                spy={true}
                offset={-65}
                smooth={true}
                duration={500}
              >
                Education
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
                Experiences
              </Link>
            </li>
            <li className="nav-element">
              <Link
                to="skills"
                className="nav-links"
                activeClass="active"
                spy={true}
                offset={-65}
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="nav-element">
              <Link
                to="awards"
                className="nav-links"
                activeClass="active"
                spy={true}
                offset={-65}
                smooth={true}
                duration={500}
              >
                Awards
              </Link>
            </li>
          </ul>
        </div>
        <div className="body">
          <div id="education">
            <h3>EDUCATION</h3>
            <div className="item">
              <div className="circle">
                <SchoolIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>2018-Present</h6>
                <h4>
                  BASc in Engineering Science - Machine Intelligence Engineering{" "}
                </h4>
                <h5>University of Toronto</h5>
                <p>
                  Minor in Business | Relevant courses: Computer Algorithms and
                  Data Structures, Databases, Statistics, Artificial
                  Intelligence,
                </p>
              </div>
            </div>
            <div className="item">
              <div className="circle">
                <SchoolIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>2014-2018</h6>
                <h4>IB and Ontario Secondary School Diploma</h4>
                <h5>Guelph Collegiate Vocational Institute</h5>
                <p>High school double diploma</p>
              </div>
            </div>
          </div>
          <div id="experiences">
            <h3>EXPERIENCES</h3>
            <div className="item">
              <div className="circle">
                <SchoolIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>Sep 2020-Jun 2021</h6>
                <h4>Software Developer & Data Engineer</h4>
                <h5>Dataraction</h5>
                <p>
                Front-end developer for a mobile app in Flutter allowing users to give feedback from chosen criteria using a
badge system to ensure reliability, implementing AWS and numerous video, notification, and user models.
                </p>
              </div>
            </div>
          </div>
          <h3 id="skills">SKILLS</h3>
          <div className="item"></div>
          <h3 id="awards">AWARDS</h3>
          <div className="item"></div>
        </div>
      </div>
    </div>
  );
}
