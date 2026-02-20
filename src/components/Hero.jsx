import { useEffect, useState } from "react";

export default function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0, scale: 1 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    let frame;
    let t = 0;

    const animate = () => {
      t += 0.004;

      const x = Math.sin(t) * 25;
      const y = Math.cos(t * 0.7) * 25;

      setOffset({
        x,
        y,
        scale: 1 + Math.sin(t * 1.5) * 0.015
      });

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      className="
      relative min-h-screen flex flex-col justify-center items-center
      text-center px-6 pt-32 pb-24
      overflow-hidden
      "
    >

      {/* Subtle Floating Blobs */}
      <div
        className="liquid-shape shape-1"
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${offset.scale})`
        }}
      ></div>

      <div
        className="liquid-shape shape-2"
        style={{
          transform: `translate3d(${-offset.x}px, ${-offset.y}px, 0) scale(${offset.scale})`
        }}
      ></div>

      {/* Content */}
      <div
        className={`
        relative z-10 max-w-4xl
        transition-all duration-1000 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-slate-900 dark:text-white">
          Shubham Kumar Mahto
        </h1>

        <p className="text-xl md:text-2xl mb-6 text-slate-700 dark:text-slate-300">
          Backend Engineer building scalable, production-ready systems.
        </p>

        <p className="max-w-2xl mx-auto leading-relaxed text-slate-600 dark:text-slate-400">
          I design distributed applications in Java and Spring Boot with a focus on clean architecture, performance, and long-term reliability.
        </p>

      </div>

      {/* Stats */}
      <div
        className={`
        mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10
        transition-all duration-1000 delay-200 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >

        <div>
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">
            1.5+
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-xs uppercase tracking-wider">
            Years Experience
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">
            2
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-xs uppercase tracking-wider">
            Enterprise Projects
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">
            25%
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-xs uppercase tracking-wider">
            Latency Improvement
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">
            20%
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-xs uppercase tracking-wider">
            Process Optimization
          </p>
        </div>

      </div>

    </section>
  );
}
