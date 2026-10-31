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
6. Add [eval cases](#evals) under `evals/<name>/`: at least four prompts that should trigger the skill and one near miss that shouldn't.
7. Run `npm run check`, then add a changeset with `npm run semver:changeset`.

## Evals

`evals/` holds behavior tests for every skill, run by Claude Code's eval runner. Each case runs a prompt with and without these skills and grades both results, so the score shows what the skills add.

```bash
npm run eval -- --tag mvp-builder   # one skill's cases
npm run eval -- --case 'repo-*'     # cases whose name matches
npm run eval                        # every case
```

- You need [Claude Code](https://claude.com/claude-code), signed in. Each run is a full agent session on your account. On Opus 5.5, one case costs $0.25–1.20 per run across both arms, so the full suite (20 cases, 3 runs each) is about $30, half of it `project-blueprint-builder`. Start with one skill.
- Cases are tagged `should-fire` or `should-not-fire`. Graders check what the skill produced, not only whether it ran.
- A case that needs files has a `scaffold.sh` that copies a fixture from `evals/fixtures/`. Fixture files named `*.fixture` lose the suffix when copied, so tools never mistake a fixture's `SKILL.md` or `package.json` for a real one.
- `npm run eval` runs each case's `scaffold.sh` on your machine. Read the scaffold scripts in a pull request before running its evals.

When you change a skill's behavior, run its evals before and after the change, and add a case that covers the new behavior.

## Pull requests

Before opening one, make sure that:

- `npm run check` passes.
- You ran the evals for each changed skill (`npm run eval -- --tag <skill>`).
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
