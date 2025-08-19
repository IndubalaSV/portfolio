import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import "../index.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-details">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          {project.links && (
            <div className="project-icons">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon"
                  title="View Demo"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon"
                  title="View GitHub"
                >
                  <FaGithub />
                </a>
              )}
            </div>
          )}
        </div>
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
