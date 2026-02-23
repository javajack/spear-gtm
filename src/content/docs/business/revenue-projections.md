---
title: "Revenue Projections"
description: "Month 3 through Month 24 revenue projections with customer counts, MRR, and ARR milestones."
---

import { Badge } from '@astrojs/starlight/components';

## Revenue Trajectory

| Milestone | Customers | MRR | ARR | Cumulative Investment |
|-----------|:---------:|:---:|:---:|:--------------------:|
| **Month 3** | 15 | $5,250 | $63K | $35K |
| **Month 6** | 60 | $24,000 | $288K | $45K |
| **Month 12** | 250 | $112,500 | $1.35M | $45K (profitable from month 5) |
| **Month 24** | 1,500 | $712,500 | $8.55M | Self-funded from revenue |

## MRR Growth Visualization

```mermaid
xychart-beta
    title "Monthly Recurring Revenue Growth"
    x-axis ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12", "M18", "M24"]
    y-axis "MRR ($)" 0 --> 750000
    bar [500, 1500, 5250, 10000, 15000, 24000, 32000, 42000, 55000, 70000, 88000, 112500, 350000, 712500]
```

## Key Assumptions

| Assumption | Value | Basis |
|-----------|-------|-------|
| Average revenue per customer | $450/mo (growing to $525/mo) | Mix of tiers + meeting bonuses |
| Monthly churn | 8-10% (improving to 7%) | Outbound takes time to deliver; once working, very sticky |
| New customer growth | 15-30% MoM early, 10-15% later | Community-driven acquisition + content flywheel |
| Profitable from | Month 5 | Low infrastructure costs + community-driven CAC |
| Total capital needed | ~$45K | Solo founder costs + infrastructure through profitability |

## Profitability Path

```mermaid
graph LR
    A["Month 1-4<br/>Investment Phase<br/>~$35K spend"] --> B["Month 5<br/>Break Even<br/>~$15K MRR"]
    B --> C["Month 6-12<br/>Growth Phase<br/>$24K-$112K MRR"]
    C --> D["Month 12-24<br/>Scale Phase<br/>$112K-$712K MRR"]
    style A fill:#dc2626,color:#fff
    style B fill:#d97706,color:#fff
    style C fill:#059669,color:#fff
    style D fill:#047857,color:#fff
```

:::note[Conservative projections]
These projections assume moderate word-of-mouth effects. If the product delivers measurably (5-10 meetings/month), the community-driven distribution among vocal technical founders could accelerate growth significantly beyond these numbers.
:::

## What Drives Revenue Growth

1. **New customer acquisition** — community + content + referrals drive consistent new signups
2. **Improving retention** — as the AI improves, churn decreases from 10% to 7%
3. **Meeting bonus expansion** — better AI = more meetings per customer = more outcome revenue
4. **Tier upgrades** — customers who see results move from Starter to Growth to Scale
5. **Adjacent segment expansion** — agencies and larger SaaS companies from month 9+
