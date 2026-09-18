import { site } from "../data/site.js";

const SQL_SNIPPET = `SELECT
  Category,
  SUM(Sales) AS Total_Sales
FROM Sales
GROUP BY Category
ORDER BY Total_Sales DESC;`;

const DAX_SNIPPET = `Total Revenue =
SUM(Sales[Revenue])

Profit Margin =
DIVIDE(
    [Total Profit],
    [Total Revenue],
    0
)`;

export default function TechnicalWork() {
  return (
    <section id="technical-work">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Technical Work</span>
          <h2>SQL & DAX in practice</h2>
          <p>
            A sample of the kind of querying and measure-writing behind the
            dashboards above.
          </p>
        </div>

        <div className="code-grid">
          <CodeCard label="SQL" code={SQL_SNIPPET} linkLabel="View More SQL" href={site.github} />
          <CodeCard label="DAX" code={DAX_SNIPPET} linkLabel="View More DAX" href={site.github} />
        </div>
      </div>

      <style>{`
        .code-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }
        @media (max-width: 820px) {
          .code-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

function CodeCard({ label, code, linkLabel, href }) {
  return (
    <div className="code-card">
      <div className="code-card-head">
        <span>{label}</span>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
      <a className="btn btn-ghost btn-sm" href={href} target="_blank" rel="noreferrer">
        {linkLabel}
      </a>

      <style>{`
        .code-card {
          background: var(--navy-950);
          border-radius: var(--radius-md);
          padding: 22px 22px 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .code-card-head span {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--blue-400);
          background: rgba(62,142,222,0.14);
          padding: 4px 10px;
          border-radius: 6px;
        }
        .code-card pre {
          margin: 0;
          color: #d7e6ff;
          font-family: var(--font-mono);
          font-size: 13px;
          line-height: 1.65;
          overflow-x: auto;
        }
        .code-card .btn-ghost {
          align-self: flex-start;
          border-color: rgba(255,255,255,0.16);
          color: #cfe0f7;
        }
        .code-card .btn-ghost:hover {
          background: rgba(255,255,255,0.06);
        }
      `}</style>
    </div>
  );
}
