# Investment Report Template

A **Tremor + Next.js** template for creating professional investment reports and due diligence memos. Built to be easily customized by humans or AI agents.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![Tremor](https://img.shields.io/badge/Tremor-3.18-indigo)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)

## 🚀 Quick Start

```bash
# Clone the template
git clone https://github.com/st218/HSA.git my-report
cd my-report

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000
```

---

## 🏗️ Architecture & Philosophy

This template separates **content** from **presentation** to allow for rapid report generation without touching the UI code.

### The "Data-First" Model

1. **Configuration**: `src/report.config.ts` controls global settings (branding, navigation, metadata).
2. **Schema**: `src/data/report-schema.ts` defines the strict TypeScript structure for your data.
3. **Content**: `src/data/report-data.ts` contains the actual report text, numbers, and logic.
4. **UI**: Components in `src/app/` consume this data to render the report.

This means you can often rewrite an entire report just by modifying the two files in steps 1 and 3.

---

## 📁 Project Structure

```
├── src/
│   ├── report.config.ts          # ⚙️ MAIN CONFIG - Edit this first!
│   ├── app/
│   │   ├── siteConfig.ts         # Site metadata (uses report.config)
│   │   └── (main)/               # Navigation Routes
│   │       ├── overview/         # Executive summary
│   │       ├── psa/              # Case study page
│   │       ├── comparables/      # Market comparables
│   │       ├── product/          # Product/service model
│   │       ├── security/         # Security & threat model
│   │       ├── risk/             # Risk register
│   │       ├── roadmap/          # Timeline & milestones
│   │       └── sources/          # References
│   ├── components/ui/report/     # Reusable specialized report components
│   └── data/
│       ├── report-schema.ts      # TypeScript interfaces (Do not edit)
│       └── report-data.ts        # 📊 YOUR DATA - Main content file
├── templates/                    # Empty starter templates for new reports
├── AGENT_INSTRUCTIONS.md         # 🤖 Implementation guide for AI agents
└── README.md                     # This file
```

---

## 🔧 Customization Guide

### Step 1: Configure Your Report

Edit `src/report.config.ts` to set up your report identity.

```typescript
export const reportConfig = {
  report: {
    name: "Project Titan Due Diligence",
    subtitle: "Series B Investment Memo",
    // This badge will appear in the header and executive summary
    // Options: "PROCEED" | "PROCEED WITH CONSTRAINTS" | "DO NOT PROCEED" | "FURTHER ANALYSIS NEEDED"
    decision: "PROCEED WITH CONSTRAINTS",
  },
  navigation: {
    // Disable pages you don't need to simplify the sidebar
    psa: { enabled: false, label: "Case Study" },
  },
  theme: {
    // Change the primary accent color across the entire app
    primaryColor: "emerald", 
  }
}
```

### Step 2: Add Your Data

Edit `src/data/report-data.ts`. This file exports objects that map 1:1 with the report sections.

**Key Definition:**
Each piece of data typically follows the `SourcedValue` pattern to track where it came from:
```typescript
{ 
  value: 700, 
  source: "SEC Filing 2020", 
  isVerified: true // Shows a green checkmark if true, orange warning if false
}
```

### Step 3: Advanced Customization (Adding Pages)

To add a completely new page (e.g., `/team`):

1. **Create the Page File**:
   Create `src/app/(main)/team/page.tsx`.
   
   ```tsx
   import { SectionHeader } from "@/components/ui/report/SectionHeader"
   
   export default function TeamPage() {
     return (
       <div className="space-y-6">
         <SectionHeader title="Team" subtitle="Key personnel" badge="People" />
         {/* Your content */}
       </div>
     )
   }
   ```

2. **Update Configuration**:
   Add the new route to `src/report.config.ts` (you may need to extend the type in `config.ts` if adding to the typed navigation object, or just edit `src/components/ui/navigation/sidebar.tsx` directly).

3. **Update Sidebar**:
   If you added a custom route not in the default config, edit `src/components/ui/navigation/sidebar.tsx` to include your new link.

---

## 🧩 Component Reference

The template comes with specialized components in `src/components/ui/report/` designed for investment memos.

| Component | Props | Purpose |
|-----------|-------|---------|
| `SectionHeader` | `title`, `subtitle`, `badge` | Standard header for every main section. |
| `MetricCard` | `title`, `value`, `description` | High-visibility stats. Good for Key Metrics in Overview. |
| `ExecutiveHero` | `data` (ExecutiveSummary) | The large banner on the Overview page showing the decision. |
| `TimelineChart` | `data` (Phase[]) | Visualizes the roadmap phases. |
| `UnitEconomicsCalculator` | *None* (Internal state) | Interactive tool for pricing scenarios (Product page). |
| `ContentComponents` | *Various* | Helper layouts like grids and specialized lists. |
| `AnimatedComponents` | `children`, `delay` | `FadeIn` wrapper for smooth page loads. |

**Example: Creating a Metric Row**
```tsx
import { MetricCard } from "@/components/ui/report/MetricCard"
import { keyMetrics } from "@/data/report-data"

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <MetricCard 
    title="Revenue"
    value={keyMetrics.revenue.value}
    description="FY2023"
  />
  <MetricCard 
    title="Growth"
    value={keyMetrics.growth.value}
    description="YoY"
  />
</div>
```

---

## ❓ Troubleshooting

### Common ESLint Errors (`react/no-unescaped-entities`)

When pasting text into JSX, special characters like quotes (`"`) and apostrophes (`'`) must be escaped.

**❌ BAD:**
```tsx
<p>Company's "growth" strategy</p>
```

**✅ GOOD:**
```tsx
<p>Company&apos;s &quot;growth&quot; strategy</p>
```

### Type Mismatches

If you see TypeScript errors in `report-data.ts`, check `src/data/report-schema.ts`.
- Ensure expected optional fields (`?`) are handled.
- Ensure enums (like `likelihood: "Low" | "Medium"`) match exactly (case-sensitive).

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to a Git repository (GitHub/GitLab/Bitbucket).
2. Create a new project in Vercel and import the repository.
3. Vercel will auto-detect the Next.js framework.
4. Click **Deploy**.

No environment variables are required for the basic template.

### Manual Build

```bash
pnpm build
pnpm start
```

---

## 🤖 For AI Agents

See **[AGENT_INSTRUCTIONS.md](./AGENT_INSTRUCTIONS.md)** for detailed instructions on retrofitting new reports into this template.

The workflow for agents is:
1. **Analyze** source document.
2. **Configure** `report.config.ts`.
3. **Populate** `report-data.ts` using the schema.
4. **Refine** page layouts if sections are missing/extra.
5. **Verify** build.

---

## 📝 License

MIT License - See [LICENSE.md](./LICENSE.md)

---
Built with [Tremor](https://tremor.so) • [Next.js](https://nextjs.org)
