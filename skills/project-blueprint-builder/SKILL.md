---
name: project-blueprint-builder
description: 'Use when planning or starting any software product, feature, app, or internal tool. Produces a complete implementation blueprint with PRD, architecture, rules, phases, design, and memory documents.'
version: 1.3.0
---

# Project Blueprint Builder

## Purpose

Use this skill to turn a rough product idea into a practical blueprint that a team can build from. It helps structure discovery, planning, design, and delivery into reusable documents that both humans and AI agents can follow.

## Output Style

The skill should produce a concise but complete planning package. Prioritize clarity over verbosity and keep each document structured, actionable, and easy to review.

## Best Use Cases

Use this skill when you need to:

- Start a new product or application from scratch
- Plan a major feature or internal tool
- Create a handoff package for engineering teams
- Prepare a roadmap before implementation begins
- Document product scope, architecture, and decisions in one place

## Inputs to Gather

Before writing the documents, ask for:

- The product idea and primary goal
- Target users or customer segment
- Platform, device, or deployment context
- Timeline, budget, and constraints
- Preferred stack or existing system context

## Workflow

1. Clarify the product goal, audience, and constraints.
2. Ask for missing context such as platform, timeline, users, stack, and constraints.
3. Create or update the planning documents in the project folder:
   - PRD.md
   - ARCHITECTURE.md
   - RULES.md
   - PHASES.md
   - DESIGN.md
   - MEMORY.md
4. Keep the documents aligned so scope, architecture, design, and roadmap reinforce each other.
5. Highlight any assumptions, risks, or open questions before concluding.
6. End with a short validation checklist and the next recommended actions.

## Decision Rules

- If the request is a new product, produce all six documents.
- If the request is a feature within an existing system, create only the relevant documents and link them to the current codebase.
- If the user already has requirements, adapt the templates instead of repeating them.
- If the stack is unclear, propose a practical default and explain the tradeoff.

## Deliverables

Create these files at the project root or in a docs folder:

- PRD.md: product problem, target users, goals, requirements, and success metrics
- ARCHITECTURE.md: system design, modules, interfaces, deployment, and risks
- RULES.md: coding standards, testing expectations, and collaboration rules
- PHASES.md: milestones, sequencing, and delivery checkpoints
- DESIGN.md: user experience and interface direction
- MEMORY.md: important context, decisions, and open questions

## Quality Bar

The result should be:

- Clear enough to begin implementation
- Specific enough to reduce ambiguity
- Structured enough for team collaboration
- Flexible enough to evolve over time

## Example Prompts

- Create a full blueprint for a SaaS analytics platform.
- Generate PRD, architecture, rules, phases, design, and memory docs for a mobile app.
- Build a planning package for an AI-powered internal productivity tool.

## Related Files

- [sources.md](./sources.md)
- [references/blueprint-workflow.md](./references/blueprint-workflow.md)
