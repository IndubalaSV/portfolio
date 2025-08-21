import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

const sideProjects = [
  {
    title: "Fortune Oracle",
    description: "Fortune cookie app built with React.",
    image: "./fortune.png",
    technologies: ["React", "JavaScript"],
    links: {
      demo: "https://fortune.indubuilds.xyz/",
      github: "https://github.com/IndubalaSV/fortune-cookie-app",
    },
  },
];

const SideProjectsPage = () => {
  return (
    <div className="projects-page">
      <Link to="/" className="home-icon-btn" title="Home">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      </Link>
      <section id="side-projects" className="projects-section">
        <div className="projects-container">
          <header className="projects-header">
            <p className="projects-subtitle">
              {/* Experimental projects and learning exercises */}
            </p>
          </header>
          <div className="projects-grid-compact">
            {sideProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SideProjectsPage;
