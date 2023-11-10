import "./projects.scss";
import { listProjects } from "./ProjectsData.jsx";
import React from 'react';
// import styled from 'styled-components';
// import { Icon } from '@components/icons';

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="title">
        <h1>MY</h1>
        <h2>PROJECTS.</h2>
      </div>
      <p>
        Various projects and hackathon submissions I have contributed to, hover for more information.
      </p>
      {/* <div className="card-wrapper">
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
      </div> */}
      
      <div className="card-wrapper">
      {listProjects.map((d) => (
          <a href={d.button1Link} target="_blank" rel="noreferrer" className="proj">
            <div className="left">
                <img src={d.img} alt="" className={d.class} />
            </div>
            <div className="right">
                <p className="project-title arrow">
                  <a href={d.button1Link} target="_blank" rel="noreferrer">
                    {d.title}
                  </a>
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
    </div>
  );
}

      