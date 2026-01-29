# Investment Report Template

A **Tremor + Next.js** template for creating professional, "decision-grade" investment reports and due diligence memos. Built to be easily customized by humans or AI agents.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![Tremor](https://img.shields.io/badge/Tremor-3.18-indigo)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan)

## � What is a "Decision-Grade" Report?

This template is not just a dashboard; it's an **argumentative artifact**. It is designed to implement the "Decision-Grade" philosophy:

1.  **Clear Stance**: Every report starts with a specific decision ("PROCEED", "KILL", etc.) in the `ExecutiveHero`.
2.  **Sourced Data**: Every number (`MetricCard`) supports a source field to verify truth.
3.  **Falsifiability**: The `Risk` and `Security` pages encourage stating specific kill criteria.
4.  **Interactive Modeling**: The `Product` page supports interactive calculators (`UnitEconomicsCalculator`) to test assumptions live.

---

## �🚀 Quick Start

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

1.  **Configuration**: `src/report.config.ts` controls global settings (branding, navigation, metadata).
2.  **Schema**: `src/data/report-schema.ts` defines the strict TypeScript structure for your data.
3.  **Content**: `src/data/report-data.ts` contains the actual report text, numbers, and logic.
4.  **UI**: Components in `src/app/` consume this data to render the report.

---

## 📁 Project Structure Deep Dive

```
├── src/
│   ├── report.config.ts          # ⚙️ GLOBAL CONTROL CENTER
│   ├── app/
│   │   ├── layout.tsx            # Root layout (fonts, providers)
│   │   ├── siteConfig.ts         # Metadata mapping
│   │   └── (main)/               # App Router Group (Sidebar Layout)
│   │       ├── layout.tsx        # Sidebar + Header Wrapper
│   │       ├── overview/         # [PAGE] Executive Summary
│   │       ├── product/          # [PAGE] Unit Economics
│   │       ├── ...               # Other report pages
│   ├── components/
│   │   ├── ...                   # Base UI (Buttons, Charts)
│   │   └── ui/report/            # ✨ Specialized Report Components
│   └── data/
│       ├── report-schema.ts      # Data Contracts (Interfaces)
│       └── report-data.ts        # Content Repository
```

---

## 🔧 Customization & Theming

### Changing Colors
The template uses Tailwind CSS colors. To change the visual theme:
1.  Open `src/report.config.ts`.
2.  Change `theme.primaryColor` to one of the presets: `"indigo"`, `"blue"`, `"purple"`, `"emerald"`, `"orange"`, `"red"`.

To add **custom colors**:
1.  Edit `tailwind.config.ts`.
2.  Extend the `colors` object.
3.  Update the `Safelist` in `src/lib/utils.ts` if creating dynamic badge colors.

### Changing Fonts
The project uses `Inter` (Google Font) by default.
1.  Open `src/app/layout.tsx`.
2.  Import a new font from `next/font/google`.
3.  Apply it to the `<body>` className.

### Icons
We use **Remix Icons** (`@remixicon/react`).
- Browse icons here: [Remix Icon Library](https://remixicon.com/)
- Import usage: `import { RiMoneyDollarCircleLine } from "@remixicon/react"`

---

## 🧩 Component Reference

The template comes with specialized components in `src/components/ui/report/` designed for investment memos.

| Component | Props | Purpose |
| :--- | :--- | :--- |
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
  {/* ... */}
</div>
```

---

## 📊 Data Visualization

This template uses **Tremor** for charts. To add a new chart:

1.  **Import Component**: `import { BarChart, DonutChart } from "@tremor/react"`
2.  **Prepare Data**: Ensure your data in `report-data.ts` is an array of objects.
3.  **Render**:

```tsx
<BarChart
  data={financialHistory}
  index="year"
  categories={["Revenue", "Profit"]}
  colors={["indigo", "cyan"]}
  valueFormatter={(number) => `$${number.toLocaleString()}`}
/>
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
If you see TypeScript errors in `report-data.ts`:
- Check `src/data/report-schema.ts` for valid string unions (e.g. `likelihood` must be exactly `"Low" | "Medium" | ...`).
- Ensure optional fields (`?`) are handled if you are trying to access them directly in UI code.

---

## 🚀 Deployment

### Vercel (Recommended)

1.  Push your code to a Git repository (GitHub/GitLab/Bitbucket).
2.  Create a new project in Vercel and import the repository.
3.  Vercel will auto-detect the Next.js framework.
4.  Click **Deploy**.

No environment variables are required for the basic template.

---

## 🤖 For AI Agents

See **[AGENT_INSTRUCTIONS.md](./AGENT_INSTRUCTIONS.md)** for detailed instructions on retrofitting new reports into this template.

The workflow for agents is:

1.  **Analyze** source document.
2.  **Configure** `report.config.ts`.
3.  **Populate** `report-data.ts` using the schema.
4.  **Refine** page layouts if sections are missing/extra.
5.  **Verify** build.

---

## 📝 License

MIT License - See [LICENSE.md](./LICENSE.md)

---

Built with [Tremor](https://tremor.so) • [Next.js](https://nextjs.org)
