// =============================================================================
// REPORT CONFIGURATION
// =============================================================================
// This is the central configuration file for your investment report.
// Modify these values to customize your report's branding, navigation, and metadata.
//
// AGENT INSTRUCTIONS:
// 1. Update `report` with your report's details
// 2. Update `navigation` to match your report's sections
// 3. Update `theme` if you want different colors
// =============================================================================

export const reportConfig = {
    // -------------------------------------------------------------------------
    // REPORT METADATA
    // -------------------------------------------------------------------------
    report: {
        // The main title shown in browser tab and header
        name: "HSA Investment Report",

        // Short subtitle for the header
        shortName: "HSA Report",

        // Full subtitle shown on the overview page
        subtitle: "Decision-Grade Trust Infrastructure Memo: Building the PSA of Hermès Bags",

        // The investment decision (shown prominently)
        // Options: "PROCEED" | "PROCEED WITH CONSTRAINTS" | "DO NOT PROCEED" | "FURTHER ANALYSIS NEEDED"
        decision: "PROCEED WITH CONSTRAINTS" as const,

        // URL where the report is hosted (for meta tags)
        url: "https://hsapsa.vercel.app",

        // Version of this report
        version: "1.0.0",

        // Date of report generation
        date: "2026-01-29",

        // Author or organization
        author: "Investment Committee",
    },

    // -------------------------------------------------------------------------
    // SOURCE DOCUMENT
    // -------------------------------------------------------------------------
    source: {
        // Title of the source PDF/document
        title: "PSA for Hermès Bags: Decision-Grade Trust Infrastructure Memo",

        // Path to source document (if included in repo)
        path: "",

        // External URL to source (if hosted elsewhere)
        url: "",
    },

    // -------------------------------------------------------------------------
    // NAVIGATION
    // -------------------------------------------------------------------------
    // Configure which pages are enabled and their labels
    // Set `enabled: false` to hide a page from the sidebar
    navigation: {
        overview: {
            enabled: true,
            label: "Overview",
            description: "Executive summary and key metrics",
        },
        psa: {
            enabled: true,
            label: "PSA Case Study",
            description: "Comparable company analysis",
        },
        comparables: {
            enabled: true,
            label: "Comparables",
            description: "Market comparables and benchmarks",
        },
        product: {
            enabled: true,
            label: "Product",
            description: "Product model and unit economics",
        },
        security: {
            enabled: true,
            label: "Security",
            description: "Security considerations and threat model",
        },
        risk: {
            enabled: true,
            label: "Risk",
            description: "Risk register and mitigation strategies",
        },
        roadmap: {
            enabled: true,
            label: "Roadmap",
            description: "Timeline and milestones",
        },
        sources: {
            enabled: true,
            label: "Sources",
            description: "References and citations",
        },
    },

    // -------------------------------------------------------------------------
    // THEME
    // -------------------------------------------------------------------------
    theme: {
        // Primary accent color used throughout the report
        // Options: "indigo" | "blue" | "purple" | "emerald" | "orange" | "red"
        primaryColor: "indigo" as const,

        // Decision badge colors (auto-applied based on decision)
        decisionColors: {
            "PROCEED": "emerald",
            "PROCEED WITH CONSTRAINTS": "amber",
            "DO NOT PROCEED": "red",
            "FURTHER ANALYSIS NEEDED": "blue",
        } as const,
    },

    // -------------------------------------------------------------------------
    // EXTERNAL LINKS
    // -------------------------------------------------------------------------
    externalLinks: {
        // Repository URL
        github: "https://github.com/st218/HSA",

        // Tremor UI documentation
        tremor: "https://blocks.tremor.so/templates#dashboard",
    },
}

// Type exports for use in components
export type ReportConfig = typeof reportConfig
export type NavigationKey = keyof typeof reportConfig.navigation
export type DecisionType = typeof reportConfig.report.decision
