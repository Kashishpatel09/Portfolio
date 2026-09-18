import { Download } from "lucide-react";
import { site } from "../data/site.js";

export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="container resume-inner">
        <h2>Let&apos;s work with data and turn it into insights.</h2>
        <a className="btn btn-primary" href={site.resumeUrl} download>
          <Download size={17} /> Download Resume
        </a>
      </div>

      <style>{`
        .resume-section {
          background: linear-gradient(135deg, var(--navy-950), var(--blue-600));
          padding: 72px 0;
        }
        .resume-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .resume-inner h2 {
          color: #fff;
          font-size: clamp(24px, 3vw, 32px);
          max-width: 560px;
        }
        .resume-inner .btn-primary {
          background: #fff;
          color: var(--navy-950);
        }
        .resume-inner .btn-primary:hover {
          background: var(--surface);
        }
      `}</style>
    </section>
  );
}
