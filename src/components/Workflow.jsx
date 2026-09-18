import {
  Database,
  Sparkles,
  Terminal,
  Boxes,
  BarChart3,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const STEPS = [
  { icon: Database, title: "Raw Data", text: "Source files, exports and database tables in their original state." },
  { icon: Sparkles, title: "Data Cleaning", text: "Handling nulls, duplicates and inconsistent formats." },
  { icon: Terminal, title: "SQL Analysis", text: "Querying, joining and aggregating to answer specific questions." },
  { icon: Boxes, title: "Data Modeling", text: "Structuring tables into a schema built for reporting." },
  { icon: BarChart3, title: "Power BI / Visualization", text: "Building dashboards around the metrics that matter." },
  { icon: Lightbulb, title: "Business Insights", text: "Turning charts into findings someone can act on." },
  { icon: CheckCircle2, title: "Decision Making", text: "Insights feeding directly into a business decision." },
];

export default function Workflow() {
  return (
    <section id="workflow" className="workflow-section">
      <div className="container">
        <div className="section-head">
          <span className="kicker">How I Work</span>
          <h2>From raw data to a decision</h2>
          <p>Every project follows the same disciplined path, end to end.</p>
        </div>

        <div className="workflow-track">
          {STEPS.map((s, i) => (
            <div className="workflow-step" key={s.title}>
              <div className="workflow-card">
                <span className="workflow-icon">
                  <s.icon size={18} strokeWidth={2} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              {i < STEPS.length - 1 && (
                <ArrowRight className="workflow-arrow" size={20} />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .workflow-section {
          background: var(--navy-950);
        }
        .workflow-section .kicker { color: var(--blue-400); }
        .workflow-section h2 { color: #fff; }
        .workflow-section .section-head p { color: #9fb0c9; }
        .workflow-track {
          display: flex;
          flex-wrap: wrap;
          align-items: stretch;
          gap: 8px;
        }
        .workflow-step {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .workflow-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius-md);
          padding: 20px 18px;
          width: 190px;
          min-height: 150px;
        }
        .workflow-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 9px;
          background: var(--blue-600);
          color: #fff;
          margin-bottom: 12px;
        }
        .workflow-card h3 {
          color: #fff;
          font-size: 14.5px;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .workflow-card p {
          color: #93a5c2;
          font-size: 12.5px;
          line-height: 1.5;
        }
        .workflow-arrow {
          color: #48597a;
          flex-shrink: 0;
        }
        @media (max-width: 980px) {
          .workflow-track { flex-direction: column; }
          .workflow-card { width: 100%; min-height: auto; }
          .workflow-arrow { transform: rotate(90deg); margin: 2px 0; }
        }
      `}</style>
    </section>
  );
}
