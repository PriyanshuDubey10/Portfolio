import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <div className="container projects my-3" id="projects">
      <h1>PROJECTS</h1>
      <div className="row d-flex justify-content-center align-content-center " id="project">
        {project.map((data) => (
          <div key={data.id} className="my-4  col-sm-6 col-md-4 col-lg-3 mx-4">
            <div
              className="card bg-dark text-light project-card"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div className="img d-flex justify-content-center align-content-center p-3">
                <img
                  src={data.imageSrc}
                  className="card-img-top"
                  alt={data.title}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                {data.demo && (
                  <a href={data.demo} className="btn btn-primary mx-3" target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                )}
                {data.source && (
                  <a href={data.source} className="btn btn-warning" target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
