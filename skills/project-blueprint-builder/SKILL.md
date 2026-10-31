---
name: project-blueprint-builder
description: 'Creates implementation-ready project blueprints for humans and AI agents: PRD, TRD, architecture, schema, security, modules, engineering rules, delivery phases, design, and a decision log. Use when starting a greenfield product, app, or internal tool, planning a major feature or platform change, preparing an engineering handoff, or when the user asks for a PRD, technical spec, architecture doc, or project plan before writing code.'
license: MIT
metadata:
  version: '1.4.0'
  author: 'Shippu Sharma'
  email: 'shippusharma00@gmail.com'
  tags: 'planning, blueprint, prd, architecture, security, design'
---

# Project Blueprint Builder

Turn a rough idea into the smallest set of planning documents that lets a team, or another agent, start building without guessing.

## When to use

- New product, app, or internal tool
- Major feature or platform change
- Engineering handoff or discovery package
- Any multi-step build that needs agreed scope, architecture, and rollout

To build and validate an idea quickly instead of planning it, use `mvp-builder`.

## What to ask first

Read the existing codebase and docs first, including `MVP.md` if `mvp-builder` wrote one: its hypothesis, scope, and results seed the PRD. Then ask only for missing, high-leverage context, all in one message:

- Problem and desired outcome
- Target users and their primary journey
- Existing stack and hard constraints
- Launch scope and timeline
- Data sensitivity and compliance needs
- Definition of done

If the user can't answer yet, proceed with labelled assumptions and record them in MEMORY.

## Choose the depth

| Depth    | Documents                                  | Use when                                                                          |
| -------- | ------------------------------------------ | --------------------------------------------------------------------------------- |
| Lite     | PRD, TRD, PHASES, MEMORY                   | A narrow feature, spike, or exploratory work                                      |
| Standard | Lite + ARCHITECTURE, SCHEMA, RULES, DESIGN | Most product work                                                                 |
| Full     | Standard + SECURITY, MODULES               | Auth, payments, personal data, multi-tenancy, or multi-service/multi-team systems |

Default to Standard. Go to Full when any of its triggers apply. Drop to Lite when the scope is a single change or the user asks for speed. State the chosen depth and the reason in one line.

## Workflow

1. Write the PRD, then the TRD: what to build and why, then the technical requirements and constraints.
2. Add ARCHITECTURE and SCHEMA: system shape, data flow, and contracts.
3. Add SECURITY and MODULES when the depth calls for them.
4. Add RULES, DESIGN, and PHASES: how it's built, how it feels, and in what order.
5. Log decisions, assumptions, and open questions in MEMORY as you go.
6. Check the blueprint against [the quality gate](references/quality-gate.md), then hand off.

Start each document from its template in [assets/templates/](assets/templates/), and delete sections that don't apply rather than writing "N/A".

## Rules

1. Keep one source of truth per topic. Each fact lives in exactly one document, and other documents link to it.

   | Document     | Owns                                                    |
   | ------------ | ------------------------------------------------------- |
   | PRD          | Why, who, functional requirements, success metrics      |
   | TRD          | Non-functional requirements, integrations, rollout      |
   | ARCHITECTURE | Stack, components, data flow, deployment, operations    |
   | SCHEMA       | Entities, relationships, invariants, contracts          |
   | SECURITY     | Sensitive assets, trust boundaries, threats, mitigation |
   | MODULES      | Ownership, boundaries, interfaces                       |
   | RULES        | Project-specific commands, standards, and merge checks  |
   | PHASES       | Delivery order, requirements covered, exit criteria     |
   | DESIGN       | Journey, screens, states, interface direction           |
   | MEMORY       | Decisions, assumptions, open questions, changes         |

2. Prefer the current codebase, existing docs, and stated constraints over invented defaults. Give every technology choice a one-line reason tied to a requirement.
3. Replace generic advice like "ensure scalability" with a decision, a number, or an open question. Give every requirement an ID (`FR-n` in the PRD, `NFR-n` in the TRD) and a testable acceptance criterion, and list under each phase the IDs it delivers.
4. When a request has several reasonable readings, list them and say which one you picked.
5. Keep sections short and prefer tables to long paragraphs. Cut any section that doesn't inform the next decision.
6. For anything touching auth, payments, personal data, or multi-tenancy, cover least privilege, input validation, secret handling, audit logging, and recovery, at any depth.
7. When updating an existing blueprint, change only the affected documents and log the change in MEMORY.

## Output

Write the documents to `blueprint/`, using the template filenames (`blueprint/PRD.md`, `blueprint/TRD.md`, …). Use the project root instead if the user prefers it. End with:

- **Depth chosen** and why
- **Assumptions made**
- **Open questions**, ranked by how much they block
- **Next actions**, where the first is concrete enough to start now

## Tone by audience

| Mode            | Use when                               | Style                                                                           |
| --------------- | -------------------------------------- | ------------------------------------------------------------------------------- |
| Agent prompting | Another agent will build from the docs | Imperative, unambiguous labels, explicit decision points and verification steps |
| Human handoff   | People review or own the plan          | A brief "why", scannable tradeoffs, what's risky and what's still open          |
| Minimal         | The user wants the bare minimum        | Smallest document set, one default per decision, one line wherever possible     |

## Example

**Prompt:** "Plan a multi-tenant SaaS where clinics book patient appointments."

**Good response shape:** Full depth, because the system holds health data and is multi-tenant.

- **PRD:** booking, rescheduling, and reminders in v1; billing and telehealth deferred.
- **SECURITY:** tenant isolation, health-data handling, and audit logs.
- **PHASES:** tenant isolation lands in Phase 1, because it's expensive to retrofit.
- **MEMORY:** records the blocking question "Which regions and compliance regimes apply at launch?"
