'use client';

import { FormEvent, useState } from 'react';
import { FiCalendar, FiCheckCircle, FiClock, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { NeuroSurgicalContactData } from '@/types/templates.types';

interface ContactProps {
  data: NeuroSurgicalContactData;
}

function renderContactIcon(icon: string) {
  switch (icon) {
    case 'phone':
      return <FiPhone className="h-5 w-5" aria-hidden="true" />;
    case 'mail':
      return <FiMail className="h-5 w-5" aria-hidden="true" />;
    case 'map':
      return <FiMapPin className="h-5 w-5" aria-hidden="true" />;
    default:
      return <FiClock className="h-5 w-5" aria-hidden="true" />;
  }
}

export function Contact({ data }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState(data.form.treatmentOptions[0] ?? '');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setTreatment(data.form.treatmentOptions[0] ?? '');
    setMessage('');
  };

  return (
    <section
      id="contact"
      className="w-full overflow-hidden bg-[var(--color-bg-soft)] py-12 lg:py-20"
    >
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
            <FiCalendar className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">
            <span className="h-[2px] w-7 bg-[var(--color-accent)]" />
            <span>{data.eyebrow}</span>
            <span className="h-[2px] w-7 bg-[var(--color-accent)]" />
          </div>
          <h2 className="font-display-title mt-3 text-2xl font-bold leading-tight text-[var(--color-heading)] sm:text-3xl lg:text-4xl">
            {data.title}
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-text)] sm:text-base">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="rounded-3xl bg-[var(--color-accent)] p-6 text-white shadow-md sm:p-9 lg:col-span-7">
            {submitted ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-white">
                  <FiCheckCircle className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="font-display-title mt-4 text-xl font-bold text-white">
                  {data.form.successTitle}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/90">
                  {data.form.successMessage}
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[var(--color-accent)] transition-colors hover:bg-blue-50"
                >
                  {data.form.resetLabel}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-white/20 pb-5">
                  <h3 className="font-display-title text-xl font-bold text-white">
                    {data.form.heading}
                  </h3>
                  <p className="mt-1 text-xs text-white/90 sm:text-sm">
                    {data.form.subheading}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-xs font-semibold text-white"
                    >
                      {data.form.nameLabel}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={data.form.namePlaceholder}
                      className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/65 outline-none transition-all focus:border-white focus:bg-white/15 focus:ring-2 focus:ring-white/25"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-xs font-semibold text-white"
                    >
                      {data.form.emailLabel}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={data.form.emailPlaceholder}
                      className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/65 outline-none transition-all focus:border-white focus:bg-white/15 focus:ring-2 focus:ring-white/25"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-1.5 block text-xs font-semibold text-white"
                    >
                      {data.form.phoneLabel}
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={data.form.phonePlaceholder}
                      className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/65 outline-none transition-all focus:border-white focus:bg-white/15 focus:ring-2 focus:ring-white/25"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-treatment"
                      className="mb-1.5 block text-xs font-semibold text-white"
                    >
                      {data.form.treatmentLabel}
                    </label>
                    <select
                      id="contact-treatment"
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                      className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white outline-none transition-all focus:border-white focus:bg-white/15 focus:ring-2 focus:ring-white/25"
                    >
                      {data.form.treatmentOptions.map((opt, idx) => (
                        <option key={`opt-${idx}`} value={opt} className="text-slate-900">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-xs font-semibold text-white"
                  >
                    {data.form.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={data.form.messagePlaceholder}
                    className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/65 outline-none transition-all focus:border-white focus:bg-white/15 focus:ring-2 focus:ring-white/25"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[var(--color-accent)] shadow-md transition-colors hover:bg-blue-50 sm:w-auto"
                >
                  <FiSend className="h-4 w-4" aria-hidden="true" />
                  <span>{data.form.submitLabel}</span>
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5">
            <h3 className="font-display-title text-xl font-bold text-[var(--color-heading)] sm:text-2xl">
              {data.panelTitle}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-text)] sm:text-base">
              {data.panelDescription}
            </p>

            <div className="mt-8 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
              {data.infoItems.map((item, idx) => (
                <div key={`${item.id}-${idx}`} className="flex items-start gap-4 py-5 first:pt-6 last:pb-0">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)] text-white shadow-sm">
                    {renderContactIcon(item.icon)}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block text-base font-semibold text-[var(--color-heading)] transition-colors hover:text-[var(--color-accent)]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-base font-semibold text-[var(--color-heading)]">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
