"use client"

import { SectionHeader } from "@/components/ui/report/SectionHeader"
import {
    chinaMarketContext,
    comparables,
    comparisonMatrix,
} from "@/data/hsa-report-data"
import { cx } from "@/lib/utils"
import {
    RiAlertLine,
    RiArrowRightLine,
    RiBarChart2Line,
    RiExchangeLine,
    RiGlobalLine,
    RiScales3Line,
    RiShieldCheckLine,
    RiShoppingBagLine,
} from "@remixicon/react"

export default function Comparables() {
    return (
        <div className="space-y-10">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 sm:text-3xl">
                    Market Analysis & Comparables
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    How existing players approach authenticity and what HSA can learn
                </p>

                {/* Page Pills */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {[
                        { icon: RiBarChart2Line, label: `${comparables.length} Comparables Analyzed`, color: "purple" },
                        { icon: RiScales3Line, label: "PSA vs StockX vs HSA", color: "indigo" },
                        { icon: RiGlobalLine, label: "China Market Insights", color: "blue" },
                        { icon: RiAlertLine, label: "Legal Precedent: Nike v StockX", color: "red" },
                    ].map((item) => (
                        <span
                            key={item.label}
                            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${item.color === "purple"
                                ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                                : item.color === "indigo"
                                    ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                                    : item.color === "blue"
                                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                        : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                                }`}
                        >
                            <item.icon className="h-3.5 w-3.5" />
                            {item.label}
                        </span>
                    ))}
                </div>
            </div>

            {/* PSA vs StockX vs HSA Comparison */}
            <section>
                <SectionHeader
                    title="PSA vs StockX vs HSA"
                    subtitle="Side-by-side comparison of trust infrastructure approaches"
                    badge="Core Analysis"
                />
                <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                        <thead className="bg-gray-50 dark:bg-gray-900">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 min-w-[140px]">
                                    Dimension
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-indigo-600 dark:text-indigo-400 min-w-[200px]">
                                    PSA
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-purple-600 dark:text-purple-400 min-w-[200px]">
                                    StockX
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-orange-600 dark:text-orange-400 min-w-[200px]">
                                    HSA (Proposed)
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-950">
                            {comparisonMatrix.map((row, index) => (
                                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                                    <td className="px-4 py-4 font-medium text-gray-900 dark:text-gray-50 align-top">
                                        {row.dimension}
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400 align-top">
                                        {row.psa}
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400 align-top">
                                        {row.stockx}
                                    </td>
                                    <td className="px-4 py-4 text-sm text-orange-700 dark:text-orange-300 font-medium align-top">
                                        {row.hsa}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Competitor Deep Dives */}
            <section>
                <SectionHeader
                    title="Competitor Analysis"
                    subtitle="Detailed breakdown of trust mechanisms, vulnerabilities, and lessons"
                />
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {comparables.map((comp) => (
                        <CompetitorCard key={comp.name} {...comp} />
                    ))}
                </div>
            </section>

            {/* Key Design Implications */}
            <section>
                <SectionHeader
                    title="Design Implications for HSA"
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <ImplicationCard
                        title="Behave Like PSA, Not StockX"
                        description="The defensible moat is grade language + verification registry + financial accountability, not marketplace fees."
                        type="strategy"
                    />
                    <ImplicationCard
                        title="Embrace 'Inconclusive'"
                        description="Conservative cert states protect against court-tested 'verified authentic' claims that can be falsified."
                        type="risk"
                    />
                    <ImplicationCard
                        title="In-Hand Inspection Required"
                        description="Never dilute the core claim with digital-only verification for Hermès—physical inspection + evidence capture is mandatory."
                        type="operations"
                    />
                    <ImplicationCard
                        title="Non-Transferable Guarantee OK"
                        description="Like Entrupy, guarantee can be limited to direct customers, but verification artifact must be transferable."
                        type="legal"
                    />
                    <ImplicationCard
                        title="Cross-Market Standard"
                        description="Platform-native auth (like Dewu) doesn't become an independent standard. HSA must publish stable grade language."
                        type="strategy"
                    />
                    <ImplicationCard
                        title="Professional Routing"
                        description="Like Chrono24 with watchmakers, HSA needs explicit criteria and professional-grade auditability."
                        type="operations"
                    />
                </div>
            </section>

            {/* StockX Legal Warning */}
            <section className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/20">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100">
                    ⚠️ Legal Precedent: Nike v. StockX
                </h3>
                <p className="mt-2 text-red-800 dark:text-red-200">
                    In the March 4, 2025 court order, StockX was found liable for distributing counterfeit goods
                    (37 pairs total: 4 to Nike investigators, 33 to Roy Kim). This demonstrates that
                    <strong> &quot;verified authentic&quot; claims are court-testable</strong>—and adversaries will test them.
                </p>
                <p className="mt-3 text-sm text-red-700 dark:text-red-300">
                    <strong>HSA implication:</strong> Design with conservative states, tight chain-of-custody artifacts,
                    and explicit validity conditions that reduce exposure.
                </p>
            </section>

            {/* China Market Context - Enhanced Section */}
            <section className="space-y-6">
                <SectionHeader
                    title="China Market Deep Dive"
                    subtitle="Tencent × BCG data, Dewu authentication model, and grey market dynamics"
                />

                {/* Market Overview Card */}
                <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 dark:border-blue-900 dark:bg-gradient-to-br dark:from-blue-950/40 dark:to-indigo-950/40">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                            <RiGlobalLine className="h-5 w-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
                                China Luxury Market 2024
                            </h3>
                            <p className="text-sm text-blue-600 dark:text-blue-400">
                                {chinaMarketContext.overview.source}
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                        <div className="rounded-lg bg-white/60 p-4 dark:bg-gray-900/40">
                            <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                                {chinaMarketContext.overview.totalSpend}
                            </p>
                            <p className="text-sm text-blue-700 dark:text-blue-300">Total Luxury Spend</p>
                        </div>
                        <div className="rounded-lg bg-white/60 p-4 dark:bg-gray-900/40">
                            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                                {chinaMarketContext.overview.growth}
                            </p>
                            <p className="text-sm text-blue-700 dark:text-blue-300">Year-over-Year Growth</p>
                        </div>
                        <div className="rounded-lg bg-white/60 p-4 dark:bg-gray-900/40">
                            <p className="text-sm text-blue-800 dark:text-blue-200">
                                <strong>Key Insight:</strong> {chinaMarketContext.overview.keyInsight}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Two Column Grid: Dewu Model + Grey Market */}
                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Dewu Model Card */}
                    <div className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 text-white">
                                <RiShieldCheckLine className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-green-900 dark:text-green-100">
                                    {chinaMarketContext.dewuModel.name}
                                </h4>
                                <p className="text-sm text-green-600 dark:text-green-400 italic">
                                    &quot;{chinaMarketContext.dewuModel.slogan}&quot; — {chinaMarketContext.dewuModel.english}
                                </p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
                                <RiShieldCheckLine className="h-4 w-4 flex-shrink-0" />
                                <span className="font-medium">{chinaMarketContext.dewuModel.claimedVolume}</span>
                            </div>
                            <p className="text-sm text-green-700 dark:text-green-300">
                                <strong>Process:</strong> {chinaMarketContext.dewuModel.process}
                            </p>
                            <div className="mt-4 rounded-lg bg-green-100/50 p-3 dark:bg-green-900/30">
                                <p className="text-sm text-green-800 dark:text-green-200">
                                    <RiArrowRightLine className="inline h-4 w-4 mr-1" />
                                    <strong>HSA Lesson:</strong> {chinaMarketContext.dewuModel.hsaLesson}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Grey Market Card */}
                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600 text-white">
                                <RiExchangeLine className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-amber-900 dark:text-amber-100">
                                    Grey Market Dynamics
                                </h4>
                                <p className="text-sm text-amber-600 dark:text-amber-400">
                                    {chinaMarketContext.greyMarket.source}
                                </p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
                                <span className="text-2xl font-bold">{chinaMarketContext.greyMarket.size}</span>
                                <span className="text-sm">annually</span>
                            </div>
                            <p className="text-sm text-amber-700 dark:text-amber-300">
                                {chinaMarketContext.greyMarket.dynamics}
                            </p>
                            <div className="mt-4 rounded-lg bg-amber-100/50 p-3 dark:bg-amber-900/30">
                                <p className="text-sm text-amber-800 dark:text-amber-200">
                                    <RiAlertLine className="inline h-4 w-4 mr-1" />
                                    <strong>Demand Driver:</strong> {chinaMarketContext.greyMarket.authenticityDemand}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bag Modification Risks */}
                <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/20">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-white">
                            <RiShoppingBagLine className="h-5 w-5" />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-red-900 dark:text-red-100">
                                {chinaMarketContext.bagModification.phenomenon} (Old Bag Modification)
                            </h4>
                            <p className="text-sm text-red-600 dark:text-red-400">
                                {chinaMarketContext.bagModification.source}
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <p className="text-sm text-red-700 dark:text-red-300 mb-2">
                                <strong>Price Range:</strong> {chinaMarketContext.bagModification.priceRange}
                            </p>
                            <p className="text-sm text-red-700 dark:text-red-300">
                                <strong>Services:</strong> {chinaMarketContext.bagModification.services}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-red-800 dark:text-red-200 mb-2">Known Risks:</p>
                            <ul className="space-y-1">
                                {chinaMarketContext.bagModification.risks.map((risk, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-red-700 dark:text-red-300">
                                        <RiAlertLine className="h-4 w-4 flex-shrink-0" />
                                        {risk}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-4 rounded-lg bg-red-100/50 p-3 dark:bg-red-900/30">
                        <p className="text-sm text-red-800 dark:text-red-200">
                            <RiArrowRightLine className="inline h-4 w-4 mr-1" />
                            <strong>HSA Implication:</strong> {chinaMarketContext.bagModification.hsaImplication}
                        </p>
                    </div>
                </div>

                {/* Strategic Implications */}
                <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-900 dark:bg-indigo-950/20">
                    <h4 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-4">
                        Strategic Implications for HSA
                    </h4>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {chinaMarketContext.strategicImplications.map((implication, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-3 rounded-lg bg-white/60 p-3 dark:bg-gray-900/40"
                            >
                                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
                                    {idx + 1}
                                </span>
                                <p className="text-sm text-indigo-800 dark:text-indigo-200">{implication}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

// Competitor Card Component
interface CompetitorCardProps {
    name: string
    focus: string
    trustMechanism: string
    ratingApproach: string
    disputeWorkflow: string
    vulnerability: string
    lessonForHSA: string
    pricing?: string
}

function CompetitorCard({
    name,
    focus,
    trustMechanism,
    ratingApproach,
    vulnerability,
    lessonForHSA,
    pricing,
}: CompetitorCardProps) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                        {name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{focus}</p>
                </div>
                {pricing && (
                    <span className="rounded-md bg-emerald-100 px-2.5 py-0.5 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                        {pricing}
                    </span>
                )}
            </div>

            <div className="mt-4 space-y-3 text-sm">
                <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Trust Mechanism: </span>
                    <span className="text-gray-600 dark:text-gray-400">{trustMechanism}</span>
                </div>
                <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Rating Approach: </span>
                    <span className="text-gray-600 dark:text-gray-400">{ratingApproach}</span>
                </div>
                <div className="rounded-md bg-amber-50 p-2 dark:bg-amber-900/20">
                    <span className="font-medium text-amber-700 dark:text-amber-300">Vulnerability: </span>
                    <span className="text-amber-600 dark:text-amber-400">{vulnerability}</span>
                </div>
                <div className="rounded-md bg-orange-50 p-2 dark:bg-orange-900/20">
                    <span className="font-medium text-orange-700 dark:text-orange-300">Lesson for HSA: </span>
                    <span className="text-orange-600 dark:text-orange-400">{lessonForHSA}</span>
                </div>
            </div>
        </div>
    )
}

// Implication Card Component
interface ImplicationCardProps {
    title: string
    description: string
    type: "strategy" | "risk" | "operations" | "legal"
}

const typeStyles = {
    strategy: "border-indigo-200 bg-indigo-50 dark:border-indigo-900 dark:bg-indigo-950/20",
    risk: "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/20",
    operations: "border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/20",
    legal: "border-purple-200 bg-purple-50 dark:border-purple-900 dark:bg-purple-950/20",
}

const typeLabels = {
    strategy: { label: "Strategy", color: "text-indigo-700 dark:text-indigo-300" },
    risk: { label: "Risk", color: "text-red-700 dark:text-red-300" },
    operations: { label: "Operations", color: "text-emerald-700 dark:text-emerald-300" },
    legal: { label: "Legal", color: "text-purple-700 dark:text-purple-300" },
}

function ImplicationCard({ title, description, type }: ImplicationCardProps) {
    return (
        <div className={cx("rounded-xl border p-4", typeStyles[type])}>
            <span className={cx("text-xs font-medium uppercase tracking-wider", typeLabels[type].color)}>
                {typeLabels[type].label}
            </span>
            <h4 className="mt-1 font-semibold text-gray-900 dark:text-gray-50">{title}</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>
    )
}
