import type { ReactNode } from 'react';
import rawData from '@/data/templates.json';
import { NeuroSurgicalTemplateData } from '@/types/templates.types';
import { Hero } from '@/components/sections/Hero';
import { AboutUs } from '@/components/sections/AboutUs';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  const data = rawData as NeuroSurgicalTemplateData;
  const sections = data.categories.NeuroSurgical.sections;
  const order = data.pages.home.components;

  const sectionMap: Record<string, ReactNode> = {
    Hero: <Hero data={sections.Hero.variants.NeuroSurgicalHero2} />,
    AboutUs: <AboutUs data={sections.AboutUs.variants.NeuroSurgicalAboutUs2} />,
    Services: <Services data={sections.Services.variants.NeuroSurgicalServices2} />,
    WhyChooseUs: <WhyChooseUs data={sections.WhyChooseUs.variants.NeuroSurgicalWhyChooseUs2} />,
    Testimonials: (
      <Testimonials data={sections.Testimonials.variants.NeuroSurgicalTestimonials2} />
    ),
    Faq: <Faq data={sections.Faq.variants.NeuroSurgicalFaq2} />,
    Contact: <Contact data={sections.Contact.variants.NeuroSurgicalContact2} />,
  };

  return (
    <main className="flex min-h-screen w-full min-w-0 flex-col overflow-x-hidden bg-[var(--color-bg-main)]">
      {order.map((item) => (
        <div key={item.key}>{sectionMap[item.key]}</div>
      ))}
    </main>
  );
}
