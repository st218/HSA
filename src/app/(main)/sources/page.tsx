"use client"

import { SectionHeader } from "@/components/ui/report/SectionHeader"
import { definitions, primarySources } from "@/data/hsa-report-data"
import { RiCheckLine, RiExternalLinkLine } from "@remixicon/react"

export default function Sources() {
    // Group sources by category
    const sourcesByCategory = primarySources.reduce((acc, source) => {
        if (!acc[source.category]) {
            acc[source.category] = []
        }
        acc[source.category].push(source)
        return acc
    }, {} as Record<string, typeof primarySources>)

    return (
        <div className="space-y-10">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 sm:text-3xl">
                    Sources & Definitions
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Primary sources, verification status, and key terminology
                </p>
            </div>

            {/* Definitions */}
            <section>
                <SectionHeader
                    title="Key Definitions"
                    subtitle="Required terminology for understanding this report"
                />
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {definitions.map((def, index) => (
                        <div
                            key={index}
                            className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
                        >
                            <div className="flex items-start justify-between gap-2">
                                <h4 className="font-semibold text-gray-900 dark:text-gray-50">
                                    {def.term}
                                </h4>
                                <span className="text-xs text-gray-500 dark:text-gray-500">
                                    {def.source}
                                </span>
                            </div>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                {def.definition}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Primary Sources */}
            <section>
                <SectionHeader
                    title="Primary Sources"
                    subtitle="All major claims in this report are backed by primary sources"
                    badge="18 Sources"
                />
                <div className="space-y-6">
                    {Object.entries(sourcesByCategory).map(([category, sources]) => (
                        <div key={category}>
                            <h3 className="mb-3 font-semibold text-gray-900 dark:text-gray-50">
                                {category}
                            </h3>
                            <div className="space-y-2">
                                {sources.map((source, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start justify-between gap-4 rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900"
                                    >
                                        <div className="flex items-start gap-3">
                                            <RiCheckLine className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                                            <div>
                                                <p className="font-medium text-gray-900 dark:text-gray-50">
                                                    {source.name}
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-gray-500">
                                                    Accessed: {source.accessDate}
                                                </p>
                                            </div>
                                        </div>
                                        <a
                                            href={source.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400"
                                            title={`View ${source.name}`}
                                        >
                                            <RiExternalLinkLine className="h-4 w-4" />
                                            <span className="hidden sm:inline">View</span>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Data Verification Status */}
            <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/20">
                <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100">
                    Data Verification Status
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-lg bg-white/50 p-4 dark:bg-gray-900/50">
                        <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                            Verified
                        </p>
                        <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-400">
                            PSA financials from SEC 10-K, service tier pricing, guarantee language
                        </p>
                    </div>
                    <div className="rounded-lg bg-white/50 p-4 dark:bg-gray-900/50">
                        <p className="text-2xl font-bold text-amber-700 dark:text-amber-300">
                            Estimated
                        </p>
                        <p className="mt-1 text-sm text-amber-600 dark:text-amber-400">
                            HSA pricing, COGS, break-even volume, dispute rates (require pilot validation)
                        </p>
                    </div>
                    <div className="rounded-lg bg-white/50 p-4 dark:bg-gray-900/50">
                        <p className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                            Unknown
                        </p>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            True counterfeit base rate, brand enforcement posture, long-run WTP for grades
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
