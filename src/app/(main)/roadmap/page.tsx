"use client"

import { SectionHeader } from "@/components/ui/report/SectionHeader"
import { TimelineChart } from "@/components/ui/report/TimelineChart"
import { exitMilestones, rolloutTimeline } from "@/data/hsa-report-data"
import { cx } from "@/lib/utils"
import {
    RiCalendarLine,
    RiDatabase2Line,
    RiFlagLine,
    RiGlobalLine,
    RiRocketLine,
    RiShieldCheckLine,
    RiTeamLine,
} from "@remixicon/react"

// Transform rollout data for timeline
const timelineEvents = rolloutTimeline.map((milestone, index) => ({
    date: milestone.timeframe,
    year: 2025 + Math.floor(index / 2),
    event: milestone.phase,
    mechanism: milestone.objectives.join("; "),
    evidence: milestone.deliverables.join(", "),
}))

export default function Roadmap() {
    return (
        <div className="space-y-10">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 sm:text-3xl">
                    Roadmap & Exit
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    12–18 month rollout plan, quarterly KPIs, and exit scenarios
                </p>

                {/* Page Pills */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {[
                        { icon: RiCalendarLine, label: `${rolloutTimeline.length} Phases`, color: "orange" },
                        { icon: RiFlagLine, label: "6 Exit Milestones", color: "emerald" },
                        { icon: RiRocketLine, label: "3 Exit Scenarios", color: "purple" },
                    ].map((item) => (
                        <span
                            key={item.label}
                            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${item.color === "orange"
                                ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                                : item.color === "emerald"
                                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                                    : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                                }`}
                        >
                            <item.icon className="h-3.5 w-3.5" />
                            {item.label}
                        </span>
                    ))}
                </div>
            </div>

            {/* Phase Cards */}
            <section>
                <SectionHeader
                    title="Rollout Phases"
                    subtitle="Trust-first execution with explicit milestones"
                />
                <div className="space-y-4">
                    {rolloutTimeline.map((phase, index) => (
                        <PhaseCard key={index} {...phase} index={index} />
                    ))}
                </div>
            </section>

            {/* Timeline Visualization */}
            <section>
                <SectionHeader
                    title="Visual Timeline"
                    subtitle="Key milestones from MVP to scale"
                />
                <TimelineChart events={timelineEvents} />
            </section>

            {/* Quarterly KPIs */}
            <section>
                <SectionHeader
                    title="Trust-Centric KPIs"
                    subtitle="Metrics that matter for trust infrastructure"
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <KPICard
                        category="Operations"
                        metrics={[
                            "Throughput/day/authenticator",
                            "Turnaround time distribution",
                            "Rework rate",
                        ]}
                    />
                    <KPICard
                        category="Trust"
                        metrics={[
                            "Appeal rate",
                            "Dispute rate",
                            "Reserve utilization",
                        ]}
                    />
                    <KPICard
                        category="Adoption"
                        metrics={[
                            "Partner adoption (listings with HSA grade)",
                            "API verification calls",
                            '% verifications returning "valid & sealed"',
                        ]}
                    />
                </div>
            </section>

            {/* Exit Scenarios */}
            <section>
                <SectionHeader
                    title="Exit Scenarios"
                    subtitle="Pathways to liquidity based on trust infrastructure value"
                />
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    <ExitCard
                        type="Strategic Acquisition"
                        description="Large resale platforms, luxury-adjacent trust infra, insurers, or authentication incumbents"
                        examples={["eBay/Collectors-style integration", "Entrupy acquisition", "Insurance partnership"]}
                        likelihood="High"
                    />
                    <ExitCard
                        type="Roll-Up"
                        description="Combine with repair/spa networks if chain-of-custody and independence can be preserved"
                        examples={["Hermès spa network partnership", "Multi-category trust consolidation"]}
                        likelihood="Medium"
                    />
                    <ExitCard
                        type="IPO"
                        description="Only if HSA becomes multi-category standard with stable loss ratio and high-margin recurring rails"
                        examples={["Verification API revenue", "Custody services at scale"]}
                        likelihood="Low (requires 5+ years)"
                    />
                </div>
            </section>

            {/* Yearly Trajectory to Exit */}
            <section>
                <SectionHeader
                    title="Yearly Trajectory to Exit"
                    subtitle="Multi-year roadmap building toward exit-ready state"
                    badge="4-5 Year Plan"
                />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {exitMilestones.yearlyTrajectory.map((year, idx) => (
                        <div
                            key={idx}
                            className={cx(
                                "rounded-xl border p-5",
                                idx === 0 ? "border-orange-200 bg-orange-50/50 dark:border-orange-900 dark:bg-orange-950/30" :
                                    idx === 1 ? "border-blue-200 bg-blue-50/50 dark:border-blue-900 dark:bg-blue-950/30" :
                                        idx === 2 ? "border-purple-200 bg-purple-50/50 dark:border-purple-900 dark:bg-purple-950/30" :
                                            "border-emerald-200 bg-emerald-50/50 dark:border-emerald-900 dark:bg-emerald-950/30"
                            )}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <span className={cx(
                                    "text-2xl font-bold",
                                    idx === 0 ? "text-orange-600 dark:text-orange-400" :
                                        idx === 1 ? "text-blue-600 dark:text-blue-400" :
                                            idx === 2 ? "text-purple-600 dark:text-purple-400" :
                                                "text-emerald-600 dark:text-emerald-400"
                                )}>
                                    Year {year.year}
                                </span>
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-gray-50 mb-3">
                                {year.focus}
                            </h4>
                            <ul className="space-y-2">
                                {year.goals.map((goal, gIdx) => (
                                    <li key={gIdx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                                        {goal}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Exit-Ready Milestones */}
            <section>
                <SectionHeader
                    title="Exit-Ready Checklist"
                    subtitle="All conditions that must be true before exit is viable"
                    badge="7 Criteria"
                />
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/20">
                    <ul className="space-y-3">
                        {exitMilestones.exitReadyChecklist.map((item, idx) => (
                            <MilestoneItem key={idx} done={false} text={item} />
                        ))}
                    </ul>
                </div>
            </section>

            {/* Investment Thesis */}
            <section className="rounded-xl border border-orange-200 bg-orange-50 p-6 dark:border-orange-900 dark:bg-orange-950/20">
                <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100">
                    Investment Thesis Summary
                </h3>
                <p className="mt-2 text-orange-800 dark:text-orange-200">
                    HSA is viable only if treated as a <strong>trust infrastructure company</strong> with a
                    cryptographically bound &quot;digital slab&quot; and a defensible grading standard—not as a
                    marketplace feature. PSA&apos;s success is the blueprint: multi-rater grading, tamper-evident
                    artifacts, public verification rails, and financial accountability that the market can
                    price into transactions.
                </p>
                <p className="mt-4 text-orange-800 dark:text-orange-200">
                    We proceed because (a) unit economics for trust services can be excellent (PSA demonstrates
                    ~57% gross margin at scale), and (b) China and global resale behavior shows escalating
                    demand for &quot;authenticate-first&quot; workflows, but <strong>no cross-market Hermès grading
                        standard exists yet</strong>.
                </p>
                <p className="mt-4 font-medium text-orange-900 dark:text-orange-100">
                    We kill the project fast if reliability, tag security, or loss ratio fails the falsification checklist.
                </p>
            </section>
        </div>
    )
}

// Phase Card Component
interface PhaseCardProps {
    phase: string
    timeframe: string
    objectives: string[]
    deliverables: string[]
    index: number
}

const phaseIcons = [RiRocketLine, RiTeamLine, RiDatabase2Line, RiShieldCheckLine, RiGlobalLine]
const phaseColors = [
    "border-l-orange-500 bg-orange-50 dark:bg-orange-950/20",
    "border-l-blue-500 bg-blue-50 dark:bg-blue-950/20",
    "border-l-purple-500 bg-purple-50 dark:bg-purple-950/20",
    "border-l-emerald-500 bg-emerald-50 dark:bg-emerald-950/20",
    "border-l-indigo-500 bg-indigo-50 dark:bg-indigo-950/20",
]

function PhaseCard({ phase, timeframe, objectives, deliverables, index }: PhaseCardProps) {
    const Icon = phaseIcons[index] || RiRocketLine

    return (
        <div className={cx(
            "rounded-xl border border-gray-200 border-l-4 p-5 dark:border-gray-800",
            phaseColors[index] || phaseColors[0]
        )}>
            <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm dark:bg-gray-900">
                    <Icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </div>
                <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{phase}</h3>
                        <span className="rounded-md bg-white px-2.5 py-0.5 text-sm font-medium text-gray-700 shadow-sm dark:bg-gray-900 dark:text-gray-300">
                            {timeframe}
                        </span>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                        <div>
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Objectives:</p>
                            <ul className="mt-2 space-y-1">
                                {objectives.map((obj, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                                        {obj}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Deliverables:</p>
                            <ul className="mt-2 space-y-1">
                                {deliverables.map((del, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                                        {del}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// KPI Card Component
interface KPICardProps {
    category: string
    metrics: string[]
}

function KPICard({ category, metrics }: KPICardProps) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <h4 className="font-semibold text-gray-900 dark:text-gray-50">{category}</h4>
            <ul className="mt-3 space-y-2">
                {metrics.map((metric, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-400" />
                        {metric}
                    </li>
                ))}
            </ul>
        </div>
    )
}

// Exit Card Component
interface ExitCardProps {
    type: string
    description: string
    examples: string[]
    likelihood: "High" | "Medium" | "Low (requires 5+ years)"
}

const likelihoodStyles = {
    High: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    Medium: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    "Low (requires 5+ years)": "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
}

function ExitCard({ type, description, examples, likelihood }: ExitCardProps) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-start justify-between gap-2">
                <h4 className="font-semibold text-gray-900 dark:text-gray-50">{type}</h4>
                <span className={cx("shrink-0 rounded-md px-2 py-0.5 text-xs font-medium", likelihoodStyles[likelihood])}>
                    {likelihood}
                </span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
            <div className="mt-3">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Examples:</p>
                <ul className="mt-1 space-y-1">
                    {examples.map((ex, i) => (
                        <li key={i} className="text-xs text-gray-500 dark:text-gray-400">• {ex}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

// Milestone Item Component
function MilestoneItem({ done, text }: { done: boolean; text: string }) {
    return (
        <li className="flex items-start gap-3">
            <div className={cx(
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                done ? "bg-emerald-100 dark:bg-emerald-900/30" : "bg-gray-100 dark:bg-gray-800"
            )}>
                {done ? (
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                ) : (
                    <span className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600" />
                )}
            </div>
            <span className={cx(
                "text-sm",
                done ? "text-gray-900 dark:text-gray-50" : "text-gray-600 dark:text-gray-400"
            )}>
                {text}
            </span>
        </li>
    )
}
