export interface NeuroSurgicalNavLink {
  label: string;
  href: string;
}

export interface NeuroSurgicalHeaderData {
  logoPath: string;
  logoAlt: string;
  brandName: string;
  navLinks: NeuroSurgicalNavLink[];
  ctaLabel: string;
  ctaHref: string;
  mobileMenuOpenLabel: string;
  mobileMenuCloseLabel: string;
}

export interface NeuroSurgicalHeroMetric {
  id: string;
  value: string;
  label: string;
}

export interface NeuroSurgicalHeroData {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  doctorImage: string;
  doctorImageAlt: string;
  metrics: NeuroSurgicalHeroMetric[];
}

export interface NeuroSurgicalAboutPillar {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface NeuroSurgicalAboutData {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  statValue: string;
  statLabel: string;
  pillars: NeuroSurgicalAboutPillar[];
}

export interface NeuroSurgicalServiceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  duration: string;
  highlight: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface NeuroSurgicalServicesData {
  eyebrow: string;
  title: string;
  subtitle: string;
  prevAriaLabel: string;
  nextAriaLabel: string;
  items: NeuroSurgicalServiceItem[];
}

export interface NeuroSurgicalWhyItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface NeuroSurgicalWhyChooseUsData {
  eyebrow: string;
  title: string;
  description: string;
  primaryImage: string;
  primaryImageAlt: string;
  secondaryImage: string;
  secondaryImageAlt: string;
  badgeTitle: string;
  badgeSubtitle: string;
  items: NeuroSurgicalWhyItem[];
}

export interface NeuroSurgicalTestimonialItem {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  quote: string;
  avatar: string;
  avatarAlt: string;
}

export interface NeuroSurgicalTestimonialsData {
  eyebrow: string;
  title: string;
  subtitle: string;
  prevAriaLabel: string;
  nextAriaLabel: string;
  items: NeuroSurgicalTestimonialItem[];
}

export interface NeuroSurgicalFaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface NeuroSurgicalFaqData {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  calloutTitle: string;
  calloutText: string;
  calloutCtaLabel: string;
  calloutCtaHref: string;
  items: NeuroSurgicalFaqItem[];
}

export interface NeuroSurgicalContactInfoItem {
  id: string;
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface NeuroSurgicalContactFormLabels {
  heading: string;
  subheading: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  treatmentLabel: string;
  treatmentOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  successTitle: string;
  successMessage: string;
  resetLabel: string;
}

export interface NeuroSurgicalContactData {
  eyebrow: string;
  title: string;
  subtitle: string;
  panelTitle: string;
  panelDescription: string;
  infoItems: NeuroSurgicalContactInfoItem[];
  form: NeuroSurgicalContactFormLabels;
}

export interface NeuroSurgicalFooterLink {
  label: string;
  href: string;
}

export interface NeuroSurgicalFooterData {
  logoPath: string;
  logoAlt: string;
  brandSummary: string;
  quickLinksTitle: string;
  quickLinks: NeuroSurgicalFooterLink[];
  usefulLinksTitle: string;
  usefulLinks: NeuroSurgicalFooterLink[];
  contactTitle: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  copyrightText: string;
}

export interface NeuroSurgicalThemeData {
  fontFamily: string;
  displayFontFamily: string;
}

export interface NeuroSurgicalPageComponent {
  key: string;
  component: string;
}

export interface NeuroSurgicalTemplateData {
  common: {
    theme: NeuroSurgicalThemeData;
    Footer: NeuroSurgicalFooterData;
  };
  categories: {
    NeuroSurgical: {
      sections: {
        Header: {
          variants: {
            NeuroSurgicalHeader2: NeuroSurgicalHeaderData;
          };
        };
        Hero: {
          variants: {
            NeuroSurgicalHero2: NeuroSurgicalHeroData;
          };
        };
        AboutUs: {
          variants: {
            NeuroSurgicalAboutUs2: NeuroSurgicalAboutData;
          };
        };
        Services: {
          variants: {
            NeuroSurgicalServices2: NeuroSurgicalServicesData;
          };
        };
        WhyChooseUs: {
          variants: {
            NeuroSurgicalWhyChooseUs2: NeuroSurgicalWhyChooseUsData;
          };
        };
        Testimonials: {
          variants: {
            NeuroSurgicalTestimonials2: NeuroSurgicalTestimonialsData;
          };
        };
        Faq: {
          variants: {
            NeuroSurgicalFaq2: NeuroSurgicalFaqData;
          };
        };
        Contact: {
          variants: {
            NeuroSurgicalContact2: NeuroSurgicalContactData;
          };
        };
      };
    };
  };
  pages: {
    home: {
      components: NeuroSurgicalPageComponent[];
    };
  };
}
