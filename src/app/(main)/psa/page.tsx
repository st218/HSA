"use client"

import { LineChart } from "@/components/LineChart"
import { PSAFlywheelDiagram } from "@/components/ui/report/IconDiagrams"
import { MetricCard } from "@/components/ui/report/MetricCard"
import { SectionHeader } from "@/components/ui/report/SectionHeader"
import { TimelineChart } from "@/components/ui/report/TimelineChart"
import {
    psaSegments,
    psaServiceTiers,
    psaSuccessFactors,
    psaTimeline,
} from "@/data/hsa-report-data"
import {
    RiAlertLine,
    RiArrowRightLine,
    RiAwardLine,
    RiDatabase2Line,
    RiGlobalLine,
    RiLightbulbLine,
    RiLineChartLine,
    RiMoneyDollarCircleLine,
    RiSettings3Line,
    RiShieldCheckLine,
    RiTeamLine,
} from "@remixicon/react"

// Transform PSA financials for chart display
const revenueChartData = [
    {
        year: "FY2019",
        "Net Revenue": 68449000 / 1000000,
        "Gross Profit": 39755000 / 1000000,
        "Operating Income": 12124000 / 1000000,
    },
    {
        year: "FY2020",
        "Net Revenue": 78891000 / 1000000,
        "Gross Profit": 45236000 / 1000000,
        "Operating Income": 14102000 / 1000000,
    },
]

const marginChartData = [
    {
        year: "FY2019",
        "Gross Margin": 58.1,
        "Operating Margin": 17.7,
    },
    {
        year: "FY2020",
        "Gross Margin": 57.3,
        "Operating Margin": 17.9,
    },
]

export default function PSACaseStudy() {
    return (
        <div className="space-y-10">
            {/* Page Header */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 sm:text-3xl">
                        PSA Case Study
                    </h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        SEC-verified financials, trust mechanics, and the blueprint for HSA
                    </p>

                    {/* Key Success Factors Pills */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {[
                            { icon: RiAwardLine, label: "Industry Standard", color: "orange" },
                            { icon: RiShieldCheckLine, label: "Financial Guarantee", color: "emerald" },
                            { icon: RiTeamLine, label: "Multi-Grader Review", color: "blue" },
                            { icon: RiDatabase2Line, label: "Registry + Population", color: "purple" },
                        ].map((item) => (
                            <span
                                key={item.label}
                                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${item.color === "orange"
                                    ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                                    : item.color === "emerald"
                                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                                        : item.color === "blue"
                                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                            : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                                    }`}
                            >
                                <item.icon className="h-3.5 w-3.5" />
                                {item.label}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="lg:w-72 flex-shrink-0">
                    <PSAFlywheelDiagram />
                </div>
            </div>

            {/* Key Financial Metrics */}
            <section>
                <SectionHeader
                    title="Financial Performance"
                    subtitle="Collectors Universe FY2020 (SEC 10-K verified)"
                    badge="SEC Verified"
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <MetricCard
                        title="Net Revenue"
                        value="$78.9M"
                        subtitle="FY2020"
                        trend={{ value: 15.3, label: "vs FY2019" }}
                        icon={<RiMoneyDollarCircleLine className="h-5 w-5 text-gray-500" />}
                    />
                    <MetricCard
                        title="Gross Profit"
                        value="$45.2M"
                        subtitle="57.3% margin"
                        icon={<RiMoneyDollarCircleLine className="h-5 w-5 text-emerald-500" />}
                        variant="success"
                    />
                    <MetricCard
                        title="Operating Income"
                        value="$14.1M"
                        subtitle="17.9% margin"
                        icon={<RiLineChartLine className="h-5 w-5 text-blue-500" />}
                        variant="info"
                    />
                    <MetricCard
                        title="Take-Private Value"
                        value="$700M"
                        subtitle="Nov 2020"
                        icon={<RiMoneyDollarCircleLine className="h-5 w-5 text-purple-500" />}
                    />
                </div>
            </section>

            {/* Revenue & Profit Charts */}
            <section>
                <SectionHeader
                    title="Revenue & Profitability Trends"
                    subtitle="Fiscal year comparison (in millions USD)"
                />
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                        <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-50">
                            Revenue & Profit ($M)
                        </h3>
                        <LineChart
                            className="h-64"
                            data={revenueChartData}
                            index="year"
                            categories={["Net Revenue", "Gross Profit", "Operating Income"]}
                            colors={["indigo", "emerald", "amber"]}
                            valueFormatter={(value) => `$${value.toFixed(1)}M`}
                            showLegend={true}
                            showGridLines={true}
                        />
                    </div>
                    <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                        <h3 className="mb-4 font-semibold text-gray-900 dark:text-gray-50">
                            Margin Performance (%)
                        </h3>
                        <LineChart
                            className="h-64"
                            data={marginChartData}
                            index="year"
                            categories={["Gross Margin", "Operating Margin"]}
                            colors={["emerald", "blue"]}
                            valueFormatter={(value) => `${value.toFixed(1)}%`}
                            showLegend={true}
                            showGridLines={true}
                        />
                    </div>
                </div>
            </section>

            {/* Segment Breakdown */}
            <section>
                <SectionHeader
                    title="Segment Economics"
                    subtitle="Why grading can be a high-margin labor business"
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {psaSegments.map((segment) => (
                        <div
                            key={segment.segment}
                            className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
                        >
                            <h3 className="font-semibold text-gray-900 dark:text-gray-50">
                                {segment.segment}
                            </h3>
                            <div className="mt-4 grid grid-cols-3 gap-4">
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Revenue</p>
                                    <p className="text-lg font-bold text-gray-900 dark:text-gray-50">
                                        ${(segment.netRevenue / 1000000).toFixed(1)}M
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Operating Income</p>
                                    <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                                        ${(segment.operatingIncome / 1000000).toFixed(1)}M
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Margin</p>
                                    <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                                        {segment.marginPercent.toFixed(1)}%
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trust Mechanics */}
            <section>
                <SectionHeader
                    title="Trust Mechanics"
                    subtitle="The bundle that creates defensibility"
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <TrustMechanicCard
                        title="Multi-Rater Review"
                        description="Two or more graders must agree on a grade, reducing individual bias"
                        source="PSA FAQ"
                    />
                    <TrustMechanicCard
                        title="Financial Guarantee"
                        description="Buyback or refund if grade/authenticity is later determined incorrect"
                        source="PSA Financial Guarantee"
                    />
                    <TrustMechanicCard
                        title="Tamper-Evident Slab"
                        description="Sonic weld construction shows 'frosting' if violated; impossible to reseal"
                        source="PSA Security Guide"
                    />
                    <TrustMechanicCard
                        title="Public Verification"
                        description="Cert lookup + QR verification enables sight-unseen trade with confidence"
                        source="PSA Cert Verification"
                    />
                </div>
            </section>

            {/* Success Factors: Micro + Macro */}
            <section>
                <SectionHeader
                    title="Success Factors: Micro + Macro Mechanisms"
                    subtitle="What actually created PSA's defensible moat"
                />

                {/* Micro Factors */}
                <div className="mb-6">
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4">
                        <RiSettings3Line className="h-5 w-5 text-blue-500" />
                        Micro (Internal Mechanisms)
                    </h3>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        {psaSuccessFactors.micro.map((factor, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
                            >
                                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                    {factor.factor}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                    {factor.description}
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <RiLightbulbLine className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-xs text-amber-700 dark:text-amber-300">
                                            <strong>Why it works:</strong> {factor.whyItWorks}
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <RiArrowRightLine className="h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                                        <p className="text-xs text-indigo-700 dark:text-indigo-300">
                                            <strong>HSA implication:</strong> {factor.hsaImplication}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Macro Factors */}
                <div className="mb-6">
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4">
                        <RiGlobalLine className="h-5 w-5 text-emerald-500" />
                        Macro (Market Mechanisms)
                    </h3>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                        {psaSuccessFactors.macro.map((factor, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-800 dark:bg-emerald-950/20"
                            >
                                <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2">
                                    {factor.factor}
                                </h4>
                                <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-3">
                                    {factor.description}
                                </p>
                                <p className="text-xs text-emerald-600 dark:text-emerald-400">
                                    <strong>HSA → </strong>{factor.hsaImplication}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Failure Modes */}
                <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4">
                        <RiAlertLine className="h-5 w-5 text-red-500" />
                        Known Failure Modes
                    </h3>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        {psaSuccessFactors.failureModes.map((mode, index) => (
                            <div
                                key={index}
                                className="rounded-xl border-l-4 border-l-red-500 border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
                            >
                                <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">
                                    {mode.mode}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                    {mode.description}
                                </p>
                                <p className="text-sm text-emerald-700 dark:text-emerald-300">
                                    <strong>Mitigation:</strong> {mode.mitigation}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Tiers */}
            <section>
                <SectionHeader
                    title="Pricing Architecture"
                    subtitle="Turnaround tiers as demand throttle and margin driver"
                />
                <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                        <thead className="bg-gray-50 dark:bg-gray-900">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Service Tier
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Price
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Turnaround
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-950">
                            {psaServiceTiers.map((tier) => (
                                <tr key={tier.tier} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-gray-50">
                                        {tier.tier}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-gray-600 dark:text-gray-400">
                                        {tier.price}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-gray-600 dark:text-gray-400">
                                        {tier.turnaround}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                    <strong>Key insight:</strong> Faster turnaround commands higher fees; this pricing architecture
                    enables PSA to match demand to capacity while driving ASP when backlog builds.
                </p>
            </section>

            {/* Timeline */}
            <section>
                <SectionHeader
                    title="Historical Timeline & Success Factors"
                    subtitle="21 key milestones from PSA's evolution—what worked, what failed, and why"
                    badge={`${psaTimeline.length} Milestones`}
                />

                {/* Category Legend */}
                <div className="mb-6 flex flex-wrap gap-3">
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-orange-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">PSA Actions</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-purple-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Competitor Moves</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-blue-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Industry Events</span>
                    </div>
                </div>

                {/* Outcome Legend */}
                <div className="mb-6 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                        ✓ Success
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                        ⚡ Mixed
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
                        ✗ Failure/Risk
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                        ? Pending
                    </span>
                </div>

                <TimelineChart events={psaTimeline} showSuccessFactors={true} />
            </section>

            {/* Key Takeaway */}
            <section className="rounded-xl border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-900 dark:bg-indigo-950/20">
                <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100">
                    Implication for HSA
                </h3>
                <p className="mt-2 text-indigo-800 dark:text-indigo-200">
                    PSA's success demonstrates that trust services can achieve ~57% gross margins at scale.
                    The moat comes from network effects (registry + population report), financial accountability
                    (guarantee + buyback), and tamper-evident artifacts. HSA must replicate these mechanics
                    while adapting for bags' unique challenges: repairability, state changes, and higher
                    claim severity.
                </p>
            </section>
        </div>
    )
}

// Trust Mechanic Card Component
interface TrustMechanicCardProps {
    title: string
    description: string
    source: string
}

function TrustMechanicCard({ title, description, source }: TrustMechanicCardProps) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
            <h4 className="font-semibold text-gray-900 dark:text-gray-50">{title}</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
            <p className="mt-3 text-xs text-gray-500">Source: {source}</p>
        </div>
    )
}
