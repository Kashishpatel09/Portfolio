import { Github, ExternalLink, BarChart3, ImageOff } from "lucide-react";

export default function ProjectCard({ project, onView }) {
  return (
    <article className="project-card">
      <div className="project-thumb">
        {project.image ? (
          <img src={project.image} alt={`${project.name} dashboard preview`} />
        ) : (
          <div className="thumb-placeholder">
            <ImageOff size={22} />
            <span>Dashboard screenshot placeholder</span>
          </div>
        )}
      </div>

      <div className="project-body">
        <h3>{project.name}</h3>
        <p className="project-objective">{project.objective}</p>

        <div className="project-tools">
          {project.tools.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <div className="project-kpis">
          {project.kpis.slice(0, 4).map((k) => (
            <span key={k} className="kpi-chip">
              {k}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <button className="btn btn-primary btn-sm" onClick={() => onView(project)}>
            View Project
          </button>
          <a
            className="btn btn-ghost btn-sm"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={15} /> GitHub
          </a>
          {/* <a
            className="btn btn-ghost btn-sm"
            href={project.powerbiUrl}
            target="_blank"
            rel="noreferrer"
          >
            <BarChart3 size={15} /> Power BI
          </a> */}
        </div>
      </div>

      <style>{`
        .project-card {
          background: var(--paper);
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
        }
        .project-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-3px);
          border-color: var(--blue-400);
        }
        .project-thumb {
          aspect-ratio: 16 / 10;
          background: linear-gradient(135deg, var(--surface-alt), var(--surface));
        }
        .project-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .thumb-placeholder {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: var(--ink-muted);
          font-size: 12.5px;
        }
        .project-body {
          padding: 22px 22px 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }
        .project-body h3 {
          font-size: 18px;
          font-weight: 700;
        }
        .project-objective {
          font-size: 14px;
          line-height: 1.55;
        }
        .project-tools {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .project-tools span {
          font-family: var(--font-mono);
          font-size: 11.5px;
          color: var(--blue-600);
          background: var(--teal-100);
          padding: 4px 9px;
          border-radius: 6px;
        }
        .project-kpis {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .kpi-chip {
          font-size: 12px;
          color: var(--navy-600);
          background: var(--surface);
          border: 1px solid var(--line);
          padding: 4px 9px;
          border-radius: 6px;
        }
        .project-actions {
          margin-top: auto;
          padding-top: 6px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
      `}</style>
    </article>
  );
}
