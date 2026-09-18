import { GraduationCap } from "lucide-react";

const EDUCATION = [
  {
    degree: "Master’s Degree — Computer Engineering",
    institute: "Ahmedabad Institute of Technology (AIT)",
    detail: "Currently Pursuing",
  },
  {
    degree: "Bachelor’s Degree — Information Technology (2021–2025)",
    institute: "Silver Oak College of Engineering",
    detail: "Final SPI: 9.38",
  },
  {
    degree: "HSC — 2021",
    institute: "Panchshil Vidhyalay",
    detail: "84.00%",
  },
  {
    degree: "SSC — 2019",
    institute: "Sahjanand Vidhyalay",
    detail: "84.00%",
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">

        {/* LEFT SIDE — ABOUT ME */}

        <div className="about-content">

          <div className="section-head">

            <span className="kicker">
              About Me
            </span>

            <h2>
              A little about me
            </h2>

            <p>
              Hi, I&apos;m Kashish Patel. I&apos;m a Fresher Data Analyst
              interested in working with data and creating dashboards.
            </p>

            <p style={{ marginTop: 14 }}>
              I have been learning Excel, SQL, Power BI and Python and
              working on practical projects to improve my data analysis
              skills.
            </p>

          </div>

        </div>


        {/* RIGHT SIDE — EDUCATION */}

        <div className="education-section">

          <div className="education-heading">

            <span className="education-icon">
              <GraduationCap size={22} />
            </span>

            <div>

              <span className="education-label">
                Education
              </span>

              <h3>
                My Education
              </h3>

            </div>

          </div>


          <div className="education-list">

            {EDUCATION.map((edu) => (

              <div
                className="education-item"
                key={edu.degree}
              >

                <div className="education-dot"></div>

                <div className="education-info">

                  <h4>
                    {edu.degree}
                  </h4>

                  <p className="education-institute">
                    {edu.institute}
                  </p>

                  <p className="education-detail">
                    {edu.detail}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>


      <style>{`

        /* MAIN ABOUT GRID */

        .about-grid {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 56px;

          align-items: start;
        }


        /* LEFT SIDE */

        .about-content {
          display: flex;

          flex-direction: column;
        }


        /* RIGHT SIDE — EDUCATION */

        .education-section {
          padding: 24px;

          background: var(--surface);

          border: 1px solid var(--line);

          border-radius: var(--radius-md);
        }


        /* EDUCATION HEADER */

        .education-heading {
          display: flex;

          align-items: center;

          gap: 12px;

          margin-bottom: 24px;
        }


        .education-icon {
          flex-shrink: 0;

          width: 42px;
          height: 42px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 10px;

          background: var(--navy-950);

          color: #fff;
        }


        .education-label {
          display: block;

          margin-bottom: 2px;

          font-family: var(--font-mono);

          font-size: 11px;

          color: var(--blue-600);

          text-transform: uppercase;

          letter-spacing: 0.05em;
        }


        .education-heading h3 {
          font-size: 18px;

          font-weight: 700;

          margin: 0;
        }


        /* EDUCATION LIST */

        .education-list {
          display: flex;

          flex-direction: column;

          gap: 0;
        }


        .education-item {
          position: relative;

          display: flex;

          gap: 14px;

          padding-bottom: 22px;
        }


        .education-item:last-child {
          padding-bottom: 0;
        }


        /* DOT */

        .education-dot {
          flex-shrink: 0;

          width: 9px;
          height: 9px;

          margin-top: 6px;

          border-radius: 50%;

          background: var(--blue-600);

          position: relative;

          z-index: 2;
        }


        /* TIMELINE LINE */

        .education-item:not(:last-child)::before {
          content: "";

          position: absolute;

          left: 4px;

          top: 15px;

          bottom: 0;

          width: 1px;

          background: var(--line);
        }


        /* EDUCATION TEXT */

        .education-info {
          min-width: 0;
        }


        .education-info h4 {
          font-size: 14.5px;

          font-weight: 700;

          line-height: 1.4;

          margin: 0 0 4px;
        }


        .education-institute {
          font-size: 13.5px;

          line-height: 1.5;

          margin: 0 0 3px;
        }


        .education-detail {
          font-size: 12.5px;

          color: var(--blue-600);

          font-weight: 600;

          margin: 0;
        }


        /* TABLET */

        @media (max-width: 900px) {

          .about-grid {
            grid-template-columns: 1fr;

            gap: 32px;
          }

        }


        /* MOBILE */

        @media (max-width: 520px) {

          .education-section {
            padding: 18px;
          }

        }

      `}</style>

    </section>
  );
}