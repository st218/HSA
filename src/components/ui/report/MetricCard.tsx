"use client"

import { cx } from "@/lib/utils"
import { RiArrowDownLine, RiArrowUpLine } from "@remixicon/react"

interface MetricCardProps {
    title: string
    value: string | number
    subtitle?: string
    trend?: {
        value: number
        label: string
    }
    icon?: React.ReactNode
    variant?: "default" | "success" | "warning" | "danger" | "info"
    className?: string
}

const variantStyles = {
    default: "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800",
    success: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800",
    warning: "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800",
    danger: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800",
    info: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800",
}

export function MetricCard({
    title,
    value,
    subtitle,
    trend,
    icon,
    variant = "default",
    className,
}: MetricCardProps) {
    return (
        <div
            className={cx(
                "rounded-xl border p-5 transition-shadow hover:shadow-md",
                variantStyles[variant],
                className
            )}
        >
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {title}
                    </p>
                    <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-50">
                        {value}
                    </p>
                    {subtitle && (
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            {subtitle}
                        </p>
                    )}
                    {trend && (
                        <div className="mt-3 flex items-center gap-1.5">
                            {trend.value >= 0 ? (
                                <RiArrowUpLine className="h-4 w-4 text-emerald-500" />
                            ) : (
                                <RiArrowDownLine className="h-4 w-4 text-red-500" />
                            )}
                            <span
                                className={cx(
                                    "text-sm font-medium",
                                    trend.value >= 0 ? "text-emerald-600" : "text-red-600"
                                )}
                            >
                                {Math.abs(trend.value)}%
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                {trend.label}
                            </span>
                        </div>
                    )}
                </div>
                {icon && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                        {icon}
                    </div>
                )}
            </div>
        </div>
    )
}
