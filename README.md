# Skills

This repository contains a collection of reusable agent skills for AI-assisted development. Each skill is packaged as a self-contained folder with a SKILL.md file and can be used to guide an assistant through a specific workflow.

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
