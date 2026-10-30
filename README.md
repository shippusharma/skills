# Agent Skills

[![CI](https://github.com/shippusharma/skills/actions/workflows/ci.yml/badge.svg)](https://github.com/shippusharma/skills/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Reusable skills that make AI coding agents better at real engineering work: scoping MVPs, planning projects before code, and improving repositories and the skills themselves.

Each skill is a self-contained folder with a `SKILL.md` that follows the open [Agent Skills specification](https://agentskills.io/specification). It works with Claude Code, Codex, and any other agent that supports skills.

## Quick start

```bash
# Install every skill
npx skills add shippusharma/skills

# Or install just one
npx skills add shippusharma/skills --skill mvp-builder
```

Then ask your agent in plain language, for example _"Scope an MVP for a habit-tracking app"_. The agent loads the matching skill automatically.

**Claude Code plugin:**

```text
/plugin marketplace add shippusharma/skills
/plugin install shippusharma-skills@shippusharma
```

## Skills

| Skill                                                                  | Use it to                                                                         | You get                                                                                       |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [mvp-builder](skills/mvp-builder/SKILL.md)                             | Turn an idea into a working MVP with the smallest scope that tests one hypothesis | A hypothesis, a Build / Fake / Defer scope, a stack choice, a working slice, and an MVP brief |
| [project-blueprint-builder](skills/project-blueprint-builder/SKILL.md) | Plan a product or major feature before writing code                               | A PRD, TRD, architecture, schema, security, modules, rules, phases, design, and decision log  |
| [repo-impact-optimizer](skills/repo-impact-optimizer/SKILL.md)         | Find the changes that will most improve a repo's adoption and onboarding          | A ranked impact/effort table and a next-iteration plan                                        |
| [skill-quality-reviewer](skills/skill-quality-reviewer/SKILL.md)       | Review and harden a single skill before publishing it                             | A spec check, a scored rubric, a trigger test, and ranked fixes                               |

Not sure between the first two? Start with `mvp-builder` when the idea itself is unproven, and with `project-blueprint-builder` when you already know you're building a long-lived system.

## What each skill does

### mvp-builder

> _"I want an app where freelancers send invoices and get paid. Build me an MVP."_

Writes a testable hypothesis, sorts features into Build, Fake, and Defer, and reuses your existing stack where it can. Then it builds and runs one thin end-to-end slice. Even a prototype keeps secrets out of code and validates public input. The plan goes into an [MVP brief](skills/mvp-builder/assets/templates/MVP-BRIEF.md).

### project-blueprint-builder

> _"Plan a multi-tenant SaaS where clinics book patient appointments."_

Picks a depth and writes only the documents that depth needs into `blueprint/`, starting from [templates](skills/project-blueprint-builder/assets/templates/):

| Depth    | Documents                                  | Use for                                                                  |
| -------- | ------------------------------------------ | ------------------------------------------------------------------------ |
| Lite     | PRD, TRD, PHASES, MEMORY                   | A narrow feature or spike                                                |
| Standard | Lite + ARCHITECTURE, SCHEMA, RULES, DESIGN | Most product work                                                        |
| Full     | Standard + SECURITY, MODULES               | Auth, payments, personal data, or multi-tenant and multi-service systems |

Before handing off, it checks the blueprint against a [quality gate](skills/project-blueprint-builder/references/quality-gate.md): every requirement maps to a phase, no placeholders remain, and every trust boundary has a mitigation.

### repo-impact-optimizer

> _"What should I improve first to get more people using this CLI?"_

Walks your repo the way a newcomer would (discover, understand, try, adopt, contribute) using an [audit checklist](skills/repo-impact-optimizer/references/audit-checklist.md). It returns at most seven ranked changes, each naming the file to edit and what in the repo prompted it.

### skill-quality-reviewer

> _"Review my pdf-tools skill. It never triggers."_

Checks the spec's hard rules, scores eight dimensions on a [rubric](skills/skill-quality-reviewer/references/rubric.md), and runs a six-prompt trigger test. It returns ranked fixes, with replacement text for the top one.

## Repository layout

```text
skills/
├── mvp-builder/                 SKILL.md, assets/templates/
├── project-blueprint-builder/   SKILL.md, references/, assets/templates/
├── repo-impact-optimizer/       SKILL.md, references/
└── skill-quality-reviewer/      SKILL.md, references/
scripts/skills.mjs               list, validate, and sync-version
spec/agent-skills-spec.md        authoring rules and repo conventions
.claude-plugin/                  Claude Code plugin and marketplace manifests
.codex-plugin/                   Codex plugin manifest
.github/workflows/               CI, and release automation with Changesets
```

## Contributing

```bash
npm install
npm run list-skills   # see every skill and its version
npm run check         # validate skills and check formatting
```

To add a skill, create `skills/<name>/SKILL.md` following the [authoring guide](spec/agent-skills-spec.md), list it in this README, and add a changeset with `npm run semver:changeset`. See [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow, and open an issue before large changes.

## Security

Please report vulnerabilities privately, as described in [SECURITY.md](SECURITY.md).

## License

[MIT](LICENSE). Each skill folder ships a copy as `LICENSE.txt`, so a skill installed on its own keeps its license.

If these skills are useful to you, a ⭐ helps other people find them.
