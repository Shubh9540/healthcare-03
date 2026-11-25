'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiMenu, FiX } from 'react-icons/fi';
import { NeuroSurgicalHeaderData } from '@/types/templates.types';

interface HeaderProps {
  data: NeuroSurgicalHeaderData;
}

export function Header({ data }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(data.navLinks[0]?.href ?? '/#hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = data.navLinks
      .map((item) => item.href.replace('/#', '').replace('#', ''))
      .filter(Boolean);

    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
      const scrollPos = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i -= 1) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveHref(`/#${sectionIds[i]}`);
          return;
        }
      }
      if (data.navLinks[0]) {
        setActiveHref(data.navLinks[0].href);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data.navLinks]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--color-border)] bg-white/95 shadow-sm backdrop-blur-md'
          : 'border-b border-transparent bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-2 px-4 py-3 sm:gap-4 lg:px-8">
        <Link
          href="/#hero"
          className="flex min-w-0 max-w-[calc(100%-52px)] items-center focus:outline-none sm:max-w-none"
          aria-label={data.brandName}
        >
          <Image
            src={data.logoPath}
            alt={data.logoAlt}
            width={380}
            height={66}
            unoptimized
            priority
            className="h-10 w-auto max-w-full object-contain object-left sm:h-16 lg:h-20"
          />
        </Link>

        <nav className="font-display-title hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {data.navLinks.map((link, idx) => {
            const isActive = activeHref === link.href;
            return (
              <Link
                key={`${link.href}-${idx}`}
                href={link.href}
                onClick={() => setActiveHref(link.href)}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[var(--color-primary)]'
                    : 'text-[var(--color-text)] hover:text-[var(--color-primary)]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0.5 left-3.5 right-3.5 h-0.5 rounded-full bg-[var(--color-accent)] transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href={data.ctaHref}
            className="font-display-title hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[var(--color-primary-hover)] sm:inline-flex"
          >
            <FiCalendar className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{data.ctaLabel}</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? data.mobileMenuCloseLabel : data.mobileMenuOpenLabel}
            aria-expanded={mobileOpen}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-heading)] transition-colors hover:bg-[var(--color-bg-soft)] lg:hidden"
          >
            {mobileOpen ? (
              <FiX className="h-5 w-5" aria-hidden="true" />
            ) : (
              <FiMenu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--color-border)] bg-white px-4 pb-5 pt-3 shadow-lg lg:hidden">
          <nav className="font-display-title flex flex-col gap-1" aria-label="Mobile navigation">
            {data.navLinks.map((link, idx) => {
              const isActive = activeHref === link.href;
              return (
                <Link
                  key={`mobile-${link.href}-${idx}`}
                  href={link.href}
                  onClick={() => {
                    setActiveHref(link.href);
                    setMobileOpen(false);
                  }}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[var(--color-primary-soft)] text-[var(--color-primary)]'
                      : 'text-[var(--color-text)] hover:bg-[var(--color-bg-soft)]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href={data.ctaHref}
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              <FiCalendar className="h-4 w-4" aria-hidden="true" />
              <span>{data.ctaLabel}</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
