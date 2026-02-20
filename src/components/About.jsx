export default function About() {
  return (
    <section
      id="about"
      className="
      relative z-10 py-28 px-6
      max-w-5xl mx-auto
      border-t border-slate-200 dark:border-slate-800
      "
    >
      <h2 className="text-4xl font-semibold mb-14 text-center tracking-tight text-slate-900 dark:text-white">
        About Me
      </h2>

      <div className="space-y-10 text-lg text-center leading-relaxed text-slate-700 dark:text-slate-300">

        <p>
          I build backend systems designed for scale, clarity, and long-term maintainability. My work prioritizes clean layering, secure authentication, and performance-aware architecture over short-term feature delivery.
        </p>

        <p>
          I’ve contributed to microservices platforms involving authentication flows, caching strategies, event-driven communication, and production debugging. I value systems that behave predictably under load and remain easy to evolve.
        </p>

      </div>

      {/* Philosophy Card */}
      <div
        className="
        mt-20 p-12
        rounded-2xl
        bg-white/50 dark:bg-gray-800/50
        backdrop-blur-md
        border border-slate-200 dark:border-slate-700
        shadow-md
        transition-all duration-500
        "
      >
        <h3 className="text-2xl font-semibold mb-6 text-center text-slate-900 dark:text-white">
          Engineering Philosophy
        </h3>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-center max-w-3xl mx-auto">
          Good software is not just functional — it is reliable, secure,
          observable, and easy to evolve. I design systems with clean layering,
          proper API contracts, performance optimization, and strong testing
          practices to ensure long-term stability.
        </p>
      </div>

    </section>
  );
}
