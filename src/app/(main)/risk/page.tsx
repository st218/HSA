"use client"

import { KillCriteriaChecklist } from "@/components/ui/report/ContentComponents"
import { MetricCard } from "@/components/ui/report/MetricCard"
import { SectionHeader } from "@/components/ui/report/SectionHeader"
import {
    falsifiableHypotheses,
    falsificationTests,
    fraudVectors,
    riskRegister,
} from "@/data/hsa-report-data"
import { cx } from "@/lib/utils"
import {
    RiAlertLine,
    RiCheckLine,
    RiCloseLine,
    RiErrorWarningLine,
    RiShieldCheckLine,
    RiSpyLine,
    RiTestTubeLine,
} from "@remixicon/react"

export default function Risk() {
    const criticalRisks = riskRegister.filter((r) => r.severity === "Critical").length
    const highRisks = riskRegister.filter((r) => r.severity === "High").length
    const mediumRisks = riskRegister.filter((r) => r.severity === "Medium").length

    return (
        <div className="space-y-10">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 sm:text-3xl">
                    Risk & Validation
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Threat model, risk register, and falsification tests with explicit kill criteria
                </p>

                {/* Risk Framework Pills */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {[
                        { icon: RiSpyLine, label: `${fraudVectors.length} Fraud Vectors`, color: "red" },
                        { icon: RiErrorWarningLine, label: `${highRisks + criticalRisks} High-Severity Risks`, color: "amber" },
                        { icon: RiTestTubeLine, label: `${falsificationTests.length} Kill Tests`, color: "emerald" },
                        { icon: RiShieldCheckLine, label: "Adversarial Framework", color: "blue" },
                    ].map((item) => (
                        <span
                            key={item.label}
                            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${item.color === "red"
                                ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                                : item.color === "amber"
                                    ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                                    : item.color === "emerald"
                                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                                        : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                }`}
                        >
                            <item.icon className="h-3.5 w-3.5" />
                            {item.label}
                        </span>
                    ))}
                </div>
            </div>

            {/* Risk Summary */}
            <section>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <MetricCard
                        title="Critical/High Risks"
                        value={criticalRisks + highRisks}
                        subtitle="Require active mitigation"
                        icon={<RiAlertLine className="h-5 w-5 text-red-500" />}
                        variant="danger"
                    />
                    <MetricCard
                        title="Medium-Severity Risks"
                        value={mediumRisks}
                        subtitle="Require monitoring"
                        icon={<RiAlertLine className="h-5 w-5 text-amber-500" />}
                        variant="warning"
                    />
                    <MetricCard
                        title="Fraud Vectors Modeled"
                        value={fraudVectors.length}
                        subtitle="With detection controls"
                        icon={<RiShieldCheckLine className="h-5 w-5 text-blue-500" />}
                        variant="info"
                    />
                    <MetricCard
                        title="Falsification Tests"
                        value={falsificationTests.length}
                        subtitle="With pass/fail thresholds"
                        icon={<RiCheckLine className="h-5 w-5 text-emerald-500" />}
                        variant="success"
                    />
                </div>
            </section>

            {/* Risk Register */}
            <section>
                <SectionHeader
                    title="Risk Register"
                    subtitle="10 key risks with severity, mitigation, early warning, and kill criteria"
                    badge="10 Risks"
                />
                <div className="space-y-3">
                    {riskRegister.map((risk) => (
                        <RiskCard
                            key={risk.id}
                            id={risk.id}
                            risk={risk.risk}
                            category={risk.category}
                            severity={risk.severity as "Critical" | "High" | "Medium" | "Low"}
                            mitigation={risk.mitigation}
                            earlyWarning={risk.earlyWarning}
                            killCriterion={risk.killCriterion}
                        />
                    ))}
                </div>
            </section>

            {/* Fraud Vectors */}
            <section>
                <SectionHeader
                    title="Fraud Threat Model"
                    subtitle="14 adversarial vectors with controls and residual risk assessment"
                    badge="Adversarial Analysis"
                />
                <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                        <thead className="bg-gray-50 dark:bg-gray-900">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Fraud Vector
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Description
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Control
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Residual Risk
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-950">
                            {fraudVectors.map((vector, index) => (
                                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-50">
                                        {vector.vector}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                                        {vector.description}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                                        {vector.control}
                                    </td>
                                    <td className="px-4 py-3">
                                        <ResidualRiskBadge risk={vector.residualRisk} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Falsification Tests */}
            <section>
                <SectionHeader
                    title="Falsification Checklist"
                    subtitle="Kill criteria: if any critical test fails, kill or pivot the project"
                    badge="Kill Switches"
                />
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {falsificationTests.map((test, index) => (
                        <TestCard
                            key={index}
                            index={index + 1}
                            test={test.test}
                            threshold={test.threshold}
                            failCondition={test.failCondition}
                            testWindow={test.testWindow}
                            isCritical={test.isCritical}
                        />
                    ))}
                </div>
            </section>

            {/* Kill Criteria Detailed Checklist */}
            <section>
                <SectionHeader
                    title="Kill Criteria (30–60 Day Tests)"
                    subtitle="Explicit pass/fail thresholds with test windows - designed as kill switches, not vanity KPIs"
                    badge="10 Tests"
                />
                <KillCriteriaChecklist />
            </section>

            {/* Falsifiable Hypotheses - Detailed */}
            <section>
                <SectionHeader
                    title="Falsifiable Hypotheses"
                    subtitle="8 testable claims with explicit pass/fail criteria and test windows"
                    badge={`${falsifiableHypotheses.length} Hypotheses`}
                />
                <div className="grid gap-4 md:grid-cols-2">
                    {falsifiableHypotheses.map((hyp) => (
                        <div
                            key={hyp.id}
                            className={cx(
                                "rounded-xl border p-5",
                                hyp.category === "Security"
                                    ? "border-red-200 bg-red-50/50 dark:border-red-900 dark:bg-red-950/30"
                                    : hyp.category === "Operational"
                                        ? "border-amber-200 bg-amber-50/50 dark:border-amber-900 dark:bg-amber-950/30"
                                        : hyp.category === "Financial"
                                            ? "border-emerald-200 bg-emerald-50/50 dark:border-emerald-900 dark:bg-emerald-950/30"
                                            : "border-blue-200 bg-blue-50/50 dark:border-blue-900 dark:bg-blue-950/30"
                            )}
                        >
                            <div className="flex items-start justify-between gap-2">
                                <div>
                                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                                        {hyp.id}
                                    </span>
                                    <span className={cx(
                                        "ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                                        hyp.category === "Security"
                                            ? "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300"
                                            : hyp.category === "Operational"
                                                ? "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300"
                                                : hyp.category === "Financial"
                                                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                                                    : "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
                                    )}>
                                        {hyp.category}
                                    </span>
                                </div>
                                <span className="shrink-0 rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                                    {hyp.windowDays} days
                                </span>
                            </div>
                            <h4 className="mt-2 font-medium text-gray-900 dark:text-gray-50">
                                {hyp.hypothesis}
                            </h4>
                            <div className="mt-3 space-y-2 text-sm">
                                <div className="flex gap-2">
                                    <span className="font-medium text-gray-600 dark:text-gray-400">Sample:</span>
                                    <span className="text-gray-700 dark:text-gray-300">{hyp.sample}</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="font-medium text-gray-600 dark:text-gray-400">Test:</span>
                                    <span className="text-gray-700 dark:text-gray-300">{hyp.test}</span>
                                </div>
                                <div className="flex gap-4 pt-2">
                                    <div className="flex-1 rounded-md bg-emerald-50 p-2 dark:bg-emerald-900/20">
                                        <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">Pass:</span>
                                        <p className="mt-0.5 text-sm text-emerald-600 dark:text-emerald-400">{hyp.passThreshold}</p>
                                    </div>
                                    <div className="flex-1 rounded-md bg-red-50 p-2 dark:bg-red-900/20">
                                        <span className="text-xs font-medium text-red-700 dark:text-red-300">Fail:</span>
                                        <p className="mt-0.5 text-sm text-red-600 dark:text-red-400">{hyp.failThreshold}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Critical Warning */}
            <section className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/20">
                <h3 className="text-lg font-semibold text-red-900 dark:text-red-100">
                    ⚠️ Kill Criteria Summary
                </h3>
                <p className="mt-2 text-red-800 dark:text-red-200">
                    These tests are designed as <strong>kill switches, not vanity KPIs</strong>.
                    If any critical test fails, immediately evaluate whether to pivot or shut down.
                </p>
                <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
                        <RiCloseLine className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        Inter-rater reliability &lt;75% within ±1 notch → FAIL
                    </li>
                    <li className="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
                        <RiCloseLine className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        Any seeded counterfeit passes as authentic → FAIL
                    </li>
                    <li className="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
                        <RiCloseLine className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        Any tag attack yields valid verification → FAIL
                    </li>
                    <li className="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
                        <RiCloseLine className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        Loss ratio &gt;1.0% of declared value → FAIL
                    </li>
                    <li className="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
                        <RiCloseLine className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        Existential litigation risk in first 60 days → FAIL
                    </li>
                </ul>
            </section>
        </div>
    )
}

// Risk Card Component
interface RiskCardProps {
    id: number
    risk: string
    category: string
    severity: "Critical" | "High" | "Medium" | "Low"
    mitigation: string
    earlyWarning: string
    killCriterion: string
}

const severityStyles = {
    Critical: {
        border: "border-l-red-600",
        badge: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
    },
    High: {
        border: "border-l-red-500",
        badge: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
    },
    Medium: {
        border: "border-l-amber-500",
        badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    },
    Low: {
        border: "border-l-emerald-500",
        badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    },
}

function RiskCard({ id, risk, category, severity, mitigation, earlyWarning, killCriterion }: RiskCardProps) {
    return (
        <div className={cx(
            "rounded-lg border border-gray-200 border-l-4 bg-white p-4 dark:border-gray-800 dark:bg-gray-900",
            severityStyles[severity]?.border || severityStyles.Medium.border
        )}>
            <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-400">#{id}</span>
                    <h4 className="font-medium text-gray-900 dark:text-gray-50">{risk}</h4>
                </div>
                <div className="flex gap-2">
                    <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                        {category}
                    </span>
                    <span className={cx("rounded-md px-2 py-0.5 text-xs font-medium", severityStyles[severity]?.badge || severityStyles.Medium.badge)}>
                        {severity}
                    </span>
                </div>
            </div>
            <div className="mt-3 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
                <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Mitigation:</span>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">{mitigation}</p>
                </div>
                <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Early Warning:</span>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">{earlyWarning}</p>
                </div>
                <div className="rounded-md bg-red-50 p-2 dark:bg-red-900/20">
                    <span className="font-medium text-red-700 dark:text-red-300">Kill Criterion:</span>
                    <p className="mt-1 text-red-600 dark:text-red-400">{killCriterion}</p>
                </div>
            </div>
        </div>
    )
}

// Residual Risk Badge Component
function ResidualRiskBadge({ risk }: { risk: string }) {
    const riskLower = risk.toLowerCase()
    const isLow = riskLower.includes("low") || riskLower.includes("negligible")
    const isMedium = riskLower.includes("medium")
    const isHigh = riskLower.includes("high")

    return (
        <span className={cx(
            "inline-flex rounded-md px-2 py-0.5 text-xs font-medium",
            isHigh ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" :
                isMedium ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300" :
                    isLow ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" :
                        "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
        )}>
            {risk}
        </span>
    )
}

// Test Card Component
interface TestCardProps {
    index: number
    test: string
    threshold: string
    failCondition: string
    testWindow: string
    isCritical: boolean
}

function TestCard({ index, test, threshold, failCondition, testWindow, isCritical }: TestCardProps) {
    return (
        <div className={cx(
            "rounded-xl border p-4",
            isCritical
                ? "border-red-200 bg-red-50/50 dark:border-red-900 dark:bg-red-950/30"
                : "border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
        )}>
            <div className="flex items-start justify-between gap-2">
                <div>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Test #{index}</span>
                    <h4 className="mt-1 font-medium text-gray-900 dark:text-gray-50">{test}</h4>
                </div>
                <div className="flex gap-2">
                    {isCritical && (
                        <span className="shrink-0 rounded-md bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700 dark:bg-red-900/50 dark:text-red-300">
                            Critical
                        </span>
                    )}
                    <span className="shrink-0 rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                        {testWindow}
                    </span>
                </div>
            </div>
            <div className="mt-3 flex gap-4">
                <div className="flex-1 rounded-md bg-emerald-50 p-2 dark:bg-emerald-900/20">
                    <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">Pass Threshold:</span>
                    <p className="mt-0.5 text-sm text-emerald-600 dark:text-emerald-400">{threshold}</p>
                </div>
                <div className="flex-1 rounded-md bg-red-50 p-2 dark:bg-red-900/20">
                    <span className="text-xs font-medium text-red-700 dark:text-red-300">Fail Condition:</span>
                    <p className="mt-0.5 text-sm text-red-600 dark:text-red-400">{failCondition}</p>
                </div>
            </div>
        </div>
    )
}
