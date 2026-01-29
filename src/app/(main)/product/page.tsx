"use client"

import { AuthenticationWorkflow } from "@/components/ui/report/IconDiagrams"
import { MetricCard } from "@/components/ui/report/MetricCard"
import { SectionHeader } from "@/components/ui/report/SectionHeader"
import { UnitEconomicsCalculator } from "@/components/ui/report/UnitEconomicsCalculator"
import {
    bottomUpTimeModel,
    productTiers,
    quarterlyKPIs,
    unitEconomicsSummary,
    unitEconomicsWorkflow,
} from "@/data/hsa-report-data"
import { cx } from "@/lib/utils"
import {
    RiCheckLine,
    RiLineChartLine,
    RiPriceTag3Line,
    RiTimeLine,
} from "@remixicon/react"

export default function Product() {
    return (
        <div className="space-y-10">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 sm:text-3xl">
                    HSA Product & Economics
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    5-tier trust-first service lineup and unit economics analysis
                </p>
            </div>

            {/* Workflow Diagram */}
            <AuthenticationWorkflow />

            {/* Product Tiers */}
            <section>
                <SectionHeader
                    title="Product Service Tiers"
                    subtitle="Trust-first progression from authentication to vault custody"
                    badge="5 Tiers"
                />
                <div className="space-y-4">
                    {productTiers.map((tier) => (
                        <ProductTierCard key={tier.tier} {...tier} />
                    ))}
                </div>
            </section>

            {/* Unit Economics Summary */}
            <section>
                <SectionHeader
                    title="Unit Economics"
                    subtitle="Bottom-up cost model for Tier 2 (Grade + Report)"
                    badge="Estimated"
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <MetricCard
                        title="Labor Minutes/Bag"
                        value={`${unitEconomicsSummary.totalLaborMinutes.low}–${unitEconomicsSummary.totalLaborMinutes.high}`}
                        subtitle="Plus adjudication tail"
                        icon={<RiTimeLine className="h-5 w-5 text-gray-500" />}
                    />
                    <MetricCard
                        title="Tier 2 COGS"
                        value={`$${unitEconomicsSummary.tier2Cogs.low}–$${unitEconomicsSummary.tier2Cogs.high}`}
                        subtitle="A+G (no seal)"
                        icon={<RiPriceTag3Line className="h-5 w-5 text-gray-500" />}
                    />
                    <MetricCard
                        title="Tier 3 COGS"
                        value={`$${unitEconomicsSummary.tier3Cogs.low}–$${unitEconomicsSummary.tier3Cogs.high}`}
                        subtitle="A+G+S (with seal)"
                        icon={<RiPriceTag3Line className="h-5 w-5 text-gray-500" />}
                    />
                    <MetricCard
                        title="Target Gross Margin"
                        value={`${unitEconomicsSummary.targetGrossMargin}%`}
                        subtitle="PSA achieves ~57%"
                        icon={<RiPriceTag3Line className="h-5 w-5 text-emerald-500" />}
                        variant="success"
                    />
                </div>
            </section>

            {/* Workflow Breakdown */}
            <section>
                <SectionHeader
                    title="Workflow Time Model"
                    subtitle="Per-bag labor breakdown (Tier 2: Grade + Report baseline)"
                />
                <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                        <thead className="bg-gray-50 dark:bg-gray-900">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Step
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Minutes
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Role
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Notes
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-950">
                            {unitEconomicsWorkflow.map((step, index) => (
                                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-50">
                                        {step.step}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                                        {step.minutesLow === step.minutesHigh
                                            ? step.minutesLow
                                            : `${step.minutesLow}–${step.minutesHigh}`}
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                                            {step.role}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                                        {step.notes}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className="bg-gray-50 dark:bg-gray-900">
                            <tr>
                                <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-50">
                                    Total
                                </td>
                                <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-50">
                                    ~135–155 min
                                </td>
                                <td colSpan={2} className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                                    Plus adjudication tail (~15% of cases)
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </section>

            {/* Cost Breakdown */}
            <section>
                <SectionHeader
                    title="Cost Component Breakdown"
                    subtitle="Illustrative cost per bag (Tier 2 A+G)"
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <CostCard
                        label="Labor"
                        value="~$101"
                        description="2.25 hrs blended at ~$45/hr"
                        percentage={55}
                    />
                    <CostCard
                        label="Overhead Allocation"
                        value="~$40"
                        description="Facility, security, insurance"
                        percentage={22}
                    />
                    <CostCard
                        label="Materials"
                        value="$5–$15"
                        description="No seal in Tier 2"
                        percentage={6}
                    />
                    <CostCard
                        label="Dispute Reserve"
                        value="~$20"
                        description="Must calibrate from observed loss"
                        percentage={11}
                    />
                </div>
            </section>

            {/* Break-Even Analysis */}
            <section>
                <SectionHeader
                    title="Break-Even Analysis"
                    subtitle="Single hub volume requirements"
                />
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Fixed Costs (Monthly)</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-gray-50">
                                $150K–$350K
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Rent, security, management, tooling, software, compliance
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Contribution Margin</p>
                            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                                ~$350/bag
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                At price $650 – COGS $300
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Break-Even Volume</p>
                            <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                                430–1,000 bags/mo
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Must validate with actual time studies
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Logic */}
            <section className="rounded-xl border border-orange-200 bg-orange-50 p-6 dark:border-orange-900 dark:bg-orange-950/20">
                <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100">
                    Pricing Strategy
                </h3>
                <p className="mt-2 text-orange-800 dark:text-orange-200">
                    If COGS = $220 and target GM = 60%, minimum price ≈ <strong>$550</strong>.
                    If COGS = $320 (with seal), minimum price ≈ <strong>$800</strong>.
                    These are mechanistically consistent with PSA&apos;s ~57% FY2020 gross margin, but HSA
                    has higher liability severity—target higher dollar contribution per unit than PSA.
                </p>
            </section>

            {/* Interactive Calculator */}
            <section>
                <SectionHeader
                    title="Interactive Calculator"
                    subtitle="Model your own pricing scenarios"
                    badge="Tool"
                />
                <UnitEconomicsCalculator />
            </section>

            {/* Detailed Bottom-Up Time Model */}
            <section>
                <SectionHeader
                    title="Bottom-Up Time Model"
                    subtitle="Detailed 135-minute per-bag breakdown with cost assumptions"
                    badge="Full Breakdown"
                />

                {/* Process Steps */}
                <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                        <thead className="bg-gray-50 dark:bg-gray-900">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Process Step
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Minutes
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Role
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Notes
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-950">
                            {bottomUpTimeModel.steps.map((step, index) => (
                                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-50">
                                        {step.step}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                                        {step.minutesLow === step.minutesHigh
                                            ? step.minutesLow
                                            : `${step.minutesLow}–${step.minutesHigh}`}
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className={cx(
                                            "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium",
                                            step.role === "Authenticator"
                                                ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                                                : step.role === "Senior Grader" || step.role === "Lead"
                                                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                                    : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                                        )}>
                                            {step.role}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                                        {step.notes}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className="bg-emerald-50 dark:bg-emerald-950/30">
                            <tr>
                                <td className="px-4 py-3 font-bold text-emerald-900 dark:text-emerald-100">
                                    Total
                                </td>
                                <td className="px-4 py-3 font-bold text-emerald-900 dark:text-emerald-100">
                                    {bottomUpTimeModel.totalMinutes.low}–{bottomUpTimeModel.totalMinutes.high} min
                                </td>
                                <td colSpan={2} className="px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300">
                                    {bottomUpTimeModel.note}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                {/* Cost Assumptions Grid */}
                <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Cost Assumptions</h4>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {Object.entries(bottomUpTimeModel.costAssumptions).map(([key, value]) => (
                            <div key={key} className="rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900">
                                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 capitalize">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                </p>
                                <p className="text-lg font-bold text-gray-900 dark:text-gray-50">
                                    ${value.low}–${value.high}{value.unit.replace('$/', '/')}
                                </p>
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{value.note}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pricing for Target Margin */}
                <div className="mt-6 rounded-xl border border-orange-200 bg-orange-50 p-5 dark:border-orange-900 dark:bg-orange-950/20">
                    <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">
                        Pricing to Hit 60% Margin
                    </h4>
                    <div className="grid gap-4 sm:grid-cols-3">
                        {bottomUpTimeModel.pricingForMargin.map((scenario, idx) => (
                            <div key={idx} className="rounded-lg bg-white/50 p-3 dark:bg-gray-900/50">
                                <p className="text-sm text-orange-700 dark:text-orange-300">
                                    COGS: ${scenario.cogs}
                                </p>
                                <p className="text-xl font-bold text-orange-900 dark:text-orange-100">
                                    → ${scenario.requiredPrice}
                                </p>
                                <p className="text-xs text-orange-600 dark:text-orange-400">
                                    ({scenario.targetMargin}% margin)
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quarterly KPIs */}
            <section>
                <SectionHeader
                    title="Trust-Centric Quarterly KPIs"
                    subtitle="Four categories of metrics to track operational health and trust development"
                    badge="Metrics"
                />
                <div className="grid gap-6 lg:grid-cols-2">
                    {quarterlyKPIs.map((category, idx) => (
                        <div
                            key={idx}
                            className={cx(
                                "rounded-xl border p-5",
                                category.category === "Throughput"
                                    ? "border-blue-200 bg-blue-50/50 dark:border-blue-900 dark:bg-blue-950/30"
                                    : category.category === "Quality & Trust"
                                        ? "border-purple-200 bg-purple-50/50 dark:border-purple-900 dark:bg-purple-950/30"
                                        : category.category === "Financial Health"
                                            ? "border-emerald-200 bg-emerald-50/50 dark:border-emerald-900 dark:bg-emerald-950/30"
                                            : "border-orange-200 bg-orange-50/50 dark:border-orange-900 dark:bg-orange-950/30"
                            )}
                        >
                            <h4 className={cx(
                                "flex items-center gap-2 font-semibold",
                                category.category === "Throughput"
                                    ? "text-blue-900 dark:text-blue-100"
                                    : category.category === "Quality & Trust"
                                        ? "text-purple-900 dark:text-purple-100"
                                        : category.category === "Financial Health"
                                            ? "text-emerald-900 dark:text-emerald-100"
                                            : "text-orange-900 dark:text-orange-100"
                            )}>
                                <RiLineChartLine className="h-5 w-5" />
                                {category.category}
                            </h4>
                            <ul className="mt-4 space-y-3">
                                {category.metrics.map((metric, mIdx) => (
                                    <li key={mIdx} className="flex justify-between items-start gap-4 text-sm">
                                        <span className="text-gray-700 dark:text-gray-300">{metric.name}</span>
                                        <span className={cx(
                                            "shrink-0 font-medium rounded-md px-2 py-0.5",
                                            category.category === "Throughput"
                                                ? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
                                                : category.category === "Quality & Trust"
                                                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300"
                                                    : category.category === "Financial Health"
                                                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                                                        : "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300"
                                        )}>
                                            {metric.target}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

// Product Tier Card Component
interface ProductTierCardProps {
    tier: string
    price: string
    turnaround: string
    valueRange: string
    includes: string[]
    guaranteeCap: string
}

function ProductTierCard({
    tier,
    price,
    turnaround,
    valueRange,
    includes,
    guaranteeCap,
}: ProductTierCardProps) {
    const tierColors = [
        "border-gray-300 dark:border-gray-700",
        "border-blue-300 dark:border-blue-700",
        "border-orange-400 dark:border-orange-600",
        "border-purple-400 dark:border-purple-600",
        "border-emerald-400 dark:border-emerald-600",
    ]

    // Get tier index for coloring
    const tierNames = ["Authentication Only", "Full Certification", "Premium Certification", "Vault Custody", "Re-Auth / State Update"]
    const tierIndex = tierNames.indexOf(tier)

    return (
        <div className={cx(
            "rounded-xl border-2 bg-white p-5 dark:bg-gray-900",
            tierColors[tierIndex !== -1 ? tierIndex : 0]
        )}>
            <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                            {tierIndex !== -1 ? tierIndex + 1 : "?"}
                        </span>
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-gray-50">{tier}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Turnaround: {turnaround}</p>
                        </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Value range: {valueRange}</p>
                </div>
                <div className="text-right">
                    <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                        {price}
                    </span>
                </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Includes:</p>
                    <ul className="mt-2 space-y-1">
                        {includes.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <RiCheckLine className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="rounded-md bg-gray-50 p-3 dark:bg-gray-800">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Guarantee Cap:</p>
                    <p className="mt-1 text-lg font-bold text-orange-600 dark:text-orange-400">{guaranteeCap}</p>
                </div>
            </div>
        </div>
    )
}

// Cost Card Component
interface CostCardProps {
    label: string
    value: string
    description: string
    percentage: number
}

function CostCard({ label, value, description, percentage }: CostCardProps) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{percentage}%</span>
            </div>
            <p className="mt-1 text-xl font-bold text-gray-900 dark:text-gray-50">{value}</p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{description}</p>
            {/* Progress bar */}
            <div className="mt-2 h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-800">
                <div
                    className="h-1.5 rounded-full bg-orange-500"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    )
}
