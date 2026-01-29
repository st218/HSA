# Agent Instructions: Retrofitting a New Report

This document provides step-by-step instructions for AI agents to retrofit a new investment report into this template.

---

## Prerequisites

- Source document (PDF, memo, or text file) containing the report content
- Access to the codebase
- Ability to run TypeScript/Node.js commands

---

## Workflow Overview

```
1. ANALYZE   → Read source document, identify content structure
2. CONFIGURE → Update report.config.ts with metadata
3. DATA      → Replace report-data.ts with new content
4. CUSTOMIZE → Modify pages if structure differs
5. VERIFY    → Build and test
6. DEPLOY    → Push and deploy
```

---

## Step 1: Analyze Source Document

Read the source document and identify:

### Required Information
- [ ] Report title and subtitle
- [ ] Investment decision (Proceed/Reject/Constraints)
- [ ] Key metrics and numbers
- [ ] Risk factors
- [ ] Timeline/roadmap

### Content Mapping

Map source content to template pages:

| Source Section | Template Page | Data Property |
|----------------|---------------|---------------|
| Executive Summary | Overview | `executiveSummary` |
| Financial Analysis | Comparables/PSA | `financials`, `segments` |
| Product/Service | Product | `productTiers`, `timeModel` |
| Threat Model | Security | `threatModel`, `legalGuidelines` |
| Risk Register | Risk | `riskRegister`, `fraudVectors`, `hypotheses` |
| Implementation Plan | Roadmap | `phases`, `milestones` |
| References | Sources | `sources` |

---

## Step 2: Update Configuration

Edit `src/report.config.ts`:

```typescript
export const reportConfig = {
  report: {
    name: "[REPORT_TITLE]",
    shortName: "[SHORT_NAME]",
    subtitle: "[SUBTITLE]",
    decision: "[PROCEED | PROCEED WITH CONSTRAINTS | DO NOT PROCEED | FURTHER ANALYSIS NEEDED]",
    url: "[DEPLOYMENT_URL]",
    version: "1.0.0",
    date: "[YYYY-MM-DD]",
    author: "[AUTHOR_NAME]",
  },
  source: {
    title: "[SOURCE_DOCUMENT_TITLE]",
  },
  navigation: {
    // Set enabled: false for pages without content
    psa: { enabled: [true|false], label: "[CUSTOM_LABEL]" },
    // ...
  },
}
```

---

## Step 3: Update Data Layer

Edit `src/data/report-data.ts`:

### 3.1 Executive Summary

```typescript
export const executiveSummary = {
  decision: "[DECISION]",
  decisionDetail: "[1-2 sentence recommendation]",
  keyPremise: "[Core thesis statement]",
  biggestRisks: [
    "[Risk 1]",
    "[Risk 2]",
    "[Risk 3]",
  ],
  icMessage: `[Full IC message - can be multi-paragraph]`,
}
```

### 3.2 Key Metrics

```typescript
export const keyMetrics = {
  metricName: { 
    value: [number], 
    source: "[source]", 
    isVerified: [true|false] 
  },
  // Add all key numbers from the source
}
```

### 3.3 Risk Register

```typescript
export const riskRegister = [
  {
    id: "R1",
    category: "[Technical|Market|Operational|Legal|Financial]",
    risk: "[Risk description]",
    likelihood: "[Low|Medium|High|Critical]",
    impact: "[Low|Medium|High|Critical]",
    mitigation: "[Mitigation strategy]",
    killCriterion: "[Optional: What would kill the project]",
  },
  // ... more risks
]
```

### 3.4 Roadmap Phases

```typescript
export const phases = [
  {
    phase: "Phase 1",
    name: "[Phase name]",
    duration: "[e.g., Months 1-6]",
    objectives: ["[Objective 1]", "[Objective 2]"],
    deliverables: ["[Deliverable 1]", "[Deliverable 2]"],
    successCriteria: ["[Criterion 1]"],
  },
  // ... more phases
]
```

### 3.5 Sources

```typescript
export const sources = [
  {
    id: "1",
    title: "[Source title]",
    type: "[SEC Filing|Public|Interview|Internal|Academic|News]",
    url: "[URL if available]",
    date: "[YYYY-MM-DD]",
    isVerified: [true|false],
  },
  // ... more sources
]
```

---

## Step 4: Customize Pages (If Needed)

If the source document has sections that don't fit the template structure:

### Adding a Section

```tsx
// In any page.tsx file
<section>
  <SectionHeader
    title="New Section"
    subtitle="Description"
    badge="Category"
  />
  {/* Your content */}
</section>
```

### Using Data

```tsx
import { yourNewData } from "@/data/report-data"

// Map over data
{yourNewData.map((item) => (
  <Card key={item.id}>
    {item.title}
  </Card>
))}
```

### Disabling a Page

In `report.config.ts`:
```typescript
navigation: {
  psa: { enabled: false, label: "..." },
}
```

Then update the sidebar in `src/components/ui/navigation/sidebar.tsx`.

---

## Step 5: Verify Build

```bash
# Check TypeScript compilation
pnpm tsc --noEmit

# Check ESLint
pnpm lint

# Build for production
pnpm build
```

### Common Errors

| Error | Fix |
|-------|-----|
| `react/no-unescaped-entities` | Replace `'` with `&apos;` and `"` with `&quot;` |
| Import not found | Check file paths and exports |
| Type mismatch | Ensure data matches schema in `report-schema.ts` |

---

## Step 6: Deploy

```bash
# Commit changes
git add -A
git commit -m "feat: Add [Report Name] content"

# Push to trigger Vercel deployment
git push origin main
```

---

## Data Format Reference

### Escaping Special Characters in JSX

```typescript
// ❌ Wrong
<p>PSA's success shows "verified" claims</p>

// ✅ Correct  
<p>PSA&apos;s success shows &quot;verified&quot; claims</p>
```

### Multi-line Strings

```typescript
// Use template literals for long text
export const longText = `
First paragraph here.

Second paragraph here.
`
```

### Arrays of Objects

```typescript
export const items = [
  { id: "1", name: "Item 1" },
  { id: "2", name: "Item 2" },
] as const  // Add 'as const' for better type inference
```

---

## Checklist

Before completing, verify:

- [ ] `report.config.ts` updated with correct metadata
- [ ] `report-data.ts` contains all content from source
- [ ] All enabled pages render without errors
- [ ] `pnpm build` succeeds
- [ ] No ESLint errors (`pnpm lint`)
- [ ] Deployed successfully

---

## Questions?

If content doesn't fit the template structure, consider:
1. Adding new data exports
2. Creating new components
3. Modifying existing page layouts

The template is designed to be flexible - customize as needed while maintaining the core structure.
