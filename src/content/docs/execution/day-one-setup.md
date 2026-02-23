---
title: "Day One Setup"
description: "Every tool and service needed on day one, with costs, purposes, and setup priority."
---

import { Badge } from '@astrojs/starlight/components';

## Infrastructure Table

| Tool | Purpose | Monthly Cost | Setup Priority |
|------|---------|:----------:|:--------------:|
| **GitHub** (private repo) | Version control | Free | <Badge text="Day 1" variant="tip" /> |
| **Vercel** | Frontend hosting + serverless | $20 | <Badge text="Day 1" variant="tip" /> |
| **Supabase** | Database, auth, edge functions | $25 | <Badge text="Day 1" variant="tip" /> |
| **Resend** | Transactional + outbound email | $20 | <Badge text="Week 2" variant="note" /> |
| **Anthropic API** (Claude) | AI backbone | ~$50 initially | <Badge text="Week 2" variant="note" /> |
| **Apollo.io API** | Prospect data | ~$50 initially | <Badge text="Week 3" variant="note" /> |
| **Inngest** | Job queue and scheduling | Free tier | <Badge text="Week 3" variant="note" /> |
| **Cloudflare** | DNS, domain management | Free | <Badge text="Day 1" variant="tip" /> |
| **Sentry** | Error monitoring | Free tier | <Badge text="Week 1" variant="tip" /> |
| **PostHog** | Product analytics | Free tier | <Badge text="Week 1" variant="tip" /> |
| **Linear** | Issue tracking | Free | <Badge text="Day 1" variant="tip" /> |
| **Figma** | Quick UI mockups | Free tier | <Badge text="Day 1" variant="tip" /> |
| **Total** | | **~$165/mo** | |

## Setup Order

```mermaid
graph TD
    subgraph Day1["Day 1: Foundation"]
        GH[GitHub repo] --> CF[Cloudflare DNS]
        CF --> Vercel[Vercel project]
        Vercel --> Supa[Supabase project]
        Linear[Linear board]
        Figma[Figma workspace]
    end

    subgraph Week1["Week 1: Monitoring"]
        Sentry[Sentry integration]
        PH[PostHog analytics]
    end

    subgraph Week2["Week 2: Core Services"]
        Resend[Resend email]
        Claude[Anthropic API key]
    end

    subgraph Week3["Week 3: Data + Queue"]
        Apollo[Apollo.io API]
        Inngest[Inngest workflows]
    end

    Day1 --> Week1
    Week1 --> Week2
    Week2 --> Week3

    style Day1 fill:#059669,color:#fff
    style Week1 fill:#047857,color:#fff
    style Week2 fill:#065f46,color:#fff
    style Week3 fill:#064e3b,color:#fff
```

## Cost Trajectory

| Phase | Monthly Cost | What's Active |
|-------|:-----------:|---------------|
| **Day 1** | ~$45 | GitHub, Vercel, Supabase, Cloudflare, free tiers |
| **Week 2** | ~$115 | + Resend, Anthropic API |
| **Week 3** | ~$165 | + Apollo, Inngest |
| **At 10 customers** | ~$220 | Increased AI/data usage |
| **At 100 customers** | ~$3,500 | Volume scaling |

:::tip[Total capital needed]
$30-40K covers everything through profitability (Month 5). This includes infrastructure costs, domain purchases, legal review budget, and the founder's living expenses. No external funding required.
:::
