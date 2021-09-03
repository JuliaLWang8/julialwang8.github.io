import "./projects.scss";
import { listProjects } from "./ProjectsData.jsx";

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
            <img src={d.img} alt="" className={d.class} />
            <div className="overlay">
              <h3>{d.title}</h3>
              <h4>{d.subtitle}</h4>
              <p>{d.description}</p>
              <div className="btn-container">
                <a href={d.button1Link} target="_blank" rel="noreferrer">
                  <i class={d.button1Type}></i>
                </a>
                <a href={d.button2Link} target="_blank" rel="noreferrer">
                  <i class={d.button2Type}></i>
                </a>
              </div>
            </div>
          </div>
        ))}
        {/* FLIP STYLE PROJECTS
        {listProjects.map((d) => (
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={d.img} alt="" className={d.class} />
              </div>
              <div className="flip-card-back">
                <h3>{d.title}</h3>
                <h4>{d.subtitle}</h4>
                <p>{d.description}</p>
                <div className="btn-container">
                  <a href={d.button1Link} target="_blank" rel="noreferrer">
                    <i class={d.button1Type}></i>
                  </a>
                  <a href={d.button2Link} target="_blank" rel="noreferrer">
                    <i class={d.button2Type}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))} */}
      </div>
      {/* HEXAGON STYLE PROJECTS
      <div className="hexagon-container">
        <ul id="categories" class="clr">
        {listProjects.map((d) => (
          <li>
          <div>
            <img
              src={d.img}
              alt=""
            />
            <h1>{d.title}</h1>
            <p>{d.description}</p>
          </div>
        </li>
        ))}
          <li class="pusher"></li>
        </ul>
      </div> */}
    </div>
  );
}
