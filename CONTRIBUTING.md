# Contributing

First off, thank you for considering contributing to **Agent Skills**! 🎉

Your contributions help make this collection of reusable AI agent skills better for everyone.

Whether you're fixing a typo, improving documentation, adding a new skill, or reporting a bug, every contribution is appreciated.

---

# Ways to Contribute

You can contribute by:

- ✨ Adding new reusable agent skills
- 📖 Improving documentation
- 🐛 Fixing bugs
- 💡 Suggesting new ideas or workflows
- 🚀 Improving existing skills
- 🧪 Testing skills and providing feedback
- ♻️ Refactoring for better readability and maintainability

---

# Before You Start

Before creating a Pull Request:

- Search existing Issues and Pull Requests.
- Open an Issue for large features or breaking changes.
- Keep changes focused and atomic.
- Follow the existing project structure.
- Update documentation when necessary.

---

# Development Setup

Requires Node.js 20 or later.

```bash
git clone https://github.com/shippusharma/skills.git
cd skills
npm install
```

Useful commands:

```bash
npm run list-skills   # list every skill with its version and description
npm run validate      # check skills against the Agent Skills spec and repo rules
npm run check         # validate + formatting check (the same as CI)
npm run format        # auto-format all files
```

---

# Project Structure

```text
skills/
└── skill-name/
    ├── SKILL.md            # required
    ├── LICENSE.txt
    ├── references/         # optional, detail loaded on demand
    └── assets/templates/   # optional, files the skill fills in

scripts/skills.mjs          # list, validate, sync-version
spec/agent-skills-spec.md   # authoring rules and conventions
.changeset/                 # pending release notes

README.md
CONTRIBUTING.md
SECURITY.md
LICENCE
```

---

# Adding a New Skill

1. Create a folder inside `skills/`. Its name must be lowercase with hyphens, and it becomes the skill's `name`.

```text
skills/
└── my-awesome-skill/
```

2. Add a `SKILL.md` and a `LICENSE.txt`.

3. Follow the authoring guide in:

```text
spec/agent-skills-spec.md
```

4. Keep the skill:

- Focused on a single workflow
- Reusable
- Short, with detail moved into `references/` or `assets/`
- Framework agnostic whenever possible
- Illustrated with at least one realistic example prompt

5. Add the skill to the table in `README.md` (the validator checks this).

6. Run `npm run check` and fix anything it reports.

7. Add a changeset describing the change:

```bash
npm run semvar:changeset
```

---

# Skill Guidelines

A good skill should:

- Solve one specific problem.
- Be reusable across projects.
- Be easy for AI assistants to follow.
- Avoid unnecessary complexity.
- Contain clear instructions.
- Produce deterministic outputs whenever possible.

---

# Pull Request Guidelines

Before submitting a Pull Request, ensure:

- ✅ `npm run check` passes.
- ✅ You tried the changed skill with at least one agent.
- ✅ `metadata.version` is bumped for any skill whose behavior changed.
- ✅ Documentation is updated.
- ✅ A changeset is included.
- ✅ The Pull Request has a clear description.

Keep Pull Requests focused on a single feature or fix whenever possible.

---

# Commit Message Convention

Use conventional commit messages.

Examples:

```text
feat(mvp-builder): add deployment checklist

fix(project-blueprint-builder): correct architecture template

docs: improve installation guide

chore: update repository metadata

refactor: simplify folder structure
```

---

# Releases

Maintainers release from `main` with Changesets:

```bash
npm run semvar:status    # preview pending version bumps
npm run semvar:version   # bump package.json, update CHANGELOG.md, sync plugin manifests
npm run semvar:tag       # create the git tag
```

`semvar:version` keeps `.claude-plugin/plugin.json` and `.codex-plugin/plugin.json` in sync with `package.json`, so never edit those versions by hand.

The changelog links each entry to its GitHub commit, so `semvar:version` needs a `GITHUB_TOKEN` with `read:user` and `repo:status` scopes:

```bash
GITHUB_TOKEN=<token> npm run semvar:version
```

---

# Code of Conduct

Please be respectful and constructive.

We strive to create a welcoming and inclusive community for everyone.

---

# Reporting Bugs

When reporting a bug, please include:

- Skill name
- Expected behavior
- Actual behavior
- Steps to reproduce
- Screenshots (if applicable)
- Suggested fix (optional)

---

# Feature Requests

Feature requests are welcome.

Please describe:

- The problem you're trying to solve
- Why it would be useful
- A possible implementation (optional)

---

# Security

If you discover a security vulnerability, please follow the instructions in:

```
SECURITY.md
```

Do not disclose security vulnerabilities publicly until they have been addressed.

---

# Questions

If you have any questions, feel free to open a GitHub Discussion or Issue.

---

# Thank You ❤️

Thank you for taking the time to contribute!

Your ideas, improvements, and feedback help make **Agent Skills** a better resource for the entire AI development community.
