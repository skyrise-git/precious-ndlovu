export const site = {
  fullName: "Precious Ndlovu",
  taglineShort:
    "Speaker · Entrepreneur · Crown Ambassador · Wealth & Health advocate",
  heroLead:
    "Guiding people toward success in wealth and health—with practical strategies and a thriving community mindset.",
  aboutTitle: "I'm Precious Ndlovu",
  aboutSubtitle: "Dynamic entrepreneur · Crown Ambassador",
  aboutParagraphs: [
    "Precious Ndlovu is a dynamic entrepreneur focused on helping individuals unlock their potential—combining leadership, mentorship, and a clear path to growth.",
    "Whether you are exploring a new opportunity or scaling what you have already started, Precious brings clarity, energy, and a partner-minded approach to the journey.",
  ],
  quote: {
    text: "Success is built on consistent action, supportive relationships, and the courage to start before you feel ready. My mission is to walk beside you—with strategy, heart, and accountability.",
    attribution: "Precious Ndlovu",
  },
  pillars: [
    {
      title: "Strategy sessions",
      body: "Focused conversations to clarify your goals, map your next steps, and build momentum with a practical plan.",
    },
    {
      title: "Growth training",
      body: "Training designed to strengthen your skills and confidence—so you can show up consistently and lead with purpose.",
    },
    {
      title: "Mentorship",
      body: "Ongoing support and perspective as you navigate challenges, celebrate wins, and build sustainable results.",
    },
  ],
  packagesIntro: {
    title: "Member packages",
    subtitle: "Choose a starting point that fits you—then upgrade as you grow.",
  },
  compensationIntro: {
    title: "Compensation overview",
    subtitle:
      "Summary for education only. Always verify details with official Revoobit materials and compliance guidance.",
  },
  finalCta: {
    title: "Unlock your next chapter with Precious Ndlovu",
    body: "Ready to explore the opportunity? Take the next step and connect today.",
    primaryLabel: "I'm ready to get started",
    secondaryLabel: "Learn more",
    primaryHref: "https://example.com/signup",
    secondaryHref: "https://example.com/info",
  },
  contact: {
    title: "Send a message",
    subtitle: "Tell Precious what you're looking for and the best way to reach you.",
  },
  disclaimerShort:
    "Earnings depend on individual effort, market conditions, and compliance with company policies. Results are not guaranteed.",
  stockAttribution:
    "Stock photography: Unsplash (see image alt text for photographer credits where applicable).",
} as const;

export type MediaSlotId =
  | "personHero"
  | "personAbout"
  | "packageRevookit"
  | "packageStarter"
  | "packageBronze"
  | "packageSilver"
  | "packageGold";

export const mediaSlots: Record<
  MediaSlotId,
  { alt: string; defaultSrc: string }
> = {
  personHero: {
    alt: "Confident professional woman smiling — stock portrait",
    defaultSrc:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80",
  },
  personAbout: {
    alt: "Professional at work — stock image",
    defaultSrc:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80",
  },
  packageRevookit: {
    alt: "Wellness product flatlay — stock",
    defaultSrc:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80",
  },
  packageStarter: {
    alt: "Supplements and healthy lifestyle — stock",
    defaultSrc:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
  },
  packageBronze: {
    alt: "Fresh ingredients and vitality — stock",
    defaultSrc:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
  },
  packageSilver: {
    alt: "Wellness routine — stock",
    defaultSrc:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
  },
  packageGold: {
    alt: "Celebration and achievement — stock",
    defaultSrc:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  },
};

export const memberPackages = [
  {
    id: "revookit",
    code: "01",
    name: "REVOOKIT",
    rv: 25,
    products: ["1× Miira-Phyll"],
    upgradeWindow: "30 days",
    highlights: ["Entry-level starting point"],
    mediaSlot: "packageRevookit" as const,
    recommended: false,
  },
  {
    id: "starter",
    code: "02",
    name: "STARTER",
    rv: 50,
    products: ["1× Miira-Cell+", "1× Miiralife"],
    upgradeWindow: "30 days",
    highlights: [
      "Group Incentive up to 5 levels",
      "Sponsor Bonus up to 30% (by qualification)",
    ],
    mediaSlot: "packageStarter" as const,
    recommended: false,
  },
  {
    id: "bronze",
    code: "03",
    name: "BRONZE",
    rv: 100,
    products: ["1× Miira-Cell+", "1× Miiralife (2 boxes total)"],
    upgradeWindow: "50 days",
    highlights: [
      "Group Incentive up to 6 levels",
      "Sponsor Bonus up to 30% (by qualification)",
    ],
    mediaSlot: "packageBronze" as const,
    recommended: false,
  },
  {
    id: "silver",
    code: "04",
    name: "SILVER",
    rv: 500,
    products: ["5× Miira-Cell+", "5× Miiralife (10 boxes total)"],
    upgradeWindow: "Unlimited",
    highlights: [
      "Group Incentive up to 8 levels",
      "Sponsor Bonus up to 30% (by qualification)",
      "Development Bonus capped at 2,500 RV/day (by qualification)",
    ],
    mediaSlot: "packageSilver" as const,
    recommended: false,
  },
  {
    id: "gold",
    code: "05",
    name: "GOLD",
    rv: 1000,
    products: ["10× Miira-Cell+", "10× Miiralife (20 boxes total)"],
    upgradeWindow: "Unlimited",
    highlights: [
      "Group Incentive up to 10 levels",
      "Sponsor Bonus up to 35% (highest tier, by qualification)",
      "Unlimited Development Bonus (by qualification)",
    ],
    mediaSlot: "packageGold" as const,
    recommended: true,
  },
] as const;
