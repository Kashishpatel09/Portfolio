import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { site } from "../data/site.js";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container contact-section">
        <div className="contact-intro">
          <span className="kicker">Contact</span>

          <h2 className="contact-title">
            Let&apos;s Connect
          </h2>

          <p className="contact-description">
            I&apos;m open to Data Analyst and Business Analyst opportunities,
            collaborations, and professional discussions. Feel free to connect
            with me through any of the platforms below.
          </p>
        </div>

        <div className="contact-options">

          {/* Email */}
          <a
            href={`mailto:${site.email}`}
            className="contact-card"
          >
            <div className="contact-icon">
              <Mail size={22} />
            </div>

            <div className="contact-content">
              <span className="contact-label">Email</span>
              <span className="contact-value">
                {site.email}
              </span>
            </div>

            <ArrowUpRight
              className="contact-arrow"
              size={19}
            />
          </a>

          {/* LinkedIn */}
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <Linkedin size={22} />
            </div>

            <div className="contact-content">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">
                Connect with me on LinkedIn
              </span>
            </div>

            <ArrowUpRight
              className="contact-arrow"
              size={19}
            />
          </a>

          {/* GitHub */}
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <Github size={22} />
            </div>

            <div className="contact-content">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">
                Explore my projects on GitHub
              </span>
            </div>

            <ArrowUpRight
              className="contact-arrow"
              size={19}
            />
          </a>

        </div>
      </div>

      <style>{`
        .contact-section {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 70px;
          align-items: center;
        }

        .contact-title {
          font-size: clamp(32px, 4vw, 46px);
          font-weight: 700;
          line-height: 1.1;
          margin-top: 10px;
          color: var(--navy-950);
        }

        .contact-description {
          margin-top: 18px;
          max-width: 500px;
          font-size: 15px;
          line-height: 1.7;
          color: var(--ink-muted);
        }

        .contact-options {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .contact-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 20px;
          background: var(--paper);
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          text-decoration: none;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            border-color 0.2s ease;
        }

        .contact-card:hover {
          transform: translateY(-2px);
          border-color: var(--blue-400);
          box-shadow: var(--shadow-md);
        }

        .contact-icon {
          width: 46px;
          height: 46px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: var(--blue-600);
          background: var(--teal-100);
        }

        .contact-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
          flex: 1;
        }

        .contact-label {
          font-size: 13px;
          font-weight: 700;
          color: var(--navy-800);
        }

        .contact-value {
          font-size: 14px;
          color: var(--ink-muted);
          overflow-wrap: anywhere;
        }

        .contact-arrow {
          flex-shrink: 0;
          color: var(--ink-muted);
          transition: transform 0.2s ease;
        }

        .contact-card:hover .contact-arrow {
          transform: translate(2px, -2px);
          color: var(--blue-600);
        }

        @media (max-width: 900px) {
          .contact-section {
            grid-template-columns: 1fr;
            gap: 35px;
          }
        }
      `}</style>
    </section>
  );
}