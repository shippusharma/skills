# Blueprint Workflow

## Blueprint depth

- Lite: PRD, TRD, PHASES, MEMORY for narrow or exploratory work.
- Standard: add ARCHITECTURE, SCHEMA, RULES, and DESIGN for most product work.
- Full: add SECURITY and MODULES for new, sensitive, or multi-service systems.

## Recommended sequence

1. Clarify the problem, users, success metric, existing stack, constraints, and sensitivity.
2. Write PRD and TRD first so the plan has a stable why and what.
3. Add ARCHITECTURE and SCHEMA to define system shape, data flow, and contracts.
4. Add SECURITY and MODULES when there are trust boundaries, sensitive data, or shared services.
5. Capture RULES, PHASES, and DESIGN so delivery, quality, and UX stay aligned.
6. Record decisions, assumptions, and open questions in MEMORY.
7. Update only the documents the request needs; avoid duplicating the same detail in multiple files.

## Quality bar

A good blueprint should be:

- Clear enough for implementation to begin
- Specific enough to avoid ambiguity
- Structured enough for team collaboration
- Flexible enough to evolve as the project matures
- Explicit about assumptions, risks, dependencies, and rollback paths

## Prompting guardrails

- Ask only the missing high-leverage questions before drafting.
- If the user is blocked on details, continue with labeled assumptions.
- Keep each section short and decision-focused.
- Prefer concrete defaults that fit the current stack over generic best practices.
