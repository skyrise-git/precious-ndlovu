import { z } from "zod";
import { prisma } from "@/lib/prisma";
import {
  defaultMemberPackages,
  type MemberPackage,
  type PackageId,
} from "@/content/site";

export const PACKAGES_SETTING_KEY = "member_packages_json";

export const PACKAGE_IDS_ORDER: PackageId[] = [
  "revookit",
  "starter",
  "bronze",
  "silver",
  "gold",
];

const packageIdSchema = z.enum([
  "revookit",
  "starter",
  "bronze",
  "silver",
  "gold",
]);

const packageMediaSlotSchema = z.enum([
  "packageRevookit",
  "packageStarter",
  "packageBronze",
  "packageSilver",
  "packageGold",
]);

export const memberPackageSchema = z.object({
  id: packageIdSchema,
  code: z.string().min(1),
  name: z.string().min(1),
  rv: z.number().int().positive(),
  products: z.array(z.string()),
  upgradeWindow: z.string().min(1),
  highlights: z.array(z.string()),
  mediaSlot: packageMediaSlotSchema,
  recommended: z.boolean(),
});

export const memberPackagesArraySchema = z
  .array(memberPackageSchema)
  .length(5)
  .refine((arr) => new Set(arr.map((p) => p.id)).size === 5, {
    message: "Each package id must appear exactly once.",
  });

export function normalizeMemberPackages(arr: MemberPackage[]): MemberPackage[] {
  const map = new Map(arr.map((p) => [p.id, p]));
  return PACKAGE_IDS_ORDER.map((id) => {
    const p = map.get(id);
    if (!p) {
      throw new Error(`Missing package: ${id}`);
    }
    return p;
  });
}

async function queryWithRetry<T>(fn: () => Promise<T>, retries = 2): Promise<T> {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (e) {
      if (attempt === retries) throw e;
      console.warn(`[packages DB] retry ${attempt + 1}/${retries}…`);
      await new Promise((r) => setTimeout(r, 500 * (attempt + 1)));
    }
  }
  throw new Error("unreachable");
}

export async function getMemberPackages(): Promise<MemberPackage[]> {
  const defaults = defaultMemberPackages;
  try {
    const row = await queryWithRetry(() =>
      prisma.siteSetting.findUnique({ where: { key: PACKAGES_SETTING_KEY } }),
    );
    if (!row?.value?.trim()) {
      return defaults;
    }
    const parsed: unknown = JSON.parse(row.value);
    const result = memberPackagesArraySchema.safeParse(parsed);
    if (!result.success) {
      console.warn("[getMemberPackages] Invalid stored JSON, using defaults.", result.error.flatten());
      return defaults;
    }
    return normalizeMemberPackages(result.data);
  } catch (e) {
    console.error("[getMemberPackages] DB read failed; using defaults.", e);
    return defaults;
  }
}
