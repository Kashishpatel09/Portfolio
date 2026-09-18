import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
  Sheet,
  Database,
  Gauge,
  Code2,
  User,
} from "lucide-react";
import { site } from "../data/site.js";

// Profile photo
// Add your photo here:
// src/assets/profile.jpg
const profileModules = import.meta.glob(
  "../assets/profile.{jpg,jpeg,png,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const profilePhoto = Object.values(profileModules)[0] || null;

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">

        {/* LEFT SIDE */}
        <motion.div
          className="hero-copy"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={item} className="hero-badge">
            Open to Data Analyst / Business Analyst roles
          </motion.span>

          <motion.h1 variants={item} className="hero-title">
            I&apos;m {site.name}
          </motion.h1>

            <motion.p variants={item} className="hero-subtitle">
            <p>
              An aspiring Data Analyst with a strong
              interest in data analysis and visualization.
            </p>
            </motion.p>

          <motion.p variants={item} className="hero-desc">
            I like working with data and finding useful information from it.
            I use Excel, SQL, Power BI and Python to clean data, analyze it
            and create dashboards.
          </motion.p>

          {/* BUTTONS */}
          <motion.div variants={item} className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Projects
              <ArrowRight size={16} />
            </a>

            <a
              href={site.resumeUrl}
              download
              className="btn btn-secondary"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div variants={item} className="hero-social">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={19} />
            </a>

            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={19} />
            </a>

            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
            >
              <Mail size={19} />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          <ProfileAnalyticsPanel />
        </motion.div>
      </div>

      <style>{`
        .hero {
          padding-top: 76px;
          padding-bottom: 40px;

          background:
            radial-gradient(
              1100px 480px at 78% -8%,
              #e7f0fc 0%,
              rgba(231, 240, 252, 0) 60%
            ),
            var(--paper);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
          padding-top: 40px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;

          font-family: var(--font-mono);
          font-size: 12.5px;

          color: var(--blue-600);
          background: var(--teal-100);

          border: 1px solid #cdeceb;

          padding: 7px 14px;
          border-radius: 999px;

          margin-bottom: 22px;
        }

        .hero-title {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          margin-top: 18px;

          font-size: clamp(18px, 2.1vw, 22px);

          color: var(--navy-800);
          font-weight: 500;

          max-width: 540px;
        }

        .hero-desc {
          margin-top: 16px;

          font-size: 16px;
          line-height: 1.7;

          max-width: 500px;
        }

        .hero-actions {
          display: flex;
          gap: 14px;

          margin-top: 34px;

          flex-wrap: wrap;
        }

        .hero-social {
          display: flex;
          gap: 18px;

          margin-top: 34px;

          color: var(--navy-600);
        }

        .hero-social a {
          display: inline-flex;

          padding: 8px;

          border-radius: 10px;

          border: 1px solid var(--line);

          transition:
            color 0.15s ease,
            border-color 0.15s ease,
            transform 0.15s ease;
        }

        .hero-social a:hover {
          color: var(--blue-600);

          border-color: var(--blue-400);

          transform: translateY(-2px);
        }

        @media (max-width: 980px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }

          .hero-visual {
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}


// ----------------------------------------------------
// SKILLS SHOWN NEXT TO PROFILE
// ----------------------------------------------------

const SKILL_BADGES = [
  {
    label: "Excel",
    icon: Sheet,
  },
  {
    label: "SQL",
    icon: Database,
  },
  {
    label: "Power BI",
    icon: Gauge,
  },
  {
    label: "Python",
    icon: Code2,
  },
];


// ----------------------------------------------------
// PROFILE + ANALYTICS PANEL
// ----------------------------------------------------

function ProfileAnalyticsPanel() {
  const bars = [42, 64, 50, 78, 58];

  return (
    <div className="profile-panel">

      {/* PROFILE PHOTO */}
      <div className="photo-stage">
        <span
          className="photo-glow"
          aria-hidden="true"
        />

        {profilePhoto ? (
          <img
            className="photo-img"
            src={profilePhoto}
            alt={`${site.name}, Fresher Data Analyst`}
          />
        ) : (
          <div
            className="photo-placeholder"
            role="img"
            aria-label="Profile photo placeholder"
          >
            <User
              size={64}
              strokeWidth={1.5}
            />
          </div>
        )}
      </div>


      {/* SMALL ANALYTICS CHART */}
      <div
        className="mini-chart"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 220 60"
          preserveAspectRatio="none"
          className="mini-chart-line"
        >
          <polyline
            points="
              0,46
              30,38
              60,42
              90,22
              120,28
              150,10
              180,18
              220,8
            "
            fill="none"
            stroke="var(--blue-500)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="mini-chart-bars">
          {bars.map((h, i) => (
            <span
              key={i}
              style={{
                height: `${h}%`,
              }}
            />
          ))}
        </div>
      </div>


      {/* SKILL BADGES */}
      <div className="skill-badges">
        {SKILL_BADGES.map((s) => (
          <div
            className="skill-badge"
            key={s.label}
          >
            <s.icon
              size={15}
              strokeWidth={2}
            />

            <span>
              {s.label}
            </span>
          </div>
        ))}
      </div>


      <style>{`
        .profile-panel {
          background: var(--paper);

          border: 1px solid var(--line);

          border-radius: var(--radius-lg);

          box-shadow: var(--shadow-lg);

          padding: 34px 28px 26px;

          display: flex;
          flex-direction: column;
          align-items: center;

          max-width: 340px;

          margin: 0 auto;
        }


        .photo-stage {
          position: relative;

          width: clamp(200px, 20vw, 260px);
          height: clamp(200px, 20vw, 260px);

          display: flex;

          align-items: center;
          justify-content: center;
        }


        .photo-glow {
          position: absolute;

          inset: -14px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(62, 142, 222, 0.28) 0%,
              rgba(62, 142, 222, 0.08) 55%,
              rgba(62, 142, 222, 0) 75%
            );
        }


        .photo-img {
          position: relative;

          width: 100%;
          height: 100%;

          border-radius: 50%;

          object-fit: cover;

          border: 4px solid #ffffff;

          box-shadow: var(--shadow-md);
        }


        .photo-placeholder {
          position: relative;

          width: 100%;
          height: 100%;

          border-radius: 50%;

          border: 4px solid #ffffff;

          box-shadow: var(--shadow-md);

          background: var(--surface-alt);

          color: var(--ink-muted);

          display: flex;

          align-items: center;
          justify-content: center;
        }



        .skill-badges {
          display: flex;

          flex-wrap: wrap;

          justify-content: center;

          gap: 8px;

          margin-top: 22px;
        }


        .skill-badge {
          display: inline-flex;

          align-items: center;

          gap: 6px;

          font-family: var(--font-mono);

          font-size: 12px;

          font-weight: 500;

          color: var(--navy-600);

          background: var(--surface-alt);

          border: 1px solid var(--line);

          padding: 6px 11px;

          border-radius: 8px;
        }


        @media (max-width: 980px) {
          .profile-panel {
            max-width: 300px;

            padding: 28px 24px 22px;
          }
        }


        @media (max-width: 520px) {
          .photo-stage {
            width: 180px;
            height: 180px;
          }

          .profile-panel {
            max-width: 260px;
          }
        }
      `}</style>
    </div>
  );
}