import { useEffect, useRef } from "react";
import { X, Github, BarChart3, ImageOff } from "lucide-react";

export default function ProjectDetails({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    dialogRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onMouseDown={onClose}>
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} project details`}
        tabIndex={-1}
        ref={dialogRef}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close project details">
          <X size={20} />
        </button>

        <div className="modal-head">
          <span className="kicker">Project Detail</span>
          <h2>{project.name}</h2>
          <div className="modal-tools">
            {project.tools.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="modal-thumb">
          {project.image ? (
            <img src={project.image} alt={`${project.name} dashboard`} />
          ) : (
            <div className="thumb-placeholder">
              <ImageOff size={26} />
              <span>Dashboard screenshot placeholder — add project.image in src/data/projects.js</span>
            </div>
          )}
        </div>

        <div className="modal-links">
          <a className="btn btn-primary btn-sm" href={project.githubUrl} target="_blank" rel="noreferrer">
            <Github size={15} /> GitHub Repository
          </a>
          <a className="btn btn-secondary btn-sm" href={project.powerbiUrl} target="_blank" rel="noreferrer">
            <BarChart3 size={15} /> Live Power BI Dashboard
          </a>
        </div>

        <Block title="Business Problem & Objective" text={project.objective} />

        <div className="modal-two-col">
          <ListBlock title="Key KPIs" items={project.kpis} />
          <ListBlock title="Analysis Covered" items={project.analysis} />
        </div>

        <Block title="Dataset" text={project.dataset} />
        <Block title="Data Cleaning" text={project.dataCleaning} />
        <Block title="Data Transformation" text={project.dataTransformation} />
        <Block title="Data Modeling" text={project.dataModeling} />

        <div className="modal-code-block">
          <h4>SQL Analysis</h4>
          <pre>
            <code>{project.sqlAnalysis}</code>
          </pre>
        </div>

        <div className="modal-code-block">
          <h4>DAX Measures</h4>
          <pre>
            <code>{project.daxMeasures}</code>
          </pre>
        </div>

        <ListBlock title="Key Insights" items={project.insights} numbered />
        <ListBlock title="Business Recommendations" items={project.recommendations} numbered />
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(11, 31, 58, 0.5);
          backdrop-filter: blur(2px);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 40px 20px;
          z-index: 100;
          overflow-y: auto;
        }
        .modal-panel {
          background: var(--paper);
          border-radius: var(--radius-lg);
          max-width: 760px;
          width: 100%;
          padding: 40px 40px 48px;
          position: relative;
          box-shadow: var(--shadow-lg);
        }
        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 10px;
          padding: 8px;
          color: var(--navy-800);
        }
        .modal-close:hover {
          border-color: var(--blue-400);
          color: var(--blue-600);
        }
        .modal-head h2 {
          font-size: 26px;
          font-weight: 800;
          margin: 6px 0 14px;
        }
        .modal-tools {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 8px;
        }
        .modal-tools span {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--blue-600);
          background: var(--teal-100);
          padding: 4px 10px;
          border-radius: 6px;
        }
        .modal-thumb {
          margin-top: 24px;
          border-radius: var(--radius-md);
          overflow: hidden;
          aspect-ratio: 16/9;
          background: linear-gradient(135deg, var(--surface-alt), var(--surface));
        }
        .modal-thumb img {
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
          gap: 10px;
          color: var(--ink-muted);
          font-size: 13px;
          text-align: center;
          padding: 0 30px;
        }
        .modal-links {
          display: flex;
          gap: 10px;
          margin-top: 20px;
          flex-wrap: wrap;
        }
        .modal-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 30px;
        }
        @media (max-width: 620px) {
          .modal-panel { padding: 30px 22px 36px; }
          .modal-two-col { grid-template-columns: 1fr; }
        }
        .modal-code-block {
          margin-top: 30px;
        }
        .modal-code-block h4 {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .modal-code-block pre {
          background: var(--navy-950);
          color: #d7e6ff;
          border-radius: var(--radius-sm);
          padding: 16px 18px;
          overflow-x: auto;
          font-family: var(--font-mono);
          font-size: 13px;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}

function Block({ title, text }) {
  return (
    <div className="modal-block">
      <h4>{title}</h4>
      <p>{text}</p>
      <style>{`
        .modal-block { margin-top: 30px; }
        .modal-block h4 { font-size: 15px; font-weight: 700; margin-bottom: 8px; }
        .modal-block p { font-size: 14.5px; line-height: 1.65; }
      `}</style>
    </div>
  );
}

function ListBlock({ title, items, numbered }) {
  return (
    <div className="modal-list-block">
      <h4>{title}</h4>
      <ul className={numbered ? "numbered" : ""}>
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
      <style>{`
        .modal-list-block h4 { font-size: 15px; font-weight: 700; margin-bottom: 10px; }
        .modal-list-block ul {
          margin: 0;
          padding-left: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .modal-list-block li {
          font-size: 14px;
          color: var(--ink-muted);
          padding-left: 18px;
          position: relative;
          line-height: 1.55;
        }
        .modal-list-block li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--blue-400);
        }
        .modal-list-block ul.numbered { counter-reset: item; }
        .modal-list-block ul.numbered li { padding-left: 24px; }
        .modal-list-block ul.numbered li::before {
          counter-increment: item;
          content: counter(item);
          width: auto;
          height: auto;
          background: none;
          top: 0;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--blue-600);
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}
