export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10">
        Professional Experience
      </h2>

      <div className="bg-white p-8 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold">
          Software Engineer
        </h3>
        <p className="text-gray-500 mb-4">
          ASP OL Media Pvt. Ltd. | July 2023 – Sept 2024
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li>
            Developed backend modules using Spring Boot for authentication,
            data persistence, and API integrations.
          </li>
          <li>
            Built dynamic frontend features using React and Redux,
            improving UI performance by 25%.
          </li>
          <li>
            Wrote automated tests with JUnit and Mockito to ensure stable releases.
          </li>
          <li>
            Collaborated with QA and product teams to resolve production issues.
          </li>
        </ul>
      </div>
    </section>
  );
}
