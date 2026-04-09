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
import { site } from "@/content/site";
import { CompensationDisclaimer } from "@/components/CompensationDisclaimer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

function TableShell({
  caption,
  children,
}: {
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-stone-200 bg-card shadow-sm dark:border-stone-700">
      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
        <caption className="border-b border-stone-200 bg-stone-50 px-4 py-3 text-left text-sm font-semibold text-stone-800 dark:border-stone-700 dark:bg-stone-900/50 dark:text-stone-200">
          {caption}
        </caption>
        <tbody className="divide-y divide-stone-200 dark:divide-stone-700">{children}</tbody>
      </table>
    </div>
  );
}

export function Compensation() {
  return (
    <section id="compensation" className="scroll-mt-20 border-t border-stone-200 py-20 dark:border-stone-800">
      <Container>
        <SectionHeading
          eyebrow="Education"
          title={site.compensationIntro.title}
          subtitle={site.compensationIntro.subtitle}
        />
        <div className="mb-10 space-y-6">
          <CompensationDisclaimer />
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="font-display text-xl font-semibold text-stone-900 dark:text-stone-50">
              1. Sponsor Bonus (20%–35%)
            </h3>
            <p className="mt-2 text-stone-600 dark:text-stone-400">
              Earned in real-time when you enroll a new member. Your percentage depends on your package;
              RV earned depends on what the new member purchases.
            </p>
            <div className="mt-4">
              <TableShell caption="Sponsor Bonus rate by your package">
                <>
                  <tr className="bg-stone-50/80 dark:bg-stone-900/30">
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Your package
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Sponsor Bonus %
                    </th>
                  </tr>
                  {sponsorBonusByPackage.map((row) => (
                    <tr key={row.package}>
                      <td className="px-4 py-3 text-stone-700 dark:text-stone-300">{row.package}</td>
                      <td className="px-4 py-3">{row.percent}%</td>
                    </tr>
                  ))}
                </>
              </TableShell>
            </div>
            <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">{sponsorBonusExample}</p>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-stone-900 dark:text-stone-50">
              2. Development Bonus (Team Bonus — 10%)
            </h3>
            <p className="mt-2 text-stone-600 dark:text-stone-400">{developmentNote}</p>
            <div className="mt-4">
              <TableShell caption="Development Bonus caps (summary)">
                <>
                  <tr className="bg-stone-50/80 dark:bg-stone-900/30">
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Package
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Limit (summary)
                    </th>
                  </tr>
                  {developmentBonusCaps.map((row) => (
                    <tr key={row.package}>
                      <td className="px-4 py-3">{row.package}</td>
                      <td className="px-4 py-3">{row.detail}</td>
                    </tr>
                  ))}
                </>
              </TableShell>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-stone-900 dark:text-stone-50">
              3. Group Incentive (Unilevel — repeat purchases)
            </h3>
            <p className="mt-2 text-stone-600 dark:text-stone-400">{groupIncentiveQualification}</p>
            <div className="mt-4 grid gap-6 lg:grid-cols-2">
              <TableShell caption="Percent by level (levels 1–10)">
                <>
                  <tr className="bg-stone-50/80 dark:bg-stone-900/30">
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
                  <tr className="bg-stone-50/80 dark:bg-stone-900/30">
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
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-stone-900 dark:text-stone-50">
              4. Bonus Roll-up (Gold)
            </h3>
            <p className="mt-3 text-stone-600 dark:text-stone-400">{rollUpSummary}</p>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-stone-900 dark:text-stone-50">
              5. Bonus Unilevel (Repurchase — {unilevelRepurchaseTotal})
            </h3>
            <p className="mt-2 text-stone-600 dark:text-stone-400">{unilevelRepurchaseQualification}</p>
            <div className="mt-4">
              <TableShell caption="Unilevel repurchase split (summary)">
                <>
                  <tr className="bg-stone-50/80 dark:bg-stone-900/30">
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
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-stone-900 dark:text-stone-50">
              6. Upgrade cost differentials
            </h3>
            <p className="mt-2 text-stone-600 dark:text-stone-400">
              If you start lower and upgrade later, you typically pay the difference (verify with official
              rules).
            </p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-stone-200 bg-card dark:border-stone-700">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <caption className="border-b border-stone-200 bg-stone-50 px-4 py-3 text-left font-semibold dark:border-stone-700 dark:bg-stone-900/50">
                  Upgrade differentials (RV)
                </caption>
                <thead>
                  <tr className="bg-stone-50/80 text-xs uppercase tracking-wide dark:bg-stone-900/30">
                    <th scope="col" className="px-3 py-3">
                      Starting package
                    </th>
                    <th scope="col" className="px-3 py-3">
                      → Starter
                    </th>
                    <th scope="col" className="px-3 py-3">
                      → Bronze
                    </th>
                    <th scope="col" className="px-3 py-3">
                      → Silver
                    </th>
                    <th scope="col" className="px-3 py-3">
                      → Gold
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 dark:divide-stone-700">
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
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-stone-900 dark:text-stone-50">
              7. Lifestyle funds (binary-based)
            </h3>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">{lifestyleQualification}</p>
            <div className="mt-4">
              <TableShell caption="Lifestyle funds (summary)">
                <>
                  <tr className="bg-stone-50/80 dark:bg-stone-900/30">
                    <th className="px-4 py-3 font-semibold">Fund</th>
                    <th className="px-4 py-3 font-semibold">Requirement (summary)</th>
                    <th className="px-4 py-3 font-semibold">Reward (summary)</th>
                  </tr>
                  {lifestyleFunds.map((row) => (
                    <tr key={row.name}>
                      <td className="px-4 py-3">{row.name}</td>
                      <td className="px-4 py-3">{row.requirement}</td>
                      <td className="px-4 py-3">{row.reward}</td>
                    </tr>
                  ))}
                </>
              </TableShell>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-stone-900 dark:text-stone-50">
              8. Rank incentive (milestones)
            </h3>
            <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">{rankNotes}</p>
            <div className="mt-4">
              <TableShell caption="Rank incentive (summary)">
                <>
                  <tr className="bg-stone-50/80 dark:bg-stone-900/30">
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
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
