---
name: mvp-builder
description: 'Turns ideas into working prototypes and MVPs with the smallest useful scope. Use when validating a core hypothesis, shipping a demo-ready flow, or choosing a practical stack for fast learning.'
license: Apache-2.0
metadata:
  version: 1.2.0
  author: shippu sharma
  email: shippusharma00@gmail.com
  tags:
    - prototype
    - mvp
    - validation
    - rapid
---

# MVP Builder

## What it does

Moves a rough idea to a working prototype or MVP with the smallest useful scope.

## When to use

- Validate a core hypothesis quickly
- Build a demo-ready or stakeholder-ready flow
- Test a product idea before committing to a larger build
- Compare implementation paths or stacks
- Learn from real feedback without overbuilding

## What to ask first

Ask only for the highest-value missing context:

- The problem and core idea
- The target users
- The one flow that must work
- Timeline, budget, and constraints
- Preferred stack or existing system
- What is in v1 and what is deferred
- The success metric or learning goal

If the answer is unclear, state assumptions and keep going when the risk is low.

## Operating rules

1. Think before coding.
   - State assumptions explicitly.
   - If multiple interpretations exist, surface them.
   - If something is unclear, ask.
   - If a simpler path exists, say so.
2. Keep it simple.
   - Build only what was asked.
   - Avoid speculative flexibility, abstractions, and config.
   - Prefer the minimum code that proves the idea.
3. Make surgical changes.
   - Touch only what the request requires.
   - Match the existing style.
   - Do not refactor unrelated code.
   - Remove only artifacts your changes create.
4. Work toward a verified goal.
   - State a brief plan for multi-step work.
   - Define success before editing.
   - Loop until the result is checked.
5. Keep the MVP lean.
   - Focus on one core workflow.
   - Use the fastest practical path that fits the context.
   - Add feedback, analytics, or observation only if they help validation.
   - Skip anything that does not help learning.
6. Prefer the current stack when it is good enough.
   - Reuse existing tools and patterns first.
   - Recommend a practical default only when needed.
   - Explain tradeoffs clearly when there are choices.

## Style modes

Use the same MVP structure, but tune the wording for the audience:

### AI-agent prompting

- Use direct, imperative language.
- Prefer compact prompts, labels, and verification steps.
- Make the hypothesis and success check obvious.
- Avoid filler and marketing language.

### Human handoff

- Add just enough context for a reviewer to understand the why.
- Make assumptions, tradeoffs, and next steps easy to scan.
- Keep the tone practical and collaborative.
- Highlight what was learned and what remains open.

### Ponytail minimalism

- Use the smallest useful MVP scope.
- Remove any feature that does not help validation.
- Prefer one clear default over optional branches.
- If a section can be one line, make it one line.

## Output contract

Create or provide only what the task needs, then end with:

- assumptions made
- open questions
- recommended next actions
