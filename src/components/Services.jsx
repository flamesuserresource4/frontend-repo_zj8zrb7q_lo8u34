import React from 'react';
import { Shield, Server, Cloud, Lock } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Security Architecture',
    desc: 'Threat modeling, zero-trust networking, IAM hardening, and secure SDLC to protect your business at every layer.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'Scalable cloud foundations, cost optimization, and platform engineering to accelerate delivery with confidence.',
  },
  {
    icon: Server,
    title: 'Infrastructure Modernization',
    desc: 'Containerization, observability, and automation to evolve legacy systems without disruption.',
  },
  {
    icon: Lock,
    title: 'Governance & Compliance',
    desc: 'Security baselines, policy-as-code, and audit readiness aligned with ISO 27001, SOC 2, and CIS controls.',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Services</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Practical, high-impact engagements designed to reduce risk and increase velocity.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex rounded-lg bg-sky-50 p-3 text-sky-700 ring-1 ring-inset ring-sky-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
