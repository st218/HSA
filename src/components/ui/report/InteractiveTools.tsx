"use client"

import { cx } from "@/lib/utils"
import { RiAlertLine, RiCheckLine, RiCloseLine, RiQuestionLine } from "@remixicon/react"
import { useState } from "react"

interface FalsificationTest {
    id: number
    hypothesis: string
    passThreshold: string
    failThreshold: string
    windowDays: number
}

type TestStatus = "pending" | "pass" | "fail" | "at-risk"

export function FalsificationTracker({
    tests,
}: {
    tests: FalsificationTest[]
}) {
    const [statuses, setStatuses] = useState<Record<number, TestStatus>>(
        Object.fromEntries(tests.map((t) => [t.id, "pending" as TestStatus]))
    )

    const toggleStatus = (id: number) => {
        const order: TestStatus[] = ["pending", "pass", "at-risk", "fail"]
        const currentIndex = order.indexOf(statuses[id])
        const nextIndex = (currentIndex + 1) % order.length
        setStatuses((prev) => ({ ...prev, [id]: order[nextIndex] }))
    }

    const statusCounts = {
        pass: Object.values(statuses).filter((s) => s === "pass").length,
        fail: Object.values(statuses).filter((s) => s === "fail").length,
        "at-risk": Object.values(statuses).filter((s) => s === "at-risk").length,
        pending: Object.values(statuses).filter((s) => s === "pending").length,
    }

    const statusConfig = {
        pending: {
            bg: "bg-gray-100 dark:bg-gray-800",
            border: "border-gray-300 dark:border-gray-600",
            text: "text-gray-600 dark:text-gray-400",
            icon: <RiQuestionLine className="h-5 w-5" />,
        },
        pass: {
            bg: "bg-emerald-100 dark:bg-emerald-900/30",
            border: "border-emerald-300 dark:border-emerald-700",
            text: "text-emerald-700 dark:text-emerald-300",
            icon: <RiCheckLine className="h-5 w-5" />,
        },
        "at-risk": {
            bg: "bg-amber-100 dark:bg-amber-900/30",
            border: "border-amber-300 dark:border-amber-700",
            text: "text-amber-700 dark:text-amber-300",
            icon: <RiAlertLine className="h-5 w-5" />,
        },
        fail: {
            bg: "bg-red-100 dark:bg-red-900/30",
            border: "border-red-300 dark:border-red-700",
            text: "text-red-700 dark:text-red-300",
            icon: <RiCloseLine className="h-5 w-5" />,
        },
    }

    return (
        <div className="space-y-6">
            {/* Status Summary */}
            <div className="grid grid-cols-4 gap-3">
                <StatusSummaryCard
                    label="Passed"
                    count={statusCounts.pass}
                    total={tests.length}
                    color="emerald"
                />
                <StatusSummaryCard
                    label="At Risk"
                    count={statusCounts["at-risk"]}
                    total={tests.length}
                    color="amber"
                />
                <StatusSummaryCard
                    label="Failed"
                    count={statusCounts.fail}
                    total={tests.length}
                    color="red"
                />
                <StatusSummaryCard
                    label="Pending"
                    count={statusCounts.pending}
                    total={tests.length}
                    color="gray"
                />
            </div>

            {/* Progress Bar */}
            <div className="h-4 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
                <div className="flex h-full">
                    <div
                        className="bg-emerald-500 transition-all duration-500"
                        style={{ width: `${(statusCounts.pass / tests.length) * 100}%` }}
                    />
                    <div
                        className="bg-amber-500 transition-all duration-500"
                        style={{ width: `${(statusCounts["at-risk"] / tests.length) * 100}%` }}
                    />
                    <div
                        className="bg-red-500 transition-all duration-500"
                        style={{ width: `${(statusCounts.fail / tests.length) * 100}%` }}
                    />
                </div>
            </div>

            {/* Kill Criteria Warning */}
            {statusCounts.fail > 0 && (
                <div className="flex items-center gap-3 rounded-xl border-2 border-red-300 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950/30">
                    <RiAlertLine className="h-6 w-6 text-red-600 dark:text-red-400" />
                    <div>
                        <p className="font-semibold text-red-800 dark:text-red-200">
                            Kill Criteria Triggered
                        </p>
                        <p className="text-sm text-red-700 dark:text-red-300">
                            {statusCounts.fail} test(s) have failed. Project should be killed or pivoted per agreed criteria.
                        </p>
                    </div>
                </div>
            )}

            {/* Test Cards */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {tests.map((test) => {
                    const status = statuses[test.id]
                    const config = statusConfig[status]

                    return (
                        <button
                            key={test.id}
                            onClick={() => toggleStatus(test.id)}
                            className={cx(
                                "group relative overflow-hidden rounded-xl border-2 p-4 text-left transition-all duration-200 hover:shadow-md",
                                config.bg,
                                config.border
                            )}
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex-1">
                                    <p className="font-medium text-gray-900 dark:text-gray-50">
                                        {test.hypothesis}
                                    </p>
                                    <div className="mt-2 flex items-center gap-2">
                                        <span className="rounded-md bg-white/50 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-900/50 dark:text-gray-400">
                                            {test.windowDays} days
                                        </span>
                                    </div>
                                </div>
                                <div className={cx("rounded-lg p-2", config.text)}>
                                    {config.icon}
                                </div>
                            </div>

                            {/* Thresholds */}
                            <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                                <div className="rounded-md bg-emerald-100/50 p-2 dark:bg-emerald-900/20">
                                    <span className="text-emerald-700 dark:text-emerald-300">Pass: </span>
                                    <span className="text-gray-600 dark:text-gray-400">{test.passThreshold}</span>
                                </div>
                                <div className="rounded-md bg-red-100/50 p-2 dark:bg-red-900/20">
                                    <span className="text-red-700 dark:text-red-300">Fail: </span>
                                    <span className="text-gray-600 dark:text-gray-400">{test.failThreshold}</span>
                                </div>
                            </div>

                            {/* Click hint */}
                            <p className="mt-2 text-xs text-gray-500 opacity-0 transition-opacity group-hover:opacity-100">
                                Click to cycle status
                            </p>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

function StatusSummaryCard({
    label,
    count,
    color,
}: {
    label: string
    count: number
    total?: number
    color: "emerald" | "amber" | "red" | "gray"
}) {
    const colorStyles = {
        emerald: "text-emerald-600 dark:text-emerald-400",
        amber: "text-amber-600 dark:text-amber-400",
        red: "text-red-600 dark:text-red-400",
        gray: "text-gray-600 dark:text-gray-400",
    }

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-3 text-center dark:border-gray-800 dark:bg-gray-900">
            <p className={cx("text-2xl font-bold", colorStyles[color])}>{count}</p>
            <p className="text-xs text-gray-500">{label}</p>
        </div>
    )
}

// Risk Heatmap Component
interface RiskItem {
    id: number
    obstacle: string
    severity: "High" | "Medium" | "Low"
    mitigation: string
    earlyWarning?: string
}

export function RiskHeatmap({ risks }: { risks: RiskItem[] }) {
    const [selectedRisk, setSelectedRisk] = useState<RiskItem | null>(null)

    const severityConfig = {
        High: {
            bg: "bg-red-500",
            hover: "hover:bg-red-600",
            ring: "ring-red-300",
        },
        Medium: {
            bg: "bg-amber-500",
            hover: "hover:bg-amber-600",
            ring: "ring-amber-300",
        },
        Low: {
            bg: "bg-emerald-500",
            hover: "hover:bg-emerald-600",
            ring: "ring-emerald-300",
        },
    }

    const highRisks = risks.filter((r) => r.severity === "High")
    const mediumRisks = risks.filter((r) => r.severity === "Medium")
    const lowRisks = risks.filter((r) => r.severity === "Low")

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
                {/* High Column */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            High ({highRisks.length})
                        </span>
                    </div>
                    <div className="space-y-2">
                        {highRisks.map((risk) => (
                            <RiskCell
                                key={risk.id}
                                risk={risk}
                                config={severityConfig.High}
                                isSelected={selectedRisk?.id === risk.id}
                                onClick={() => setSelectedRisk(risk)}
                            />
                        ))}
                    </div>
                </div>

                {/* Medium Column */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-amber-500" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Medium ({mediumRisks.length})
                        </span>
                    </div>
                    <div className="space-y-2">
                        {mediumRisks.map((risk) => (
                            <RiskCell
                                key={risk.id}
                                risk={risk}
                                config={severityConfig.Medium}
                                isSelected={selectedRisk?.id === risk.id}
                                onClick={() => setSelectedRisk(risk)}
                            />
                        ))}
                    </div>
                </div>

                {/* Low Column */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-emerald-500" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Low ({lowRisks.length})
                        </span>
                    </div>
                    <div className="space-y-2">
                        {lowRisks.map((risk) => (
                            <RiskCell
                                key={risk.id}
                                risk={risk}
                                config={severityConfig.Low}
                                isSelected={selectedRisk?.id === risk.id}
                                onClick={() => setSelectedRisk(risk)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Selected Risk Detail */}
            {selectedRisk && (
                <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                    <div className="flex items-start justify-between">
                        <div>
                            <span
                                className={cx(
                                    "inline-flex rounded-full px-2 py-0.5 text-xs font-medium text-white",
                                    severityConfig[selectedRisk.severity].bg
                                )}
                            >
                                {selectedRisk.severity}
                            </span>
                            <h4 className="mt-2 font-semibold text-gray-900 dark:text-gray-50">
                                {selectedRisk.obstacle}
                            </h4>
                        </div>
                        <button
                            onClick={() => setSelectedRisk(null)}
                            className="rounded-lg p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <RiCloseLine className="h-5 w-5 text-gray-500" />
                        </button>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-xs font-medium uppercase text-gray-500">Mitigation</p>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                {selectedRisk.mitigation}
                            </p>
                        </div>
                        {selectedRisk.earlyWarning && (
                            <div>
                                <p className="text-xs font-medium uppercase text-gray-500">Early Warning</p>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    {selectedRisk.earlyWarning}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

function RiskCell({
    risk,
    config,
    isSelected,
    onClick,
}: {
    risk: RiskItem
    config: { bg: string; hover: string; ring: string }
    isSelected: boolean
    onClick: () => void
}) {
    return (
        <button
            onClick={onClick}
            className={cx(
                "w-full rounded-lg p-3 text-left text-sm text-white transition-all",
                config.bg,
                config.hover,
                isSelected && `ring-2 ${config.ring}`
            )}
        >
            <p className="line-clamp-2 font-medium">{risk.obstacle}</p>
        </button>
    )
}
