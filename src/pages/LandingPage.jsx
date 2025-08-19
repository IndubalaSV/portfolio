import React from "react";
import ProjectCard from "../components/ProjectCard";

const LandingPage = () => {
  const mainProjects = [
    {
      title: "Gratitude Journal",
      description: "Journaling app built with FastAPI / React.",
      image: "./gratitudes.jpg",
      technologies: ["FastAPI", "React", "Python", "JavaScript"],
      links: {
        demo: "https://cheerlog.indubuilds.xyz",
        github: "https://github.com/IndubalaSV/gratitude-fastapi",
      },
    },
    {
      title: "Mental wellness app",
      description: "Literary wisdom app built with React and Gemini.",
      image: "./lantern.png",
      technologies: ["React", "JavaScript"],
      links: {
        demo: "https://lantern-sepia.vercel.app/",
        github: "https://github.com/IndubalaSV/lantern",
      },
    },
  ];

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="single-page-portfolio">
      {/* Landing Section */}
      <section id="landing" className="landing-section">
        <div className="landing-content">
          {/* Name and Title */}
          <h1 className="landing-name">Indubala Selvaraj</h1>
          <p className="landing-subtitle">
            A backend developer with expertise in Python and React.
          </p>
          <p className="landing-current">
            Currently building amazing web applications.
          </p>

          {/* Bio */}
          <p className="landing-bio">
            Whether I'm architecting backend systems, building APIs, or crafting
            user interfaces - I strive to create solutions that are robust and
            scalable, with an awareness of how every detail contributes to the
            overall user experience and system performance.
          </p>

          {/* Navigation Links */}
          <div className="landing-nav">
            <button
              onClick={() => scrollToSection("main-projects")}
              className="nav-button"
            >
              Main Projects
            </button>
            <button
              onClick={() => scrollToSection("side-projects")}
              className="nav-button"
            >
              Side Projects
            </button>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a
              href="https://x.com/coffified"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="Twitter"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://github.com/IndubalaSV"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="mailto:indubala09122000@gmail.com"
              className="social-link"
              title="Email"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Main Projects Section */}
      <section id="main-projects" className="projects-section">
        <div className="projects-container">
          <header className="projects-header">
            <p className="projects-subtitle">Primary projects</p>
          </header>

          <div className="projects-grid-compact">
            {mainProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Side Projects Section */}
      <section id="side-projects" className="projects-section">
        <div className="projects-container">
          <header className="projects-header">
            <p className="projects-subtitle">
              Experimental projects and learning exercises
            </p>
          </header>

          <div className="projects-grid-compact">
            {sideProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={() => scrollToSection("landing")}
        className="back-to-top"
        title="Back to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
        </svg>
      </button>
    </div>
  );
};

export default LandingPage;
