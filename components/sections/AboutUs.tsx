import Image from 'next/image';
import { FiHeart, FiMonitor, FiShield } from 'react-icons/fi';
import { NeuroSurgicalAboutData } from '@/types/templates.types';

interface AboutUsProps {
  data: NeuroSurgicalAboutData;
}

function renderPillarIcon(icon: string) {
  switch (icon) {
    case 'heart':
      return <FiHeart className="h-5 w-5" aria-hidden="true" />;
    case 'scan':
      return <FiMonitor className="h-5 w-5" aria-hidden="true" />;
    default:
      return <FiShield className="h-5 w-5" aria-hidden="true" />;
  }
}

export function AboutUs({ data }: AboutUsProps) {
  return (
    <section
      id="about"
      className="w-full overflow-hidden bg-white py-14 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:aspect-auto lg:h-full">
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                unoptimized
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              <span className="h-[2px] w-7 bg-[var(--color-accent)]" />
              <span>{data.eyebrow}</span>
            </div>

            <h2 className="font-display-title mt-3 text-2xl font-bold leading-tight text-[var(--color-heading)] sm:text-3xl">
              {data.title}
            </h2>

            <p className="mt-3.5 text-sm leading-relaxed text-[var(--color-text)] sm:text-base">
              {data.description}
            </p>

            <div className="mt-6 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
              {data.pillars.map((pillar, idx) => (
                <div
                  key={`${pillar.id}-${idx}`}
                  className="flex items-start gap-3.5 py-4 first:pt-5 last:pb-0"
                >
                  <div className="mt-0.5 shrink-0 text-[var(--color-accent)]">
                    {renderPillarIcon(pillar.icon)}
                  </div>
                  <div>
                    <h3 className="font-display-title text-base font-bold text-[var(--color-heading)]">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {pillar.description}
                    </p>
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
