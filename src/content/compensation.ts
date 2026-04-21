/** Structured compensation copy — verify against official Revoobit documents before publishing. */

export const sponsorBonusByPackage = [
  { package: "Revookit", percent: 20 },
  { package: "Starter", percent: 30 },
  { package: "Bronze", percent: 30 },
  { package: "Silver", percent: 30 },
  { package: "Gold", percent: 35 },
] as const;

export const sponsorBonusExample =
  "Illustrative example: if you are Gold and someone you enroll purchases Gold (1,000 RV), the Sponsor Bonus component can be up to 350 RV at a 35% rate—subject to plan rules and qualification.";

export const developmentBonusCaps = [
  { package: "Revookit", detail: "1,000 RV/month total" },
  { package: "Starter", detail: "50 RV/day" },
  { package: "Bronze", detail: "100 RV/day" },
  { package: "Silver", detail: "2,500 RV/day" },
  { package: "Gold", detail: "Unlimited" },
] as const;

export const developmentNote =
  "Development Bonus activates after upgrading your package (per company plan).";

export const groupIncentiveLevels = [
  { level: 1, percent: "5%" },
  { level: 2, percent: "4%" },
  { level: 3, percent: "3%" },
  { level: 4, percent: "2%" },
  { level: 5, percent: "1%" },
  { level: 6, percent: "1%" },
  { level: 7, percent: "1%" },
  { level: 8, percent: "1%" },
  { level: 9, percent: "1%" },
  { level: 10, percent: "1%" },
] as const;

export const groupIncentiveQualification =
  "Minimum 25 RV personal repurchase per month required to qualify (per plan).";

export const groupIncentiveUnlocks = [
  { package: "Revookit", levels: "None" },
  { package: "Starter", levels: "5 levels" },
  { package: "Bronze", levels: "6 levels" },
  { package: "Silver", levels: "8 levels" },
  { package: "Gold", levels: "10 levels" },
] as const;

export const rollUpSummary =
  "Gold-only benefit: the plan pays up to a maximum 35% Sponsor Bonus. If an upline sponsor does not qualify for the full 35%, the difference can roll up to the nearest qualified Gold member—per official rules.";

export const unilevelRepurchaseLevels = [
  { label: "Levels 1–2", percent: "3.75% each" },
  { label: "Level 3", percent: "2.5%" },
  { label: "Levels 4–7", percent: "1.25% each" },
  { label: "Level 8", percent: "2.5%" },
  { label: "Levels 9–10", percent: "3.75% each" },
] as const;

export const unilevelRepurchaseTotal = "25% total across 10 levels";

export const unilevelRepurchaseQualification =
  "Requires at least 1 member on the left and 1 on the right, plus minimum 25 RV personal repurchase monthly (per plan).";

export const upgradeDifferentials: {
  from: string;
  toStarter?: string;
  toBronze?: string;
  toSilver?: string;
  toGold?: string;
}[] = [
  {
    from: "Revookit (25 RV)",
    toStarter: "25 RV",
    toBronze: "—",
    toSilver: "—",
    toGold: "—",
  },
  {
    from: "Starter (50 RV)",
    toStarter: "—",
    toBronze: "50 RV",
    toSilver: "450 RV",
    toGold: "950 RV",
  },
  {
    from: "Bronze (100 RV)",
    toStarter: "—",
    toBronze: "—",
    toSilver: "400 RV",
    toGold: "900 RV",
  },
  {
    from: "Silver (500 RV)",
    toStarter: "—",
    toBronze: "—",
    toSilver: "—",
    toGold: "500 RV",
  },
];

export const lifestyleFunds = [
  {
    name: "Travel",
    detail: "$2,000 × 3 groups",
  },
  {
    name: "Car",
    detail: "$6,000 × 3 groups",
  },
  {
    name: "House",
    detail: "$12,000 + $12,000 + $12,000 + $6,000 + $6,000",
  },
] as const;

export const lifestyleQualification =
  "Requires sponsoring 1 left + 1 right member and a personal monthly repurchase (per plan).";

export const rankIncentives = [
  {
    rank: "Star",
    income: "$2,500",
    reward: "70 AP",
    duration: "6 months",
  },
  {
    rank: "Star Maker",
    income: "$10,000",
    reward: "350 AP",
    duration: "12 months",
  },
  {
    rank: "Executive",
    income: "$50,000",
    reward: "2,130 AP",
    duration: "18 months",
  },
  {
    rank: "Diamond Executive",
    income: "$100,000",
    reward: "4,260 AP",
    duration: "24 months",
  },
  {
    rank: "Ambassador",
    income: "$250,000",
    reward: "10,660 AP",
    duration: "36 months",
  },
  {
    rank: "Crown Ambassador",
    income: "$500,000",
    reward: "21,320 AP",
    duration: "48 months",
  },
] as const;

export const rankNotes = "";
