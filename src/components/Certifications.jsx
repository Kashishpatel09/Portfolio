import { Award, ExternalLink } from "lucide-react";

// PLACEHOLDER DATA — replace each entry with your real certification
// name, issuing platform, completion date and certificate link.
const CERTIFICATIONS = [
  {
    name: "[Certification Name Placeholder]",
    platform: "[Platform Placeholder — e.g. Coursera]",
    date: "[Completion Date Placeholder]",
    url: "#",
  },
  {
    name: "[Certification Name Placeholder]",
    platform: "[Platform Placeholder — e.g. Google]",
    date: "[Completion Date Placeholder]",
    url: "#",
  },
  {
    name: "[Certification Name Placeholder]",
    platform: "[Platform Placeholder — e.g. Microsoft]",
    date: "[Completion Date Placeholder]",
    url: "#",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Certifications</span>
          <h2>Certifications & courses</h2>
          <p>
            Placeholder entries below — replace with your real certificates
            in <code>src/components/Certifications.jsx</code>.
          </p>
        </div>

        <div className="cert-grid">
          {CERTIFICATIONS.map((c, i) => (
            <div className="cert-card" key={i}>
              <span className="cert-icon">
                <Award size={18} />
              </span>
              <h3>{c.name}</h3>
              <p className="cert-meta">
                {c.platform} · {c.date}
              </p>
              <a className="btn btn-ghost btn-sm" href={c.url} target="_blank" rel="noreferrer">
                View Certificate <ExternalLink size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .certifications-section {
          background: var(--surface);
        }
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .cert-card {
          background: var(--paper);
          border: 1px dashed var(--line);
          border-radius: var(--radius-md);
          padding: 24px 22px;
        }
        .cert-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--teal-100);
          color: var(--teal-500);
          margin-bottom: 14px;
        }
        .cert-card h3 {
          font-size: 15.5px;
          font-weight: 700;
          margin-bottom: 6px;
          color: var(--navy-800);
        }
        .cert-meta {
          font-size: 13px;
          margin-bottom: 16px;
        }
        @media (max-width: 860px) {
          .cert-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
