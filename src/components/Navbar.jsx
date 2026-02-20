import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className="fixed top-0 w-full z-50
      bg-white/70 dark:bg-[#0f172a]/80
      backdrop-blur-md
      border-b border-gray-200 dark:border-gray-800
      transition-colors duration-500">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-lg font-semibold tracking-wide
          text-slate-900 dark:text-white">
          SKM
        </h1>

        <div className="flex items-center gap-6">

          {/* Nav Links */}
          <a
            href="#about"
            className="
              ml-4 px-4 py-1.5
              rounded-full
              text-xs font-medium
              text-slate-700 dark:text-white
              border border-slate-300 dark:border-slate-600
              hover:bg-slate-100 dark:hover:bg-slate-800
              transition-all duration-300
            "
          >
            About
          </a>
          <a
            href="#skills"
            className="
              ml-4 px-4 py-1.5
              rounded-full
              text-xs font-medium
              text-slate-700 dark:text-white
              border border-slate-300 dark:border-slate-600
              hover:bg-slate-100 dark:hover:bg-slate-800
              transition-all duration-300
            "
          >
            Skills
          </a>
          <a
            href="#projects"
            className="
              ml-4 px-4 py-1.5
              rounded-full
              text-xs font-medium
              text-slate-700 dark:text-white
              border border-slate-300 dark:border-slate-600
              hover:bg-slate-100 dark:hover:bg-slate-800
              transition-all duration-300
            "
          >
            Projects
          </a>
          <a
            href="#contact"
            className="
              ml-4 px-4 py-1.5
              rounded-full
              text-xs font-medium
              text-slate-700 dark:text-white
              border border-slate-300 dark:border-slate-600
              hover:bg-slate-100 dark:hover:bg-slate-800
              transition-all duration-300
            "
          >
            Contact
          </a>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-14 h-8 flex items-center
              bg-slate-200 dark:bg-slate-700
              rounded-full p-1
              transition-colors duration-500">

            <div
              className={`
                absolute left-1 w-6 h-6 rounded-full
                bg-white dark:bg-yellow-400
                flex items-center justify-center
                shadow-md
                transform transition-transform duration-500 
                transition-transform ease-in-out
                ${darkMode ? "translate-x-6" : ""}
              `}
            >
              {darkMode ? (
                <span className="text-yellow-600 text-sm">☀</span>
              ) : (
                <span className="text-slate-700 text-sm">🌙</span>
              )}
            </div>

          </button>

        </div>
      </div>
    </nav>
  );
}
