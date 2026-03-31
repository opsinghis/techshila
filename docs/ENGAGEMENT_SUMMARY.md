# AI SDLC - Engagement Summary

## The Problem

Engineering teams using AI coding assistants face a consistency gap: every developer gets different results, decisions aren't traceable, and there's no structured path from story to verified PR. QE teams still manually triage test failures, and test coverage across layers (unit, integration, E2E, performance, security, accessibility) is inconsistent or absent.

AI helps write code faster — but faster doesn't mean *better* without structure.

## What We Will Deliver

We will install and configure a framework that transforms Claude Code from a general-purpose coding assistant into a **systematic engineering partner** for your team — with three integrated pipelines tailored to your codebase:

### Pipeline 1: Story Readiness
*Before a line of code is written*

Will take your raw stories and requirements, run them through structured analysis, and produce sprint-ready specs with testable acceptance criteria, risk assessments, and implementation guidance.

- Catches gaps and ambiguities before they become bugs
- Produces consistent spec quality regardless of who writes the story
- Output feeds directly into downstream pipelines

### Pipeline 2: Development
*From ticket to tested PR*

Your team gets three purpose-built workflows — **Bug-Fix**, **Feature-Enhance**, and **Feature-Build** — each with a phase pipeline tailored to the work type. A smart classifier auto-routes tickets to the right workflow.

- Every decision is traced and documented
- Blast-radius analysis prevents unintended regressions
- Feature flag gating and incremental delivery built in
- Red-green testing verification before code ships

### Pipeline 3: QE Verification
*Multi-layer test execution with zero manual triage*

Your QE team gets a multi-phase test execution engine that runs **6 test layers** (functional, integration, E2E, performance, security, accessibility), classifies every failure automatically, and publishes results to Jira.

- Expanding test rings: targeted tests first, then blast radius, then full suite
- Automatic failure classification — regression vs. pre-existing vs. flaky vs. environment
- Intelligent re-runs that only re-execute what failed
- Results published to Jira with auto-created bug tickets for regressions

## How It Works

The framework is **generated per-repository** — not one-size-fits-all. During setup, we deep-scan your codebase (language, framework, test infrastructure, CI setup) and produce tailored workflow files specific to your environment. Your team runs simple slash commands, and the framework handles the rest.

Key design principles:
- **Layered state management** — phase documents flow forward, decisions are never re-derived
- **Idempotent execution** — any phase can be interrupted and resumed without side effects
- **Zero infrastructure changes** — works within your existing stack, no CI modifications needed

## Scope of Engagement

| Area | What's Included |
|------|----------------|
| **Story Readiness** | 3 workflows for spec quality — draft, engineer, QA review |
| **Development** | 3 workflows + smart classifier — bug-fix, feature-enhance, feature-build |
| **QE Execution** | Test planning + multi-phase test execution engine across 6 layers |
| **Generator Framework** | Per-repo adaptation — survey, generate, validate |
| **Jira Integration** | Bi-directional: reads tickets, publishes results, creates bug tickets |
| **Knowledge Persistence** | Cross-run learning — patterns, anti-patterns, tool reliability |
| **Documentation Site** | Interactive reference with workflow diagrams, phase details, glossary |

## Engagement Activities

### Phase 1: Setup & Adaptation
- Repository assessment and framework installation
- Generator runs against your codebase — produces tailored workflows matching your language, framework, test infrastructure, and tooling
- Validation and first successful workflow execution end-to-end

### Phase 2: Mindset Shift — From Vibe Coding to Agentic Delivery

Before touching workflows, we address the biggest barrier to adoption: **how engineers think about AI**.

Most teams today use AI as a smarter autocomplete — ask a question, get code, paste it in, hope it works. We call this *vibe coding*. It's fast but fragile: no traceability, no repeatability, no confidence that the output is correct or complete.

**Agentic delivery is fundamentally different.** The AI doesn't just answer questions — it executes structured, multi-phase workflows where every decision is documented, every phase produces a verifiable artifact, and the human stays in control of *what* to do while the AI handles *how* to do it systematically.

This phase covers:

- **From Vibe Coding to Agentic Workflows** — interactive session on the mindset shift: why "prompt and pray" doesn't scale, what changes when AI operates within a structured state machine, and how the engineer's role evolves from writing code to directing and verifying outcomes
- **The Trust Model** — when to let the workflow run, when to intervene, how to read phase outputs and signals, and how to build confidence that AI-driven delivery is reliable and auditable
- **Workflow Deep-Dives** — per-pipeline walkthroughs (Story Readiness, Development, QE) using real tickets from your backlog so the concepts land in familiar territory
- **Prompt Engineering for Delivery** — how to guide agentic workflows effectively, shape context for better results, and get the most value from each phase
- **Champion Enablement** — identify and coach 2-3 engineers per team who internalize the new model and become internal advocates

### Phase 3: Guided Execution
- Pair on real sprint work using the workflows — bugs, features, and QE runs against active tickets
- Iterate on workflow configuration based on team feedback and codebase specifics
- Capture learnings into the framework's knowledge stores so the system improves with use

### Phase 4: Handoff & Independence
- Team runs workflows autonomously with advisory support
- Documentation website source code handed off — champions walked through site structure and how to update content
- Upgrade path established — framework versioning ensures teams stay current as capabilities evolve
- Ownership fully transferred — workflows, website, and knowledge stores are yours to maintain and extend

## Deliverables

1. **Framework source** — generator templates, phase definitions, snippet library, installed and configured for your repository
2. **Generated workflow files** — per-repo, ready to use via slash commands (`/bug-fix`, `/qe-run`, etc.)
3. **Documentation & knowledge website** — full handoff, see details below
4. **Companion tooling** — status checks, retry commands, workflow upgrades, codebase insight refresh
5. **Mindset & training sessions** — recorded, with reference materials engineers can revisit (includes Vibe Coding → Agentic Delivery, Trust Model, pipeline deep-dives, prompt engineering)
6. **Champion playbook** — guide for internal advocates to onboard new team members and reinforce the agentic mindset

### Documentation & Knowledge Website

As part of this engagement, we hand off a **fully built documentation website** that serves as your team's permanent reference for agentic delivery. This is not a PDF or a wiki page — it's an interactive, searchable site covering:

- **Getting started guides** — step-by-step setup for Development and QE pipelines
- **Workflow deep-dives** — every pipeline explained with phase diagrams, input/output specs, and signal flows
- **Architecture reference** — how the framework patterns work, glossary of terms, design decisions
- **Smart classifier logic** — how tickets get routed to the right workflow
- **QE execution model** — test layers, ring strategy, failure classification, Jira publishing

**Why this matters:** New team members can onboard themselves. Engineers don't need to remember training details — they look it up. Champions have a reference when coaching peers. Leadership can review what the framework does without scheduling a meeting.

**Ownership expectation:** The website is handed off as source code (Next.js). Your team owns it going forward — updating content as workflows evolve, adding internal notes, and extending with your own learnings. We walk the champions through the site structure during the engagement so they're comfortable making updates. This becomes your team's living knowledge base for agentic delivery, not a static artifact that goes stale.

## What Your Team Gets

**For developers:**
- Consistent, repeatable workflow from ticket to PR
- No more "what did I forget to test?" — blast-radius analysis handles it
- AI-assisted implementation with guardrails, not guesswork
- Confidence working with agentic AI — understanding *when* and *how* to leverage it

**For QE/SDET teams:**
- 6-layer test coverage from a single command
- Automatic failure triage — no more manually classifying hundreds of test results
- Test plans that trace back to acceptance criteria

**For engineering leadership:**
- Traceable decisions at every phase — audit-friendly
- Consistent quality regardless of who runs the workflow
- Knowledge compounds across runs — the framework learns what works
- Team capability uplift — engineers learn agentic AI patterns they carry forward

## Prerequisites to Kick Off

Before the engagement begins, the following must be in place:

| Prerequisite | Details |
|-------------|---------|
| **Repository access** | Read/write access to the target codebase(s) where workflows will be installed |
| **Engineering points of contact** | Minimum 2 engineers with deep knowledge of the codebase, test infrastructure, and CI/CD setup — they participate in setup and become initial champions |
| **Claude licenses** | Active Claude Pro or Team licenses for all participating engineers (Claude Code CLI access required) |
| **Jira access** *(if applicable)* | API access or Atlassian MCP configured — needed for ticket integration and result publishing |
| **Contract & commercial terms** | Statement of work signed, payment terms agreed, engagement timeline confirmed |
| **Kickoff availability** | 1-hour kickoff session with engineering lead + the 2 designated engineers to align on goals, select initial pilot tickets, and confirm repository readiness |

No infrastructure changes required. No CI pipeline modifications. Works with any tech stack.

---

## 2-Week Engagement Plan

### Swimlane Overview

```
WEEK 1                              WEEK 2
Mon    Tue    Wed    Thu     Fri     Mon    Tue    Wed    Thu    Fri
──────────────────────────────────  ───────────────────────────────

CONSULTANT (Setup, Train & Handoff)
┌──────────────┐
│ M1: Kickoff  │
│ & Repo Setup │ ┌───────────────────┐
└──────────────┘ │ M2: Framework     │
                 │ Generated &       │ ┌────────────────────┐
                 │ Validated         │ │ M3: Mindset &      │
                 └───────────────────┘ │ Training Complete  │
                                       └────────────────────┘
                                                            ┌──────────────────────────────┐
                                                            │ M5: Advisory, Iterate &      │
                                                            │ Website Handoff              │
                                                            └──────────────────────────────┘

ENGINEERING CHAMPIONS (Learn & Execute)
                 ┌───────────────────┐
                 │ Shadow setup,     │
                 │ learn generator   │ ┌──────────────────────────┐
                 └───────────────────┘ │ Attend mindset sessions  │
                                       │ & training, first runs   │
                                       └──────────────────────────┘
                                                            ┌──────────────────────────────┐
                                                            │ M4: Guided sprints —         │
                                                            │ real tickets, pair sessions   │
                                                            └──────────────────────────────┘

WIDER TEAM (Adopt)
                                       ┌──────────────────────────┐
                                       │ Attend mindset sessions, │
                                       │ review docs website      │
                                       └──────────────────────────┘
                                                            ┌──────────────────────────────┐
                                                            │ M6: Independent runs,        │
                                                            │ champions support peers      │
                                                            └──────────────────────────────┘
```

### Milestones

| # | Milestone | Target | Exit Criteria |
|---|-----------|--------|---------------|
| **M1** | Kickoff & Repo Setup | Day 1 | Repo access confirmed, Claude CLI installed, framework copied, pilot tickets selected |
| **M2** | Framework Generated & Validated | Day 3 | All 3 generators run successfully (Dev, Story, QE), generated workflows pass validation, first `/bug-fix` or `/feature-enhance` completes end-to-end |
| **M3** | Mindset & Training Complete | Day 5 | All 5 sessions delivered (Vibe Coding → Agentic Delivery, Trust Model, Development Deep-Dive, QE & Story Deep-Dive, Prompt Engineering), champions identified, recordings available |
| **M4** | Guided Execution | Day 8 | Champions have each run at least 2 workflows solo on real tickets, feedback captured, configuration adjustments made |
| **M5** | Team Adoption | Day 9 | Wider team has run at least 1 workflow each, champion playbook delivered, documentation website handed off (source + walkthrough) |
| **M6** | Handoff & Sign-Off | Day 10 | Team operating independently, knowledge stores populated from real runs, upgrade path documented, website ownership confirmed, engagement retrospective complete |

### Day-by-Day Breakdown

**Week 1 — Setup, Generate, Train**

| Day | Consultant | Champions | Wider Team |
|-----|-----------|-----------|------------|
| **Mon** | Kickoff session. Repo assessment. Install framework. | Join kickoff. Provide repo context. | — |
| **Tue** | Run generators (Dev, Story, QE). Tune to codebase. | Shadow generator runs. Learn survey process. | — |
| **Wed** | Validate all generated workflows. First end-to-end run. | Attempt first workflow with guidance. | — |
| **Thu** | **Session: Vibe Coding → Agentic Delivery** (1.5 hrs). **The Trust Model** (1 hr). **Deep-Dive: Development pipeline** (1 hr). | Attend + hands-on exercises. | Attend all sessions. |
| **Fri** | **Deep-Dive: QE & Story pipelines** (1.5 hrs). **Prompt Engineering for Delivery** (1 hr). Champion coaching + docs website walkthrough. | Attend + first solo runs + docs site orientation. | Attend + explore docs website. |

**Week 2 — Execute, Iterate, Handoff**

| Day | Consultant | Champions | Wider Team |
|-----|-----------|-----------|------------|
| **Mon** | Pair with champions on real bug-fix and feature tickets. | Run `/bug-fix` and `/feature-enhance` on sprint tickets. | Start using docs site. |
| **Tue** | Pair on QE runs. Iterate workflow config based on feedback. | Run `/qe-run` on completed tickets. | First workflow attempt (with champion support). |
| **Wed** | Address edge cases. Populate knowledge stores from real runs. | Support wider team. Refine champion playbook. | Run workflows on own tickets. |
| **Thu** | Final configuration tuning. Deliver champion playbook. Website source handoff + update walkthrough. Upgrade path walkthrough. | Lead a peer session — teach a colleague. Confirm website ownership. | Attend peer session. |
| **Fri** | Engagement retrospective. Sign-off. Transition to advisory (if contracted). | Confirmed as internal points of contact for workflows + website. | Operating independently. |

### Key Ceremonies

| Ceremony | When | Duration | Attendees |
|----------|------|----------|-----------|
| **Kickoff** | Day 1, AM | 1 hour | Consultant + Eng Lead + Champions |
| **Mindset: Vibe Coding → Agentic Delivery** | Day 4, AM | 1.5 hours | All participating engineers |
| **Mindset: The Trust Model** | Day 4, mid-AM | 1 hour | All participating engineers |
| **Deep-Dive: Development Pipeline** | Day 4, PM | 1 hour | All participating engineers |
| **Deep-Dive: QE & Story Pipelines** | Day 5, AM | 1.5 hours | All participating engineers |
| **Training: Prompt Engineering for Delivery** | Day 5, PM | 1 hour | All participating engineers |
| **Mid-engagement Check-in** | Day 6, AM | 30 min | Consultant + Eng Lead |
| **Website Handoff & Update Walkthrough** | Day 9, AM | 45 min | Consultant + Champions |
| **Champion Peer Session** | Day 9, PM | 1 hour | Champions lead, wider team attends |
| **Retrospective & Sign-Off** | Day 10, PM | 1 hour | Consultant + Eng Lead + Champions |

---

*Built on Claude Code. Structured for enterprise delivery.*
