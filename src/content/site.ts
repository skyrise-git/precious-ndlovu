export const site = {
  fullName: "Precious Ndlovu",
  taglineShort: "Global Speaker · Dynamic Entrepreneur · Crown Ambassador",
  heroSubtitle: "WEALTH & HEALTH COACH",
  heroLead:
    "Guiding individuals to unparalleled success in both wealth and health, empowering thousands through breakthrough opportunities within a thriving business community.",
  aboutTitle: "I'm Precious Ndlovu",
  aboutSubtitle: "Dynamic Entrepreneur | Crown Ambassador",
  aboutParagraphs: [
    "Precious Ndlovu is a visionary entrepreneur dedicated to guiding individuals towards unparalleled success. Her groundbreaking approach within the Network Marketing Industry has empowered thousands, fostering wealth creation under her exceptional leadership and mentorship.",
    "Through her innovative business model, Precious has been instrumental in enabling numerous leaders to achieve remarkable success, generating multi-million-dollar results within our dynamic enterprise.",
  ],
  quote: {
    text: "Success is built on consistent action, supportive relationships, and the courage to start before you feel ready. My mission is to walk beside you—with strategy, heart, and accountability.",
    attribution: "Precious Ndlovu",
  },
  ctaBanner: {
    text: "Empower your wealth journey today",
    buttonLabel: "Free meeting now",
    buttonHref: "#contact",
  },
  pillars: [
    {
      title: "Exclusive wealth strategy sessions",
      body: "Embark on a journey to financial prosperity with exclusive strategy sessions tailored to elevate your wealth creation game. Your key to unlocking a roadmap for success.",
    },
    {
      title: "Tailored wealth creation training",
      body: "A unique wealth creation training program to propel your financial success. Get essential skills and confidence needed to thrive in the competitive landscape of our business.",
    },
    {
      title: "Transformative wealth mentorship",
      body: "Benefit from proven expertise, strategies, and insights. Together, we'll navigate the industry, celebrate milestones, and lay the foundation for your wealth.",
    },
  ],
  packagesIntro: {
    title: "Member packages",
    subtitle: "Choose a starting point that fits you — then upgrade as you grow.",
  },
  compensationIntro: {
    title: "Compensation overview",
    subtitle:
      "Summary for education only. Always verify details with official Revoobit materials and compliance guidance.",
  },
  testimonials: [
    {
      name: "Zanele M.",
      role: "Team Leader",
      text: "Working with Precious changed everything. Her mentorship is practical, encouraging, and results-driven. I went from uncertainty to building a real income stream.",
    },
    {
      name: "Thabo K.",
      role: "Silver Member",
      text: "Precious is a selfless, visionary leader. She gives her time so openly. Under her guidance I found clarity and confidence to grow my business.",
    },
    {
      name: "Nombuso S.",
      role: "Gold Member",
      text: "She is a strong and inspiring mentor. Her leadership style fosters teamwork and breeds confidence. Precious helped me see what I was truly capable of.",
    },
    {
      name: "Sipho D.",
      role: "Bronze Member",
      text: "What I love most is the community. Precious doesn't just recruit, she builds families. The support system is real and the training is world-class.",
    },
  ],
  events: [
    { title: "Johannesburg — Leadership Training", date: "Coming Soon", location: "Johannesburg" },
    { title: "Cape Town — Leadership Training", date: "Coming Soon", location: "Cape Town" },
    { title: "Durban — Leadership Training", date: "Coming Soon", location: "Durban" },
  ],
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    tiktok: "https://tiktok.com",
  },
  contactInfo: {
    phone: "+27 00 000 0000",
    email: "info@preciousndlovu.com",
  },
  finalCta: {
    title: "Unlock success with Precious Ndlovu",
    body: "Eager to transform your life? Join me on a journey to prosperity and well-being. In our products-based passive income business, discover the keys to building wealth while nurturing your health.",
    primaryLabel: "I'm ready to change my life",
    secondaryLabel: "Learn more",
    primaryHref: "https://example.com/signup",
    secondaryHref: "https://example.com/info",
  },
  contact: {
    title: "Get in touch",
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
  | "aboutGallery1"
  | "aboutGallery2"
  | "aboutGallery3"
  | "aboutGallery4"
  | "aboutGallery5"
  | "aboutGallery6"
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
    alt: "Precious Ndlovu — professional portrait",
    defaultSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80",
  },
  personAbout: {
    alt: "Precious Ndlovu — at work",
    defaultSrc: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80",
  },
  aboutGallery1: {
    alt: "Family moments",
    defaultSrc: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80",
  },
  aboutGallery2: {
    alt: "Achievements and milestones",
    defaultSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80",
  },
  aboutGallery3: {
    alt: "Lifestyle and assets",
    defaultSrc: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&q=80",
  },
  aboutGallery4: {
    alt: "Community and leadership",
    defaultSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=700&q=80",
  },
  aboutGallery5: {
    alt: "Travel and experiences",
    defaultSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&q=80",
  },
  aboutGallery6: {
    alt: "Personal brand moments",
    defaultSrc: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80",
  },
  packageRevookit: {
    alt: "Wellness product — Revookit",
    defaultSrc: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80",
  },
  packageStarter: {
    alt: "Supplements and healthy lifestyle — Starter",
    defaultSrc: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
  },
  packageBronze: {
    alt: "Fresh ingredients — Bronze",
    defaultSrc: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
  },
  packageSilver: {
    alt: "Wellness routine — Silver",
    defaultSrc: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
  },
  packageGold: {
    alt: "Celebration — Gold",
    defaultSrc: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  },
};

export type PackageId = "revookit" | "starter" | "bronze" | "silver" | "gold";

/** Image slot for each package card — change only via code if you add new tiers. */
export type PackageMediaSlot =
  | "packageRevookit"
  | "packageStarter"
  | "packageBronze"
  | "packageSilver"
  | "packageGold";

export type MemberPackage = {
  id: PackageId;
  code: string;
  name: string;
  rv: number;
  products: string[];
  upgradeWindow: string;
  highlights: string[];
  mediaSlot: PackageMediaSlot;
  recommended: boolean;
};

/** Default packages (used when nothing is stored in the database yet). */
export const defaultMemberPackages: MemberPackage[] = [
  {
    id: "revookit",
    code: "01",
    name: "REVOOKIT",
    rv: 25,
    products: ["1× Miira-Phyll"],
    upgradeWindow: "30 days",
    highlights: ["Entry-level starting point"],
    mediaSlot: "packageRevookit",
    recommended: false,
  },
  {
    id: "starter",
    code: "02",
    name: "STARTER",
    rv: 50,
    products: ["Miira Cell / Miira Life"],
    upgradeWindow: "30 days",
    highlights: ["Group Incentive up to 5 levels", "Sponsor Bonus up to 30%"],
    mediaSlot: "packageStarter",
    recommended: false,
  },
  {
    id: "bronze",
    code: "03",
    name: "BRONZE",
    rv: 100,
    products: ["2× Miira Cell / 2× Miira Life"],
    upgradeWindow: "30 days",
    highlights: ["Group Incentive up to 6 levels", "Sponsor Bonus up to 30%"],
    mediaSlot: "packageBronze",
    recommended: false,
  },
  {
    id: "silver",
    code: "04",
    name: "SILVER",
    rv: 500,
    products: ["10× Miira Cell / 10× Miira Life"],
    upgradeWindow: "30 days",
    highlights: [
      "Group Incentive up to 8 levels",
      "Sponsor Bonus up to 30%",
      "Dev Bonus capped at 2,500 RV/day",
    ],
    mediaSlot: "packageSilver",
    recommended: false,
  },
  {
    id: "gold",
    code: "05",
    name: "GOLD",
    rv: 1000,
    products: ["20× Miira Cell / 20× Miira Life"],
    upgradeWindow: "Unlimited",
    highlights: [
      "Group Incentive up to 10 levels",
      "Sponsor Bonus up to 35%",
      "Unlimited Development Bonus",
    ],
    mediaSlot: "packageGold",
    recommended: true,
  },
];
