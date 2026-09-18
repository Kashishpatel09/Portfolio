import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <span className="footer-name">{site.name}</span>
          <span className="footer-tag">Data Analyst</span>
        </div>
        <div className="footer-links">
          <a href={site.github} target="_blank" rel="noreferrer">
            <Github size={16} /> GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href={`mailto:${site.email}`}>
            <Mail size={16} /> Email
          </a>
        </div>
      </div>

      <style>{`
        .site-footer {
          border-top: 1px solid var(--line);
          padding: 32px 0;
        }
        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer-name {
          display: block;
          font-weight: 700;
          color: var(--navy-950);
          font-size: 14.5px;
        }
        .footer-tag {
          display: block;
          font-size: 13px;
          color: var(--ink-muted);
          margin-top: 2px;
        }
        .footer-links {
          display: flex;
          gap: 22px;
        }
        .footer-links a {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 13.5px;
          font-weight: 500;
          color: var(--navy-600);
        }
        .footer-links a:hover { color: var(--blue-600); }
      `}</style>
    </footer>
  );
}
