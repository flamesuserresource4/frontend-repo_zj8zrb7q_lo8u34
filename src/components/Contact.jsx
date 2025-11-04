import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const mailtoHref = () => {
    const subject = encodeURIComponent('Consultation request');
    const body = encodeURIComponent(`Hello,\n\nMy name is ${name}.\n\n${message}\n\nYou can reach me at ${email}.`);
    return `mailto:hello@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Contact</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Tell us about your goals. Well respond within one business day.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Get in touch</h3>
            <p className="mt-2 text-sm text-slate-600">
              Prefer email? Reach out at <span className="font-medium text-slate-900">hello@example.com</span> or use the quick form.
            </p>

            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = mailtoHref();
              }}
            >
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-sky-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-sky-500"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">How can we help?</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-sky-500"
                  placeholder="Briefly describe your needs"
                />
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-2.5 text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  Send message
                </button>
                <p className="text-xs text-slate-500">No spam. No obligations.</p>
              </div>
            </form>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-slate-700">Headquarters</h4>
                <p className="mt-1 text-slate-600">Remote-first • Global clients</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-700">Availability</h4>
                <p className="mt-1 text-slate-600">New client onboarding within 2–4 weeks</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-700">Capabilities</h4>
                <ul className="mt-2 list-inside list-disc text-slate-600">
                  <li>Security assessments & roadmap</li>
                  <li>Cloud landing zones & cost control</li>
                  <li>Platform engineering & automation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
