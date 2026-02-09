import About from "../components/About";
import Expertise from "../components/Expertise";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Technologies from "../components/Technologies";
import Certifications from "../components/Certifications";
import TechnicalDeepDives from "../components/TechnicalDeepDives";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <>
            <section id="home">
                <Hero />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="expertise">
                <Expertise />
            </section>
            <section id="project" style={{ scrollMarginTop: '3cm' }}>
                <Project />
            </section>
            <section id="certifications" style={{ scrollMarginTop: '3cm' }}>
                <Certifications />
            </section>
            <section id="deep-dives" style={{ scrollMarginTop: '3cm' }}>
                <TechnicalDeepDives />
            </section>
            <section id="technologies" style={{ scrollMarginTop: '3cm' }}>
                <Technologies />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <section id="Footer">
                <Footer />
            </section>
        </>
    );
};

export default HomePage;
