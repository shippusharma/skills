---
name: mvp-builder
description: 'Use when you need to turn an idea into a working prototype or MVP quickly. Focuses on speed, lean validation, and user feedback while adapting to the user’s preferred stack and experience level.'
license: Apache-2.0
metadata:
  version: 1.0.0
  author: shippu sharma
  email: shippusharma00@gmail.com
---

# MVP Builder

## Purpose

Use this skill to move from a rough idea to a working prototype or MVP as quickly as possible. The goal is to validate the core value proposition with a practical solution, while remaining flexible enough to fit the user’s preferred tools, stack, and level of technical experience.

## Core Principles

- Speed-first: minimize setup time and focus on the fastest path to a working experience.
- Validation-driven: build only the features needed to test the main hypothesis.
- User-feedback oriented: include a way to collect feedback or observe behavior from the start.
- Flexible by default: adapt to the user’s existing tools, preferred stack, and comfort level.
- Iteration-focused: make the prototype easy to revise after testing and feedback.

## Output Style

The result should be practical, lightweight, and focused on learning. Prioritize a working experience over over-engineering, and make assumptions explicit so the prototype can evolve cleanly.

## Best Use Cases

Use this skill when you need to:

- Validate an idea with a fast proof-of-concept
- Build a minimal MVP for demos, testing, or stakeholder review
- Create a working prototype without committing to a full production stack
- Explore a product flow before investing in long-term implementation
- Gather user feedback early in the process
- Compare multiple approaches before choosing a direction

## Inputs to Gather

Before building, ask for:

- The core idea and the problem it solves
- The target users or audience
- The single most important user flow to validate
- The timeline, budget, or time constraints
- Preferred tools, existing stack, or technical comfort level
- What should be included in version 1 versus deferred later
- The success metric or outcome that would make the prototype worthwhile

## Workflow

1. Clarify the problem, the intended outcome, and the success criteria.
2. Identify the core hypothesis and the smallest experience needed to test it.
3. Ask what stack, tools, or platforms the user already knows or prefers.
4. Define a lean scope focused on one core workflow or value proposition.
5. Choose the fastest practical path that fits the user’s context, whether that is a low-code tool, a lightweight app, or a custom implementation.
6. Build a working prototype that demonstrates the core value clearly.
7. Add basic feedback, analytics, or validation hooks so the prototype can be tested.
8. Document assumptions, risks, and the next steps for iteration or production.

## Decision Rules

- If the goal is validation rather than scale, keep the scope narrow and focus on the core flow.
- If the user already has a preferred stack, adapt to it instead of introducing a new one.
- If the user is non-technical, favor faster tools and simpler experiences over custom implementation details.
- If the user is technical, choose a more flexible setup that can later evolve into a production product.
- If the user is unsure about the stack, recommend a practical default and explain the tradeoff.
- If the prototype needs to be reviewed by stakeholders, prioritize clarity and demo readiness over polish.

## Deliverables

Create or provide:

- A short prototype brief with the problem, audience, and success criteria
- A lean scope for the first version
- A recommended approach for the implementation path
- A working prototype or demo-ready experience
- A simple feedback, analytics, or validation plan
- A short iteration roadmap with next steps

## Quality Bar

The result should be:

- Fast to build and easy to understand
- Focused on one clear value proposition
- Good enough to test with real users or stakeholders
- Flexible enough to evolve after feedback
- Clear about what was learned and what should happen next

## Communication Style

Use concise, outcome-focused language that highlights learning, validation, and momentum. Emphasize what was built, what hypothesis it tests, and what the next iteration should focus on.

Examples of tone:

- “Built a working prototype in a few days around the core flow and set up feedback capture.”
- “This version validates the main hypothesis and highlights the next improvement area.”
- “The prototype is intentionally lean so we can learn quickly before investing further.”

## Suggested Success Metrics

The prototype is successful when:

- The core user flow works end to end
- The main hypothesis can be tested with real users or stakeholders
- Feedback is collected quickly and clearly
- The next iteration direction is obvious
- The effort stays proportional to the validation goal

## Advanced Operating Mode

To make the skill more effective in real projects, use this stronger working pattern:

1. Start with a short discovery round: what problem, who it is for, what needs to be learned, and how success will be measured.
2. Define the smallest believable version of the experience that can create signal.
3. Choose the fastest path that fits the situation: no-code, low-code, lightweight custom build, or a hybrid approach.
4. Build for learning first, not for completeness. If a feature is not necessary to test the core idea, defer it.
5. Make the prototype observable: collect feedback, capture usage signals, or run a guided test session.
6. End with a clear decision: continue, pivot, or stop based on what the prototype revealed.

## Decision Heuristics

Use these rules when selecting the approach:

- If the goal is a quick stakeholder demo, prioritize clarity and speed over technical elegance.
- If the user is non-technical, favor tools that require less setup and less maintenance.
- If the user is technical and the product may evolve, favor a more structured implementation that can scale later.
- If the risk is high and the opportunity is unclear, build the smallest possible slice and validate it before investing further.
- If the user already has a preferred stack, reuse it rather than forcing a new toolchain.

## Anti-Patterns to Avoid

Avoid these common mistakes:

- Overbuilding features that are not required for validation
- Choosing a complex stack just because it looks impressive
- Spending too much time on polish before the prototype is tested
- Ignoring feedback collection and treating the demo as the endpoint
- Trying to solve future production problems before the core idea is proven

## Prototype Readiness Checklist

Before considering the prototype ready, confirm that:

- The main user flow works without manual intervention
- The target user can understand the value quickly
- A feedback path exists for real input
- The prototype can be shown or tested in a realistic setting
- The next step is obvious based on what was learned

## Example Prompts

- Turn this idea into a fast MVP and outline the simplest stack to build it.
- Create a proof-of-concept for an AI-powered support assistant.
- Build a lightweight prototype for a marketplace app and explain the tradeoffs.
- Help me validate this product idea with a demo-ready version in the fastest way possible.
- Create a lean prototype for a workflow tool and explain how I would test it with users.
