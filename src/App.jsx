import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Workflow from "./components/Workflow.jsx";
import TechnicalWork from "./components/TechnicalWork.jsx";
import Certifications from "./components/Certifications.jsx";
import Journey from "./components/Journey.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Workflow />
        {/* <TechnicalWork /> */}
        {/* <Certifications /> */}
        <Journey />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
