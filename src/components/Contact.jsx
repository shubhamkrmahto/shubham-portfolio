export default function Contact() {
  return (
    <section
      id="contact"
      className="
      relative z-10 py-28 px-6
      max-w-4xl mx-auto text-center
      border-t border-slate-200 dark:border-slate-800
      "
    >
      <h2 className="text-4xl font-semibold mb-8 tracking-tight text-slate-900 dark:text-white">
        Let’s Build Something Meaningful
      </h2>

      <p className="text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
        I’m open to backend engineering and developer roles where performance, scalability, and thoughtful system design matter.
        If you're building scalable systems and need a thoughtful engineer,
        I’d love to connect.
      </p>

      <a
        href="mailto:skumahto23@gmail.com"
        className="
        inline-block px-10 py-4
        rounded-full
        bg-slate-900 dark:bg-white
        text-white dark:text-slate-900
        text-sm font-medium
        transition-all duration-300
        hover:opacity-90
        "
      >
        Get In Touch
      </a>

      <div className="mt-14 text-sm text-slate-500 dark:text-slate-400 space-y-2">
        <p>Pune, India</p>
        <p>
          <a
            href="https://github.com/shubhamkrmahto"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          {" · "}
          <a
            href="https://linkedin.com/in/shubham-kumar-mahto-340261367"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </p>
      </div>

    </section>
  );
}
