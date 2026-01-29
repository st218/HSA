"use client"

import { FadeIn } from "@/components/ui/report/AnimatedComponents"
import { ExecutiveHero } from "@/components/ui/report/ExecutiveHero"
import { AuthenticationWorkflow, TrustInfrastructureHero } from "@/components/ui/report/IconDiagrams"
import { MetricCard } from "@/components/ui/report/MetricCard"
import { SectionHeader } from "@/components/ui/report/SectionHeader"
import {
  executiveSummary,
  keyMetrics,
  riskRegister,
  transferMatrix,
} from "@/data/hsa-report-data"
import { cx } from "@/lib/utils"
import {
  RiAlertLine,
  RiArrowRightLine,
  RiCheckboxCircleLine,
  RiCheckLine,
  RiCloseLine,
  RiExchangeLine,
  RiFileList3Line,
  RiFileTextLine,
  RiLightbulbLine,
  RiMoneyDollarCircleLine,
  RiPercentLine,
  RiPriceTag3Line,
  RiShieldCheckLine,
  RiSparklingLine,
  RiStarLine,
} from "@remixicon/react"
import Link from "next/link"

export default function ExecutiveSummary() {
  const highRisks = riskRegister.filter((r) => r.severity === "High").length

  return (
    <div className="space-y-10">
      {/* Hero Section with Icon-based Diagram */}
      <FadeIn>
        <ExecutiveHero
          decision={executiveSummary.decision}
          decisionDetail={executiveSummary.decisionDetail}
          confidence="medium"
          keyTakeaways={executiveSummary.biggestRisks}
        />
      </FadeIn>

      {/* Trust Infrastructure Visual */}
      <FadeIn delay={100}>
        <TrustInfrastructureHero />
      </FadeIn>

      {/* Key Metrics Grid */}
      <section>
        <SectionHeader
          title="Key Investment Metrics"
          subtitle="SEC-verified PSA benchmarks and HSA projections"
          badge="Verified Data"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FadeIn delay={0}>
            <MetricCard
              title="PSA Acquisition Value (2020)"
              value={`$${keyMetrics.psaMarketCap.value}M`}
              subtitle="Nat Turner-led investor group"
              icon={<RiMoneyDollarCircleLine className="h-5 w-5 text-gray-500" />}
            />
          </FadeIn>
          <FadeIn delay={50}>
            <MetricCard
              title="PSA FY2020 Revenue"
              value={`$${keyMetrics.psaRevenue.value}M`}
              subtitle="Collectors Universe SEC 10-K"
              trend={{ value: 15.3, label: "YoY growth" }}
              icon={<RiMoneyDollarCircleLine className="h-5 w-5 text-gray-500" />}
            />
          </FadeIn>
          <FadeIn delay={100}>
            <MetricCard
              title="PSA Gross Margin"
              value={`${keyMetrics.psaGrossMargin.value}%`}
              subtitle="Verified from SEC filings"
              icon={<RiPercentLine className="h-5 w-5 text-gray-500" />}
              variant="success"
            />
          </FadeIn>
          <FadeIn delay={150}>
            <MetricCard
              title="HSA Target Price (Tier 2)"
              value={`$${keyMetrics.hsaPriceRange.low}–$${keyMetrics.hsaPriceRange.high}`}
              subtitle="Grade + Report service"
              icon={<RiPriceTag3Line className="h-5 w-5 text-gray-500" />}
            />
          </FadeIn>
          <FadeIn delay={200}>
            <MetricCard
              title="Entrupy Hermès Price"
              value={`$${keyMetrics.entrupyPrice.value}`}
              subtitle="Competitive reference"
              icon={<RiPriceTag3Line className="h-5 w-5 text-gray-500" />}
            />
          </FadeIn>
          <FadeIn delay={250}>
            <MetricCard
              title="Break-even Volume"
              value={`${keyMetrics.hsaBreakEven.low}–${keyMetrics.hsaBreakEven.high}`}
              subtitle="Bags/month (single hub)"
              icon={<RiFileList3Line className="h-5 w-5 text-gray-500" />}
            />
          </FadeIn>
        </div>
      </section>

      {/* What Matters Summary - NEW */}
      <section className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 dark:border-gray-800 dark:from-gray-900 dark:to-gray-950">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-900/30">
            <RiLightbulbLine className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
            What Matters (and What Must Be True)
          </h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {executiveSummary.keyPremise}
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            { icon: RiCheckboxCircleLine, label: "Authenticity Determination", color: "orange" },
            { icon: RiFileList3Line, label: "Auditable Grading", color: "blue" },
            { icon: RiShieldCheckLine, label: "Chain-of-Custody", color: "emerald" },
            { icon: RiMoneyDollarCircleLine, label: "Financial Guarantee", color: "purple" },
          ].map((item) => (
            <div
              key={item.label}
              className={cx(
                "flex items-center gap-2 rounded-lg p-3",
                item.color === "orange" && "bg-orange-50 dark:bg-orange-900/20",
                item.color === "blue" && "bg-blue-50 dark:bg-blue-900/20",
                item.color === "emerald" && "bg-emerald-50 dark:bg-emerald-900/20",
                item.color === "purple" && "bg-purple-50 dark:bg-purple-900/20"
              )}
            >
              <item.icon
                className={cx(
                  "h-5 w-5",
                  item.color === "orange" && "text-orange-600 dark:text-orange-400",
                  item.color === "blue" && "text-blue-600 dark:text-blue-400",
                  item.color === "emerald" && "text-emerald-600 dark:text-emerald-400",
                  item.color === "purple" && "text-purple-600 dark:text-purple-400"
                )}
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Diagram */}
      <section>
        <SectionHeader
          title="HSA Workflow Overview"
          subtitle="Five-step authentication and certification process"
        />
        <AuthenticationWorkflow />
      </section>

      {/* Validation Status */}
      <section>
        <SectionHeader
          title="Validation Framework"
          subtitle="Kill criteria and falsification tests for trust-first execution"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Falsification Tests"
            value={keyMetrics.falsificationTests.total}
            subtitle="With explicit pass/fail thresholds"
            icon={<RiShieldCheckLine className="h-5 w-5 text-emerald-500" />}
            variant="success"
          />
          <MetricCard
            title="High-Severity Risks"
            value={highRisks}
            subtitle="Requiring active mitigation"
            icon={<RiAlertLine className="h-5 w-5 text-red-500" />}
            variant="danger"
          />
          <MetricCard
            title="Fraud Vectors Modeled"
            value={keyMetrics.fraudVectors.total}
            subtitle="With detection controls"
            icon={<RiShieldCheckLine className="h-5 w-5 text-amber-500" />}
            variant="warning"
          />
          <MetricCard
            title="Product Tiers"
            value={keyMetrics.productTiers.total}
            subtitle="Trust-first service lineup"
            icon={<RiFileList3Line className="h-5 w-5 text-blue-500" />}
            variant="info"
          />
        </div>
      </section>

      {/* Quick Navigation */}
      <section>
        <SectionHeader
          title="Report Sections"
          subtitle="Explore the full investment analysis"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <NavigationCard
            title="PSA Case Study"
            description="SEC-verified financials, trust mechanics, and moat analysis"
            href="/psa"
            color="indigo"
            icon={RiStarLine}
          />
          <NavigationCard
            title="Market Analysis"
            description="Comparables: StockX, Entrupy, eBay, GOAT, Chrono24, Dewu"
            href="/comparables"
            color="purple"
            icon={RiSparklingLine}
          />
          <NavigationCard
            title="HSA Product"
            description="5-tier product lineup and unit economics"
            href="/product"
            color="orange"
            icon={RiPriceTag3Line}
          />
          <NavigationCard
            title="Security & Compliance"
            description="NFC threat model, Digital Slab architecture, legal posture"
            href="/security"
            color="blue"
            icon={RiShieldCheckLine}
          />
          <NavigationCard
            title="Risk & Validation"
            description="Threat model, risk register, and falsification tests"
            href="/risk"
            color="red"
            icon={RiAlertLine}
          />
          <NavigationCard
            title="Roadmap"
            description="12–18 month rollout and exit scenarios"
            href="/roadmap"
            color="emerald"
            icon={RiArrowRightLine}
          />
        </div>
      </section>

      {/* IC Message */}
      <section className="rounded-xl border-2 border-blue-300 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 dark:border-blue-800 dark:from-blue-950/30 dark:to-indigo-950/30">
        <h3 className="flex items-center gap-2 text-lg font-bold text-blue-900 dark:text-blue-100">
          <RiFileTextLine className="h-5 w-5" />
          What We Would Tell the IC
        </h3>
        <div className="mt-4 space-y-3 text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
          {executiveSummary.icMessage?.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {/* Key Numbers Summary - NEW */}
      <section>
        <SectionHeader
          title="Key Numbers at a Glance"
          subtitle="Verified vs Estimated vs Unknown"
        />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
            <div className="flex items-center gap-2 mb-3">
              <RiCheckboxCircleLine className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100">Verified (SEC)</h4>
            </div>
            <ul className="space-y-2 text-sm text-emerald-800 dark:text-emerald-200">
              <li>• PSA Revenue: $78.9M (FY2020)</li>
              <li>• Gross Margin: 57.3%</li>
              <li>• Operating Margin: 17.9%</li>
              <li>• Acquisition: ~$700M</li>
            </ul>
          </div>
          <div className="rounded-xl border-2 border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/30">
            <div className="flex items-center gap-2 mb-3">
              <RiLightbulbLine className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <h4 className="font-semibold text-amber-900 dark:text-amber-100">Estimated</h4>
            </div>
            <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-200">
              <li>• HSA Price: $550–$850/bag</li>
              <li>• COGS: $180–$320/bag</li>
              <li>• Dispute Rate: 0.4–1.0%</li>
              <li>• Break-even: 300–800/mo</li>
            </ul>
          </div>
          <div className="rounded-xl border-2 border-gray-300 bg-gray-100 p-5 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center gap-2 mb-3">
              <RiAlertLine className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Unknown (Discover)</h4>
            </div>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Counterfeit base rate by region</li>
              <li>• Brand enforcement posture</li>
              <li>• Long-run WTP for graded condition</li>
              <li>• False-negative severity distribution</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Transfer Matrix: PSA → HSA */}
      <section>
        <SectionHeader
          title="PSA → HSA: What Transfers vs What Must Change"
          subtitle="Strategic mapping of transferable mechanics and required redesigns"
          badge="8 Items"
        />
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="py-3 px-4 text-left font-semibold text-gray-700 dark:text-gray-300">PSA Mechanic</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700 dark:text-gray-300">HSA Analog</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700 dark:text-gray-300">Implementation</th>
                <th className="py-3 px-4 text-center font-semibold text-gray-700 dark:text-gray-300">Transfers?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {transferMatrix.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                  <td className="py-3 px-4">
                    <span className="font-medium text-gray-900 dark:text-gray-100">{item.psaMechanic}</span>
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{item.hsaAnalog}</td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-500 text-xs">{item.implementationPlan}</td>
                  <td className="py-3 px-4 text-center">
                    {item.transfers ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                        <RiCheckLine className="h-3 w-3" /> Yes
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                        <RiCloseLine className="h-3 w-3" /> Redesign
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-2">
            <RiExchangeLine className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Key Insight:</strong> HSA must behave more like PSA than StockX. The defensible moat is the grade language + verification registry + financial accountability.
              Unlike PSA, HSA must explicitly model post-certification state changes and incorporate cryptographic tag security.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

// Navigation Card Component
interface NavigationCardProps {
  title: string
  description: string
  href: string
  color: "indigo" | "purple" | "orange" | "red" | "emerald" | "blue"
  icon: React.ElementType
}

const colorStyles = {
  indigo: {
    border: "hover:border-indigo-300 dark:hover:border-indigo-700",
    icon: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
  },
  purple: {
    border: "hover:border-purple-300 dark:hover:border-purple-700",
    icon: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  },
  orange: {
    border: "hover:border-orange-300 dark:hover:border-orange-700",
    icon: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
  },
  red: {
    border: "hover:border-red-300 dark:hover:border-red-700",
    icon: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
  },
  emerald: {
    border: "hover:border-emerald-300 dark:hover:border-emerald-700",
    icon: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  blue: {
    border: "hover:border-blue-300 dark:hover:border-blue-700",
    icon: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
}

function NavigationCard({ title, description, href, color, icon: Icon }: NavigationCardProps) {
  return (
    <Link
      href={href}
      className={cx(
        "group block rounded-xl border border-gray-200 bg-white p-5 transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900",
        colorStyles[color].border
      )}
    >
      <div className={cx("mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg", colorStyles[color].icon)}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-semibold text-gray-900 transition-colors dark:text-gray-50">
        {title}
      </h3>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
        {description}
      </p>
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-orange-600 dark:text-orange-400">
        Explore <RiArrowRightLine className="h-4 w-4" />
      </span>
    </Link>
  )
}
