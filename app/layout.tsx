import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import { NeuroSurgicalTemplateData } from '@/types/templates.types';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Axon NeuroSurgical | Evidence-Based Brain, Nerve & Spine Specialists',
  description:
    'Fellowship-trained neurosurgeons delivering minimally invasive spine surgery, cranial microsurgery, stereotactic navigation, and precision nerve care.',
  icons: {
    icon: '/main logo/header logo.webp',
  },
};

function extractFontName(value: string): string {
  return value.split(',')[0].replace(/['"]/g, '').trim();
}

function buildGoogleFontsUrl(fonts: string[]): string {
  const unique = [...new Set(fonts.map(extractFontName).filter(Boolean))];
  const families = unique
    .map((name) => `family=${encodeURIComponent(name)}:wght@400;500;600;700;800`)
    .join('&');
  return `https://fonts.googleapis.com/css2?${families}&display=swap`;
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const data = rawData as NeuroSurgicalTemplateData;
  const sections = data.categories.NeuroSurgical.sections;
  const bodyFont = extractFontName(data.common.theme.fontFamily);
  const displayFont = extractFontName(data.common.theme.displayFontFamily);
  const googleFontsHref = buildGoogleFontsUrl([bodyFont, displayFont]);

  const fontStyle = {
    '--font-site': `'${bodyFont}', system-ui, sans-serif`,
    '--font-display-site': `'${displayFont}', system-ui, sans-serif`,
    fontFamily: `'${bodyFont}', system-ui, sans-serif`,
  } as CSSProperties;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={googleFontsHref} />
      </head>
      <body style={fontStyle} className="font-sans antialiased">
        <Header data={sections.Header.variants.NeuroSurgicalHeader2} />
        {children}
        <Footer data={data.common.Footer} />
      </body>
    </html>
  );
}
