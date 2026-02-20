import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ThemeContext from "./context/ThemeContext";
import FadeIn from "./components/FadeIn";

function App() {
  return (
    <ThemeContext>
      <div
        className="
        relative min-h-screen overflow-hidden
        bg-gradient-to-br
        from-white
        via-slate-50
        to-slate-100
        dark:from-[#0b1120]
        dark:via-[#0f172a]
        dark:to-[#0b1120]
        transition-colors duration-700
        "
      >

        {/* Global Background Glow (behind everything) */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-200 dark:bg-indigo-700 opacity-20 blur-[160px] rounded-full"></div>
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-purple-200 dark:bg-purple-700 opacity-20 blur-[160px] rounded-full"></div>
        </div>

        <Navbar />

        {/* Hero stays immediate, no fade */}
        <Hero />

        {/* Fade-in sections */}
        <FadeIn>
          <About />
        </FadeIn>

        <FadeIn>
          <Experience />
        </FadeIn>

        <FadeIn>
          <Skills />
        </FadeIn>

        <FadeIn>
          <Projects />
        </FadeIn>

        <FadeIn>
          <Contact />
        </FadeIn>

      </div>
    </ThemeContext>
  );
}

export default App;
