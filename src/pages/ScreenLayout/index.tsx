import Foother from "../../components/core/Foother";
import Navbar from "../../components/core/Navbar";
import About from "../About";
import Contact from "../Contact";
import Education from "../Education";
import Home from "../Home";
import Skills from "../Skills";

export default function ScreenLayout() {
    return (
        <>
            <Navbar />
            <section id="home-section" className="box-content">
                <Home />
            </section>
            <section id="about-section">
                <About />
            </section>
            <section id="education-section">
                <Education />
            </section>
            <section id="skills-section">
                <Skills />
            </section>
            <section id="contact-section">
                <Contact />
            </section>
            <Foother />
        </>
    );
}
