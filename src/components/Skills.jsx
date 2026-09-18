import {
  Sheet,
  Database,
  GitBranch,
  Layers,
  BarChart2,
  Filter,
  Code2,
  Braces,
  Boxes,
  SlidersHorizontal,
  Gauge,
  LayoutGrid,
} from "lucide-react";

const GROUPS = [
  {
    title: "Data Analysis",
    accent: "blue",
    skills: [
      { name: "Excel", icon: Sheet },
      { name: "Advanced Excel", icon: SlidersHorizontal },
      { name: "Data Cleaning", icon: Filter },
      { name: "Data Visualization", icon: BarChart2 },
    ],
  },
  {
    title: "Database & SQL",
    accent: "teal",
    skills: [
      { name: "SQL", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "Joins", icon: GitBranch },
      { name: "Aggregations", icon: Layers },
      { name: "Subqueries", icon: Code2 },
      { name: "CTEs", icon: Boxes },
      { name: "Window Functions", icon: LayoutGrid },
    ],
  },
  {
    title: "Business Intelligence",
    accent: "amber",
    skills: [
      { name: "Power BI", icon: Gauge },
      { name: "Power Query", icon: Filter },
      { name: "DAX", icon: Braces },
      { name: "Data Modeling", icon: Boxes },
      { name: "KPI Development", icon: BarChart2 },
      { name: "Dashboard Design", icon: LayoutGrid },
    ],
  },
  {
    title: "Programming",
    accent: "navy",
    skills: [
      { name: "Python", icon: Code2 },
       { name: "NumPy", icon: Layers },
    { name: "Pandas", icon: Sheet },
    { name: "Matplotlib", icon: BarChart2 },
    { name: "Seaborn", icon: BarChart2 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Skills</span>
          <h2>Tools and skills I use for data analysis</h2>
          <p>
            I use these tools to clean data, find useful information, and create simple dashboards.
          </p>
        </div>

        <div className="skills-groups">
          {GROUPS.map((g) => (
            <div className="skill-group" key={g.title}>
              <h3 className={`skill-group-title accent-${g.accent}`}>
                {g.title}
              </h3>
              <div className="skill-chips">
                {g.skills.map((s) => (
                  <div className="skill-chip" key={s.name}>
                    <s.icon size={16} strokeWidth={2} />
                    <span>{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          background: var(--surface);
        }
        .skills-groups {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .skill-group {
          background: var(--paper);
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          padding: 26px 26px 22px;
        }
        .skill-group-title {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 16px;
          padding-left: 12px;
          border-left: 3px solid var(--line);
        }
        .accent-blue { border-left-color: var(--blue-500); }
        .accent-teal { border-left-color: var(--teal-500); }
        .accent-amber { border-left-color: var(--amber-500); }
        .accent-navy { border-left-color: var(--navy-800); }
        .skill-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .skill-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 500;
          color: var(--navy-800);
          background: var(--surface);
          border: 1px solid var(--line);
          padding: 9px 13px;
          border-radius: 9px;
          transition: transform 0.15s ease, border-color 0.15s ease, color 0.15s ease;
        }
        .skill-chip:hover {
          transform: translateY(-2px);
          border-color: var(--blue-400);
          color: var(--blue-600);
        }
        @media (max-width: 760px) {
          .skills-groups { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
