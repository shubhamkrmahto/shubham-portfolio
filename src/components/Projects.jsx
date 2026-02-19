const projects = [
  {
    title: "StreamSphere",
    description:
      "A scalable full-stack video streaming platform with JWT authentication and role-based access control. Implemented CDN-based video playback with watch-progress tracking, resume functionality, and admin-controlled content publishing. Optimized performance using Redis caching and Kafka for event-driven processing.",
    tech: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "React.js",
      "Redis",
      "Apache Kafka"
    ],
    github: "#",
    live: "#"
  },
  {
    title: "Car Loan Management System",
    description:
      "A microservices-based loan processing platform enabling customer onboarding, credit evaluation, repayment scheduling, and workflow automation. Built secure REST APIs with Spring Boot and developed a role-based React dashboard to streamline loan approvals, reducing processing time by 20%.",
    tech: [
      "Java 21",
      "Spring Boot",
      "Microservices",
      "MySQL",
      "React.js"
    ],
    github: "#",
    live: "#"
  }
];


export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm bg-gray-100 px-3 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-6 text-blue-600 font-medium">
              <a href={project.github} target="_blank">GitHub</a>
              <a href={project.live} target="_blank">Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
