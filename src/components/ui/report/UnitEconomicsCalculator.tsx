"use client"

import { cx } from "@/lib/utils"
import { RiCalculatorLine, RiRefreshLine } from "@remixicon/react"
import { useState } from "react"

interface CalculatorInputs {
    cogs: number
    targetMargin: number
    declaredValue: number
    disputeRate: number
    volumePerMonth: number
}

const defaultInputs: CalculatorInputs = {
    cogs: 220,
    targetMargin: 60,
    declaredValue: 15000,
    disputeRate: 0.5,
    volumePerMonth: 500,
}

export function UnitEconomicsCalculator() {
    const [inputs, setInputs] = useState<CalculatorInputs>(defaultInputs)

    // Calculations
    const targetPrice = inputs.cogs / (1 - inputs.targetMargin / 100)
    const grossProfit = targetPrice - inputs.cogs
    const monthlyRevenue = targetPrice * inputs.volumePerMonth
    const monthlyGrossProfit = grossProfit * inputs.volumePerMonth
    const expectedDisputes = (inputs.disputeRate / 100) * inputs.volumePerMonth
    const reserveRequired = expectedDisputes * (inputs.declaredValue * 0.1) // Assume 10% of declared value per dispute
    const netProfit = monthlyGrossProfit - reserveRequired
    const netMargin = (netProfit / monthlyRevenue) * 100

    const handleInputChange = (field: keyof CalculatorInputs, value: string) => {
        setInputs((prev) => ({
            ...prev,
            [field]: parseFloat(value) || 0,
        }))
    }

    const resetInputs = () => setInputs(defaultInputs)

    return (
        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 dark:border-gray-800 dark:from-gray-900 dark:to-gray-950">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-900/30">
                        <RiCalculatorLine className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-gray-50">
                            Unit Economics Calculator
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Model HSA pricing and profitability
                        </p>
                    </div>
                </div>
                <button
                    onClick={resetInputs}
                    className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                    <RiRefreshLine className="h-4 w-4" />
                    Reset
                </button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Input Section */}
                <div className="space-y-4">
                    <h4 className="text-sm font-medium uppercase tracking-wider text-gray-500">
                        Inputs
                    </h4>

                    <InputSlider
                        label="Cost of Goods Sold (COGS)"
                        value={inputs.cogs}
                        min={100}
                        max={400}
                        step={10}
                        unit="$"
                        onChange={(v) => handleInputChange("cogs", v)}
                    />

                    <InputSlider
                        label="Target Gross Margin"
                        value={inputs.targetMargin}
                        min={40}
                        max={75}
                        step={1}
                        unit="%"
                        onChange={(v) => handleInputChange("targetMargin", v)}
                    />

                    <InputSlider
                        label="Average Declared Value"
                        value={inputs.declaredValue}
                        min={5000}
                        max={50000}
                        step={1000}
                        unit="$"
                        onChange={(v) => handleInputChange("declaredValue", v)}
                    />

                    <InputSlider
                        label="Dispute Rate"
                        value={inputs.disputeRate}
                        min={0.1}
                        max={2}
                        step={0.1}
                        unit="%"
                        onChange={(v) => handleInputChange("disputeRate", v)}
                    />

                    <InputSlider
                        label="Monthly Volume"
                        value={inputs.volumePerMonth}
                        min={100}
                        max={2000}
                        step={50}
                        unit=" bags"
                        onChange={(v) => handleInputChange("volumePerMonth", v)}
                    />
                </div>

                {/* Output Section */}
                <div className="space-y-4">
                    <h4 className="text-sm font-medium uppercase tracking-wider text-gray-500">
                        Outputs
                    </h4>

                    <div className="grid grid-cols-2 gap-3">
                        <OutputCard
                            label="Target Price"
                            value={`$${targetPrice.toFixed(0)}`}
                            color="orange"
                        />
                        <OutputCard
                            label="Gross Profit/Bag"
                            value={`$${grossProfit.toFixed(0)}`}
                            color="emerald"
                        />
                    </div>

                    <OutputCard
                        label="Monthly Revenue"
                        value={`$${(monthlyRevenue / 1000).toFixed(0)}K`}
                        size="lg"
                        color="blue"
                    />

                    <OutputCard
                        label="Monthly Gross Profit"
                        value={`$${(monthlyGrossProfit / 1000).toFixed(0)}K`}
                        size="lg"
                        color="purple"
                    />

                    <div className="grid grid-cols-2 gap-3">
                        <OutputCard
                            label="Expected Disputes"
                            value={expectedDisputes.toFixed(1)}
                            subtitle="/month"
                            color="amber"
                        />
                        <OutputCard
                            label="Reserve Required"
                            value={`$${(reserveRequired / 1000).toFixed(1)}K`}
                            subtitle="/month"
                            color="red"
                        />
                    </div>

                    <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950/30">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-emerald-600 dark:text-emerald-400">
                                    Net Profit (after reserves)
                                </p>
                                <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                                    ${(netProfit / 1000).toFixed(0)}K/month
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-emerald-600 dark:text-emerald-400">
                                    Net Margin
                                </p>
                                <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                                    {netMargin.toFixed(1)}%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PSA Benchmark */}
            <div className="mt-6 flex items-center justify-between rounded-lg bg-gray-100 px-4 py-3 dark:bg-gray-800">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                    PSA Benchmark Gross Margin (FY2020)
                </span>
                <span className="font-semibold text-gray-900 dark:text-gray-50">57.3%</span>
            </div>
        </div>
    )
}

// Input Slider Component
function InputSlider({
    label,
    value,
    min,
    max,
    step,
    unit,
    onChange,
}: {
    label: string
    value: number
    min: number
    max: number
    step: number
    unit: string
    onChange: (value: string) => void
}) {
    return (
        <div>
            <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {label}
                </label>
                <span className="rounded-md bg-gray-100 px-2 py-1 text-sm font-semibold text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                    {unit === "$" ? `$${value}` : unit === "%" ? `${value}%` : `${value}${unit}`}
                </span>
            </div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                title={label}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-orange-500 dark:bg-gray-700"
            />
            <div className="mt-1 flex justify-between text-xs text-gray-500">
                <span>{unit === "$" ? `$${min}` : unit === "%" ? `${min}%` : `${min}${unit}`}</span>
                <span>{unit === "$" ? `$${max}` : unit === "%" ? `${max}%` : `${max}${unit}`}</span>
            </div>
        </div>
    )
}

// Output Card Component
function OutputCard({
    label,
    value,
    subtitle,
    color = "gray",
    size = "sm",
}: {
    label: string
    value: string
    subtitle?: string
    color?: "orange" | "emerald" | "blue" | "purple" | "amber" | "red" | "gray"
    size?: "sm" | "lg"
}) {
    const colorStyles = {
        orange: "bg-orange-50 border-orange-200 dark:bg-orange-950/30 dark:border-orange-800",
        emerald: "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800",
        blue: "bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800",
        purple: "bg-purple-50 border-purple-200 dark:bg-purple-950/30 dark:border-purple-800",
        amber: "bg-amber-50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-800",
        red: "bg-red-50 border-red-200 dark:bg-red-950/30 dark:border-red-800",
        gray: "bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700",
    }

    const textColors = {
        orange: "text-orange-700 dark:text-orange-300",
        emerald: "text-emerald-700 dark:text-emerald-300",
        blue: "text-blue-700 dark:text-blue-300",
        purple: "text-purple-700 dark:text-purple-300",
        amber: "text-amber-700 dark:text-amber-300",
        red: "text-red-700 dark:text-red-300",
        gray: "text-gray-700 dark:text-gray-300",
    }

    return (
        <div className={cx("rounded-xl border p-3", colorStyles[color])}>
            <p className={cx("text-xs", textColors[color])}>{label}</p>
            <p
                className={cx(
                    "font-bold",
                    textColors[color],
                    size === "lg" ? "text-xl" : "text-lg"
                )}
            >
                {value}
                {subtitle && (
                    <span className="text-sm font-normal opacity-70">{subtitle}</span>
                )}
            </p>
        </div>
    )
}
