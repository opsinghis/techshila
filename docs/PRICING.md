# AI SDLC — Pricing Schedule

## Engagement Options

| Option | Duration | What's Included | Price (ex-VAT) |
|--------|----------|----------------|----------------|
| **Standard** | 2 weeks | Full engagement — setup, mindset & training (5 sessions), guided execution, framework + website handoff, champion playbook | **£20,000** |
| **Standard + Advisory** | 2 weeks + 4 weeks | Everything in Standard, plus 4 weeks of post-handoff advisory support (2 hrs/week — async via Slack/email) | **£25,000** |

## What's Covered in Each Option

### Standard (£20,000)

**Week 1 — Setup & Training**
- Repository assessment and framework installation
- Generator runs tailored to your codebase (Dev, Story, QE pipelines)
- Validation and first end-to-end workflow execution
- 5 training & mindset sessions (6 hours total, recorded):
  - Vibe Coding → Agentic Delivery (1.5 hrs)
  - The Trust Model (1 hr)
  - Development Pipeline Deep-Dive (1 hr)
  - QE & Story Pipeline Deep-Dive (1.5 hrs)
  - Prompt Engineering for Delivery (1 hr)

**Week 2 — Execution & Handoff**
- Paired workflow execution on real sprint tickets
- Configuration tuning based on team feedback
- Champion coaching and peer session
- Documentation website source code handoff + update walkthrough
- Champion playbook delivery
- Upgrade path documentation
- Engagement retrospective and sign-off

### Advisory Add-On (+£5,000)

4 weeks of lightweight support after the engagement ends:
- 2 hours per week via async channels (Slack, email, or Teams)
- Workflow configuration questions
- Champion coaching as they onboard new team members
- Edge case troubleshooting
- Guidance on extending or customising workflows

*Advisory is high-value during the first month as the team builds confidence operating independently. Most issues surface in weeks 3-4 after the initial excitement settles into daily use.*

## Payment Terms

| Milestone | Amount | When |
|-----------|--------|------|
| Engagement start | 50% | On contract signature, before Day 1 |
| Engagement completion | 50% | On sign-off (Day 10) |

For the Standard + Advisory option:

| Milestone | Amount | When |
|-----------|--------|------|
| Engagement start | 50% (£12,500) | On contract signature, before Day 1 |
| Engagement completion | 40% (£10,000) | On sign-off (Day 10) |
| Advisory completion | 10% (£2,500) | At end of 4-week advisory period |

## Cost Reduction Model

This engagement pays for itself by reducing cost across three areas that compound over time:

### 1. Reduced Rework & Bug Leakage

| Without Framework | With Framework |
|-------------------|----------------|
| Vague stories reach development, bugs discovered late in QA or production | Story Readiness pipeline catches gaps *before* code is written |
| Developers miss edge cases, regressions found weeks later | Blast-radius analysis and 6-layer test execution catch regressions *same day* |
| QE manually triages hundreds of test results per sprint | Automatic failure classification — zero manual triage |

**Typical impact:** Teams report 30-50% fewer escaped defects in the first quarter. Each production bug avoided saves 5-10x the cost of catching it earlier (industry benchmark: IBM Systems Sciences Institute).

### 2. Reduced Engineering Effort Per Ticket

| Activity | Before (manual/ad-hoc AI) | After (agentic workflows) |
|----------|---------------------------|---------------------------|
| Story refinement | 1-2 hours per story (meetings, back-and-forth) | 15-20 minutes (automated analysis, structured output) |
| Test planning | 2-4 hours per feature (manual, inconsistent) | Automated — included in pipeline execution |
| Test execution & triage | 1-3 hours per QE cycle (run tests, classify failures, write report) | Single command, automated classification, Jira publishing |
| Regression investigation | 1-2 hours per regression (which change caused this?) | Blast-radius tracing identifies source automatically |

**Typical impact:** 40-60% reduction in overhead per ticket. For a team of 5 engineers processing 20 tickets per sprint, that's 30-50 recovered engineering hours per sprint — hours redirected to feature delivery instead of process overhead.

### 3. Reduced Onboarding & Knowledge Loss

| Without Framework | With Framework |
|-------------------|----------------|
| New engineers take 2-4 weeks to learn team testing conventions | Documentation website + workflows encode conventions — new engineers follow the same process from day one |
| Knowledge lives in people's heads — when someone leaves, it leaves too | Knowledge stores persist across runs — patterns, anti-patterns, and tool reliability accumulate in the codebase |
| QE coverage varies wildly depending on who runs the tests | Consistent 6-layer coverage regardless of who runs the command |

**Typical impact:** Onboarding time reduced by 30-40%. Knowledge retention becomes a property of the system, not the team.

### Investment vs. Return

| | Cost |
|---|---|
| **Engagement investment** | £20,000 - £25,000 (one-time) |
| **Claude licenses** | ~£20/user/month (ongoing, Anthropic pricing) |
| **Recovered engineering hours (Year 1)** | 600-1,200 hours across a 5-person team |
| **At average UK senior engineer cost (£60-80/hr loaded)** | £36,000 - £96,000 in recovered capacity |
| **Break-even** | Typically within 4-8 weeks of active use |

*These are conservative estimates based on the overhead reduction per ticket. Actual savings depend on team size, sprint velocity, and current defect escape rate.*

---

## What's Not Included

- Claude Pro/Team license costs (purchased directly from Anthropic by your team)
- Jira/Atlassian subscription or configuration beyond MCP setup
- Custom workflow development beyond the 3 standard pipelines
- Ongoing maintenance of the documentation website (ownership transfers to your team)
- CI/CD pipeline integration (the framework operates independently of CI)

Any of the above can be scoped as a follow-on engagement if needed.

## Frequently Asked Questions

**Why fixed-price, not day-rate?**
You're not buying time — you're buying a capability. The price reflects the framework IP, the training programme, the documentation website, and the knowledge transfer. A team attempting to build this independently would spend 2-3 months of engineering time with uncertain results.

**What if we only need 2 of the 3 pipelines?**
We can discuss a reduced scope. However, the pipelines share infrastructure (generator framework, knowledge stores, documentation), so the savings from removing one pipeline are modest (~10-15%).

**What if we have multiple repositories?**
The first repository is included in the engagement price. Additional repositories can be added at £3,000-5,000 each (depending on complexity), as the generator runs independently per repo but the training and mindset sessions carry across.

**Do we need the advisory add-on?**
Not strictly — many teams operate independently after Day 10. The advisory is a safety net for the transition period. If your champions are senior and confident, you may not need it. If this is the team's first experience with agentic AI workflows, we recommend it.

**Can we extend the engagement beyond 2 weeks?**
Yes. Extended engagements (3-4 weeks) make sense for larger teams (10+ engineers) or multiple repositories. We'll scope and price these separately.

---

*All prices in GBP, exclusive of VAT. VAT charged at the applicable UK rate on invoice.*
