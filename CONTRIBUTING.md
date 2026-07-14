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

Clone the repository:

```bash
git clone https://github.com/shippusharma/skills.git
cd skills
```

List available skills:

```bash
./scripts/list-skills.sh
```

---

# Project Structure

```
skills/
├── skill-name/
│   ├── SKILL.md
│   └── assets/ (optional)

scripts/
spec/

README.md
CONTRIBUTING.md
SECURITY.md
LICENSE
```

---

# Adding a New Skill

1. Create a new folder inside `skills/`.

```
skills/
└── my-awesome-skill/
```

2. Add a `SKILL.md` file.

3. Follow the specification in:

```
spec/agent-skills-spec.md
```

4. Keep the skill:

- Focused on a single workflow
- Reusable
- Well documented
- Easy to understand
- Framework agnostic whenever possible

5. Update the following files:

- `README.md`
- Changelog (if applicable)

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

- ✅ The skill works as expected.
- ✅ Documentation is updated.
- ✅ Formatting is consistent.
- ✅ Existing skills are not broken.
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
