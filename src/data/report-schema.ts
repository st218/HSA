// =============================================================================
// REPORT DATA SCHEMA
// =============================================================================
// TypeScript interfaces defining the structure of report data.
// Use these types to ensure your report data is correctly formatted.
//
// AGENT INSTRUCTIONS:
// - Do NOT modify this file when creating a new report
// - Import these types in report-data.ts to ensure type safety
// - All properties marked with `?` are optional
// =============================================================================

// -------------------------------------------------------------------------
// CORE TYPES
// -------------------------------------------------------------------------

export interface SourcedValue<T> {
    value: T
    source: string
    isVerified: boolean
    url?: string
}

export interface Definition {
    term: string
    definition: string
    source: string
}

// -------------------------------------------------------------------------
// EXECUTIVE SUMMARY
// -------------------------------------------------------------------------

export interface ExecutiveSummary {
    decision: "PROCEED" | "PROCEED WITH CONSTRAINTS" | "DO NOT PROCEED" | "FURTHER ANALYSIS NEEDED"
    decisionDetail: string
    keyPremise: string
    biggestRisks: string[]
    icMessage: string
}

export interface KeyMetrics {
    [key: string]: SourcedValue<number | string> | { [key: string]: number | string }
}

// -------------------------------------------------------------------------
// FINANCIAL DATA
// -------------------------------------------------------------------------

export interface FinancialMetric {
    metric: string
    currentPeriod: number | string
    priorPeriod?: number | string
    source: string
    isVerified: boolean
    url?: string
}

export interface SegmentData {
    segment: string
    netRevenue: number
    operatingIncome: number
    marginPercent: number
    source: string
}

export interface CostDriver {
    category: string
    description: string
    isVariable: boolean
}

// -------------------------------------------------------------------------
// PRODUCT / SERVICE MODEL
// -------------------------------------------------------------------------

export interface ProductTier {
    tier: string
    name: string
    price: string
    features: string[]
    target: string
    margin?: string
}

export interface TimeModelStep {
    step: number
    task: string
    minutes: number
    role: string
    notes?: string
}

export interface CostAssumption {
    item: string
    cost: string
    notes?: string
}

export interface PricingScenario {
    scenario: string
    cogs: number
    targetMargin: string
    minPrice: string
}

// -------------------------------------------------------------------------
// RISK & SECURITY
// -------------------------------------------------------------------------

export interface RiskItem {
    id: string
    category: string
    risk: string
    likelihood: "Low" | "Medium" | "High" | "Critical"
    impact: "Low" | "Medium" | "High" | "Critical"
    mitigation: string
    owner?: string
    killCriterion?: string
}

export interface FraudVector {
    id: string
    vector: string
    description: string
    control: string
    residualRisk: "Low" | "Medium" | "High"
}

export interface ThreatModelItem {
    id: string
    vector: string
    attackerCapability: string
    control: string
    residualRisk: "Low" | "Medium" | "High"
    notes?: string
}

export interface FalsifiableHypothesis {
    id: string
    hypothesis: string
    sample: string
    test: string
    passThreshold: string
    failThreshold: string
    window: string
    isCritical: boolean
}

export interface LegalGuidelines {
    doList: string[]
    dontList: string[]
    statement: string
    benchmarks: string[]
}

// -------------------------------------------------------------------------
// ROADMAP
// -------------------------------------------------------------------------

export interface Phase {
    phase: string
    name: string
    duration: string
    objectives: string[]
    deliverables: string[]
    successCriteria?: string[]
}

export interface Milestone {
    id: string
    milestone: string
    target: string
    status: "Not Started" | "In Progress" | "Complete" | "At Risk"
    dependencies?: string[]
}

export interface ExitMilestone {
    category: string
    items: string[]
}

export interface YearlyTrajectory {
    year: string
    focus: string
    goals: string[]
}

// -------------------------------------------------------------------------
// COMPARABLES
// -------------------------------------------------------------------------

export interface Comparable {
    company: string
    description: string
    relevance: string
    metrics?: { [key: string]: string | number }
    lessons?: string[]
}

export interface MarketContext {
    region: string
    overview: string
    dynamics: string[]
    implications: string[]
}

// -------------------------------------------------------------------------
// SOURCES
// -------------------------------------------------------------------------

export interface Source {
    id: string
    title: string
    type: "SEC Filing" | "Public" | "Interview" | "Internal" | "Academic" | "News"
    url?: string
    date?: string
    notes?: string
    isVerified: boolean
}

// -------------------------------------------------------------------------
// COMPLETE REPORT DATA TYPE
// -------------------------------------------------------------------------

export interface ReportData {
    // Core
    keyMetrics: KeyMetrics
    executiveSummary: ExecutiveSummary
    definitions: Definition[]

    // Financials
    financials: FinancialMetric[]
    segments?: SegmentData[]
    costDrivers?: CostDriver[]

    // Product
    productTiers: ProductTier[]
    timeModel?: TimeModelStep[]
    costAssumptions?: CostAssumption[]
    pricingScenarios?: PricingScenario[]

    // Risk & Security
    riskRegister: RiskItem[]
    fraudVectors?: FraudVector[]
    threatModel?: ThreatModelItem[]
    hypotheses?: FalsifiableHypothesis[]
    legalGuidelines?: LegalGuidelines

    // Roadmap
    phases: Phase[]
    milestones?: Milestone[]
    exitMilestones?: ExitMilestone[]
    yearlyTrajectory?: YearlyTrajectory[]

    // Comparables
    comparables?: Comparable[]
    marketContext?: MarketContext[]

    // Sources
    sources: Source[]
}
