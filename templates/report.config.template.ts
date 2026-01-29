// =============================================================================
// REPORT CONFIGURATION TEMPLATE
// =============================================================================
// Copy this file to: src/report.config.ts
// Then fill in your report details
// =============================================================================

export const reportConfig = {
    // -------------------------------------------------------------------------
    // REPORT METADATA
    // -------------------------------------------------------------------------
    report: {
        // TODO: Set your report title
        name: "Your Report Title",

        // TODO: Set short name for header
        shortName: "Report",

        // TODO: Set subtitle
        subtitle: "Investment Memo: Your Investment Thesis",

        // TODO: Set decision
        // Options: "PROCEED" | "PROCEED WITH CONSTRAINTS" | "DO NOT PROCEED" | "FURTHER ANALYSIS NEEDED"
        decision: "FURTHER ANALYSIS NEEDED" as const,

        // TODO: Set deployment URL
        url: "https://your-report.vercel.app",

        version: "1.0.0",

        // TODO: Set report date
        date: "YYYY-MM-DD",

        // TODO: Set author
        author: "Investment Committee",
    },

    // -------------------------------------------------------------------------
    // SOURCE DOCUMENT
    // -------------------------------------------------------------------------
    source: {
        // TODO: Set source document title
        title: "Your Source Document Title",
        path: "",
        url: "",
    },

    // -------------------------------------------------------------------------
    // NAVIGATION
    // -------------------------------------------------------------------------
    // TODO: Enable/disable pages based on your content
    navigation: {
        overview: {
            enabled: true,
            label: "Overview",
            description: "Executive summary and key metrics",
        },
        psa: {
            enabled: true,  // Set to false if not needed
            label: "Case Study",
            description: "Comparable company analysis",
        },
        comparables: {
            enabled: true,  // Set to false if not needed
            label: "Comparables",
            description: "Market comparables and benchmarks",
        },
        product: {
            enabled: true,
            label: "Product",
            description: "Product model and unit economics",
        },
        security: {
            enabled: true,  // Set to false if not needed
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
        // Options: "indigo" | "blue" | "purple" | "emerald" | "orange" | "red"
        primaryColor: "indigo" as const,

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
        // TODO: Set your repository URL
        github: "https://github.com/your-org/your-report",
        tremor: "https://blocks.tremor.so/templates#dashboard",
    },
}

export type ReportConfig = typeof reportConfig
export type NavigationKey = keyof typeof reportConfig.navigation
export type DecisionType = typeof reportConfig.report.decision
