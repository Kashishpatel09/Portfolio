import { useEffect, useState } from "react";
import { Menu, X, Download, BarChart3 } from "lucide-react";
import { site } from "../data/site.js";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Learning Journey" },
  // { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container navbar-row">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <BarChart3 size={18} strokeWidth={2.4} />
          </span>
          {site.name}
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            className="btn btn-primary btn-sm"
            href={site.resumeUrl}
            download
          >
            <Download size={15} /> Resume
          </a>
          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="nav-mobile" role="dialog" aria-label="Mobile menu">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            className="btn btn-primary"
            href={site.resumeUrl}
            download
            onClick={() => setOpen(false)}
          >
            <Download size={16} /> Download Resume
          </a>
        </div>
      )}

      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.86);
          backdrop-filter: saturate(180%) blur(14px);
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .navbar.is-scrolled {
          border-bottom-color: var(--line);
          box-shadow: 0 1px 0 rgba(11,31,58,0.02);
        }
        .navbar-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 17px;
          color: var(--navy-950);
        }
        .brand-mark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 9px;
          background: var(--navy-950);
          color: #fff;
        }
        .nav-links {
          display: flex;
          gap: 30px;
        }
        .nav-links a {
          font-size: 14.5px;
          font-weight: 500;
          color: var(--navy-600);
          transition: color 0.15s ease;
        }
        .nav-links a:hover {
          color: var(--blue-600);
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .nav-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--navy-950);
          padding: 4px;
        }
        .nav-mobile {
          display: none;
        }
        @media (max-width: 900px) {
          .nav-links { display: none; }
          .nav-actions .btn { display: none; }
          .nav-toggle { display: inline-flex; }
          .nav-mobile {
            display: flex;
            flex-direction: column;
            gap: 4px;
            padding: 8px 24px 24px;
            border-top: 1px solid var(--line);
            background: var(--paper);
          }
          .nav-mobile a {
            padding: 14px 4px;
            font-size: 15.5px;
            font-weight: 500;
            border-bottom: 1px solid var(--surface-alt);
          }
          .nav-mobile .btn {
            margin-top: 14px;
            justify-content: center;
          }
        }
      `}</style>
    </header>
  );
}
