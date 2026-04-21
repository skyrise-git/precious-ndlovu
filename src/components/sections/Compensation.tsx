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
import { getMemberPackages } from "@/lib/packages";
import { CompensationDisclaimer } from "@/components/CompensationDisclaimer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";

function TableShell({ caption, children }: { caption: string; children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[#eadfe4] bg-white shadow-sm">
      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
        <caption className="border-b border-[#eee4e8] bg-[#fdf7f8] px-4 py-3 text-left font-semibold text-gray-800">
          {caption}
        </caption>
        <tbody className="divide-y divide-[#eee4e8]">{children}</tbody>
      </table>
    </div>
  );
}

export async function Compensation() {
  const memberPackages = await getMemberPackages();
  return (
    <section id="compensation" className="scroll-mt-20 border-t border-[#eadfe4] bg-[#fcf8f6] py-20">
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="How the plan pays"
          subtitle="A summary view first. Expand each section for details and verify with official Revoobit materials."
        />
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {[
            ["Sponsor Bonus", "20%–35%"],
            ["Group Incentive", "Up to 10 Levels"],
            ["Lifestyle Funds", "Travel · Car · House"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-[#eadfe4] bg-white p-4">
              <p className="text-sm text-gray-500">{label}</p>
              <p className="font-display text-2xl font-bold text-[var(--accent)]">{value}</p>
            </div>
          ))}
        </div>
        <div className="mb-8">
          <CompensationDisclaimer />
        </div>
        <div className="space-y-4">
          <Accordion title="1. Sponsor Bonus (20%–35%)" defaultOpen>
            <p className="mb-4 text-gray-600">{sponsorBonusExample}</p>
            <TableShell caption="Sponsor bonus by package">
              <>
                <tr className="bg-[#fdf7f8]">
                  <th className="px-4 py-3">Package</th>
                  <th className="px-4 py-3">Bonus</th>
                </tr>
                {sponsorBonusByPackage.map((row) => (
                  <tr key={row.package}>
                    <td className="px-4 py-2">{row.package}</td>
                    <td className="px-4 py-2 font-semibold text-[var(--accent)]">{row.percent}%</td>
                  </tr>
                ))}
              </>
            </TableShell>
          </Accordion>

          <Accordion title="2. Development Bonus">
            <p className="mb-4 text-gray-600">{developmentNote}</p>
            <div className="mb-6">
              <TableShell caption="Package volume (RV)">
                <>
                  <tr className="bg-[#fdf7f8]">
                    <th className="px-4 py-3">Package</th>
                    <th className="px-4 py-3">RV</th>
                  </tr>
                  {memberPackages.map((row) => (
                    <tr key={row.id}>
                      <td className="px-4 py-2">{row.name}</td>
                      <td className="px-4 py-2 font-semibold text-[var(--accent)]">{row.rv}</td>
                    </tr>
                  ))}
                </>
              </TableShell>
            </div>
            <TableShell caption="Development caps">
              <>
                <tr className="bg-[#fdf7f8]">
                  <th className="px-4 py-3">Package</th>
                  <th className="px-4 py-3">Limit</th>
                </tr>
                {developmentBonusCaps.map((row) => (
                  <tr key={row.package}>
                    <td className="px-4 py-2">{row.package}</td>
                    <td className="px-4 py-2">{row.detail}</td>
                  </tr>
                ))}
              </>
            </TableShell>
          </Accordion>

          <Accordion title="3. Group Incentive">
            <p className="mb-4 text-gray-600">{groupIncentiveQualification}</p>
            <div className="grid gap-6 lg:grid-cols-2">
              <TableShell caption="Percent by level">
                <>
                  <tr className="bg-[#fdf7f8]">
                    <th className="px-4 py-3">Level</th>
                    <th className="px-4 py-3">%</th>
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
                  <tr className="bg-[#fdf7f8]">
                    <th className="px-4 py-3">Package</th>
                    <th className="px-4 py-3">Levels</th>
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
            <p className="text-gray-600">{rollUpSummary}</p>
          </Accordion>

          <Accordion title={`5. Bonus Unilevel (${unilevelRepurchaseTotal})`}>
            <p className="mb-4 text-gray-600">{unilevelRepurchaseQualification}</p>
            <TableShell caption="Unilevel repurchase">
              <>
                <tr className="bg-[#fdf7f8]">
                  <th className="px-4 py-3">Levels</th>
                  <th className="px-4 py-3">Income</th>
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

          <Accordion title="6. Upgrade Cost Differentials">
            <div className="overflow-x-auto rounded-xl border border-[#eadfe4] bg-white">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="bg-[#fdf7f8]">
                    <th className="px-3 py-3">Starting Package</th>
                    <th className="px-3 py-3">→ Starter</th>
                    <th className="px-3 py-3">→ Bronze</th>
                    <th className="px-3 py-3">→ Silver</th>
                    <th className="px-3 py-3">→ Gold</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eee4e8]">
                  {upgradeDifferentials.map((row) => (
                    <tr key={row.from}>
                      <td className="px-3 py-2">{row.from}</td>
                      <td className="px-3 py-2">{row.toStarter ?? "—"}</td>
                      <td className="px-3 py-2">{row.toBronze ?? "—"}</td>
                      <td className="px-3 py-2">{row.toSilver ?? "—"}</td>
                      <td className="px-3 py-2">{row.toGold ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Accordion>

          <Accordion title="7. Lifestyle Funds">
            <p className="mb-4 text-gray-600">{lifestyleQualification}</p>
            <TableShell caption="Lifestyle funds summary">
              <>
                <tr className="bg-[#fdf7f8]">
                  <th className="px-4 py-3">Fund</th>
                  <th className="px-4 py-3">Groups / thresholds</th>
                </tr>
                {lifestyleFunds.map((row) => (
                  <tr key={row.name}>
                    <td className="px-4 py-2">{row.name}</td>
                    <td className="px-4 py-2">{row.detail}</td>
                  </tr>
                ))}
              </>
            </TableShell>
          </Accordion>

          <Accordion title="8. Rank Incentive">
            {rankNotes.trim() ? <p className="mb-4 text-gray-600">{rankNotes}</p> : null}
            <TableShell caption="Rank milestones">
              <>
                <tr className="bg-[#fdf7f8]">
                  <th className="px-4 py-3">Rank</th>
                  <th className="px-4 py-3">Income Target</th>
                  <th className="px-4 py-3">Reward</th>
                  <th className="px-4 py-3">Window</th>
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
