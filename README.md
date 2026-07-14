# Agent Skills

A curated collection of reusable **AI agent skills** for AI-assisted software development.

Each skill is packaged as a self-contained module with its own `SKILL.md` file and is designed to help AI assistants perform specialized development workflows consistently and efficiently.

Whether you're validating a startup idea, planning a scalable architecture, or generating project documentation, these skills help reduce ambiguity and accelerate development.

---

## ✨ Features

- 📦 Reusable and modular skills
- 🤖 Designed for AI-assisted development
- 🚀 One-command installation
- 📚 Self-contained documentation
- 🧩 Easy to extend with custom skills
- 🔄 Consistent workflow across projects
- 🛠️ Works with any tech stack unless specified otherwise

---

# Installation

Install all available skills:

```bash
# Install all available skills
npx skills add shippusharma/skills
```

Install a specific skill:

```bash
# Install a specific skill
npx skills add https://github.com/shippusharma/skills --skill <skill-name>
```

Example:

```bash
npx skills add https://github.com/shippusharma/skills --skill mvp-builder
```

---

# Quick Decision Guide

| Skill                            | Best For                                                                 |
| -------------------------------- | ------------------------------------------------------------------------ |
| ✅ **mvp-builder**               | Build a production-ready MVP quickly for validation and rapid iteration. |
| ✅ **project-blueprint-builder** | Generate a complete implementation blueprint before writing code.        |

---

# Available Skills

## 1. 🚀 mvp-builder

Turn an idea into a production-ready Minimum Viable Product (MVP) with a strong focus on rapid validation, lean architecture, and fast development.

### Why use it?

- ✅ Validate startup ideas quickly
- ✅ Reduce time to market
- ✅ Focus on essential features only
- ✅ Build a scalable MVP without over-engineering
- ✅ Get AI-recommended architecture and technology stack
- ✅ Iterate quickly using user feedback

### Best For

- Startup founders
- Indie hackers
- Hackathons
- Rapid prototyping
- Product validation
- Internal tools

### Generates

- Product Requirements Document (PRD)
- Recommended Tech Stack
- Project Folder Structure
- Database Design
- API Design
- UI Flow
- Development Plan
- MVP Roadmap

### Install

```bash
npx skills add https://github.com/shippusharma/skills --skill mvp-builder
```

---

## 2. 🏗️ project-blueprint-builder

Generate a complete implementation blueprint before writing code.

Designed for projects that require planning, documentation, scalability, maintainability, and AI collaboration.

### Why use it?

- ✅ Reduce ambiguity before development
- ✅ Create a single source of truth
- ✅ Improve collaboration between developers and AI
- ✅ Plan architecture before implementation
- ✅ Prevent expensive redesigns later
- ✅ Standardize project documentation

### Best For

- SaaS applications
- Enterprise software
- Large-scale applications
- Multi-developer teams
- AI-assisted development
- Long-term projects

### Generates

- Product Requirements Document (PRD)
- Technical Architecture
- Folder Structure
- Coding Standards
- Database Design
- API Contracts
- Security Checklist
- UI/UX Guidelines
- Development Phases
- Memory Documents
- AI Prompt Files
- Project Documentation

### Install

```bash
npx skills add https://github.com/shippusharma/skills --skill project-blueprint-builder
```

---

# Which Skill Should I Choose?

### Choose **mvp-builder** if you want to:

- ✅ Validate a business idea
- ✅ Build an MVP quickly
- ✅ Launch as fast as possible
- ✅ Collect user feedback early
- ✅ Iterate rapidly
- ✅ Keep development lean

### Choose **project-blueprint-builder** if you want to:

- ✅ Plan before writing code
- ✅ Build scalable software
- ✅ Create comprehensive documentation
- ✅ Design architecture first
- ✅ Define coding standards
- ✅ Work with multiple developers
- ✅ Improve AI collaboration

---

# Repository Structure

```
skills/
├── mvp-builder/
│   └── SKILL.md
│
├── project-blueprint-builder/
│   └── SKILL.md
│
scripts/
└── list-skills.sh

spec/
└── agent-skills-spec.md
```

---

# How to Add a New Skill

1. Create a new folder inside the `skills/` directory.
2. Name it descriptively.
3. Add a `SKILL.md` file.
4. Follow the format defined in `spec/agent-skills-spec.md`.
5. Keep the skill:
   - Focused
   - Reusable
   - Practical
   - Well documented

---

# Contributing

Contributions are welcome!

You can help by:

- ✨ Adding new reusable skills
- 🐛 Fixing bugs
- 📖 Improving documentation
- 💡 Suggesting new workflows
- 🚀 Enhancing existing skills

Please open an issue before submitting large feature changes.

---

# Security

If you discover a security vulnerability, please report it responsibly.

📧 **shippusharma00@gmail.com**

Please avoid publicly disclosing vulnerabilities until they have been investigated and resolved.

---

# Notes

These skills are designed to be:

- Lightweight
- Modular
- Reusable
- AI-friendly
- Easy to maintain
- Easy to extend
- Independent from specific frameworks whenever possible

---

# References

- GitHub Repository: [shippusharma/skills](https://github.com/shippusharma/skills)

---

## ⭐ Support

If you find this repository useful:

- ⭐ Star the repository
- 🍴 Fork it
- 🐞 Report issues
- 💡 Suggest new skills
- 🤝 Contribute improvements

Your support helps improve the project and grow the collection of reusable AI development skills.
