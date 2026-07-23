---
name: project-blueprint-builder
description: 'Creates implementation-ready blueprints for new software products, features, apps, and internal tools. Use when starting a greenfield project, major feature, or technical handoff that needs PRD, TRD, architecture, schema, security, modules, rules, phases, design, and memory docs.'
license: Apache-2.0
metadata:
  version: 1.2.0
  author: shippu sharma
  email: shippusharma00@gmail.com
  tags:
    - planning
    - blueprint
    - product
    - architecture
    - security
    - design
---

# Project Blueprint Builder

## What it does

Turns a rough idea into a compact, implementation-ready blueprint for humans and AI agents.

## When to use

- New product, app, or internal tool
- Major feature or platform change
- Engineering handoff or discovery package
- Multi-step build that needs scope, architecture, and rollout decisions

## What to ask first

Ask only for the highest-value missing context:

- Problem and desired outcome
- Target users and primary user journey
- Existing codebase or preferred stack
- Launch scope, timeline, and constraints
- Data sensitivity, compliance, and security needs
- Success metric or definition of done

If the user cannot answer something yet, proceed with explicit assumptions instead of blocking.

## Operating rules

1. Think before coding.
   - State assumptions explicitly.
   - If something is unclear, stop and ask.
   - If multiple interpretations exist, surface them.
   - If a simpler path exists, say so.
2. Keep it simple.
   - Build only what was asked.
   - Avoid speculative flexibility, abstractions, and config.
   - Prefer the minimum code or document set that solves the task.
3. Make surgical changes.
   - Touch only what the request requires.
   - Match existing style.
   - Do not refactor unrelated code.
   - Remove only imports or artifacts your changes created.
4. Work toward a verified goal.
   - State a brief plan for multi-step work.
   - Define what success looks like before editing.
   - Loop until the result is checked.
5. Pick the lightest blueprint that fits the request.
   - Lite: PRD, TRD, PHASES, MEMORY
   - Standard: add ARCHITECTURE, SCHEMA, RULES, DESIGN
   - Full: add SECURITY and MODULES for new, sensitive, or multi-service systems
6. Use one source of truth per topic.
   - PRD = why, who, what
   - TRD = technical constraints and integration choices
   - ARCHITECTURE = system shape and data flow
   - SCHEMA = entities, relationships, and contracts
   - SECURITY = trust boundaries and protections
   - MODULES = ownership and boundaries
   - RULES = engineering standards and guardrails
   - PHASES = delivery order and exit criteria
   - DESIGN = user experience and interface direction
   - MEMORY = decisions, assumptions, open questions, and changes
7. Prefer the current codebase, existing docs, and real constraints over invented defaults.
8. For sensitive systems, call out least privilege, validation, secret handling, auditability, and recovery.

## Style modes

Use the same blueprint structure, but tune the wording for the audience:

### AI-agent prompting

- Use direct, imperative language.
- Prefer unambiguous labels, decision points, and verification steps.
- Keep prompts compact and easy for another agent to continue.
- Avoid motivational prose, marketing language, and filler.

### Human handoff

- Add just enough context for a reviewer to understand why the plan exists.
- Make assumptions, tradeoffs, and next actions easy to scan.
- Keep the tone practical and collaborative.
- Highlight what changed, what is risky, and what is still open.

### Ponytail minimalism

- Use the smallest useful blueprint set.
- Remove any section that does not help the next decision.
- Prefer one clear default over optional branches.
- If a section can be one line, make it one line.

## Output contract

Create or update only the documents the request needs, in the project root or a `blueprint/` folder. Keep the output practical and versionable, then end with:

- assumptions made
- open questions
- recommended next actions

## References

- [Blueprint workflow](references/blueprint-workflow.md)
- [Templates](assets/templates/)
