---
title: "Technical Stack"
description: "Every technology choice with rationale, cost breakdown, and why this stack optimizes for speed, cost, and solo-founder operability."
---

import { Card, CardGrid, Badge } from '@astrojs/starlight/components';

## Stack Overview

Every component was chosen to minimize cost, maximize development speed, and stay operationally simple for a solo technical founder.

| Component | Choice | Why | Monthly Cost |
|-----------|--------|-----|-------------|
| **Frontend** | Next.js 14 + Tailwind + shadcn/ui | Fast to build, server components for speed, great DX | $20 (Vercel Pro) |
| **Database + Auth** | Supabase (Postgres) | Row-level security, built-in auth, realtime, generous scaling | $25 (Pro) |
| **AI** | Claude Sonnet 4.6 API | Best cost/quality ratio for structured tasks. ~$0.003/1K input tokens | ~$200-500 at scale |
| **Email sending** | Resend | Modern API, good deliverability, easy domain verification | $20 (Pro) |
| **Email receiving** | Gmail/Outlook OAuth API | Read replies directly, no proxy needed | Free |
| **Prospect data** | Apollo.io API | Best price/quality for SMB prospect data. $0.03-0.05/enrichment | ~$100-300 at scale |
| **Job queue** | Inngest | Serverless-friendly, built-in retry/scheduling, async workflows | $25 |
| **Domain mgmt** | Cloudflare | DNS + email routing for sending domains | Free-$5 |
| **Monitoring** | Sentry + PostHog | Error tracking + product analytics | Free tiers |

## Cost Trajectory

<CardGrid>
  <Card title="At Launch" icon="rocket">
    **$120/mo** total infrastructure. Enough to serve first 10-20 customers while staying lean.
  </Card>

  <Card title="At 100 Customers" icon="star">
    **$8-15/mo marginal** per customer (AI calls + data enrichment). Total infra ~$3,500/mo.
  </Card>

  <Card title="At 1,000 Customers" icon="approve-check">
    **$5-10/mo marginal** per customer (volume discounts). Total infra ~$75,000/mo with 84% gross margin.
  </Card>
</CardGrid>

## Why These Specific Choices

:::tip[Supabase over custom backend]
Supabase gives us Postgres, auth, row-level security, realtime subscriptions, and edge functions in one package. At $25/mo, it replaces what would otherwise require AWS RDS + Cognito + custom API + WebSocket server. For a solo founder, operational simplicity is worth more than architectural purity.
:::

:::tip[Claude Sonnet over GPT-4]
Claude Sonnet 4.6 offers the best cost/quality ratio for our specific use cases: prospect evaluation (structured reasoning), email writing (tone matching), and reply classification (nuanced understanding). At $0.003/1K input tokens, we can process a prospect for $0.02-0.05 all-in.
:::

:::tip[Inngest over BullMQ]
Inngest is serverless-native with built-in retry, scheduling, and observability. No Redis to manage. For async workflows like "research prospect → generate email → schedule send → classify reply," the declarative step-function model is ideal.
:::
