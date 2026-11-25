'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi';
import { NeuroSurgicalFaqData } from '@/types/templates.types';

interface FaqProps {
  data: NeuroSurgicalFaqData;
}

export function Faq({ data }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="w-full overflow-hidden bg-white py-10 lg:py-16"
    >
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <div className="mb-8 max-w-2xl lg:mb-10">
          <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">
            <span className="h-[2px] w-7 bg-[var(--color-accent)]" />
            <span>{data.eyebrow}</span>
          </div>
          <h2 className="font-display-title mt-3 text-2xl font-bold leading-tight text-[var(--color-heading)] sm:text-3xl lg:text-4xl">
            {data.title}
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-text)] sm:text-base">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/4.2] w-full overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] shadow-sm">
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-3 lg:col-span-7">
            {data.items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={`${item.id}-${idx}`}
                  className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
                    isOpen
                      ? 'border-[var(--color-accent)] shadow-sm'
                      : 'border-blue-200 hover:border-[var(--color-accent)]/60'
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleItem(idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none"
                  >
                    <span className="font-display-title text-sm font-bold text-[var(--color-heading)] sm:text-base">
                      {item.question}
                    </span>
                    <FiChevronDown
                      className={`h-5 w-5 shrink-0 text-[var(--color-accent)] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-blue-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-[var(--color-text)]">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
