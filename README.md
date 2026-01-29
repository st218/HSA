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

## 📁 Project Structure

```
├── src/
│   ├── report.config.ts          # ⚙️ MAIN CONFIG - Edit this first!
│   ├── app/
│   │   ├── siteConfig.ts         # Site metadata (uses report.config)
│   │   └── (main)/
│   │       ├── overview/         # Executive summary
│   │       ├── psa/              # Case study page
│   │       ├── comparables/      # Market comparables
│   │       ├── product/          # Product/service model
│   │       ├── security/         # Security & threat model
│   │       ├── risk/             # Risk register
│   │       ├── roadmap/          # Timeline & milestones
│   │       └── sources/          # References
│   ├── components/ui/report/     # Reusable report components
│   └── data/
│       ├── report-schema.ts      # TypeScript interfaces
│       └── report-data.ts        # 📊 YOUR DATA - Main content file
├── templates/                    # Empty templates for new reports
├── AGENT_INSTRUCTIONS.md         # 🤖 Instructions for AI agents
└── README.md                     # This file
```

## 🔧 Customization Guide

### Step 1: Configure Your Report

Edit `src/report.config.ts`:

```typescript
export const reportConfig = {
  report: {
    name: "Your Report Title",
    subtitle: "Your Report Subtitle",
    decision: "PROCEED WITH CONSTRAINTS",
    // ...
  },
  navigation: {
    // Enable/disable pages
    psa: { enabled: false, label: "Case Study" },
    // ...
  },
}
```

### Step 2: Add Your Data

Edit `src/data/report-data.ts`:

The data file contains all report content organized by section:
- `executiveSummary` - Decision and key insights
- `keyMetrics` - Important numbers and KPIs
- `financials` - Revenue, margins, comparisons
- `riskRegister` - Risk items and mitigations
- `phases` - Roadmap and timeline
- `sources` - References and citations

### Step 3: Customize Pages (Optional)

Each page in `src/app/(main)/` can be modified:
- Add new sections
- Remove unused sections
- Rearrange content order

## 🎨 Components

### Report Components (`src/components/ui/report/`)

| Component | Purpose |
|-----------|---------|
| `SectionHeader` | Section titles with badges |
| `MetricCard` | Key stats display |
| `ExecutiveHero` | Decision banner |
| `TimelineChart` | Phase visualization |
| `UnitEconomicsCalculator` | Interactive pricing tool |
| `ContentComponents` | Tables, cards, lists |
| `AnimatedComponents` | Fade-in effects |

### Usage Example

```tsx
import { SectionHeader } from "@/components/ui/report/SectionHeader"
import { MetricCard } from "@/components/ui/report/MetricCard"

<SectionHeader 
  title="Key Metrics" 
  subtitle="Performance indicators"
  badge="Data"
/>
<MetricCard
  title="Revenue"
  value="$78.9M"
  description="FY2020"
/>
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Manual Build

```bash
pnpm build
pnpm start
```

## 🤖 For AI Agents

See **[AGENT_INSTRUCTIONS.md](./AGENT_INSTRUCTIONS.md)** for detailed instructions on retrofitting new reports.

### Quick Agent Workflow

1. Read the source document (PDF/memo)
2. Update `src/report.config.ts` with report metadata
3. Replace data in `src/data/report-data.ts`
4. Modify pages as needed for content structure
5. Run `pnpm build` to verify
6. Deploy

## 📖 Data Schema

All data follows TypeScript interfaces defined in `src/data/report-schema.ts`.

Key types:
- `ExecutiveSummary` - Decision, risks, key premise
- `RiskItem` - Risk register entries
- `Phase` - Roadmap phases
- `Source` - Reference citations

## 🎯 Design Principles

1. **Data-First**: All content in structured data files
2. **Type-Safe**: Full TypeScript coverage
3. **Composable**: Mix and match components
4. **Agent-Friendly**: Clear instructions for AI
5. **Deploy-Ready**: Works with Vercel out of the box

## 📝 License

MIT License - See [LICENSE.md](./LICENSE.md)

---

Built with [Tremor](https://tremor.so) • [Next.js](https://nextjs.org)
