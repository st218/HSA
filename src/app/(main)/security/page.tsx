"use client"

import { DigitalSlabDiagram } from "@/components/ui/report/IconDiagrams"
import { SectionHeader } from "@/components/ui/report/SectionHeader"
import {
    adversarialThreatModel,
    digitalSlabOptions,
    legalClaimsGuidelines,
    legalPosture,
    nfcSecurityRequirements,
    nfcThreatModel,
    reAuthTriggers,
    validityStates,
} from "@/data/hsa-report-data"
import { cx } from "@/lib/utils"
import {
    RiAlertLine,
    RiCheckLine,
    RiCloseLine,
    RiCloudLine,
    RiDatabase2Line,
    RiExternalLinkLine,
    RiNftLine,
    RiRefreshLine,
    RiShieldCheckLine,
    RiSmartphoneLine,
} from "@remixicon/react"

export default function Security() {
    return (
        <div className="space-y-10">
            {/* Page Header */}
            <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-1">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 sm:text-3xl">
                        Security & Compliance
                    </h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        NFC threat model, Digital Slab architecture, validity states, and legal claims posture
                    </p>

                    {/* Security Stack Pills */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {[
                            { icon: RiNftLine, label: "Cryptographic NFC", color: "purple" },
                            { icon: RiSmartphoneLine, label: "Mobile Verification", color: "blue" },
                            { icon: RiCloudLine, label: "Backend Validation", color: "emerald" },
                            { icon: RiDatabase2Line, label: "Evidence Registry", color: "orange" },
                        ].map((item) => (
                            <span
                                key={item.label}
                                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${item.color === "purple"
                                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                                    : item.color === "blue"
                                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                        : item.color === "emerald"
                                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                                            : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                                    }`}
                            >
                                <item.icon className="h-3.5 w-3.5" />
                                {item.label}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="lg:w-80 flex-shrink-0">
                    <DigitalSlabDiagram />
                </div>
            </div>

            {/* Why Naïve NFC Fails */}
            <section className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/20">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-red-900 dark:text-red-100">
                    <RiAlertLine className="h-5 w-5" />
                    Why Naïve NFC Fails
                </h3>
                <p className="mt-2 text-red-800 dark:text-red-200">
                    {nfcSecurityRequirements.whyNaiveNfcFails}
                </p>
            </section>

            {/* NFC Threat Model */}
            <section>
                <SectionHeader
                    title="NFC Threat Model"
                    subtitle="Attack vectors, controls, and residual risk assessment"
                />
                <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                        <thead className="bg-gray-50 dark:bg-gray-900">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Vector
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                    Attacker Capability
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
                            {nfcThreatModel.map((threat, index) => (
                                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-50">
                                        {threat.vector}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                                        {threat.attackerCapability}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                                        {threat.control}
                                    </td>
                                    <td className="px-4 py-3">
                                        <RiskBadge risk={threat.residualRisk} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Digital Slab Options */}
            <section>
                <SectionHeader
                    title="Digital Slab Options Evaluation"
                    subtitle="Comparison of authentication artifact approaches"
                />
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    {digitalSlabOptions.map((option, index) => (
                        <div key={index} className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                            <h4 className="font-semibold text-gray-900 dark:text-gray-50">{option.option}</h4>
                            <div className="mt-3 space-y-2 text-sm">
                                <div className="flex gap-2">
                                    <span className="font-medium text-emerald-600 dark:text-emerald-400">Pros:</span>
                                    <span className="text-gray-600 dark:text-gray-400">{option.pros}</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="font-medium text-red-600 dark:text-red-400">Cons:</span>
                                    <span className="text-gray-600 dark:text-gray-400">{option.cons}</span>
                                </div>
                                {option.url && (
                                    <a href={option.url} target="_blank" rel="noopener noreferrer"
                                        className="mt-2 inline-flex items-center gap-1 text-xs text-blue-600 hover:underline dark:text-blue-400">
                                        <RiExternalLinkLine className="h-3 w-3" />
                                        View Details
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Required Security Controls */}
            <section>
                <SectionHeader
                    title="Required Security Controls"
                    subtitle="Minimum viable secure design for HSA Digital Slab"
                    badge="Requirements"
                />
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
                    <h4 className="flex items-center gap-2 font-semibold text-emerald-900 dark:text-emerald-100">
                        <RiShieldCheckLine className="h-5 w-5" />
                        Required Controls
                    </h4>
                    <div className="mt-3 space-y-3">
                        {nfcSecurityRequirements.requiredControls.map((req, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm">
                                <RiCheckLine className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                                <div>
                                    <span className="font-medium text-emerald-800 dark:text-emerald-200">{req.control}:</span>
                                    <span className="text-emerald-700 dark:text-emerald-300 ml-1">{req.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Attack Surface Analysis */}
            <section>
                <SectionHeader
                    title="Attack Surface Analysis"
                    subtitle="Key attack vectors and mitigation strategies"
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {nfcSecurityRequirements.attackSurface.map((attack, index) => (
                        <div key={index} className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                            <h4 className="font-semibold text-gray-900 dark:text-gray-50">{attack.attack}</h4>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{attack.mitigation}</p>
                            <div className="mt-2">
                                <RiskBadge risk={attack.residualRisk} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Validity States */}
            <section>
                <SectionHeader
                    title="Validity States Model"
                    subtitle="5 states with transitions and guarantee levels"
                    badge="Critical"
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {validityStates.map((state, index) => (
                        <div
                            key={index}
                            className={cx(
                                "rounded-xl border p-4",
                                state.guaranteeActive
                                    ? "border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/20"
                                    : "border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
                            )}
                        >
                            <h4 className={cx(
                                "font-semibold",
                                state.guaranteeActive
                                    ? "text-emerald-900 dark:text-emerald-100"
                                    : "text-gray-900 dark:text-gray-50"
                            )}>
                                {state.state}
                            </h4>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                {state.description}
                            </p>
                            <div className="mt-3 flex items-center gap-2">
                                <span className={cx(
                                    "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                                    state.guaranteeActive
                                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                                        : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                                )}>
                                    {state.trustLevel}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Re-Auth Triggers */}
                <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
                    <h4 className="flex items-center gap-2 font-semibold text-amber-900 dark:text-amber-100">
                        <RiRefreshLine className="h-5 w-5" />
                        Re-Authentication Triggers
                    </h4>
                    <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {reAuthTriggers.map((trigger, i) => (
                            <div key={i} className="rounded-lg bg-white/50 p-3 dark:bg-gray-900/50">
                                <p className="font-medium text-amber-800 dark:text-amber-200">{trigger.trigger}</p>
                                <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">{trigger.condition}</p>
                                <p className="mt-1 text-xs text-amber-600 dark:text-amber-400">→ {trigger.action}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Legal Claims Posture */}
            <section>
                <SectionHeader
                    title="Legal Claims Posture"
                    subtitle="Required language and positioning to minimize legal exposure"
                    badge="Legal"
                />

                {/* Trademark Risk */}
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/20">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100">Trademark Risk Posture</h4>
                    <p className="mt-2 text-sm text-blue-800 dark:text-blue-200">
                        <strong>Principle:</strong> {legalPosture.trademarkRisk.principle}
                    </p>
                    <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                        <strong>Caution:</strong> {legalPosture.trademarkRisk.caution}
                    </p>
                    <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">
                        <strong>Precedent:</strong> {legalPosture.trademarkRisk.precedent}
                    </p>
                </div>

                {/* Claim Language Do's and Don'ts */}
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
                        <h4 className="flex items-center gap-2 font-semibold text-emerald-900 dark:text-emerald-100">
                            <RiCheckLine className="h-5 w-5" />
                            Do This
                        </h4>
                        <ul className="mt-3 space-y-2">
                            {legalPosture.claimLanguage.do.map((item: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-emerald-700 dark:text-emerald-300">
                                    <RiCheckLine className="mt-0.5 h-4 w-4 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-xl border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/20">
                        <h4 className="flex items-center gap-2 font-semibold text-red-900 dark:text-red-100">
                            <RiCloseLine className="h-5 w-5" />
                            Don't Do This
                        </h4>
                        <ul className="mt-3 space-y-2">
                            {legalPosture.claimLanguage.doNot.map((item: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
                                    <RiCloseLine className="mt-0.5 h-4 w-4 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Guarantee Structure */}
                <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Guarantee Structure</h4>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {legalPosture.guaranteeStructure.principle}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {legalPosture.guaranteeStructure.elements.map((element: string, idx: number) => (
                            <span key={idx} className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                                {element}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Adversarial Threat Model - 14 Fraud Vectors */}
            <section>
                <SectionHeader
                    title="Adversarial Threat Model"
                    subtitle="14 fraud vectors with controls, detection methods, and residual risk assessment"
                />
                <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                        <thead className="bg-gray-50 dark:bg-gray-900">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                                    Fraud Vector
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                                    Controls
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                                    Detection
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                                    Residual Risk
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-950">
                            {adversarialThreatModel.map((threat, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-gray-50/50 dark:bg-gray-900/50"}>
                                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                                        {threat.vector}
                                        {threat.notes && (
                                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{threat.notes}</p>
                                        )}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                                        {threat.controls}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                                        {threat.detection}
                                    </td>
                                    <td className="px-4 py-3">
                                        <RiskBadge risk={threat.residualRisk} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30">
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                        <RiAlertLine className="mr-1 inline h-4 w-4" />
                        <strong>Key Insight:</strong> The final vector—counterfeit designed to pass HSA rubric—will always have non-zero residual risk.
                        Continuous red-team updates and frequent reference library refreshes are essential.
                    </p>
                </div>
            </section>

            {/* Legal Claims Guidelines - Enhanced */}
            <section>
                <SectionHeader
                    title="Legal Claims Guidelines"
                    subtitle="Structured approach to defensible claims, avoiding brand risk"
                />

                {/* Core Posture */}
                <div className="mb-6 rounded-xl border border-indigo-200 bg-indigo-50 p-5 dark:border-indigo-900 dark:bg-indigo-950/20">
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-100">Core Legal Posture</h4>
                    <p className="mt-2 text-sm text-indigo-800 dark:text-indigo-200">
                        {legalClaimsGuidelines.corePosture.statement}
                    </p>
                    <div className="mt-3">
                        <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-2">Industry Benchmarks:</p>
                        <ul className="space-y-1">
                            {legalClaimsGuidelines.corePosture.benchmarks.map((benchmark: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-indigo-700 dark:text-indigo-300">
                                    <RiCheckLine className="mt-0.5 h-4 w-4 flex-shrink-0" />
                                    {benchmark}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Do's and Don'ts Grid */}
                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
                        <h4 className="flex items-center gap-2 font-semibold text-emerald-900 dark:text-emerald-100">
                            <RiCheckLine className="h-5 w-5" />
                            Do This
                        </h4>
                        <ul className="mt-3 space-y-2">
                            {legalClaimsGuidelines.doList.map((item: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-emerald-700 dark:text-emerald-300">
                                    <RiCheckLine className="mt-0.5 h-4 w-4 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-xl border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/20">
                        <h4 className="flex items-center gap-2 font-semibold text-red-900 dark:text-red-100">
                            <RiCloseLine className="h-5 w-5" />
                            Don't Do This
                        </h4>
                        <ul className="mt-3 space-y-2">
                            {legalClaimsGuidelines.dontList.map((item: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
                                    <RiCloseLine className="mt-0.5 h-4 w-4 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Claims Separation */}
                <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-50">Claims Separation</h4>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        These claims must be kept distinct for legal defensibility:
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {legalClaimsGuidelines.claimsSeparation.map((claim: { claim: string; scope: string }, idx: number) => (
                            <div key={idx} className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                                <p className="font-medium text-gray-900 dark:text-gray-100">{claim.claim}</p>
                                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{claim.scope}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Legal Context / Precedents */}
                <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/20">
                    <h4 className="flex items-center gap-2 font-semibold text-red-900 dark:text-red-100">
                        <RiAlertLine className="h-5 w-5" />
                        Legal Precedents to Consider
                    </h4>
                    <div className="mt-4 space-y-4">
                        {legalClaimsGuidelines.legalContext.map((context: { case: string; relevance: string; lesson: string }, idx: number) => (
                            <div key={idx} className="rounded-lg bg-white/50 p-4 dark:bg-gray-900/50">
                                <p className="font-semibold text-red-800 dark:text-red-200">{context.case}</p>
                                <p className="mt-1 text-sm text-red-700 dark:text-red-300">{context.relevance}</p>
                                <p className="mt-2 text-sm font-medium text-red-900 dark:text-red-100">
                                    <strong>Lesson:</strong> {context.lesson}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

// Risk Badge Component
function RiskBadge({ risk }: { risk: string }) {
    const riskLower = risk.toLowerCase()
    const isLow = riskLower.includes("low") || riskLower.includes("negligible")
    const isMedium = riskLower.includes("medium")
    const isHigh = riskLower.includes("high") || riskLower.includes("critical")

    return (
        <span className={cx(
            "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
            isHigh ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" :
                isMedium ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300" :
                    isLow ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" :
                        "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
        )}>
            {risk}
        </span>
    )
}
