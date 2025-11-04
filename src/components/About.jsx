import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">About Us</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            We are a boutique IT consulting agency focused on security, cloud, and modern software delivery. Our mission is to simplify complexity and build long-term partnerships.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Security-first</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              From architecture to operations, we embed best practices like least privilege, zero-trust principles, and continuous compliance.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Vendor neutral</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              We recommend the right tools for your context—not the most popular logo. Your outcomes come first.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Outcomes focused</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Clear roadmaps, measurable milestones, and transparent communication from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
