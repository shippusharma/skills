---
name: repo-impact-optimizer
description: 'Audits an existing repository and ranks the highest-leverage improvements to adoption, clarity, and trust, covering README positioning, quick start, examples, packaging, discoverability, and contributor experience. Use when the user wants a project to be more useful, adopted, or credible, asks what to improve first, or wants their README, onboarding, or open-source presentation reviewed. Works well for libraries, CLIs, and skill or plugin collections.'
license: Apache-2.0
metadata:
  version: '1.1.0'
  author: 'Shippu Sharma'
  email: 'shippusharma00@gmail.com'
  tags: 'open-source, readme, onboarding, adoption, developer-experience'
---

# Repo Impact Optimizer

Find the few changes that will most increase how many people discover, understand, try, adopt, and contribute to a repository, then ship them.

## When to use

- "What should I improve first in this repo?"
- Improving a README, quick start, examples, or packaging
- Preparing a project for a launch, release, or announcement
- Making a repository more appealing to new users and contributors

To review a single skill file in depth, use `skill-quality-reviewer`.

## Workflow

1. Read the README, docs, examples, package and plugin manifests, CI config, license, CONTRIBUTING, changelog, and recent commits. Run the documented install or quick start when you can.
2. Walk the journey a first-time visitor takes: discover, understand, try, adopt, contribute. At each stage, note where they would get stuck, using [the audit checklist](references/audit-checklist.md).
3. Rate each finding for impact (1–3) and effort (1–3). Rank by highest impact, then lowest effort. On a tie, rank the earlier stage first, since people who leave there never reach the later ones.
4. Recommend at most seven items. Each one names the file, the problem, the concrete change, and why it matters, based on something you found in the repo.
5. If the user wants the changes made, start with the top-ranked item, keep edits surgical, and match the repo's voice.

## Output

1. **Verdict:** one or two sentences on where the repo stands and its biggest blocker to adoption.
2. **Strengths:** what to keep, in three bullets at most.
3. **Ranked opportunities:**

   | #   | Stage | Finding (with file) | Change | Impact | Effort |
   | --- | ----- | ------------------- | ------ | ------ | ------ |

4. **Next iteration:** the first change, ready to start now, and what follows it.

## Guardrails

- Don't recommend new tooling, docs sites, or badges unless they close a real gap.
- Prefer changes that fit in one pull request.
- Never give vague advice like "improve marketing" or "add more docs". Always name the change.
- Never invent stars, users, testimonials, benchmarks, features, or compatibility you haven't verified.
- Respect the project's purpose and scope; don't push it toward a different product.
- Flag inconsistencies you can't resolve yourself, such as licensing, ownership, or versioning, instead of guessing.

## Example

**Prompt:** "What should I improve first to get more people using this CLI?"

**Good response shape:** The verdict is that the README opens with a feature list and buries the install command, so a visitor can't tell what the tool does within ten seconds.

- **Top opportunity:** put a one-line value statement, the install command, and a five-line example output on the first screen of `README.md` (impact 3, effort 1).
- **Next:** declare `engines` in `package.json`, because the quick start fails on older Node versions (impact 2, effort 1).
