"use client"

import { cx } from "@/lib/utils"
import { RiAlertLine, RiCheckLine, RiCloseLine } from "@remixicon/react"

interface ExecutiveHeroProps {
    decision: string
    decisionDetail: string
    confidence?: "high" | "medium" | "low"
    keyTakeaways?: string[]
}

const confidenceConfig = {
    high: {
        label: "High Confidence",
        color: "bg-emerald-500",
        textColor: "text-emerald-600 dark:text-emerald-400",
        bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
        icon: RiCheckLine,
    },
    medium: {
        label: "Medium Confidence",
        color: "bg-amber-500",
        textColor: "text-amber-600 dark:text-amber-400",
        bgColor: "bg-amber-50 dark:bg-amber-950/30",
        icon: RiAlertLine,
    },
    low: {
        label: "Low Confidence",
        color: "bg-red-500",
        textColor: "text-red-600 dark:text-red-400",
        bgColor: "bg-red-50 dark:bg-red-950/30",
        icon: RiCloseLine,
    },
}

export function ExecutiveHero({
    decision,
    decisionDetail,
    confidence = "medium",
    keyTakeaways,
}: ExecutiveHeroProps) {
    const config = confidenceConfig[confidence]
    const Icon = config.icon

    return (
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white dark:from-gray-800 dark:to-gray-900">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M0 20h40M20 0v40" stroke="currentColor" strokeWidth="1" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hero-pattern)" />
                </svg>
            </div>

            <div className="relative z-10">
                {/* Decision badge */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-4 py-1.5 text-sm font-medium text-orange-300">
                    <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse"></span>
                    Investment Decision
                </div>

                {/* Main decision */}
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    {decision}
                </h1>

                {/* Decision detail */}
                <p className="mt-4 max-w-3xl text-lg text-gray-300 leading-relaxed">
                    {decisionDetail}
                </p>

                {/* Confidence indicator */}
                <div className="mt-6 flex flex-wrap items-center gap-4">
                    <div className={cx("inline-flex items-center gap-2 rounded-lg px-4 py-2", config.bgColor)}>
                        <Icon className={cx("h-5 w-5", config.textColor)} />
                        <span className={cx("font-medium", config.textColor)}>
                            {config.label}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>Based on</span>
                        <span className="font-semibold text-white">10 falsification tests</span>
                        <span>with explicit kill criteria</span>
                    </div>
                </div>

                {/* Key takeaways */}
                {keyTakeaways && keyTakeaways.length > 0 && (
                    <div className="mt-8 border-t border-gray-700 pt-6">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                            Key Risks
                        </h3>
                        <ul className="mt-3 space-y-2">
                            {keyTakeaways.map((item, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-300">
                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-400"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}
