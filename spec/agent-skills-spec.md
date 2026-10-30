# Agent Skills Spec

Skills in this repository follow the open [Agent Skills specification](https://agentskills.io/specification). This page summarizes the rules `npm run validate` enforces and adds this repository's own conventions.

## Spec rules

| Field           | Required | Rule                                                                                                             |
| --------------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| `name`          | Yes      | 1–64 characters: `a-z`, `0-9`, and single hyphens. No leading or trailing hyphen. Must match the directory name. |
| `description`   | Yes      | 1–1024 characters. Says what the skill does and when to use it, using the words users actually type.             |
| `license`       | No       | A license name or a bundled license file.                                                                        |
| `compatibility` | No       | At most 500 characters. Use only for real environment requirements.                                              |
| `metadata`      | No       | String keys to string values. No lists or nested maps.                                                           |
| `allowed-tools` | No       | Experimental. A space-separated list of pre-approved tools.                                                      |

Keep the SKILL.md body under 500 lines (ideally under ~5,000 tokens). Move detail into `references/` or `assets/`, and link each file directly from SKILL.md with a relative path. Referenced files shouldn't chain to further files, and installed skills can only see files inside their own folder.

## Repository conventions

### Frontmatter

```yaml
---
name: my-skill
description: 'Does X for Y. Use when the user asks for A, B, or C.'
license: MIT
metadata:
  version: '1.0.0'
  author: 'Your Name'
  tags: 'tag-one, tag-two'
---
```

- Quote every `metadata` value, so YAML never reads it as a number, boolean, or date.
- Write `tags` as a comma-separated string, not a list.
- Quote any value that contains `: ` or ` #`.
- Bump `metadata.version` whenever the skill's behavior changes.

### Layout

```text
skills/my-skill/
├── SKILL.md            # required
├── LICENSE.txt         # copy of the repository's MIT LICENSE
├── references/         # detail the agent reads on demand
└── assets/templates/   # files the skill fills in
```

### Body

Use these sections in this order, skipping any that don't apply:

1. A one-line purpose statement
2. **When to use**, ending with a pointer to a sibling skill for adjacent work
3. **What to ask first**
4. **Workflow**, as numbered, imperative steps
5. **Rules** or **Guardrails**
6. **Output**, saying exactly what is produced and where
7. **Tone by audience**, when output style should change with the reader
8. **Example**, a realistic prompt and the shape of a good response

## Validate

```bash
npm run validate
```

The validator also checks that each skill is listed in `README.md` and that the plugin manifest versions match `package.json`. It warns about any file in a skill folder that SKILL.md never links to, because agents won't read it.
