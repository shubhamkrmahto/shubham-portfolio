export default function Experience() {
  return (
    <section
      id="experience"
      className="
      relative z-10 py-28 px-6
      max-w-5xl mx-auto
      border-t border-slate-200 dark:border-slate-800
      "
    >
      <h2 className="text-4xl font-semibold mb-14 text-center tracking-tight text-slate-900 dark:text-white">
        Professional Experience
      </h2>

      <div
        className="
        p-10 md:p-12
        rounded-2xl
        bg-white/50 dark:bg-gray-800/50
        backdrop-blur-md
        border border-slate-200 dark:border-slate-700
        shadow-md
        transition-all duration-500
        hover:shadow-lg
        "
      >
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            Software Engineer
          </h3>

          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            ASP OL Media Pvt. Ltd. · July 2023 – Sept 2024
          </p>
        </div>

        {/* <ul className="mt-6 space-y-4 text-slate-700 dark:text-slate-300">
          <li className="flex gap-3">
            <span className="mt-2 w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full"></span>
            <span>Designed and implemented secure backend modules...</span>
          </li>
        </ul> */}


        <ul className="space-y-4 text-slate-700 list-disc list-inside dark:text-slate-300 leading-relaxed">
          <li>
            Designed and implemented secure backend modules using Spring Boot for authentication and data persistence.
          </li>
          <li>
            Improved frontend performance by 25% through optimized rendering and state management.
          </li>
          <li>
            Introduced automated testing practices using JUnit and Mockito to reduce regression defects.
          </li>
          <li>
            Collaborated cross-functionally to resolve production issues and improve system stability.
          </li>
        </ul>
      </div>

    </section>
  );
}
