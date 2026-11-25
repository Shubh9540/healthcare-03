import { FiClock, FiCpu, FiFileText, FiShield } from 'react-icons/fi';
import { NeuroSurgicalWhyChooseUsData } from '@/types/templates.types';

interface WhyChooseUsProps {
  data: NeuroSurgicalWhyChooseUsData;
}

function renderWhyIcon(icon: string) {
  switch (icon) {
    case 'cpu':
      return <FiCpu className="h-5 w-5" aria-hidden="true" />;
    case 'file':
      return <FiFileText className="h-5 w-5" aria-hidden="true" />;
    case 'clock':
      return <FiClock className="h-5 w-5" aria-hidden="true" />;
    default:
      return <FiShield className="h-5 w-5" aria-hidden="true" />;
  }
}

export function WhyChooseUs({ data }: WhyChooseUsProps) {
  return (
    <section
      id="why-choose-us"
      className="w-full overflow-hidden bg-white py-10 lg:py-16"
    >
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-12">
          <div className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">
            <span className="h-[2px] w-7 bg-[var(--color-accent)]" />
            <span>{data.eyebrow}</span>
            <span className="h-[2px] w-7 bg-[var(--color-accent)]" />
          </div>
          <h2 className="font-display-title mt-3 text-2xl font-bold leading-tight text-[var(--color-heading)] sm:text-3xl lg:text-4xl">
            {data.title}
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-text)] sm:text-base">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex flex-col justify-between rounded-2xl bg-[var(--color-accent)] p-6 text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#1d4ed8] hover:shadow-md"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white">
                {renderWhyIcon(item.icon)}
              </div>
              <div className="mt-5">
                <h3 className="font-display-title text-base font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
