# Spear — AI Pipeline Engine for B2B SaaS Founders

> Strategic product research and GTM documentation for **Spear**, an AI-native outbound pipeline engine that books meetings for technical B2B SaaS founders — so they can focus on building product, not doing sales.

**[View the Live Documentation →](https://javajack.github.io/spear-gtm/)**

---

## What This Is

This repository contains the complete product strategy, technical architecture, business model, and go-to-market plan for Spear — packaged as a professionally structured documentation site built with [Astro Starlight](https://starlight.astro.build/).

The research covers the full product lifecycle from problem validation through 90-day execution, including:

- **10 discounted product ideas** with specific kill criteria and competitive analysis
- **Deep market landscape research** across 15+ AI SDR startups, CRM incumbents, and DIY tool stacks
- **Technical architecture design** with stack choices, cost modeling, and AI engine specifications
- **Business model with unit economics** at 100, 1,000, and 10,000 customer scale
- **Go-to-market strategy** from first 10 customers to $8.5M ARR — no ads, no sales team
- **Moat analysis** covering data network effects, incumbent response theory, and compounding intelligence
- **Risk matrix** with 5 ranked risks, mitigations, and explicit kill criteria

## Site Structure

| Section | Pages | Covers |
|---------|:-----:|--------|
| **Vision & Problem** | 3 | The hair-on-fire problem, market timing, competitive landscape |
| **Validation** | 2 | 10 rejected ideas with kill reasons, why Spear passes every filter |
| **Product** | 5 | Feature specs, ICP definition, magic moment, deliberate exclusions |
| **Architecture** | 3 | Stack choices with costs, system design diagrams, AI engine pipeline |
| **Moat & Defensibility** | 3 | Data flywheel, institutional memory, incumbent response analysis |
| **Business Model** | 3 | Pricing tiers, unit economics at scale, revenue projections |
| **Go-to-Market** | 3 | First 10 customers playbook, scaling to 100, distribution channels |
| **Expansion** | 3 | V2/V3 roadmap, bowling pin strategy, HubSpot collision timeline |
| **Risks** | 2 | Risk matrix visualization, all mitigations with kill criteria |
| **Execution** | 3 | Week-by-week 90-day plan, decision gates, day-one infrastructure |

**33 pages total** with 11+ Mermaid diagrams, rich Starlight components (Cards, Tabs, Steps, Badges, Asides), and full cross-linking.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) |
| Diagrams | [Mermaid](https://mermaid.js.org/) via `@pasqal-io/starlight-client-mermaid` |
| Plugins | Image zoom, links validator, blog, scroll-to-top |
| Analytics | Google Analytics 4 (Consent Mode v2), Cloudflare Web Analytics, Yandex Metrica |
| Privacy | GDPR cookie consent with EU region detection, IP anonymization |
| SEO | Open Graph, Twitter Cards, JSON-LD structured data (Product + SoftwareApplication + Person) |
| AI Discoverability | LLM meta tags (`ai-indexable`, `ai-purpose`, `ai-audience`), AI crawler rules in robots.txt |
| Hosting | GitHub Pages via Actions workflow |

## Quick Start

### Local Development

```bash
# Clone the repo
git clone git@github.com:javajack/spear-gtm.git
cd spear-gtm

# One-command build + serve (stateless — checks all prerequisites)
./local.sh
```

Or manually:

```bash
npm install
npm run dev        # Dev server at http://localhost:4321/spear-gtm/
npm run build      # Production build to ./dist/
npm run preview    # Preview production build
```

### Prerequisites

- Node.js >= 18
- npm

### Deployment

Pushes to `main` automatically deploy to GitHub Pages via the included workflow at `.github/workflows/deploy.yml`.

**First-time setup:** Go to **Settings → Pages → Source → GitHub Actions** in the repo.

## Key Diagrams

The documentation includes rich Mermaid visualizations:

- **System Architecture** — Full stack diagram (frontend, backend, AI, data, email, job queue)
- **Data Flow Sequence** — Signup → prospect research → email generation → reply handling
- **AI Processing Pipeline** — ICP analysis → prospect scoring → email generation → reply classification
- **Bowling Pin Strategy** — Segment expansion from SaaS founders to mid-market
- **Risk Matrix** — Quadrant chart of likelihood vs. impact
- **90-Day Gantt Chart** — Week-by-week execution timeline
- **Revenue Growth** — MRR bar chart from Month 1 to Month 24
- **Competitive Positioning** — Quadrant map of automation level vs. target segment
- **Data Flywheel** — Cross-customer intelligence compounding loop
- **Market Landscape** — How Spear fits between AI SDRs, tool stacks, and CRM giants

## Research Methodology

This strategy was developed through structured product discovery:

1. **Opportunity scanning** — Evaluated 10 product ideas in the AI-native GTM space against kill criteria (moat durability, capital requirements, sales complexity, market crowding)
2. **Competitive analysis** — Mapped 15+ funded AI SDR startups, analyzed pricing/positioning/funding, identified unserved niches
3. **Segment validation** — Defined hyper-specific ICP with demographic, psychographic, and behavioral attributes; validated willingness-to-pay assumptions
4. **Technical feasibility** — Designed architecture optimized for solo-founder operability at <$200/mo infrastructure cost
5. **Unit economics modeling** — Built bottom-up cost models at 100/1K/10K customer scale with margin and LTV:CAC analysis
6. **Risk assessment** — Ranked 5 risks by likelihood × impact with specific mitigations and quantitative kill criteria

## About the Author

**Rakesh Waghela** — Technical architect and product research specialist with deep expertise in translating complex market opportunities into structured, executable product strategies. Combines hands-on technical architecture (system design, AI/LLM integration, infrastructure cost modeling) with rigorous business analysis (unit economics, competitive positioning, go-to-market planning).

- [LinkedIn](https://www.linkedin.com/in/rakeshwaghela)
- [X / Twitter](https://x.com/webiyo)
- [Book a Consultation](https://topmate.io/rakeshwaghela)
- [GitHub](https://github.com/javajack)

---

Built with [Astro Starlight](https://starlight.astro.build/) | Deployed on [GitHub Pages](https://pages.github.com/)
