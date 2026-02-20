const projects = [
  {
    title: "StreamSphere",
    description:
      "A distributed video streaming platform designed with secure authentication, event-driven processing, and performance-focused architecture.",
    highlights: [
      "Microservices architecture with event-driven processing using Kafka",
      "Redis caching for performance optimization",
      "Secure JWT authentication with role-based access control"
    ],
    tech: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "React.js",
      "Redis",
      "Apache Kafka"
    ],
    github: "https://github.com/shubhamkrmahto/stream-sphere",
    live: "#"
  },
  {
    title: "Car Loan Management System",
    description:
      "A microservices-based loan processing system designed to streamline customer onboarding, risk evaluation, and approval workflows.",
    highlights: [
      "Secure REST APIs using Spring Boot",
      "Role-based React dashboard",
      "Reduced loan processing time by 20%"
    ],
    tech: [
      "Java 21",
      "Spring Boot",
      "Microservices",
      "MySQL",
      "React.js"
    ],
    github: "https://github.com/shubhamkrmahto/Car-Loan-Management-System-Project-Overview",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
      relative z-10 py-28 px-6
      max-w-6xl mx-auto
      border-t border-slate-200 dark:border-slate-800
      "
    >
      <h2 className="text-4xl font-semibold mb-16 text-center tracking-tight text-slate-900 dark:text-white">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              p-10 rounded-2xl
              bg-white/50 dark:bg-gray-800/50
              backdrop-blur-md
              border border-slate-200 dark:border-slate-700
              shadow-sm
              transition-all duration-300
              hover:shadow-lg hover:-translate-y-1
            "
          >
            <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
              {project.title}
            </h3>

            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {project.description}
            </p>

            <ul className="mb-6 space-y-3">
              {project.highlights.map((point, i) => (
                <li
                  key={i}
                  className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-3"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full"></span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="
                    text-xs
                    bg-slate-100 dark:bg-slate-700
                    text-slate-700 dark:text-slate-200
                    px-3 py-1.5 rounded-full
                    transition-colors duration-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-8 text-sm font-medium">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                Live
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
