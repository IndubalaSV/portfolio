import React from "react";
import ProjectCard from "./ProjectCard";

export default function App() {
  const projects = [
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

  return (
    <div className="flex min-h-screen flex-col w-[80%] mx-auto justify-center">
      <header className="text-center py-12 bg-white shadow">
        <h1 className="text-3xl font-bold" style={{ marginBottom: "0px" }}>
          Indubala Selvaraj
        </h1>
        <p className="text-md text-gray-600 mt-0" style={{ marginTop: "0px" }}>
          Backend Dev | Python | React
        </p>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-4 py-10">
        {/* Projects Section */}
        <section id="projects" className="mt-12 w-full max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center mt-16">
            Projects
          </h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center py-6 bg-white border-t-[1px] border-gray-100 w-[90%] mx-auto">
        <p>Built with ❤️</p>
        <p>
          © 2025 Indubala Selvaraj |{" "}
          <a
            href="https://x.com/coffified"
            target="_blank"
            className="text-blue-600 underline"
          >
            Twitter
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/IndubalaSV"
            target="_blank"
            className="text-blue-600 underline"
          >
            Github
          </a>{" "}
          |{" "}
          <a
            href="mailto:indubala09122000@gmail.com"
            className="text-blue-600 underline"
          >
            Email
          </a>{" "}
        </p>
      </footer>
    </div>
  );
}
