import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { NeuroSurgicalHeroData } from '@/types/templates.types';

interface HeroProps {
  data: NeuroSurgicalHeroData;
}

export function Hero({ data }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-[540px] w-full items-center justify-center overflow-hidden bg-[var(--color-primary-deep)] py-20 sm:min-h-[600px] lg:min-h-[660px] lg:py-28"
    >
      <Image
        src="/services/axon-service-vascular.jpg"
        alt="Neurosurgical operating team performing microsurgery"
        fill
        unoptimized
        priority
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#051122]/80 via-[#0b2545]/75 to-[#051122]/85"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center lg:px-8">
        <div className="inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 sm:text-sm">
          <span className="h-px w-8 bg-blue-300/60" aria-hidden="true" />
          <span>{data.badge}</span>
          <span className="h-px w-8 bg-blue-300/60" aria-hidden="true" />
        </div>

        <h1 className="font-display-title mt-6 text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {data.titlePrefix}{' '}
          <span className="text-blue-300">{data.titleHighlight}</span>{' '}
          {data.titleSuffix}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
          {data.description}
        </p>

        <div className="mt-9 flex justify-center">
          <Link
            href={data.primaryCtaHref}
            className="inline-flex items-center gap-2.5 rounded-full bg-[var(--color-accent)] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#1d4ed8] focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-[var(--color-primary-deep)] sm:text-base"
          >
            <span>{data.primaryCtaLabel}</span>
            <FiArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
