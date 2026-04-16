import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

const mainProjects = [
  /*
  {
    title: "Gratitude Journal",
    description:
      "Journaling app built with FastAPI. Log your blessings before you log off",
    image: "/gratitudes.jpg",
    technologies: ["FastAPI", "React", "Python", "JavaScript"],
    links: {
      demo: "https://cheerlog.indubuilds.xyz",
      github: "https://github.com/IndubalaSV/gratitude-fastapi",
    },
  },
  */
  {
    title: "Mental wellness app",
    description:
      "Mental health decked out in literary flair coz your brain just needs a pep talk in iambic pentameter",
    image: "/lantern.png",
    technologies: ["React", "JavaScript"],
    links: {
      demo: "https://lantern-sepia.vercel.app/",
      github: "https://github.com/IndubalaSV/lantern",
    },
  },

  {
    title: "Women wellness app",
    description: "Your cycle, decoded - because guesswork is so last season.",
    image: "/moona.png",
    technologies: ["React", "JavaScript"],
    links: {
      demo: "https://moona-lake.vercel.app/",
      github: "https://github.com/IndubalaSV/moona",
    },
  },
];

const MainProjectsPage = () => {
  return (
    <div className="projects-page">
      <Link to="/" className="home-icon-btn" title="Home">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      </Link>
      <section id="main-projects" className="projects-section">
        <div className="projects-container">
          <header className="projects-header">
            {/* <p className="projects-subtitle">Primary projects</p> */}
          </header>
          <div className="projects-grid-compact">
            {mainProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainProjectsPage;
