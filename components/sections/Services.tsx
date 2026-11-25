'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { FaUserMd } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { NeuroSurgicalServicesData } from '@/types/templates.types';

interface ServicesProps {
  data: NeuroSurgicalServicesData;
}

export function Services({ data }: ServicesProps) {
  const isSlider = data.items.length > 3;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    slidesToScroll: 1,
    active: isSlider,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!isSlider || !emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
  }, [isSlider, emblaApi, onSelect]);

  useEffect(() => {
    if (!isSlider || !emblaApi || isPaused) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [isSlider, emblaApi, isPaused]);

  const staticGridClass =
    data.items.length === 1
      ? 'mx-auto grid max-w-md grid-cols-1 gap-6'
      : data.items.length === 2
        ? 'mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2'
        : 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3';

  const renderCard = (item: NeuroSurgicalServicesData['items'][number]) => (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-bg-soft)]">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <span className="absolute left-3.5 top-3.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[var(--color-primary)] shadow-sm backdrop-blur-sm">
          {item.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display-title text-lg font-bold text-[var(--color-heading)]">
          {item.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text)]">
          {item.description}
        </p>

        <Link
          href={item.ctaHref}
          className="mt-5 inline-flex items-center gap-1.5 border-t border-[var(--color-border)] pt-4 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]"
        >
          <span>{item.ctaLabel}</span>
          <FiArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );

  return (
    <section
      id="services"
      className="w-full overflow-hidden bg-[var(--color-bg-soft)] py-8 lg:py-14"
    >
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center lg:mb-10">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
            <FaUserMd className="h-6 w-6" aria-hidden="true" />
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

        {isSlider ? (
          <>
            <div
              className="overflow-hidden"
              ref={emblaRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="-ml-4 flex lg:-ml-6">
                {data.items.map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%] lg:pl-6"
                  >
                    {renderCard(item)}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              {scrollSnaps.map((_, idx) => (
                <button
                  key={`service-dot-${idx}`}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => emblaApi?.scrollTo(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === selectedIndex
                      ? 'w-7 bg-[var(--color-primary)]'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </>
        ) : (
          <div className={staticGridClass}>
            {data.items.map((item, idx) => (
              <div key={`${item.id}-${idx}`}>{renderCard(item)}</div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

