import "./projects.scss";
import { listProjects } from "./ProjectsData.jsx";
import React from 'react';
import { useState } from "react";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const projectsToShow = showAll ? listProjects : listProjects.slice(0, 6);
  

  return (
    <div className="projects" id="projects">
      
      <div className="card-wrapper">
        
      {projectsToShow.map((d) => (
          <a href={d.button1Link} target="_blank" rel="noreferrer" className="proj" key={d.id}>
            <div className="left">
                <img src={d.img} alt="" className={d.class} />
            </div>
            <div className="right">
                <p className="project-title arrow">
                    {d.title}
                </p>
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
      {!showAll && (
        <button className="right-arrow" onClick={() => setShowAll(true)}>Show More</button>
      )}
      
    </div>
  );
}

      