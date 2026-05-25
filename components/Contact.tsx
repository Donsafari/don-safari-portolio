"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to a form backend (e.g. Resend, Formspree, or EmailJS)
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="py-28 px-6 bg-stone-900/40 border-t border-stone-800/50"
    >
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="text-amber-400/70 tracking-[0.3em] uppercase text-xs mb-3">
          Contact
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-stone-100 mb-4">
          Let&apos;s work together
        </h2>
        <p className="text-stone-400 font-light">
          Booking a session, a collaboration, or just saying hello — reach out
          and I&apos;ll get back to you within 48 hours.
        </p>
      </div>

      {submitted ? (
        <div className="max-w-md mx-auto text-center py-16">
          <p className="font-serif text-2xl text-amber-200 mb-2">
            Message received.
          </p>
          <p className="text-stone-400 text-sm">
            I&apos;ll be in touch shortly.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs text-stone-500 tracking-widest uppercase mb-2">
                Name
              </label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-stone-900 border border-stone-700 text-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-amber-200/60 transition-colors placeholder:text-stone-600"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-xs text-stone-500 tracking-widest uppercase mb-2">
                Email
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-stone-900 border border-stone-700 text-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-amber-200/60 transition-colors placeholder:text-stone-600"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-stone-500 tracking-widest uppercase mb-2">
              Message
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-stone-900 border border-stone-700 text-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-amber-200/60 transition-colors resize-none placeholder:text-stone-600"
              placeholder="Tell me about your project, session idea, or any questions…"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 bg-amber-200 text-stone-950 text-sm font-medium tracking-widest uppercase hover:bg-amber-100 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}
