import "../projects/projects.scss";
import { listExperiences } from "./ResumeData";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Resume() {
  const experiencesToShow = listExperiences;

  return (
    <div className="projects" id="experiences">
      <div className="card-wrapper">
        {experiencesToShow.map((d) => {
          const { ref, inView } = useInView();
          const [hasBeenInView, setHasBeenInView] = useState(false);

          useEffect(() => {
            if (inView) {
              setHasBeenInView(true);
            }
          }, [inView]);

          return (
            <a
              ref={ref}
              href={d.button1Link}
              target="_blank"
              rel="noreferrer"
              className={hasBeenInView ? "proj--animate" : "proj--transparent"}
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
          );
        })}
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
