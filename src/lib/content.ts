export type Metric = {
  value: string;
  label: string;
};

export type AccordionItem = {
  number: string;
  title: string;
  body: string;
};

export type PortfolioCard =
  | {
      kind: "logo";
      brand: string;
      caption: string;
      tone: "ink" | "taupe" | "ocean" | "blue-grey";
    }
  | {
      kind: "image";
      src: string;
      alt: string;
      caption: string;
    };

export type Leader = {
  name: string;
  role: string;
  quote: string;
  image: string;
  bullets: string[];
};

// === HERO ===
export const HERO = {
  eyebrow: "Private Capital · Family Office",
  headline:
    "Backing the Next Generation of Acquisition Entrepreneurs.",
  subheadline:
    "We provide flexible capital, real-world experience, and aligned partnership for search funds and long-term holding companies.",
  primaryCta: "Get in touch",
  secondaryCta: "Our Portfolio",
  bgImage:
    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=2400&q=80",
  stat: {
    label: "Assets Under Management",
    value: "$90M+",
    sub: "Across two active funds",
  },
};

// === ABOUT ===
export const ABOUT = {
  heading: "A Family Office Built on Experience and Alignment.",
  paragraph:
    "We back entrepreneurs, independent sponsors, and long-term operators with aligned capital and real-world operating experience.",
  ctaLabel: "More on Our Approach",
  image:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80",
  imageAlt:
    "Two professionals collaborating in a softly lit modern conference room.",
  funds: [
    { label: "Fund I", year: "2024", value: "$35M" },
    { label: "Fund II", year: "2025", value: "$55M" },
  ],
};

export const METRICS: Metric[] = [
  { value: "$90M+", label: "Assets Under Management" },
  { value: "25+", label: "Transactions Completed" },
  { value: "18+", label: "Years of Experience" },
];

export const PORTFOLIO_BRANDS = [
  "Steel River",
  "Union Software Group",
  "Pay4Leads",
  "Swoogo",
  "Rivermark Industrial",
  "Halcyon Logistics",
  "Northwind Capital",
  "Aldridge & Co.",
];

// === ACCORDION ===
export const ACCORDION_ITEMS: AccordionItem[] = [
  {
    number: "01",
    title: "Guidance Grounded in Real-World Experience",
    body: "We have built, scaled, and exited businesses ourselves. Our advice comes from operating reality, not theory.",
  },
  {
    number: "02",
    title: "A Partner Beyond Just Capital",
    body: "We provide more than a wire transfer. We commit time, network, and operating muscle when it matters most.",
  },
  {
    number: "03",
    title: "Resilient and Relentless Facing Diverse Challenges",
    body: "We have weathered cycles, distressed assets, and complex carve-outs. We stay engaged when the operating gets hard.",
  },
  {
    number: "04",
    title: "A Foundation Built on Lasting Trust",
    body: "Our agreements are simple and our hold periods are open-ended. We invest as if our family name is on the deal.",
  },
];

// === PORTFOLIO ===
export const PORTFOLIO_CARDS: PortfolioCard[] = [
  {
    kind: "logo",
    brand: "Steel River",
    caption: "Industrial fabrication · 2021",
    tone: "ink",
  },
  {
    kind: "image",
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    alt: "Industrial steel structure under a moody sky.",
    caption: "Heavy infrastructure · majority recap",
  },
  {
    kind: "logo",
    brand: "Union Software Group",
    caption: "Vertical SaaS · 2022",
    tone: "ocean",
  },
  {
    kind: "image",
    src: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1400&q=80",
    alt: "Modern bus terminal at dusk with crowds in motion.",
    caption: "Transportation services · platform deal",
  },
  {
    kind: "logo",
    brand: "Pay4Leads",
    caption: "Performance marketing · 2023",
    tone: "taupe",
  },
  {
    kind: "image",
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80",
    alt: "Office collaboration moment at a wide wooden desk.",
    caption: "Operator-led growth · minority stake",
  },
  {
    kind: "logo",
    brand: "Swoogo",
    caption: "Event software · 2023",
    tone: "blue-grey",
  },
];

// === STRENGTHS ===
export const STRENGTHS = {
  eyebrow: "Why Partner with Us",
  title: "Key Strengths and Principles",
  subtitle:
    "An operating philosophy refined across cycles, deal types, and operator profiles.",
  chips: [
    "First-hand business experience across sectors.",
    "Capital-minded alignment and long-term thinking.",
    "Quick action and uncommon operational support.",
    "Unwavering discretion and institutional rigor.",
  ],
};

// === LEADERSHIP ===
export const LEADERS: Leader[] = [
  {
    name: "Daniel Farag",
    role: "Managing Partner",
    quote:
      "We invest the way we want to be invested in. Patient, candid, and committed to the long arc.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
    bullets: [
      "Former CEO of a mid-market industrial platform with a $400M exit.",
      "20+ years in distressed asset turnaround and operator-led buyouts.",
      "Advisory board member at multiple mid-market equity firms.",
    ],
  },
  {
    name: "Dr. Andrew Abraham",
    role: "Board Director · Strategic Advisor",
    quote:
      "Quiet rigor compounds. We measure success in decades, not quarters.",
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80",
    bullets: [
      "Ph.D. in Quantitative Economics with a focus on risk mitigation.",
      "Architect of our proprietary 'Resilience Matrix' for vetting deals.",
      "Specialist in capital allocation across the technology sector.",
    ],
  },
];

// === CTA ===
export const CTA = {
  title: "Let's Connect.",
  body: "We are always open to conversations with operators, search funds, and brokers looking for a long-term partner.",
  primary: "Get in Touch",
  image:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80",
};

// === NAV / FOOTER ===
export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Investment Criteria", href: "#approach" },
  { label: "Portfolio", href: "#portfolio" },
];

export const FOOTER = {
  brand: "Astra Capital",
  statement:
    "Astra Capital backs exceptional operators building enduring companies. Preserving legacy through precision and patient capital.",
  columns: [
    {
      heading: "Firm",
      links: ["Home", "About", "Criteria", "Portfolio", "Contact"],
    },
    {
      heading: "Resources",
      links: ["Press", "Insights", "Disclosures", "Privacy", "Terms"],
    },
  ],
  social: ["LinkedIn", "X / Twitter", "Email"],
};
