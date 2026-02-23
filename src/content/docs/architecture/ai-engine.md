---
title: "AI Engine"
description: "How Spear's AI layer processes prospects from ICP definition through email generation to reply classification."
---

import { Badge } from '@astrojs/starlight/components';

## AI Processing Pipeline

```mermaid
graph LR
    subgraph Input["Inputs"]
        URL[Product URL]
        Customers[Existing Customers]
        ICP[ICP Description]
    end

    subgraph Analysis["ICP Analysis"]
        Scrape[Scrape Product<br/>+ Pricing Page]
        Reverse[Reverse-Engineer<br/>Customer Patterns]
        Profile[Build ICP<br/>Scoring Model]
    end

    subgraph Discovery["Prospect Scoring"]
        Data[Raw Prospect<br/>+ Company Data]
        Eval[LLM Evaluation<br/>vs ICP Criteria]
        Score["Score 1-100<br/>+ Reasoning<br/>+ Personalization Hooks"]
    end

    subgraph Generation["Email Generation"]
        Research[Prospect Research<br/>Dossier]
        Voice[Founder's<br/>Writing Style]
        Perf[Aggregate<br/>Performance Data]
        Emails["3-Email Sequence<br/>+ Subject Lines"]
    end

    subgraph Reply["Reply Processing"]
        Thread[Email Thread<br/>+ Context]
        Class["Classify:<br/>Interested / Objection<br/>/ Not Now / Unsub"]
        Respond[Draft Response<br/>+ Confidence Score]
    end

    Input --> Analysis
    Analysis --> Discovery
    Discovery --> Generation
    Generation --> Reply

    style Input fill:#064e3b,color:#fff
    style Analysis fill:#059669,color:#fff
    style Discovery fill:#059669,color:#fff
    style Generation fill:#059669,color:#fff
    style Reply fill:#059669,color:#fff
```

## AI Call Costs Per Prospect

| AI Task | Input | Output | Estimated Cost |
|---------|-------|--------|---------------|
| **Product analysis** | Scraped pages (~5K tokens) | Value prop + personas (~1K tokens) | ~$0.02 (one-time) |
| **Prospect scoring** | Prospect profile + ICP (~2K tokens) | Score + reasoning (~500 tokens) | ~$0.008 |
| **Email generation** | Research dossier + style profile (~3K tokens) | 3 emails + subjects (~1.5K tokens) | ~$0.015 |
| **Reply classification** | Email thread + context (~1K tokens) | Category + response (~500 tokens) | ~$0.005 |
| **Total per prospect** | | | **~$0.03-0.05** |

## Key AI Design Decisions

### Prospect Scoring is Not Keyword Matching

The LLM evaluates each prospect against ICP criteria with contextual reasoning. It understands nuanced signals:

- "This company just raised Series A and is hiring SDRs" → scaling sales, likely needs tooling
- "CTO just posted about migrating to microservices" → technical decision-maker, likely evaluating dev tools
- "Company has 12 employees and just launched on Product Hunt" → early-stage, founder-led, matches ICP perfectly

### Voice Matching

Before generating emails, the AI analyzes the founder's existing writing from:
- Gmail sent folder (with permission)
- Website copy
- Any provided sample emails

This creates a "style profile" that ensures generated emails sound like the founder, not like an AI.

### Cross-Customer Learning

Subject line optimization and message template selection use anonymized aggregate data from all customers. The system learns:
- Which subject line patterns get opens in which industries
- What personalization approaches convert vs. get ignored
- Which objection-handling tactics lead to meetings
- What send time/day patterns maximize response rates

:::note[The learning flywheel]
This cross-customer intelligence is what makes customer #500's outreach dramatically better than customer #1's. It's also the primary moat — see [Compounding Intelligence](/spear-gtm/moat/compounding-intelligence/).
:::

### Factual Verification Layer

Before including any company-specific claim in an email, the AI verifies it against source data. If confidence is low, it uses a generic personalization approach rather than risk a factual error.

### AI Voice Detection

Generated emails are run through a separate check to detect AI-sounding patterns. Emails that score as "obviously AI-generated" are regenerated with different approaches. The founder's reputation is on the line — one robotic email can damage trust permanently.
