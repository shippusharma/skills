---
name: mvp-builder
description: 'Turns a rough idea into a working prototype or MVP with the smallest scope that can prove or disprove one hypothesis. Use when validating a product idea, building a demo or stakeholder-ready flow, scoping or cutting a v1, or choosing a fast, practical stack. Triggers on "MVP", "prototype", "proof of concept", "PoC", "demo", "hackathon", "validate this idea", and "what should v1 include".'
license: MIT
metadata:
  version: '1.3.1'
  author: 'Shippu Sharma'
  email: 'shippusharma00@gmail.com'
  tags: 'prototype, mvp, validation, scoping, rapid'
---

# MVP Builder

Build the smallest working version of an idea that shows whether it deserves more investment.

## When to use

- Validate a product idea or core hypothesis before a larger build
- Build a demo, pilot, or stakeholder-ready flow
- Cut an overgrown v1 down to what matters
- Pick a fast, practical stack for a prototype

To produce a full planning package (PRD, architecture, security, phases) before building, use `project-blueprint-builder` instead.

## What to ask first

Infer what you can from the codebase and conversation. Then ask only what is still missing, at most three questions in one message:

1. Who is the user, and what problem do they have?
2. What is the one flow that must work end to end?
3. How will we know it worked: what metric, signal, or decision does it unblock?

When an answer is missing and the risk is low, state an assumption and continue.

## Workflow

### 1. Frame the hypothesis

Write one sentence before any code:

> We believe **[user]** will **[behavior]** because **[reason]**. We'll know we're right when **[measurable signal]**.

If you can't fill it in, the idea isn't ready to build. Say so and help sharpen it.

### 2. Cut scope to one flow

List the candidate features, then sort each into **Build**, **Fake**, or **Defer**:

- **Build**: only what the core flow cannot work without.
- **Fake**: anything users won't notice is manual, such as hardcoded data, seeded accounts, manual fulfilment, a spreadsheet as the backend, or an email instead of a notification system.
- **Defer**: everything else, written down so it isn't lost.

Usually defer: multi-tenancy, admin panels, role systems, settings pages, i18n, custom design systems, microservices, caching, and horizontal scaling.

### 3. Choose the stack

1. Existing codebase or team stack: use it.
2. Otherwise pick boring, managed defaults the team already knows: one deployable unit, one database, and a hosted auth provider only if login is part of the hypothesis.
3. State the choice in one line with its main tradeoff. Offer alternatives only when the choice is genuinely close.

### 4. Build a thin vertical slice

- Get the core flow working end to end before polishing anything, and polish only what affects the success signal.
- Write the minimum code that proves the idea. No speculative abstractions, flags, or config.
- In an existing codebase, make surgical changes: match its style and touch only what the flow needs.
- Instrument only the success signal from step 1.

### 5. Keep the safety basics

Even a prototype must:

- keep secrets out of code and version control,
- validate input on anything publicly reachable,
- avoid collecting real personal or payment data unless the hypothesis requires it,
- be runnable by someone else from its README.

### 6. Verify

Run the core flow yourself. It's done when the flow works on a clean run, the success signal is captured, and the setup steps are written down. Never report done on code you haven't run. If you can't run it, say exactly what remains unverified.

## Output

Fill in [the MVP brief](assets/templates/MVP-BRIEF.md): inline for advice-only requests, or as `MVP.md` in the project root when you build. End with:

- **Assumptions made**
- **Open questions**
- **Next actions**, where the first is concrete enough to start now

## Tone by audience

| Mode            | Use when                               | Style                                                                 |
| --------------- | -------------------------------------- | --------------------------------------------------------------------- |
| Agent prompting | Another agent will read the output     | Imperative and compact, with explicit verification steps. No filler.  |
| Human handoff   | A person reviews or continues the work | A brief "why", scannable tradeoffs, and what's learned and still open |
| Minimal         | The user wants the bare minimum        | One default, no optional branches, one line wherever possible         |

## Example

**Prompt:** "I want an app where freelancers send invoices and get paid."

**Good response shape:**

- **Hypothesis:** Freelancers will send invoices as a payment link instead of a PDF because clients pay faster. We're right if 5 of 10 pilot users send 2+ invoices within two weeks.
- **Build:** create an invoice, share a payment link, show paid/unpaid status.
- **Fake:** payment confirmation marked manually; one hardcoded currency.
- **Defer:** recurring invoices, tax rules, multi-currency, team accounts, reminders.
- **Stack:** the existing web app and database, plus a hosted payment-link provider instead of a custom checkout. The tradeoff is less control over the payment page.
