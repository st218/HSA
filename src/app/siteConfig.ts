// =============================================================================
// SITE CONFIGURATION
// =============================================================================
// This file provides site metadata for Next.js.
// It imports from report.config.ts for centralized configuration.
// =============================================================================

import { reportConfig } from "@/report.config"

export const siteConfig = {
  name: reportConfig.report.name,
  url: reportConfig.report.url,
  description: reportConfig.report.subtitle,
  baseLinks: {
    home: "/",
    overview: "/overview",
    psa: "/psa",
    comparables: "/comparables",
    product: "/product",
    security: "/security",
    risk: "/risk",
    roadmap: "/roadmap",
    sources: "/sources",
    settings: "/settings",
  },
  externalLink: {
    blocks: reportConfig.externalLinks.tremor,
  },
}

export type siteConfig = typeof siteConfig
