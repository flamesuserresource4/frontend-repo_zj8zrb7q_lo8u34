import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-sky-600 to-cyan-500" />
            <span className="text-base font-semibold tracking-tight">Shield Consulting</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
            <a
              href="#contact"
              className="rounded-lg bg-sky-600 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-sky-700"
            >
              Get a quote
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-600">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>
              © {new Date().getFullYear()} Shield Consulting. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#services" className="hover:text-slate-900">Services</a>
              <a href="#about" className="hover:text-slate-900">About</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
