import Spline from '@splinetool/react-spline';
import { BadgeCheck } from 'lucide-react';

export default function Hero3D() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Top gradient and navbar spacer */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-transparent" />

      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/60 px-3 py-1 text-sm text-slate-700 backdrop-blur">
              <BadgeCheck className="h-4 w-4 text-blue-600" />
              <span>Available for work • Product + Frontend + 3D</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 drop-shadow-sm">
              Futuristic 3D Portfolio
            </h1>
            <p className="mt-4 text-lg sm:text-xl leading-relaxed text-slate-700">
              A modern, iridescent identity brought to life. Explore projects, design systems, and interactive prototypes powered by WebGL.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800 transition">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white/80 px-5 py-3 text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-white transition backdrop-blur">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient to blend into next section; ensure it doesn't block interactions */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
