# shippusharma-skills

## 1.0.5

### Patch Changes

- feat(skills): all four skills get step-by-step workflows, output contracts, examples, and reference files; frontmatter is spec-compliant (string-only metadata)
- feat(project-blueprint-builder): requirements get IDs (`FR-n` in PRD, `NFR-n` in TRD) that each phase lists as covered, and the quality gate checks them
- feat(project-blueprint-builder): templates state each fact in one document; SECURITY uses one boundary/threat/mitigation table; RULES asks for project commands and merge checks; the skill reads `MVP.md` when `mvp-builder` wrote one
- feat(tooling): add `npm run validate` and `npm run check`, a CI workflow, and plugin-manifest version sync on `semver:version`
- feat(tooling): the validator warns about skill files that SKILL.md never links to
- fix(skill-quality-reviewer): the link rule forbids reference chains, not nested folders
- chore: license every skill under MIT to match the repository; rename `LICENCE` to `LICENSE`
- chore: move the release workflow into `.github/workflows` so it runs; rename `semvar:*` scripts to `semver:*`
- chore: remove unused files, scripts, and config
- docs: README covers all four skills with install steps and example prompts; tighten CONTRIBUTING, SECURITY, and the authoring spec

## 1.0.4

### Patch Changes

- refactor: tighten mvp skill
- refactor: tighten blueprint skill
- chore: update repo metadata

## 1.0.3

### Patch Changes

- feat(skills): added repo-impact-optimizer and skill-quality-reviewer skills
- chore(package.json): updated scripts command

## 1.0.2

### Added

- Added Codex plugin support.
- Added CONTRIBUTING.md instruction file

### Changed

- Updated README.md file for better readability.
- Renamed some project scripts.

## 1.0.1

### Added

- Added Claude plugin support.
- Added GitHub Actions workflow for automated CI/CD.

### Changed

- Updated package keywords.
- Improved project documentation.
- renamed some project scripts.

### Security

- Added `SECURITY.md` with vulnerability reporting guidelines.

---

## 1.0.0

### Added

- Initial public release.
- Reusable AI development skills.
- Skill installation via `npx skills add`.
- Modular skill structure.
- MVP Builder skill.
- project-blueprint-builder skill.
- Optimized, enhanced and robust codebase.
