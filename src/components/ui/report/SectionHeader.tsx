"use client"

import { cx } from "@/lib/utils"

interface SectionHeaderProps {
    title: string
    subtitle?: string
    badge?: string
    className?: string
}

export function SectionHeader({
    title,
    subtitle,
    badge,
    className,
}: SectionHeaderProps) {
    return (
        <div className={cx("mb-6", className)}>
            <div className="flex items-center gap-3">
                {badge && (
                    <span className="inline-flex items-center rounded-md bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                        {badge}
                    </span>
                )}
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50 sm:text-2xl">
                    {title}
                </h2>
            </div>
            {subtitle && (
                <p className="mt-2 text-gray-600 dark:text-gray-400">{subtitle}</p>
            )}
        </div>
    )
}
