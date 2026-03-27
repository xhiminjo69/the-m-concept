'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

const projectTypes = ['Commercial', 'Hospitality', 'Residential', 'Other'];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-surface rounded border border-border">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
          style={{ background: 'rgba(244,81,30,0.08)' }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F4511E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3
          className="font-display font-light text-stone-800 mb-3"
          style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
        >
          Message Received
        </h3>
        <p className="font-body text-muted leading-relaxed max-w-sm">
          Thank you for reaching out. Our team will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <span className="eyebrow">Send a Message</span>
        <h2
          className="font-display font-light text-stone-800 leading-tight tracking-tight mt-4 mb-8"
          style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
        >
          Tell us about<br />your project.
        </h2>
      </div>

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="input-label" htmlFor="name">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="input"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="input-label" htmlFor="email">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="input"
            placeholder="your@email.com"
          />
        </div>
      </div>

      {/* Phone + Project Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="input-label" htmlFor="phone">Phone (optional)</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="input"
            placeholder="+355..."
          />
        </div>
        <div>
          <label className="input-label" htmlFor="type">Project Type</label>
          <select
            id="type"
            name="type"
            value={form.type}
            onChange={handleChange}
            className="input"
            style={{ cursor: 'pointer' }}
          >
            <option value="">Select a type</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="input-label" htmlFor="message">Your Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="input resize-none"
          placeholder="Describe your project, space, or requirements…"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary btn-lg self-start"
        style={{ opacity: loading ? 0.7 : 1 }}
      >
        {loading ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
