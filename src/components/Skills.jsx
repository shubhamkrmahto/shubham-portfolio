export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-gray-700">

          <div>
            <h3 className="font-semibold mb-4 text-lg">Backend</h3>
            <ul className="space-y-2">
              <li>Java (8–21)</li>
              <li>Spring Boot</li>
              <li>Spring Security</li>
              <li>Microservices</li>
              <li>REST APIs</li>
              <li>Hibernate / JPA</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Frontend</h3>
            <ul className="space-y-2">
              <li>React.js</li>
              <li>Redux</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5 / CSS3</li>
              <li>Bootstrap</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Database & DevOps</h3>
            <ul className="space-y-2">
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>Redis</li>
              <li>Apache Kafka</li>
              <li>Docker</li>
              <li>AWS (EC2, S3, RDS)</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
