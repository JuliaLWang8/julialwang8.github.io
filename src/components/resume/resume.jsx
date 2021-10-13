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
import StorageIcon from "@material-ui/icons/Storage";
import CloudIcon from "@material-ui/icons/Cloud";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";

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
                <h6>Expected graduation: 2023</h6>
                <h4>
                  BASc in Engineering Science - Machine Intelligence Engineering{" "}
                </h4>
                <h5>University of Toronto</h5>
                <p>Minor in Business | CGPA: 3.67 | 2018, 19,20 Dean’s Honors List </p>
                <p>
                  Relevant courses: Computer Algorithms and Data Structures,
                  Databases, Statistics, Artificial Intelligence, Machine
                  Learning, Machine Intelligence, Software and Neural Networks
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
                  Regulated databases, ran raw SQL queries, and aggregated data
                  using JDBC to develop an internal dashboard providing insights
                  on user journey and growth; pitched forecasts and marketing
                  strategy to investors.
                </p>
                <p>
                  Launched a real-time analytics dashboard for streamers on the
                  streaming service using IBM Cloud and AWS.
                </p>
                <p>
                  Worked in cross-functional teams, and took part in product
                  management and development in a fast-paced environment.
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
                  Front-end developer working on user-facing code for a Flutter
                  app encouraging user feedback on videos from chosen criteria.
                  Engineered numerous video, notification, and user models, a
                  badge system to ensure reliability, as well as conducting unit
                  testing and optimization.{" "}
                </p>
                <p>
                  Implemented IBM Watson and organized beta testing to design a
                  chatbot enhancing user experience.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="circle">
                <FingerprintIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>May 2019-August 2019</h6>
                <h4>Biomedical Student Researcher</h4>
                <h5>
                  UofT Institute of Biomaterials and Biomedical Engineering
                </h5>
                <p>
                  Executed fluorescent imaging, used a biosafety cabinet to
                  passage cells, and introduced drugs to evaluate effects on the
                  viability of animal cells.
                </p>
                <p>
                  Measured protein synthesis rate in response to 4 DNA
                  treatments by agarose gel electrophoresis. Discovered that the
                  polymerase chain reaction (PCR) treatment increased synthesis
                  significantly compared to PBS.
                </p>
              </div>
            </div>
          </div>
          <div id="clubs">
            <h3>EXTRA-CURRICULARS</h3>
            <div className="item">
              <div className="circle">
                <CodeIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>September 2021 - Present</h6>
                <h4>Project Developer</h4>
                <h5>
                  University of Toronto Machine Intelligence Student Team{" "}
                </h5>
                <p>
                  {" "}
                  Developing a deep CNN for ECG Analysis to diagnose
                  cardiovascular disease. </p><p>Year-long project over a
                  complete research process, including comprehending academic
                  papers, developing CNN models, collecting and training data,
                  comparing with other models, and making improvements on the
                  current machine learning frameworks.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="circle">
                <GroupIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>September 2021</h6>
                <h4>University of Toronto Delegate</h4>
                <h5>
                  Professional Engineers of Ontario Student Conference 2021{" "}
                </h5>
                <p>
                  {" "}
                  Attending the weekend-long PEO-SC conference as a delegate
                  representing the University of Toronto.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="circle">
                <HealingIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>May 2019-Present</h6>
                <h4>Skule Patrol - Head Patroller</h4>
                <h5>Orientation Week Committee</h5>
                <p>
                  Organized a group of 60+ incoming students by running
                  activities, encouraging participation, and developing an
                  atmosphere of positivity and inclusivity. Assisted in first
                  aid and led a team of first aid responders during Frosh
                  (orientation) week and other engineering events.
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
                  Analyzed numerous plants and environmental impacts of a
                  Greenwall to be implemented on campus post-COVID-19.
                  Collaborated with team members to compile a design brief
                  outlining stakeholders, design considerations, and
                  convergence.
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
                  Modelled configurations using AutoCAD and researched cooling
                  methods.
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
                  Python, SQL, CSS, HTML, Verilog FPGA, Dart, C, C++ (Arduino),
                  MATLAB, ARM Assembly, R, JavaScript, LaTeX
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
                  AutoCAD, AWS, ModelSIM, Fusion360, Microsoft Suite - Microsoft
                  Word, Microsoft Excel, Microsoft PowerPoint, Microsoft Power
                  BI
                </p>
              </div>
            </div>
            <div className="item">
              <div className="circle">
                <CloudIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>Packages and Libraries</h6>
                <p>
                  PyTorch, TensorFlow, Pandas, NumPy, Flutter, Flask, Reac.js
                  (this site!),{" "}
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
                Reading (check out my{" "}
                <a
                  href="https://www.goodreads.com/user/show/20074872-julia-wang"
                  target="_blank"
                  rel="noreferrer"
                >
                  goodreads
                </a>
                ) | Deltiology | Dance |
              </p>
            </div>
          </div>
          <div id="awards">
            <h3>AWARDS</h3>
            <div className="item">
              <div className="circle">
                <SchoolIcon className="item-icon" />
              </div>
              <div className="text">
                <h6>October 2021</h6>
                <h4>Mario And Dorothy Pesando Scholarship in Engineering</h4>
                <h5>University of Toronto </h5>
                <p>
                  In honor of Mario Pesando, a UofT engineering alumni who was
                  Chief Flight Test Engineer of the Avro Arrow. Awarded for
                  academic excellence.
                </p>
              </div>
            </div>
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
                  : Spearheaded a business proposal and{" "}
                  <a href="https://github.com/JuliaLWang8/DotsLogistics">
                    prototype
                  </a>{" "}
                  using React.js, CSS, and Power BI for a{" "}
                  <a HREF="https://drive.google.com/file/d/1RhCOv0e4s4cLJpbwAugQ3CnrkDFJsrPD/view?usp=sharing">
                    logistics solution
                  </a>{" "}
                  leveraging ML to streamline B2B and B2B relationships and
                  transactions.{" "}
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
                  Collaborated to design a Arduino (C++) Bluetooth-controlled
                  robot within 6 hours which could turn, stop, drive forwards or
                  backwards, sense obstacles, and completed an obstacle course
                  with an autonomous challenge.
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
                  $10000 for achieving high standing in prerequisite courses for
                  Engineering Science.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>
        Want to know more about me? Click
        <a
          href="https://github.com/JuliaLWang8/JuliaLWang8/blob/main/JuliaWangResume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          here
        </a>
        {" for my full CV "}
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
        </Link>
        .
      </p>
    </div>
  );
}
