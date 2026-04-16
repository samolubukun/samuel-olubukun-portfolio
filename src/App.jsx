import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <div className="overflow-x-hidden text-neutral-900 dark:text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 transition-colors duration-300">
                <div className="fixed top-0 -z-10 h-full w-full">
                    {/* Dark mode background */}
                    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:block hidden"></div>
                    {/* Light mode background */}
                    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] block dark:hidden"></div>
                </div>
                <div className="container mx-auto px-4 md:px-8 pt-20">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/blog/:slug" element={<BlogPostPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;

