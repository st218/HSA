"use client"

import { cx } from "@/lib/utils"
import {
    RiAlertLine,
    RiCheckboxCircleLine,
    RiCloseLine,
    RiExternalLinkLine,
    RiInformationLine,
    RiQuestionLine,
} from "@remixicon/react"

// Definitions Glossary Component
export function DefinitionsGlossary() {
    const definitions = [
        {
            term: "Authentication",
            definition: "A determination that an item is genuine (or not) based on evidence and expert judgment; it is not 'title.'",
            source: "eBay explicitly distinguishes that its authenticity certificate is a 'tool' and 'does not represent title to the physical good.'"
        },
        {
            term: "Grading",
            definition: "A standardized evaluation of physical state/quality (often numeric) intended to be comparable across items.",
            source: "PSA grades on a 1–10 scale and positions its grade as a market signal."
        },
        {
            term: "Certificate",
            definition: "A verifiable record asserting authentication and/or grade; for resilience it must be bound to an immutable identifier and ideally to evidence.",
            source: "Entrupy certificates are hosted on Entrupy's servers and meant to be validated by entering the certificate link."
        },
        {
            term: "Chain-of-Custody",
            definition: "Documented control states describing when the certifier had physical possession vs when the item is 'out of custody,' which changes what can be guaranteed.",
            source: null
        },
        {
            term: "Tamper-Evident",
            definition: "Physical design where attempts to open/alter leave evidence.",
            source: "PSA describes holder tamper evidence via 'frosting' and changes in plastic rigidity after sonic weld violation."
        },
        {
            term: "Registry",
            definition: "A database of certified items and their attributes.",
            source: "PSA provides certification verification and encourages public cert checks."
        },
        {
            term: "Population Report",
            definition: "Aggregate data describing how many items exist in each grade.",
            source: "PSA markets its Population Report as a core collector resource."
        },
        {
            term: "False Negative",
            definition: "For authentication: counterfeit certified as authentic (existential trust failure).",
            source: null
        },
        {
            term: "False Positive",
            definition: "Authentic item rejected (customer pain, reputational cost).",
            source: null
        },
        {
            term: "Secure Element",
            definition: "Hardware designed to store cryptographic secrets and execute secure operations.",
            source: "NXP's NTAG 424 DNA describes AES-based SUN messages and backend verification."
        }
    ]

    return (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {definitions.map((item) => (
                <div
                    key={item.term}
                    className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
                >
                    <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                            <RiInformationLine className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 dark:text-gray-50">
                                {item.term}
                            </h4>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                {item.definition}
                            </p>
                            {item.source && (
                                <p className="mt-2 text-xs text-gray-500 dark:text-gray-500 italic">
                                    {item.source}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

// Data Validation Status Component
interface DataValidationItem {
    category: "verified" | "estimated" | "unknown"
    label: string
    value?: string
    source?: string
}

export function DataValidationStatus({
    items,
}: {
    items: DataValidationItem[]
}) {
    const categoryConfig = {
        verified: {
            icon: RiCheckboxCircleLine,
            bg: "bg-emerald-100 dark:bg-emerald-900/30",
            iconColor: "text-emerald-600 dark:text-emerald-400",
            border: "border-emerald-200 dark:border-emerald-800",
            label: "Verified",
            labelBg: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
        },
        estimated: {
            icon: RiQuestionLine,
            bg: "bg-amber-100 dark:bg-amber-900/30",
            iconColor: "text-amber-600 dark:text-amber-400",
            border: "border-amber-200 dark:border-amber-800",
            label: "Estimated",
            labelBg: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
        },
        unknown: {
            icon: RiAlertLine,
            bg: "bg-gray-100 dark:bg-gray-800",
            iconColor: "text-gray-600 dark:text-gray-400",
            border: "border-gray-300 dark:border-gray-700",
            label: "Unknown",
            labelBg: "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
        },
    }

    return (
        <div className="space-y-2">
            {items.map((item, index) => {
                const config = categoryConfig[item.category]
                const Icon = config.icon
                return (
                    <div
                        key={index}
                        className={cx(
                            "flex items-center gap-3 rounded-lg border px-4 py-3",
                            config.border
                        )}
                    >
                        <div
                            className={cx(
                                "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg",
                                config.bg
                            )}
                        >
                            <Icon className={cx("h-4 w-4", config.iconColor)} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <span className="font-medium text-gray-900 dark:text-gray-50">
                                    {item.label}
                                </span>
                                <span className={cx("rounded-full px-2 py-0.5 text-xs font-medium", config.labelBg)}>
                                    {config.label}
                                </span>
                            </div>
                            {item.value && (
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {item.value}
                                </p>
                            )}
                            {item.source && (
                                <p className="text-xs text-gray-500 dark:text-gray-500">
                                    Source: {item.source}
                                </p>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

// Error Log / Questionable Claims Component
interface QuestionableClaim {
    claim: string
    issue: string
    fix: string
}

export function QuestionableClaimsLog({ claims }: { claims: QuestionableClaim[] }) {
    return (
        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                <thead className="bg-gray-50 dark:bg-gray-900">
                    <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                            Draft Claim
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                            Why Questionable
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                            Fix Approach
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-950">
                    {claims.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-50">
                                {item.claim}
                            </td>
                            <td className="px-4 py-3 text-sm text-red-600 dark:text-red-400">
                                {item.issue}
                            </td>
                            <td className="px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400">
                                {item.fix}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

// Source Link Card
interface SourceLink {
    title: string
    url: string
    category: string
}

export function SourceLinksGrid({ sources }: { sources: SourceLink[] }) {
    return (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {sources.map((source, index) => (
                <a
                    key={index}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 transition-all hover:border-blue-300 hover:shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700"
                >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                        <RiExternalLinkLine className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-gray-900 group-hover:text-blue-600 dark:text-gray-50 dark:group-hover:text-blue-400">
                            {source.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            {source.category}
                        </p>
                    </div>
                </a>
            ))}
        </div>
    )
}

// PSA vs StockX vs HSA Comparison Table
export function ComparisonTable() {
    const dimensions = [
        {
            dimension: "Object type + environment",
            psa: "Cards encapsulated; lab grading; slab is long-lived",
            stockx: "Marketplace intermediary; focuses on 'new' condition for handbags",
            hsa: "Hermès bags; lab inspection + evidence capture + seal kit",
        },
        {
            dimension: "Authentication claim",
            psa: "PSA guarantees grading/auth under its standards; buyback/refund if issue later",
            stockx: "'Verified by StockX' (not brand-endorsed); Buyer Promise dispute process",
            hsa: "'Independent expert opinion' with explicit validity states; conservative 'inconclusive'",
        },
        {
            dimension: "Rating/grade signal",
            psa: "Numeric 1–10 grading standard; qualifiers/no-grade taxonomy",
            stockx: "Mostly binary gate: authentic + new condition",
            hsa: "Dual signal: authenticity verdict + condition grade + originality state",
        },
        {
            dimension: "Trust artifact",
            psa: "PSA holder (tamper-evident), cert number, public cert verification",
            stockx: "StockX tag + platform records; claim requires tag attached",
            hsa: "'Digital Slab': tamper-evident loop + cryptographic NFC; public cert + evidence",
        },
        {
            dimension: "Liability/guarantee scope",
            psa: "Buyback/refund difference in value under stated conditions",
            stockx: "Buyer Promise (refund/replace if incorrect); strict timing/conditions",
            hsa: "Capped guarantee tied to declared value; reserve pricing; structured dispute flow",
        },
        {
            dimension: "Network effects source",
            psa: "Registry + population report + marketplace quoting in PSA grades",
            stockx: "Two-sided marketplace liquidity + pricing graph",
            hsa: "Cross-market API rail + dealer adoption + 'bag census' + standard grade language",
        },
    ]

    return (
        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                <thead className="bg-gray-50 dark:bg-gray-900">
                    <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                            Dimension
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                            PSA
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-purple-600 dark:text-purple-400">
                            StockX
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-orange-600 dark:text-orange-400">
                            HSA (Proposed)
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-950">
                    {dimensions.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-50">
                                {row.dimension}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                                {row.psa}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                                {row.stockx}
                            </td>
                            <td className="px-4 py-3 text-sm font-medium text-orange-700 dark:text-orange-300">
                                {row.hsa}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

// Kill Criteria Checklist with Interactive Status
export function KillCriteriaChecklist() {
    const criteria = [
        { id: 1, test: "Inter-rater reliability", threshold: "≥85% within ±1 notch", fail: "<75%", window: "45 days" },
        { id: 2, test: "Seeded counterfeit test", threshold: "0 pass as authentic", fail: "≥1 passes", window: "30 days" },
        { id: 3, test: "Tag attack test", threshold: "0 successful clone/replay/transplant", fail: "≥1 attack succeeds", window: "30 days" },
        { id: 4, test: "Cert↔bag binding audit", threshold: "≥99.5% correct identity/state", fail: "Systematic mismatch", window: "14 days" },
        { id: 5, test: "Dispute SLA", threshold: "≥90% resolved ≤10 business days", fail: "Median >15 days", window: "60 days" },
        { id: 6, test: "Dealer adoption", threshold: "≥6 LOIs to list HSA grades", fail: "<3 LOIs", window: "60 days" },
        { id: 7, test: "Price premium/liquidity", threshold: "≥10% conversion or ≥5% price lift", fail: "No measurable effect", window: "60 days" },
        { id: 8, test: "Loss ratio ceiling", threshold: "≤0.5% of declared value", fail: ">1.0%", window: "90 days" },
        { id: 9, test: "Throughput feasibility", threshold: "≥6 bags/authenticator/day by week 8", fail: "<4 without clear fix", window: "8 weeks" },
        { id: 10, test: "Brand/IP posture", threshold: "No existential legal threat", fail: "Injunction risk likely", window: "60 days" },
    ]

    return (
        <div className="space-y-2">
            {criteria.map((item) => (
                <div
                    key={item.id}
                    className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-900"
                >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                        {item.id}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 dark:text-gray-50">
                            {item.test}
                        </p>
                        <div className="mt-1 flex flex-wrap gap-3 text-xs">
                            <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                                <RiCheckboxCircleLine className="h-3 w-3" />
                                Pass: {item.threshold}
                            </span>
                            <span className="inline-flex items-center gap-1 text-red-600 dark:text-red-400">
                                <RiCloseLine className="h-3 w-3" />
                                Fail: {item.fail}
                            </span>
                        </div>
                    </div>
                    <span className="flex-shrink-0 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                        {item.window}
                    </span>
                </div>
            ))}
        </div>
    )
}
