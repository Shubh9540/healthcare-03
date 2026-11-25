'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa';
import { NeuroSurgicalTestimonialsData } from '@/types/templates.types';

interface TestimonialsProps {
  data: NeuroSurgicalTestimonialsData;
}

export function Testimonials({ data }: TestimonialsProps) {
  const isSlider = data.items.length > 3;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    slidesToScroll: 1,
    active: isSlider,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isSlider || !emblaApi) return;
    const handleSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', handleSelect);
    emblaApi.on('reInit', handleSelect);
    return () => {
      emblaApi.off('select', handleSelect);
      emblaApi.off('reInit', handleSelect);
    };
  }, [isSlider, emblaApi]);

  useEffect(() => {
    if (!isSlider || !emblaApi || isPaused) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 5500);
    return () => clearInterval(timer);
  }, [isSlider, emblaApi, isPaused]);

  const handlePrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const handleNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const staticGridClass =
    data.items.length === 1
      ? 'mx-auto grid max-w-md grid-cols-1 gap-5'
      : data.items.length === 2
        ? 'mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2'
        : 'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3';

  const renderCard = (item: NeuroSurgicalTestimonialsData['items'][number]) => (
    <article className="flex h-full flex-col justify-between rounded-3xl border border-[var(--color-border)] border-t-4 border-t-[var(--color-accent)] bg-gradient-to-b from-white to-[var(--color-primary-soft)]/45 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-400">
            {Array.from({ length: item.rating }).map((_, starIdx) => (
              <FaStar
                key={`star-${item.id}-${starIdx}`}
                className="h-4 w-4"
                aria-hidden="true"
              />
            ))}
          </div>
          <FaQuoteRight
            className="h-5 w-5 text-[var(--color-accent)]/30"
            aria-hidden="true"
          />
        </div>

        <blockquote className="mt-4 text-sm leading-relaxed text-[var(--color-text)] sm:text-[15px]">
          &ldquo;{item.quote}&rdquo;
        </blockquote>
      </div>

      <div className="mt-6 flex items-center gap-3.5 rounded-2xl bg-[var(--color-primary-soft)]/80 p-3.5">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-[var(--color-accent)]/30">
          <Image
            src={item.avatar}
            alt={item.avatarAlt}
            fill
            unoptimized
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="font-display-title truncate text-sm font-bold text-[var(--color-primary)]">
            {item.name}
          </p>
          <p className="truncate text-xs font-medium text-[var(--color-accent)]">
            {item.treatment}
          </p>
        </div>
      </div>
    </article>
  );

  return (
    <section
      id="testimonials"
      className="w-full overflow-hidden bg-[var(--color-bg-soft)] py-10 lg:py-16"
    >
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center lg:mb-10">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
            <FaQuoteLeft className="h-5 w-5" aria-hidden="true" />
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
              className="relative md:px-14"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <button
                type="button"
                onClick={handlePrev}
                aria-label={data.prevAriaLabel}
                className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-md transition-colors hover:bg-[var(--color-accent)] md:inline-flex"
              >
                <FiArrowLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label={data.nextAriaLabel}
                className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-md transition-colors hover:bg-[var(--color-accent)] md:inline-flex"
              >
                <FiArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>

              <div className="overflow-hidden" ref={emblaRef}>
                <div className="-ml-4 flex lg:-ml-5">
                  {data.items.map((item, idx) => (
                    <div
                      key={`${item.id}-${idx}`}
                      className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%] lg:pl-5"
                    >
                      {renderCard(item)}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label={data.prevAriaLabel}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-sm transition-colors hover:bg-[var(--color-accent)] md:hidden"
              >
                <FiArrowLeft className="h-4 w-4" aria-hidden="true" />
              </button>

              <div className="flex items-center gap-2">
                {data.items.map((item, idx) => (
                  <button
                    key={`t-dot-${item.id}-${idx}`}
                    type="button"
                    aria-label={`View review ${idx + 1}`}
                    onClick={() => emblaApi?.scrollTo(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      idx === selectedIndex
                        ? 'w-7 bg-[var(--color-accent)]'
                        : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                aria-label={data.nextAriaLabel}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-sm transition-colors hover:bg-[var(--color-accent)] md:hidden"
              >
                <FiArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
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
