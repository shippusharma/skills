---
name: skill-quality-reviewer
description: 'Reviews and improves a single agent skill (its SKILL.md and bundled files) for spec compliance, trigger accuracy, clarity, actionability, and token efficiency, then proposes or applies ranked edits. Use when the user wants to review, audit, refine, or harden a skill before publishing, asks why a skill triggers too often or not at all, or wants a SKILL.md rewritten to be clearer or shorter.'
license: MIT
metadata:
  version: '1.1.1'
  author: 'Shippu Sharma'
  email: 'shippusharma00@gmail.com'
  tags: 'agent-skills, review, quality, prompt-engineering'
---

# Skill Quality Reviewer

Raise one skill to a publishable standard: valid, easy for agents to trigger, easy to follow, and no longer than it needs to be.

## When to use

- Reviewing a skill before publishing or sharing it
- A skill triggers too often, too rarely, or not at all
- A SKILL.md is long, vague, or inconsistent with its sibling skills
- Rewriting a skill to be sharper without changing what it does

To improve a whole repository's adoption and onboarding, use `repo-impact-optimizer`.

## Workflow

1. Read SKILL.md and every file it links to. Sum up the skill's job in one sentence. If you can't, that is the first finding.
2. Check the hard rules below. If the repository has a validator (for example `npm run validate` or `skills-ref validate`), run it.
3. Rate each dimension 1–5 using [the rubric](references/rubric.md), citing the line or section behind each score.
4. Write three prompts that should activate the skill and three near-misses that shouldn't. Check that the description alone routes each one correctly.
5. List fixes by impact. Each names the location, the problem, and the exact replacement text or structural change.
6. If the user wants the fixes applied, keep the author's voice and intent, and bump `metadata.version` when the skill's behavior changes.

## Hard rules

These come from the [Agent Skills specification](https://agentskills.io/specification). Any violation fails the review.

- `name` is 1–64 characters: lowercase letters, digits, and single hyphens, with no leading or trailing hyphen. It matches the directory name.
- `description` is 1–1024 characters and says both what the skill does and when to use it.
- `compatibility`, if present, is at most 500 characters.
- `metadata`, if present, maps string keys to string values only: no lists or nested maps. Values YAML would read as numbers, booleans, or dates are quoted.
- Relative links resolve to files inside the skill folder, and SKILL.md links directly to every file the agent needs. Referenced files don't chain to further files.

## Output

1. **Verdict:** publishable, needs work, or not ready, in one sentence.
2. **Spec check:** a pass, or each rule that fails.
3. **Scores:** the rubric table, with one line of evidence per row.
4. **Trigger test:** the six prompts, and whether the description routes each one correctly.
5. **Ranked fixes:** highest impact first, with replacement text for the top fix.

## Example

**Prompt:** "Review my `pdf-tools` skill. It never triggers."

**Good response shape:** The verdict is "needs work", and the spec check passes. Triggering scores 1/5, because the description says "Helps with documents" and never mentions PDFs, forms, or merging, so the agent can't match user requests to it.

The top fix is to replace the description with: "Extracts text and tables from PDFs, fills PDF forms, and merges files. Use when the user mentions PDFs, forms, or document extraction."
