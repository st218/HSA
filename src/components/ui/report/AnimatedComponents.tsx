"use client"

import { cx } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

// Animated Counter Component - counts up numbers with animation
export function AnimatedCounter({
    value,
    duration = 1500,
    prefix = "",
    suffix = "",
    decimals = 0,
    className,
}: {
    value: number
    duration?: number
    prefix?: string
    suffix?: string
    decimals?: number
    className?: string
}) {
    const [displayValue, setDisplayValue] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
    const ref = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
                    const startTime = Date.now()
                    const animate = () => {
                        const elapsed = Date.now() - startTime
                        const progress = Math.min(elapsed / duration, 1)
                        // Ease out cubic
                        const easeProgress = 1 - Math.pow(1 - progress, 3)
                        setDisplayValue(easeProgress * value)
                        if (progress < 1) {
                            requestAnimationFrame(animate)
                        }
                    }
                    requestAnimationFrame(animate)
                }
            },
            { threshold: 0.1 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [value, duration, hasAnimated])

    return (
        <span ref={ref} className={className}>
            {prefix}
            {displayValue.toFixed(decimals)}
            {suffix}
        </span>
    )
}

// Animated Progress Bar Component
export function AnimatedProgressBar({
    value,
    max = 100,
    color = "orange",
    label,
    showValue = true,
    className,
}: {
    value: number
    max?: number
    color?: "orange" | "emerald" | "blue" | "red" | "purple"
    label?: string
    showValue?: boolean
    className?: string
}) {
    const [animatedValue, setAnimatedValue] = useState(0)
    const ref = useRef<HTMLDivElement>(null)

    const colorStyles = {
        orange: "bg-gradient-to-r from-orange-400 to-orange-600",
        emerald: "bg-gradient-to-r from-emerald-400 to-emerald-600",
        blue: "bg-gradient-to-r from-blue-400 to-blue-600",
        red: "bg-gradient-to-r from-red-400 to-red-600",
        purple: "bg-gradient-to-r from-purple-400 to-purple-600",
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setTimeout(() => setAnimatedValue(value), 100)
                }
            },
            { threshold: 0.1 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [value])

    const percentage = (animatedValue / max) * 100

    return (
        <div ref={ref} className={cx("space-y-2", className)}>
            {(label || showValue) && (
                <div className="flex justify-between text-sm">
                    {label && <span className="text-gray-600 dark:text-gray-400">{label}</span>}
                    {showValue && (
                        <span className="font-medium text-gray-900 dark:text-gray-50">
                            {animatedValue.toFixed(0)}/{max}
                        </span>
                    )}
                </div>
            )}
            <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
                <div
                    className={cx(
                        "h-full rounded-full transition-all duration-1000 ease-out",
                        colorStyles[color]
                    )}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    )
}

// Fade In on Scroll Component
export function FadeIn({
    children,
    direction = "up",
    delay = 0,
    className,
}: {
    children: React.ReactNode
    direction?: "up" | "down" | "left" | "right"
    delay?: number
    className?: string
}) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [])

    const transforms = {
        up: "translate-y-8",
        down: "-translate-y-8",
        left: "translate-x-8",
        right: "-translate-x-8",
    }

    return (
        <div
            ref={ref}
            className={cx(
                "transition-all duration-700 ease-out",
                isVisible
                    ? "opacity-100 translate-y-0 translate-x-0"
                    : `opacity-0 ${transforms[direction]}`,
                className
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}

// Gradient Card Component
export function GradientCard({
    children,
    variant = "blue",
    className,
    glow = false,
}: {
    children: React.ReactNode
    variant?: "blue" | "purple" | "orange" | "emerald" | "dark"
    className?: string
    glow?: boolean
}) {
    const variants = {
        blue: "bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 border-blue-200/50 dark:border-blue-800/50",
        purple: "bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-rose-500/10 border-purple-200/50 dark:border-purple-800/50",
        orange: "bg-gradient-to-br from-orange-500/10 via-amber-500/10 to-yellow-500/10 border-orange-200/50 dark:border-orange-800/50",
        emerald: "bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border-emerald-200/50 dark:border-emerald-800/50",
        dark: "bg-gradient-to-br from-gray-800 via-gray-900 to-black border-gray-700 text-white",
    }

    const glowStyles = glow
        ? "shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20"
        : ""

    return (
        <div
            className={cx(
                "rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300",
                variants[variant],
                glowStyles,
                className
            )}
        >
            {children}
        </div>
    )
}

// Pulse Dot Component (for status indicators)
export function PulseDot({
    color = "emerald",
    size = "md",
}: {
    color?: "emerald" | "red" | "amber" | "blue"
    size?: "sm" | "md" | "lg"
}) {
    const colorStyles = {
        emerald: "bg-emerald-500",
        red: "bg-red-500",
        amber: "bg-amber-500",
        blue: "bg-blue-500",
    }

    const sizeStyles = {
        sm: "h-2 w-2",
        md: "h-3 w-3",
        lg: "h-4 w-4",
    }

    return (
        <span className="relative flex">
            <span
                className={cx(
                    "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                    colorStyles[color]
                )}
            />
            <span
                className={cx(
                    "relative inline-flex rounded-full",
                    colorStyles[color],
                    sizeStyles[size]
                )}
            />
        </span>
    )
}

// Shimmer Loading Component
export function Shimmer({ className }: { className?: string }) {
    return (
        <div
            className={cx(
                "relative overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800",
                className
            )}
        >
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
    )
}

// Tooltip Component
export function Tooltip({
    children,
    content,
}: {
    children: React.ReactNode
    content: string
}) {
    return (
        <div className="group relative inline-block">
            {children}
            <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <div className="whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm text-white shadow-lg dark:bg-gray-700">
                    {content}
                    <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700" />
                </div>
            </div>
        </div>
    )
}

// Stat Card with Trend (Enhanced)
export function EnhancedStatCard({
    title,
    value,
    subtitle,
    trend,
    icon,
    color = "gray",
}: {
    title: string
    value: string | number
    subtitle?: string
    trend?: { value: number; label?: string }
    icon?: React.ReactNode
    color?: "gray" | "emerald" | "blue" | "orange" | "red" | "purple"
}) {
    const colorStyles = {
        gray: "from-gray-500/10 to-gray-600/10 border-gray-200 dark:border-gray-800",
        emerald: "from-emerald-500/10 to-teal-500/10 border-emerald-200 dark:border-emerald-800",
        blue: "from-blue-500/10 to-indigo-500/10 border-blue-200 dark:border-blue-800",
        orange: "from-orange-500/10 to-amber-500/10 border-orange-200 dark:border-orange-800",
        red: "from-red-500/10 to-rose-500/10 border-red-200 dark:border-red-800",
        purple: "from-purple-500/10 to-pink-500/10 border-purple-200 dark:border-purple-800",
    }

    return (
        <div
            className={cx(
                "group relative overflow-hidden rounded-xl border bg-gradient-to-br p-5 transition-all duration-300 hover:shadow-lg",
                colorStyles[color]
            )}
        >
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-50">
                        {typeof value === "number" ? (
                            <AnimatedCounter value={value} />
                        ) : (
                            value
                        )}
                    </p>
                    {subtitle && (
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
                    )}
                    {trend && (
                        <div className="mt-2 flex items-center gap-1">
                            <span
                                className={cx(
                                    "text-sm font-medium",
                                    trend.value >= 0 ? "text-emerald-600" : "text-red-600"
                                )}
                            >
                                {trend.value >= 0 ? "↑" : "↓"} {Math.abs(trend.value)}%
                            </span>
                            {trend.label && (
                                <span className="text-xs text-gray-500">{trend.label}</span>
                            )}
                        </div>
                    )}
                </div>
                {icon && (
                    <div className="rounded-lg bg-white/50 p-2 dark:bg-gray-900/50">
                        {icon}
                    </div>
                )}
            </div>
            {/* Decorative gradient orb */}
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
        </div>
    )
}
