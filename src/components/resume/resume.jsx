import "./resume.scss";
import { Link } from "react-scroll";
import SchoolIcon from "@material-ui/icons/School";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import EcoIcon from "@material-ui/icons/Eco";
import BatteryCharging80Icon from "@material-ui/icons/BatteryCharging80";
import GroupIcon from "@material-ui/icons/Group";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import BluetoothConnectedIcon from "@material-ui/icons/BluetoothConnected";
import CodeIcon from "@material-ui/icons/Code";
import ComputerIcon from "@material-ui/icons/Computer";
import HealingIcon from "@material-ui/icons/Healing";
import StorageIcon from '@material-ui/icons/Storage';
import CloudIcon from '@material-ui/icons/Cloud';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';

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
                Experience
              </Link>
            </li>
            <li className="nav-element">
              <Link
                to="clubs"
                className="nav-links"
                activeClass="active"
                spy={true}
                offset={-65}
                smooth={true}
                duration={500}
              >
                Clubs
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
                  Intelligence, Machine Learning, Machine Intelligence, Software and Neural Networks
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
                <p>High school double diploma with IB score of 40.</p>
              </div>
            </div>
          </div>
          <div id="experiences">
            <h3>WORK EXPERIENCE</h3>
            <div className="item">
              <div className="circle">
                <EqualizerIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>Jan 2021-Jun 2021</h6>
                <h4>Data Engineer</h4>
                <h5>Dataraction</h5>
                <p>
                  Documentation and pitching the data flow and pipeline.
                  Implementation of IBM Watson, Kubernetes, AWS, and Dialogflow
                  for chatbot and real-time analytics.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="circle">
                <DeveloperModeIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>Sep 2020-Dec 2020</h6>
                <h4>Software Developer</h4>
                <h5>Dataraction</h5>
                <p>
                  Front-end developer in Flutter allowing users to give feedback
                  from chosen criteria, implementing AWS and numerous video,
                  notification, and user models.{" "}
                </p>
              </div>
            </div>
            <div className="item">
              <div className="circle">
                <FingerprintIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>May 2019-August 2019</h6>
                <h4>Biomedical Research Program Participant</h4>
                <h5>
                  UofT Institute of Biomaterials and Biomedical Engineering
                </h5>
                <p>
                  Executed fluorescent imaging, used a biosafety cabinet to
                  passage cells, and introduced drugs to evaluate effects on the
                  viability of animal cells. Measured protein synthesis rate in
                  response to DNA treatments by agarose gel electrophoresis.
                </p>
              </div>
            </div>
          </div>
          <div id="clubs">
            <h3>EXTRA-CURRICULARS</h3>
            <div className="item">
              <div className="circle">
                <HealingIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>May 2019-Present</h6>
                <h4>Skule Patrol - Head Patroller</h4>
                <h5>Frosh Week</h5>
                <p>
                  Organized a group of 60+ incoming students by running
                  activities, encouraging participation, and developing an
                  atmosphere of positivity and inclusivity. Assisted in first
                  aid and led a team of first aid responders during Frosh
                  (orientation) week.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="circle">
                <EcoIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>Sep 2020-May 2021</h6>
                <h4>Environmental Engineer</h4>
                <h5>Sustainable Engineers Association</h5>
                <p>
                  Research numerous plants and environmental impact of a
                  greenwall to be implemented on campus post COVID-19.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="circle">
                <BatteryCharging80Icon className="item-icon" />
              </div>
              <div className="text">
                <h6>June 2019-June 2020</h6>
                <h4>Electrical Engineer</h4>
                <h5>University of Toronto Hyperloop Team</h5>
                <p>
                  Designing and creating prototypes to make decisions on battery
                  management, development, safety, and cooling mechanisms.
                  Modelled configurations using AutoCAD.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="circle">
                <GroupIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>September 2018- August 2019</h6>
                <h4>Elected First-Year Engineering Science Representative</h4>
                <h5>University of Toronto Engineering Society</h5>
                <p>
                  Engaged in discussion with faculty addressing issues and
                  concerns of my peers. Facilitated weekly events promoting
                  positivity, diversity, & inclusivity within the community.
                </p>
              </div>
            </div>
            
          </div>
          <div id="skills">
            <h3>SKILLS</h3>
            <div className="item">
              <div className="circle">
                <CodeIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>Languages</h6>
                <p>
                  Python, SQL, React.js, CSS, HTML, Verilog FPGA, Dart, C,
                  C++ (Arduino), MATLAB, ARM Assembly, R, JavaScript, LaTeX, Flask
                </p>
              </div>
            </div>
            <div className="item">
              <div className="circle">
                <ComputerIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>Software</h6>
                <p>
                  AutoCAD, AWS, ModelSIM, Microsoft Suite - Microsoft Word,
                  Microsoft Excel, Microsoft PowerPoint, Microsoft Power BI
                </p>
              </div>
            </div>
            <div className="item">
              <div className="circle">
                <CloudIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>Packages and Frameworks</h6>
                <p>
                  PyTorch, TensorFlow, Pandas, Flutter
                </p>
              </div>
            </div>
            <div className="item">
              <div className="circle">
                <StorageIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>Databases</h6>
                <p>
                  Worked with several database platforms such as MySQL,
                  PostgreSQL, and MongoDB.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
              <div className="circle">
                <LocalLibraryIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>Hobbies</h6>
                <p>
                  Reading (check out my <a href="https://www.goodreads.com/user/show/20074872-julia-wang" target="_blank" rel="noreferrer">goodreads</a>) | Deltiology | Dance | 
                </p>
              </div>
            </div>
          <div id="awards">
            <h3>AWARDS</h3>
            <div className="item">
              <div className="circle">
                <LocalShippingIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>October 2020-April 2021</h6>
                <h4>
                  2nd Place Business Pitch and Prototype / 302 Participants
                </h4>
                <h5>
                  Agorize AI For Future Business Challenge - Technation, RBC,
                  Microsoft{" "}
                </h5>
                <p>
                  5 month{" "}
                  <a href="https://www.agorize.com/en/challenges/ai-for-future-business-challenge/pages/the-final?lang=en">
                    challenge
                  </a>
                  : collaborated with team members to pitch a{" "}
                  <a HREF="https://drive.google.com/file/d/1RhCOv0e4s4cLJpbwAugQ3CnrkDFJsrPD/view?usp=sharing">
                    logistics solution
                  </a>{" "}
                  leveraging ML to streamline b2b and b2c relationships and
                  transactions. Coded the{" "}
                  <a href="https://github.com/JuliaLWang8/DotsLogistics">
                    prototype
                  </a>{" "}
                  in React.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="circle">
                <SchoolIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>September 2020</h6>
                <h4>
                  Professor Morris A. Cohen Scholarship In Engineering Science
                </h4>
                <h5>University of Toronto</h5>
                <p>
                  For academic excellence as an Engineering Science student
                  completing a Business Minor.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="circle">
                <BluetoothConnectedIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>March 2019</h6>
                <h4>2nd Place Robot</h4>
                <h5>UofT Robotics for SpaceEx | SEEK 2019 Competition</h5>
                <p>
                  Bluetooth-controlled Arduino robot designed and built within
                  6h to complete an obstacle course with an autonomous
                  challenge.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="circle">
                <SchoolIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>September 2018</h6>
                <h4>Lachlan Dales Mckellar Scholarship & Dean's Merit Award</h4>
                <h5>University of Toronto</h5>
                <p>
                  For achieving high standing in prerequisite courses for
                  Engineering Science.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
