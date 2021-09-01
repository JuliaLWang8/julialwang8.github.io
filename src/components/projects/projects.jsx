import "./projects.scss";
import {listProjects} from "./ProjectsData.jsx";
const marble = require('../../media/MeWithRobot.jpg');


export default function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="title">
        <h1>MY</h1>
        <h2>PROJECTS.</h2>
      </div>
      <p>
        These are various projects I have worked on in school,
        extra-curriculars, and competitions. Hover to find out more!
      </p>
      <div className="card-wrapper">
        {listProjects.map((d) => (
          <div className="proj">
            <img src={d.img} alt="" />
            <div className="overlay">
              <h3>{d.title}</h3>
              <h4>{d.subtitle}</h4>
              <p>{d.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
