"use client"

import { cx } from "@/lib/utils"
import {
    RiCheckboxCircleLine,
    RiCloseLine,
    RiQuestionLine,
    RiTimeLine,
} from "@remixicon/react"

interface TimelineEvent {
    date: string
    year: number
    event: string
    mechanism: string
    evidence: string
    successFactor?: string
    category?: "psa" | "competitor" | "industry"
}

interface TimelineChartProps {
    events: TimelineEvent[]
    className?: string
    showSuccessFactors?: boolean
}

const categoryStyles = {
    psa: {
        dot: "bg-orange-500 ring-orange-100 dark:ring-orange-900/30",
        badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
        label: "PSA",
    },
    competitor: {
        dot: "bg-purple-500 ring-purple-100 dark:ring-purple-900/30",
        badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
        label: "Competitor",
    },
    industry: {
        dot: "bg-blue-500 ring-blue-100 dark:ring-blue-900/30",
        badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
        label: "Industry",
    },
}

function parseSuccessStatus(successFactor: string): "success" | "failure" | "mixed" | "pending" {
    const upper = successFactor.toUpperCase()
    if (upper.startsWith("SUCCESS")) return "success"
    if (upper.startsWith("FAILURE")) return "failure"
    if (upper.startsWith("MIXED") || upper.includes("MIXED")) return "mixed"
    if (upper.startsWith("PENDING")) return "pending"
    return "success"
}

const successStyles = {
    success: {
        icon: RiCheckboxCircleLine,
        bg: "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-800",
        text: "text-emerald-700 dark:text-emerald-300",
        label: "Success Factor",
    },
    failure: {
        icon: RiCloseLine,
        bg: "bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800",
        text: "text-red-700 dark:text-red-300",
        label: "Failure/Risk",
    },
    mixed: {
        icon: RiTimeLine,
        bg: "bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-800",
        text: "text-amber-700 dark:text-amber-300",
        label: "Mixed Outcome",
    },
    pending: {
        icon: RiQuestionLine,
        bg: "bg-gray-50 border-gray-200 dark:bg-gray-900 dark:border-gray-700",
        text: "text-gray-700 dark:text-gray-300",
        label: "Pending/TBD",
    },
}

export function TimelineChart({ events, className, showSuccessFactors = true }: TimelineChartProps) {
    return (
        <div className={cx("relative", className)}>
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-blue-400 to-purple-400 dark:from-orange-600 dark:via-blue-500 dark:to-purple-500" />

            <div className="space-y-6">
                {events.map((event, index) => {
                    const category = event.category || "psa"
                    const catStyle = categoryStyles[category]
                    const successStatus = event.successFactor ? parseSuccessStatus(event.successFactor) : null
                    const successStyle = successStatus ? successStyles[successStatus] : null
                    const SuccessIcon = successStyle?.icon

                    return (
                        <div key={index} className="relative pl-12">
                            {/* Timeline dot */}
                            <div className={cx(
                                "absolute left-2 top-2 flex h-5 w-5 items-center justify-center rounded-full ring-4",
                                catStyle.dot
                            )}>
                                <div className="h-2 w-2 rounded-full bg-white" />
                            </div>

                            {/* Content card */}
                            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                                {/* Header */}
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className={cx(
                                        "inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-semibold",
                                        catStyle.badge
                                    )}>
                                        {event.date}
                                    </span>
                                    <span className="text-xs text-gray-400 dark:text-gray-500">
                                        {catStyle.label}
                                    </span>
                                </div>

                                <h3 className="mt-2 font-semibold text-gray-900 dark:text-gray-50">
                                    {event.event}
                                </h3>

                                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="font-medium text-gray-700 dark:text-gray-300">What happened: </span>
                                    {event.mechanism}
                                </p>

                                {/* Success/Failure Factor */}
                                {showSuccessFactors && event.successFactor && successStyle && SuccessIcon && (
                                    <div className={cx(
                                        "mt-4 rounded-lg border p-3",
                                        successStyle.bg
                                    )}>
                                        <div className="flex items-start gap-2">
                                            <SuccessIcon className={cx("h-5 w-5 mt-0.5 flex-shrink-0", successStyle.text)} />
                                            <div>
                                                <p className={cx("text-sm font-medium", successStyle.text)}>
                                                    {successStyle.label}
                                                </p>
                                                <p className={cx("mt-1 text-sm", successStyle.text)}>
                                                    {event.successFactor}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <p className="mt-3 text-xs text-gray-500 dark:text-gray-500">
                                    <span className="font-medium">Source: </span>
                                    {event.evidence}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

// Compact version for smaller spaces
export function TimelineChartCompact({ events, className }: TimelineChartProps) {
    return (
        <div className={cx("overflow-x-auto", className)}>
            <div className="inline-flex min-w-full gap-4 pb-4">
                {events.map((event, index) => {
                    const category = event.category || "psa"
                    const catStyle = categoryStyles[category]
                    const successStatus = event.successFactor ? parseSuccessStatus(event.successFactor) : null

                    return (
                        <div
                            key={index}
                            className={cx(
                                "flex-shrink-0 w-72 rounded-xl border p-4",
                                successStatus === "success" && "border-emerald-200 bg-emerald-50/50 dark:border-emerald-800 dark:bg-emerald-950/10",
                                successStatus === "failure" && "border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/10",
                                successStatus === "mixed" && "border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-950/10",
                                successStatus === "pending" && "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900",
                                !successStatus && "border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
                            )}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <span className={cx(
                                    "inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold",
                                    catStyle.badge
                                )}>
                                    {event.date}
                                </span>
                            </div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-50 line-clamp-2">
                                {event.event}
                            </h4>
                            {event.successFactor && (
                                <p className={cx(
                                    "mt-2 text-xs line-clamp-3",
                                    successStatus === "success" && "text-emerald-700 dark:text-emerald-300",
                                    successStatus === "failure" && "text-red-700 dark:text-red-300",
                                    successStatus === "mixed" && "text-amber-700 dark:text-amber-300",
                                    successStatus === "pending" && "text-gray-600 dark:text-gray-400"
                                )}>
                                    {event.successFactor}
                                </p>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
