import { useState } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import ProjectDetails from "./ProjectDetails.jsx";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Featured Projects</span>
          <h2>Analytics projects built end to end</h2>
          <p>
            Each project moves from a raw dataset through cleaning, SQL
            analysis and data modeling to a Power BI dashboard built around
            specific business KPIs.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onView={setActive} />
          ))}
        </div>
      </div>

      {active && (
        <ProjectDetails project={active} onClose={() => setActive(null)} />
      )}

      <style>{`
        .project-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (max-width: 860px) {
          .project-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
