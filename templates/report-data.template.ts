// =============================================================================
// REPORT DATA TEMPLATE
// =============================================================================
// Copy this file to: src/data/report-data.ts
// Then fill in your report data from the source document
//
// INSTRUCTIONS:
// 1. Read through this entire file to understand the structure
// 2. Replace placeholder values with actual data from your source
// 3. Remove sections that don't apply to your report
// 4. Add new exports if your report has additional sections
// =============================================================================

// =============================================================================
// KEY METRICS
// =============================================================================
// TODO: Add your key metrics here

export const keyMetrics = {
    // Example metrics - replace with your actual data
    metric1: { value: 0, source: "Your source", isVerified: false },
    metric2: { value: 0, source: "Your source", isVerified: false },
}

// =============================================================================
// EXECUTIVE SUMMARY
// =============================================================================
// TODO: Fill in your executive summary

export const executiveSummary = {
    decision: "FURTHER ANALYSIS NEEDED" as const,
    decisionDetail: "TODO: Write your 1-2 sentence recommendation here.",
    keyPremise: "TODO: Write the core thesis statement here.",
    biggestRisks: [
        "TODO: Risk 1",
        "TODO: Risk 2",
        "TODO: Risk 3",
    ],
    icMessage: `TODO: Write the full IC message here.
  
This can be multiple paragraphs.

Include key insights, reasoning, and conditions for the decision.`,
}

// =============================================================================
// DEFINITIONS
// =============================================================================
// TODO: Add key terms and definitions from your source

export const definitions = [
    {
        term: "Term 1",
        definition: "Definition of term 1",
        source: "Source"
    },
    // Add more definitions...
]

// =============================================================================
// FINANCIALS
// =============================================================================
// TODO: Add financial data if applicable

export const financials = [
    {
        metric: "Revenue",
        currentPeriod: 0,
        priorPeriod: 0,
        source: "Source",
        isVerified: false
    },
    // Add more financial metrics...
]

// =============================================================================
// PRODUCT TIERS
// =============================================================================
// TODO: Add product/service tiers

export const productTiers = [
    {
        tier: "Tier 1",
        name: "Basic",
        price: "$X",
        features: ["Feature 1", "Feature 2"],
        target: "Target customer segment",
        margin: "XX%",
    },
    // Add more tiers...
]

// =============================================================================
// RISK REGISTER
// =============================================================================
// TODO: Add risks from your source document

export const riskRegister = [
    {
        id: "R1",
        category: "Technical",
        risk: "TODO: Describe the risk",
        likelihood: "Medium" as const,
        impact: "High" as const,
        mitigation: "TODO: Describe mitigation strategy",
        killCriterion: "TODO: What would kill the project?",
    },
    // Add more risks...
]

// =============================================================================
// FRAUD VECTORS (if applicable)
// =============================================================================

export const fraudVectors = [
    {
        id: "F1",
        vector: "TODO: Fraud vector name",
        description: "Description of the fraud vector",
        control: "Control measure",
        residualRisk: "Low" as const,
    },
    // Add more vectors...
]

// =============================================================================
// FALSIFIABLE HYPOTHESES (if applicable)
// =============================================================================

export const falsifiableHypotheses = [
    {
        id: "H1",
        category: "Category",
        hypothesis: "TODO: State the hypothesis",
        sample: "Sample size/scope",
        test: "How to test",
        passThreshold: "Success criteria",
        failThreshold: "Failure criteria",
        window: "Time window",
        isCritical: true,
    },
    // Add more hypotheses...
]

// =============================================================================
// ROADMAP PHASES
// =============================================================================
// TODO: Add your implementation phases

export const phases = [
    {
        phase: "Phase 1",
        name: "TODO: Phase name",
        duration: "Months 1-6",
        objectives: [
            "Objective 1",
            "Objective 2",
        ],
        deliverables: [
            "Deliverable 1",
            "Deliverable 2",
        ],
        successCriteria: [
            "Criterion 1",
        ],
    },
    // Add more phases...
]

// =============================================================================
// MILESTONES
// =============================================================================

export const milestones = [
    {
        id: "M1",
        milestone: "TODO: Milestone name",
        target: "Target date",
        status: "Not Started" as const,
        dependencies: [],
    },
    // Add more milestones...
]

// =============================================================================
// SOURCES
// =============================================================================
// TODO: Add all your sources and references

export const sources = [
    {
        id: "1",
        title: "TODO: Source title",
        type: "Public" as const,
        url: "https://example.com",
        date: "YYYY-MM-DD",
        isVerified: false,
        notes: "Optional notes about this source",
    },
    // Add more sources...
]

// =============================================================================
// COMPARABLES (if applicable)
// =============================================================================

export const comparables = [
    {
        company: "TODO: Company name",
        description: "Brief description",
        relevance: "Why this company is relevant",
        metrics: {
            revenue: "$X",
            margin: "X%",
        },
        lessons: ["Lesson 1", "Lesson 2"],
    },
    // Add more comparables...
]
