const STEPS = [
  { title: "Excel", text: "Started with spreadsheets — formulas, pivot tables and basic reporting." },
  { title: "SQL / MySQL", text: "Learned to query, join and aggregate data directly from databases." },
  { title: "Power BI", text: "Moved from raw numbers to interactive dashboards and visual reporting." },
  { title: "Power Query", text: "Built repeatable data transformation and cleaning pipelines." },
  { title: "DAX", text: "Wrote measures and calculated columns to power dynamic KPIs." },
  { title: "Python / Pandas", text: "Added scripting for deeper cleaning, analysis and automation." },
  { title: "Real-world Analytics Projects", text: "Applied all of it together across end-to-end dashboard projects." },
];

export default function Journey() {
  return (
    <section id="journey">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Learning & Project Journey</span>
          <h2>How I built these skills</h2>
          <p>
            As a fresher, this is my learning path so far rather than a work
            history — each stage built directly on the one before it.
          </p>
        </div>

        <ol className="timeline">
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <div className="timeline-marker">{i + 1}</div>
              <div className="timeline-content">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        .timeline {
          list-style: none;
          margin: 0;
          padding: 0;
          position: relative;
        }
        .timeline::before {
          content: "";
          position: absolute;
          left: 17px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: var(--line);
        }
        .timeline li {
          display: flex;
          gap: 22px;
          padding-bottom: 32px;
          position: relative;
        }
        .timeline li:last-child { padding-bottom: 0; }
        .timeline-marker {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--paper);
          border: 2px solid var(--blue-500);
          color: var(--blue-600);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 13px;
          z-index: 1;
        }
        .timeline-content h3 {
          font-size: 16.5px;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .timeline-content p {
          font-size: 14px;
          max-width: 520px;
        }
      `}</style>
    </section>
  );
}
