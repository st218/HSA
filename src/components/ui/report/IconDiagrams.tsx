"use client"

import { cx } from "@/lib/utils"
import {
    RiArrowRightLine,
    RiAwardLine,
    RiBuilding2Line,
    RiCheckboxCircleLine,
    RiCloudLine,
    RiDatabase2Line,
    RiExchangeLine,
    RiFileList3Line,
    RiHandCoinLine,
    RiLineChartLine,
    RiLockLine,
    RiNftLine,
    RiSearchEyeLine,
    RiShieldCheckLine,
    RiSmartphoneLine,
    RiUser3Line,
    RiVerifiedBadgeLine
} from "@remixicon/react"

// Trust Infrastructure Hero - Icon-based animated diagram
export function TrustInfrastructureHero() {
    const pillars = [
        {
            icon: RiSearchEyeLine,
            title: "Authentication",
            description: "Multi-expert verification",
            color: "orange",
        },
        {
            icon: RiFileList3Line,
            title: "Grading",
            description: "Standardized condition scale",
            color: "blue",
        },
        {
            icon: RiShieldCheckLine,
            title: "Guarantee",
            description: "Financial accountability",
            color: "emerald",
        },
        {
            icon: RiNftLine,
            title: "Digital Slab",
            description: "Cryptographic binding",
            color: "purple",
        },
    ]

    const colorStyles = {
        orange: {
            bg: "bg-orange-100 dark:bg-orange-900/30",
            text: "text-orange-600 dark:text-orange-400",
            border: "border-orange-200 dark:border-orange-800",
            glow: "shadow-orange-500/20",
        },
        blue: {
            bg: "bg-blue-100 dark:bg-blue-900/30",
            text: "text-blue-600 dark:text-blue-400",
            border: "border-blue-200 dark:border-blue-800",
            glow: "shadow-blue-500/20",
        },
        emerald: {
            bg: "bg-emerald-100 dark:bg-emerald-900/30",
            text: "text-emerald-600 dark:text-emerald-400",
            border: "border-emerald-200 dark:border-emerald-800",
            glow: "shadow-emerald-500/20",
        },
        purple: {
            bg: "bg-purple-100 dark:bg-purple-900/30",
            text: "text-purple-600 dark:text-purple-400",
            border: "border-purple-200 dark:border-purple-800",
            glow: "shadow-purple-500/20",
        },
    }

    return (
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 via-white to-orange-50 p-8 dark:border-gray-800 dark:from-gray-900 dark:via-gray-900 dark:to-orange-950/20">
            {/* Decorative elements */}
            <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-gradient-to-br from-orange-200/30 to-transparent blur-3xl dark:from-orange-500/10" />
            <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-gradient-to-tr from-blue-200/30 to-transparent blur-3xl dark:from-blue-500/10" />

            <div className="relative">
                <div className="mb-6 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                        <RiVerifiedBadgeLine className="h-4 w-4" />
                        HSA Trust Infrastructure
                    </span>
                    <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-50">
                        Four Pillars of Trust
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Building the PSA-equivalent trust stack for Hermès bags
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {pillars.map((pillar, index) => {
                        const styles = colorStyles[pillar.color as keyof typeof colorStyles]
                        return (
                            <div
                                key={pillar.title}
                                className={cx(
                                    "group relative rounded-xl border p-5 transition-all duration-300 hover:shadow-lg",
                                    styles.bg,
                                    styles.border,
                                    `hover:${styles.glow}`
                                )}
                            >
                                <div
                                    className={cx(
                                        "mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl",
                                        styles.bg,
                                        styles.text
                                    )}
                                >
                                    <pillar.icon className="h-6 w-6" />
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-gray-50">
                                    {pillar.title}
                                </h3>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    {pillar.description}
                                </p>
                                {index < pillars.length - 1 && (
                                    <RiArrowRightLine className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-gray-400 lg:block" />
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

// Digital Slab Architecture Diagram
export function DigitalSlabDiagram() {
    const layers = [
        {
            icon: RiNftLine,
            title: "Cryptographic NFC Tag",
            detail: "NTAG 424 DNA with AES-128",
            color: "purple",
        },
        {
            icon: RiSmartphoneLine,
            title: "Mobile Verification",
            detail: "Tap-unique SUN message",
            color: "blue",
        },
        {
            icon: RiCloudLine,
            title: "Backend Validation",
            detail: "Challenge-response verification",
            color: "emerald",
        },
        {
            icon: RiDatabase2Line,
            title: "Certificate Registry",
            detail: "Immutable evidence chain",
            color: "orange",
        },
    ]

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                    <RiLockLine className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-50">
                    Digital Slab Architecture
                </h3>
            </div>

            <div className="space-y-3">
                {layers.map((layer, index) => (
                    <div key={layer.title} className="flex items-center gap-4">
                        <div
                            className={cx(
                                "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg",
                                layer.color === "purple" &&
                                "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
                                layer.color === "blue" &&
                                "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
                                layer.color === "emerald" &&
                                "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
                                layer.color === "orange" &&
                                "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
                            )}
                        >
                            <layer.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                            <p className="font-medium text-gray-900 dark:text-gray-50">
                                {layer.title}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {layer.detail}
                            </p>
                        </div>
                        {index < layers.length - 1 && (
                            <div className="h-8 w-0.5 bg-gradient-to-b from-gray-300 to-gray-100 dark:from-gray-700 dark:to-gray-800" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

// PSA Flywheel Diagram - CSS animated
export function PSAFlywheelDiagram() {
    const segments = [
        { label: "Grading Standard", icon: RiFileList3Line, color: "orange" },
        { label: "Registry Network", icon: RiDatabase2Line, color: "blue" },
        { label: "Market Adoption", icon: RiLineChartLine, color: "emerald" },
        { label: "Financial Guarantee", icon: RiHandCoinLine, color: "purple" },
    ]

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-4 flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-50">
                <RiExchangeLine className="h-5 w-5 text-orange-500" />
                PSA Moat Flywheel
            </h3>

            <div className="relative flex items-center justify-center py-4">
                {/* Center hub */}
                <div className="absolute z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30">
                    <RiAwardLine className="h-8 w-8 text-white" />
                </div>

                {/* Rotating ring */}
                <div className="relative h-48 w-48">
                    {segments.map((segment, i) => {
                        const angle = (i * 90 - 45) * (Math.PI / 180)
                        const radius = 80
                        const x = Math.cos(angle) * radius
                        const y = Math.sin(angle) * radius

                        return (
                            <div
                                key={segment.label}
                                className="absolute flex flex-col items-center"
                                style={{
                                    left: `calc(50% + ${x}px - 40px)`,
                                    top: `calc(50% + ${y}px - 30px)`,
                                }}
                            >
                                <div
                                    className={cx(
                                        "flex h-10 w-10 items-center justify-center rounded-full shadow-md",
                                        segment.color === "orange" && "bg-orange-100 text-orange-600",
                                        segment.color === "blue" && "bg-blue-100 text-blue-600",
                                        segment.color === "emerald" && "bg-emerald-100 text-emerald-600",
                                        segment.color === "purple" && "bg-purple-100 text-purple-600"
                                    )}
                                >
                                    <segment.icon className="h-5 w-5" />
                                </div>
                                <span className="mt-1 w-20 text-center text-xs font-medium text-gray-600 dark:text-gray-400">
                                    {segment.label}
                                </span>
                            </div>
                        )
                    })}

                    {/* Circular arrows */}
                    <svg className="absolute inset-0 h-full w-full animate-spin-slow" viewBox="0 0 200 200">
                        <circle
                            cx="100"
                            cy="100"
                            r="70"
                            fill="none"
                            stroke="url(#flywheel-gradient)"
                            strokeWidth="2"
                            strokeDasharray="8 4"
                            opacity="0.6"
                        />
                        <defs>
                            <linearGradient id="flywheel-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#f97316" />
                                <stop offset="50%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#10b981" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
                Network effects compound as adoption increases
            </p>
        </div>
    )
}

// Workflow Steps Diagram
export function AuthenticationWorkflow() {
    const steps = [
        { icon: RiBuilding2Line, title: "Intake", desc: "Chain-of-custody logging" },
        { icon: RiSearchEyeLine, title: "Inspection", desc: "Multi-point verification" },
        { icon: RiUser3Line, title: "Dual Review", desc: "Independent expert review" },
        { icon: RiFileList3Line, title: "Grading", desc: "Condition assessment" },
        { icon: RiVerifiedBadgeLine, title: "Certificate", desc: "Digital + physical artifact" },
    ]

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-4 flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-50">
                <RiCheckboxCircleLine className="h-5 w-5 text-emerald-500" />
                Authentication Workflow
            </h3>

            <div className="flex flex-wrap items-center justify-between gap-2">
                {steps.map((step, index) => (
                    <div key={step.title} className="flex items-center">
                        <div className="flex flex-col items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-900/10">
                                <step.icon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                            </div>
                            <span className="mt-2 text-xs font-medium text-gray-900 dark:text-gray-50">
                                {step.title}
                            </span>
                            <span className="text-[10px] text-gray-500 dark:text-gray-400">
                                {step.desc}
                            </span>
                        </div>
                        {index < steps.length - 1 && (
                            <RiArrowRightLine className="mx-2 h-4 w-4 text-gray-400" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

// Stats Grid with Icons
export function StatsGrid({
    stats,
}: {
    stats: { label: string; value: string; icon: React.ElementType; color: string }[]
}) {
    return (
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map((stat) => (
                <div
                    key={stat.label}
                    className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
                >
                    <div
                        className={cx(
                            "mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg",
                            stat.color === "orange" && "bg-orange-100 text-orange-600 dark:bg-orange-900/30",
                            stat.color === "blue" && "bg-blue-100 text-blue-600 dark:bg-blue-900/30",
                            stat.color === "emerald" && "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30",
                            stat.color === "purple" && "bg-purple-100 text-purple-600 dark:bg-purple-900/30"
                        )}
                    >
                        <stat.icon className="h-4 w-4" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-50">{stat.value}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                </div>
            ))}
        </div>
    )
}

// Comparison Badge
export function ComparisonBadge({
    label,
    hsaValue,
    psaValue,
}: {
    label: string
    hsaValue: string
    psaValue: string
}) {
    return (
        <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900">
            <div className="flex-1">
                <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
                <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-orange-600 dark:text-orange-400">
                        HSA: {hsaValue}
                    </span>
                    <span className="text-sm text-gray-400">vs</span>
                    <span className="text-gray-600 dark:text-gray-400">PSA: {psaValue}</span>
                </div>
            </div>
        </div>
    )
}
