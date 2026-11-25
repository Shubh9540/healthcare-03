import Image from 'next/image';
import Link from 'next/link';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { NeuroSurgicalFooterData } from '@/types/templates.types';

interface FooterProps {
  data: NeuroSurgicalFooterData;
}

export function Footer({ data }: FooterProps) {
  return (
    <footer className="w-full overflow-hidden border-t-2 border-[var(--color-accent)] bg-white text-[var(--color-text)]">
      <div className="mx-auto max-w-[1280px] px-4 py-10 lg:px-8 lg:py-12">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
          <div className="shrink-0 md:border-r md:border-[var(--color-border)] md:pr-12">
            <Link href="/#hero" className="inline-block focus:outline-none">
              <Image
                src={data.logoPath}
                alt={data.logoAlt}
                width={380}
                height={66}
                unoptimized
                className="h-16 w-auto object-contain sm:h-20"
              />
            </Link>
          </div>

          <div className="flex-1">
            <h3 className="font-display-title text-base font-bold text-[var(--color-heading)]">
              {data.quickLinksTitle}
            </h3>

            <ul className="mt-3.5 flex flex-wrap items-center gap-x-8 gap-y-2.5">
              {data.quickLinks.map((item, idx) => (
                <li key={`${item.href}-${idx}`}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-2.5 text-sm font-medium text-[var(--color-text-muted)]">
              <a
                href={`tel:${data.phone.replace(/[^+\d]/g, '')}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-[var(--color-accent)]"
              >
                <FiPhone className="h-4 w-4 text-[var(--color-accent)]" aria-hidden="true" />
                <span>{data.phone}</span>
              </a>
              <a
                href={`mailto:${data.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-[var(--color-accent)]"
              >
                <FiMail className="h-4 w-4 text-[var(--color-accent)]" aria-hidden="true" />
                <span>{data.email}</span>
              </a>
              <span className="inline-flex items-center gap-2">
                <FiMapPin className="h-4 w-4 text-[var(--color-accent)]" aria-hidden="true" />
                <span>{data.address}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)] bg-[var(--color-bg-soft)] py-4">
        <div className="mx-auto max-w-[1280px] px-4 text-center text-xs font-semibold text-[var(--color-text-muted)] lg:px-8">
          <p>{data.copyrightText}</p>
        </div>
      </div>
    </footer>
  );
}
