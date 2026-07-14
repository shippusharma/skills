# Agent Skills

This repository contains a collection of reusable agent skills for AI-assisted development. Each skill is packaged as a self-contained folder with a SKILL.md file and can be used to guide an assistant through a specific workflow.

---

## Installation

Install a skill:

```bash
npx skills add https://github.com/shippusharma/skills --skill <skill-name>
```

Example:

```bash
npx skills add https://github.com/shippusharma/skills --skill mvp-builder
```

---

# Product Development

## mvp-builder

Build a production-ready MVP from an idea with a strong focus on:

- Rapid validation
- Lean architecture
- Fast development
- User feedback loops
- Best stack based on project requirements

### Use when

- You have an idea and want to build it quickly.
- You need an MVP in days instead of weeks.
- You're validating a startup idea.
- You want AI to choose the right architecture.

### Output

- PRD
- Tech Stack
- Folder Structure
- Database Design
- API Design
- Development Plan
- UI Flow
- MVP Roadmap

### Install

```bash
npx skills add https://github.com/shippusharma/skills --skill mvp-builder
```

---

## project-blueprint-builder

Generate a complete implementation blueprint before writing code.

### Use when

- Starting a new project
- Planning a SaaS
- Building enterprise software
- Designing a scalable architecture
- Working with multiple developers

### Output

- PRD
- Architecture
- Coding Rules
- Folder Structure
- Database Design
- API Contracts
- Security Checklist
- UI/UX Guidelines
- Development Phases
- Memory Documents
- AI Prompt Files

### Install

```bash
npx skills add https://github.com/shippusharma/skills --skill project-blueprint-builder
```

---

## Available Skills

- project-blueprint-builder: helps turn a product idea into a structured blueprint with planning documents such as PRD, architecture, rules, phases, design, and memory notes.
- mvp-builder: helps turn an idea into a fast prototype or MVP by focusing on speed, validation, learning, and user feedback while adapting to the user’s preferred stack.

## Repository Structure

- skills/: contains individual skill folders
- scripts/list-skills.sh: lists all skills in the repository
- spec/: contains the agent skills specification

## How to Add a New Skill

1. Create a new folder under skills/ with a descriptive name.
2. Add a SKILL.md file using the same structure and front matter style as the existing skills.
3. Keep the skill focused, practical, and reusable.
4. Reference the specification in spec/agent-skills-spec.md for formatting guidance.

## Notes

These skills are intended to be lightweight, reusable, and easy to adapt for different products, teams, and workflows.

## References

[shippusharma-skills](https://github.com/shippusharma/skills)
