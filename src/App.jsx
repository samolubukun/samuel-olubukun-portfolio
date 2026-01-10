import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";

const App = () => {
    return (
        <div className=" overflow-x-hidden text-neutral-300 antialiased slection:bg-cyan-300 selection:text-cyan-900">
            <div className="fixed top-0 -z-10 h-full w-full">
                <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>
            <div className="container mx-auto px-4 md:px-8 pt-20">
                <Navbar />
                <section id="home">
                    <Hero />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="technologies" style={{ scrollMarginTop: '3cm' }}>
                    <Technologies />
                </section>
                <section id="project" style={{ scrollMarginTop: '3cm' }}>
                    <Project />
                </section>
                <section id="certifications" style={{ scrollMarginTop: '3cm' }}>
                    <Certifications />
                </section>
                <section id="contact">
                    <Contact />
                </section>
                <section id="Footer">
                    <Footer />
                </section>
            </div>
        </div>
    );
};

export default App;
