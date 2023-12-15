import "../projects/projects.scss";
import { Link } from "react-scroll";
import { listExperiences } from "./ResumeData";
// import SchoolIcon from "@material-ui/icons/School";
// import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
// import EqualizerIcon from "@material-ui/icons/Equalizer";
// import FingerprintIcon from "@material-ui/icons/Fingerprint";
// import EcoIcon from "@material-ui/icons/Eco";
// import BatteryCharging80Icon from "@material-ui/icons/BatteryCharging80";
// import GroupIcon from "@material-ui/icons/Group";
// import LocalShippingIcon from "@material-ui/icons/LocalShipping";
// import BluetoothConnectedIcon from "@material-ui/icons/BluetoothConnected";
// import CodeIcon from "@material-ui/icons/Code";
// import ComputerIcon from "@material-ui/icons/Computer";
// import HealingIcon from "@material-ui/icons/Healing";
// import StorageIcon from "@material-ui/icons/Storage";
// import CloudIcon from "@material-ui/icons/Cloud";
// import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";

export default function Resume() {
  const experiencesToShow = listExperiences;

  return (
    <div className="projects" id="experiences">
      <div className="card-wrapper">
        {experiencesToShow.map((d) => (
          <a
            href={d.button1Link}
            target="_blank"
            rel="noreferrer"
            className="proj"
            key={d.id}
          >
            <div className="left">
              <p>{d.startDate}</p>
              <p>
                {d.endDate ? "-- " : ""}
                {d.endDate}
              </p>
            </div>
            <div className="right">
              <p className="project-title arrow">{d.title}</p>
              <p className="project-company">{d.company}</p>
              <div className="project-description">{d.description}</div>

              {d.tech && (
                <ul className="project-tech-list">
                  {d.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              )}
            </div>
          </a>
        ))}
      </div>

      <button className="right-arrow">
        <a
          href="https://github.com/JuliaLWang8/JuliaLWang8/blob/main/JuliaWangResume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          View full resume
        </a>
      </button>
    </div>
  );
}
