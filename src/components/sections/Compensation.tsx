import {
  developmentBonusCaps,
  developmentNote,
  groupIncentiveLevels,
  groupIncentiveQualification,
  groupIncentiveUnlocks,
  lifestyleFunds,
  lifestyleQualification,
  rankIncentives,
  rankNotes,
  rollUpSummary,
  sponsorBonusByPackage,
  sponsorBonusExample,
  unilevelRepurchaseLevels,
  unilevelRepurchaseQualification,
  unilevelRepurchaseTotal,
  upgradeDifferentials,
} from "@/content/compensation";
import { CompensationDisclaimer } from "@/components/CompensationDisclaimer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";

function TableShell({
  caption,
  children,
}: {
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200/80 bg-card shadow-sm dark:border-gray-700">
      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
        <caption className="border-b border-gray-200/60 bg-gray-50/80 px-4 py-3 text-left text-sm font-semibold text-gray-800 dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-200">
          {caption}
        </caption>
        <tbody className="divide-y divide-gray-200/60 dark:divide-gray-700">{children}</tbody>
      </table>
    </div>
  );
}

function SummaryCards() {
  const cards = [
    { label: "Sponsor Bonus", value: "20%–35%", detail: "Earned per enrolment" },
    { label: "Group Incentive", value: "Up to 10 levels", detail: "On repeat purchases" },
    { label: "Lifestyle Funds", value: "$350–$2,400", detail: "Travel, Car, House" },
  ];
  return (
    <div className="mb-10 grid gap-4 sm:grid-cols-3">
      {cards.map((c) => (
        <div
          key={c.label}
          className="rounded-xl border border-red-200/60 bg-gradient-to-br from-red-50/80 to-white p-5 dark:border-red-800/30 dark:from-red-950/30 dark:to-card"
        >
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">{c.label}</p>
          <p className="mt-1 font-display text-2xl font-bold text-red-800 dark:text-red-300">{c.value}</p>
          <p className="mt-1 text-xs text-gray-500">{c.detail}</p>
        </div>
      ))}
    </div>
  );
}

export function Compensation() {
  return (
    <section id="compensation" className="scroll-mt-20 border-t border-gray-200/60 bg-gray-50/50 py-20 dark:border-gray-800 dark:bg-gray-900/20">
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="How the plan pays"
          subtitle="A summary view first — expand any section for full details. Always verify with official Revoobit materials."
        />

        <SummaryCards />

        <div className="mb-10">
          <CompensationDisclaimer />
        </div>

        <div className="space-y-4">
          <Accordion title="1. Sponsor Bonus (20%–35%)" defaultOpen>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Earned in real-time when you enroll a new member. Your percentage depends on your package;
              RV earned depends on what the new member purchases.
            </p>
            <TableShell caption="Sponsor Bonus rate by your package">
              <>
                <tr className="bg-gray-50/80 dark:bg-gray-900/30">
                  <th scope="col" className="px-4 py-3 font-semibold">Your package</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Sponsor Bonus %</th>
                </tr>
                {sponsorBonusByPackage.map((row) => (
                  <tr key={row.package}>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.package}</td>
                    <td className="px-4 py-3 font-semibold text-red-700 dark:text-red-300">{row.percent}%</td>
                  </tr>
                ))}
              </>
            </TableShell>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">{sponsorBonusExample}</p>
          </Accordion>

          <Accordion title="2. Development Bonus (Team — 10%)">
            <p className="mb-4 text-gray-600 dark:text-gray-400">{developmentNote}</p>
            <TableShell caption="Development Bonus caps (summary)">
              <>
                <tr className="bg-gray-50/80 dark:bg-gray-900/30">
                  <th scope="col" className="px-4 py-3 font-semibold">Package</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Limit (summary)</th>
                </tr>
                {developmentBonusCaps.map((row) => (
                  <tr key={row.package}>
                    <td className="px-4 py-3">{row.package}</td>
                    <td className="px-4 py-3">{row.detail}</td>
                  </tr>
                ))}
              </>
            </TableShell>
          </Accordion>

          <Accordion title="3. Group Incentive (Unilevel)">
            <p className="mb-4 text-gray-600 dark:text-gray-400">{groupIncentiveQualification}</p>
            <div className="grid gap-6 lg:grid-cols-2">
              <TableShell caption="Percent by level (levels 1–10)">
                <>
                  <tr className="bg-gray-50/80 dark:bg-gray-900/30">
                    <th className="px-4 py-3 font-semibold">Level</th>
                    <th className="px-4 py-3 font-semibold">%</th>
                  </tr>
                  {groupIncentiveLevels.map((row) => (
                    <tr key={row.level}>
                      <td className="px-4 py-2">{row.level}</td>
                      <td className="px-4 py-2">{row.percent}</td>
                    </tr>
                  ))}
                </>
              </TableShell>
              <TableShell caption="Levels unlocked by package">
                <>
                  <tr className="bg-gray-50/80 dark:bg-gray-900/30">
                    <th className="px-4 py-3 font-semibold">Package</th>
                    <th className="px-4 py-3 font-semibold">Levels unlocked</th>
                  </tr>
                  {groupIncentiveUnlocks.map((row) => (
                    <tr key={row.package}>
                      <td className="px-4 py-2">{row.package}</td>
                      <td className="px-4 py-2">{row.levels}</td>
                    </tr>
                  ))}
                </>
              </TableShell>
            </div>
          </Accordion>

          <Accordion title="4. Bonus Roll-up (Gold only)">
            <p className="text-gray-600 dark:text-gray-400">{rollUpSummary}</p>
          </Accordion>

          <Accordion title={`5. Bonus Unilevel (Repurchase — ${unilevelRepurchaseTotal})`}>
            <p className="mb-4 text-gray-600 dark:text-gray-400">{unilevelRepurchaseQualification}</p>
            <TableShell caption="Unilevel repurchase split (summary)">
              <>
                <tr className="bg-gray-50/80 dark:bg-gray-900/30">
                  <th className="px-4 py-3 font-semibold">Levels</th>
                  <th className="px-4 py-3 font-semibold">Income (summary)</th>
                </tr>
                {unilevelRepurchaseLevels.map((row) => (
                  <tr key={row.label}>
                    <td className="px-4 py-2">{row.label}</td>
                    <td className="px-4 py-2">{row.percent}</td>
                  </tr>
                ))}
              </>
            </TableShell>
          </Accordion>

          <Accordion title="6. Upgrade cost differentials">
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              If you start lower and upgrade later, you typically pay the difference (verify with official rules).
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200/80 bg-card dark:border-gray-700">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <caption className="border-b border-gray-200/60 bg-gray-50/80 px-4 py-3 text-left font-semibold dark:border-gray-700 dark:bg-gray-900/50">
                  Upgrade differentials (RV)
                </caption>
                <thead>
                  <tr className="bg-gray-50/80 text-xs uppercase tracking-wide dark:bg-gray-900/30">
                    <th scope="col" className="px-3 py-3">Starting package</th>
                    <th scope="col" className="px-3 py-3">→ Starter</th>
                    <th scope="col" className="px-3 py-3">→ Bronze</th>
                    <th scope="col" className="px-3 py-3">→ Silver</th>
                    <th scope="col" className="px-3 py-3">→ Gold</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200/60 dark:divide-gray-700">
                  {upgradeDifferentials.map((row) => (
                    <tr key={row.from}>
                      <td className="px-3 py-3 font-medium">{row.from}</td>
                      <td className="px-3 py-3">{row.toStarter ?? "—"}</td>
                      <td className="px-3 py-3">{row.toBronze ?? "—"}</td>
                      <td className="px-3 py-3">{row.toSilver ?? "—"}</td>
                      <td className="px-3 py-3">{row.toGold ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Accordion>

          <Accordion title="7. Lifestyle funds (binary-based)">
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{lifestyleQualification}</p>
            <TableShell caption="Lifestyle funds (summary)">
              <>
                <tr className="bg-gray-50/80 dark:bg-gray-900/30">
                  <th className="px-4 py-3 font-semibold">Fund</th>
                  <th className="px-4 py-3 font-semibold">Requirement (summary)</th>
                  <th className="px-4 py-3 font-semibold">Reward (summary)</th>
                </tr>
                {lifestyleFunds.map((row) => (
                  <tr key={row.name}>
                    <td className="px-4 py-3">{row.name}</td>
                    <td className="px-4 py-3">{row.requirement}</td>
                    <td className="px-4 py-3 font-semibold text-red-700 dark:text-red-300">{row.reward}</td>
                  </tr>
                ))}
              </>
            </TableShell>
          </Accordion>

          <Accordion title="8. Rank incentive (milestones)">
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{rankNotes}</p>
            <TableShell caption="Rank incentive (summary)">
              <>
                <tr className="bg-gray-50/80 dark:bg-gray-900/30">
                  <th className="px-4 py-3 font-semibold">Rank</th>
                  <th className="px-4 py-3 font-semibold">Income target</th>
                  <th className="px-4 py-3 font-semibold">Reward</th>
                  <th className="px-4 py-3 font-semibold">Window</th>
                </tr>
                {rankIncentives.map((row) => (
                  <tr key={row.rank}>
                    <td className="px-4 py-2">{row.rank}</td>
                    <td className="px-4 py-2">{row.income}</td>
                    <td className="px-4 py-2">{row.reward}</td>
                    <td className="px-4 py-2">{row.duration}</td>
                  </tr>
                ))}
              </>
            </TableShell>
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
