# Contributing

Bug reports, fixes, and new skills are welcome. Open an issue before a large change or a new skill, so we can agree on scope first.

## Setup

Requires Node.js 20 or later.

```bash
git clone https://github.com/shippusharma/skills.git
cd skills
npm install
```

| Command               | What it does                                              |
| --------------------- | --------------------------------------------------------- |
| `npm run list-skills` | List every skill with its version and description         |
| `npm run validate`    | Check skills against the Agent Skills spec and repo rules |
| `npm run check`       | Validate and check formatting, the same as CI             |
| `npm run format`      | Format every file with Prettier                           |

## Adding a skill

1. Create `skills/<name>/`. The folder name is lowercase with hyphens, and it becomes the skill's `name`.
2. Write `SKILL.md` following the [authoring guide](spec/agent-skills-spec.md), and copy `LICENSE` into the folder as `LICENSE.txt`.
3. Put detail the agent reads on demand in `references/` and files it fills in under `assets/templates/`. Link each one from SKILL.md.
4. Include a realistic example prompt and the shape of a good response.
5. Add the skill to the table in `README.md`.
6. Run `npm run check`, then add a changeset with `npm run semver:changeset`.

## Pull requests

Before opening one, make sure that:

- `npm run check` passes.
- You tried each changed skill with at least one agent.
- `metadata.version` is bumped for every skill whose behavior changed.
- A changeset describes the change.

Keep each pull request to one feature or fix, and use [Conventional Commits](https://www.conventionalcommits.org/):

```text
feat(mvp-builder): add a deployment checklist
fix(project-blueprint-builder): correct the architecture template
docs: clarify the install steps
```

## Releases

[The release workflow](.github/workflows/release.yml) runs [Changesets](https://github.com/changesets/changesets) on every push to `main`:

1. While changesets are pending, it opens or updates a `chore: version skills` pull request that bumps `package.json`, syncs the plugin manifests, and updates `CHANGELOG.md`.
2. Merging that pull request tags the release as `vX.Y.Z` and creates a GitHub release.

Run `npm run semver:status` to preview pending bumps. Never edit the plugin manifest versions by hand; `npm run semver:version` keeps them in sync with `package.json`.

## Reporting bugs

Include the skill name, the agent you used, your prompt, what you expected, and what happened instead.

## Security

Report vulnerabilities privately, as described in [SECURITY.md](SECURITY.md), not in a public issue.
