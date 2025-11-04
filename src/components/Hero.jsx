import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50 to-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_80%_10%,rgba(2,132,199,0.15),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-inset ring-sky-200">
              Trusted IT Consulting
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Secure. Scalable. Tailored IT Solutions.
            </h1>
            <p className="max-w-xl text-slate-600">
              We help modern organizations architect secure infrastructure, optimize cloud costs, and ship with confidence. Partner with a team that treats your systems like their own.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-3 text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Start a conversation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                Explore services
              </a>
            </div>
            <div className="pt-4 text-sm text-slate-500">
              ISO-aligned processes • Vendor neutral • Security-first mindset
            </div>
          </div>

          <div className="relative">
            <div className="h-[420px] sm:h-[500px] md:h-[560px] lg:h-[640px] w-full rounded-2xl border border-slate-200/70 bg-white/40 backdrop-blur">
              <Spline
                scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-200/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
