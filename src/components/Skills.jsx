export default function Skills() {
  return (
    <section
      id="skills"
      className="
      relative z-10 py-28 px-6
      max-w-6xl mx-auto
      border-t border-slate-200 dark:border-slate-800
      "
    >
      <h2 className="text-4xl font-semibold mb-16 text-center tracking-tight text-slate-900 dark:text-white">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {/* Backend */}
        <div
          className="
          p-8 rounded-2xl
          bg-white/50 dark:bg-gray-800/50
          backdrop-blur-md
          border border-slate-200 dark:border-slate-700
          shadow-sm
          transition-all duration-300
          hover:shadow-md
          "
        >
          <h3 className="font-semibold mb-6 text-lg text-slate-900 dark:text-white">
            Backend
          </h3>

          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li>Java (8–21)</li>
            <li>Spring Boot</li>
            <li>Spring Security</li>
            <li>Microservices</li>
            <li>REST APIs</li>
            <li>Hibernate / JPA</li>
          </ul>
        </div>

        {/* Frontend */}
        <div
          className="
          p-8 rounded-2xl
          bg-white/50 dark:bg-gray-800/50
          backdrop-blur-md
          border border-slate-200 dark:border-slate-700
          shadow-sm
          transition-all duration-300
          hover:shadow-md
          "
        >
          <h3 className="font-semibold mb-6 text-lg text-slate-900 dark:text-white">
            Frontend
          </h3>

          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li>React.js</li>
            <li>Redux</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 / CSS3</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        {/* Database & DevOps */}
        <div
          className="
          p-8 rounded-2xl
          bg-white/50 dark:bg-gray-800/50
          backdrop-blur-md
          border border-slate-200 dark:border-slate-700
          shadow-sm
          transition-all duration-300
          hover:shadow-md
          "
        >
          <h3 className="font-semibold mb-6 text-lg text-slate-900 dark:text-white">
            Database & DevOps
          </h3>

          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>Redis</li>
            <li>Apache Kafka</li>
            <li>Docker</li>
            <li>AWS (EC2, S3, RDS)</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
