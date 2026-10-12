# Audit Checklist

Report only the items that are missing or broken and that matter for this repo.

## Discover

- The repository description and topics name the problem it solves, in words people search for.
- The README title and first sentence say what it is and who it's for.
- A license is present and matches what the README and manifests claim.

## Understand

- The first screen of the README answers three questions: what is it, why use it, and how do I start?
- A short example shows real input and output.
- If the project offers several options (packages, skills, commands), a comparison table or "which one should I use?" guide exists.
- Every item the repo offers is listed, and every listed item exists.

## Try

- Install is one copy-paste command, with prerequisites (runtime versions, OS) stated.
- The quick start works on a clean machine exactly as written.
- Common mistakes produce understandable errors.

## Adopt

- Versioning and a changelog show the project is maintained.
- CI runs, and its status is visible.
- Configuration, compatibility, and limitations are documented.
- A security contact or policy exists for anything that runs code.

## Contribute

- CONTRIBUTING explains setup, standards, and how to submit, using the real commands.
- Issue and pull request templates ask for what maintainers need.
- Automated checks (lint, format, validation) catch mistakes before review.
- Good first issues or a roadmap give newcomers somewhere to start.

## Skill and plugin collections

Extra checks when the repo distributes agent skills, prompts, or plugins:

- Each skill's frontmatter is valid for the target spec: the name matches its directory, and the description says what the skill does and when to use it.
- Descriptions contain the words users actually type, so agents trigger the right skill.
- Install commands work for each supported agent or marketplace.
- Each skill shows an example prompt and the shape of its output.
- Skills don't overlap confusingly, and where they do, the README says which to pick.
- Manifest versions (package, plugin, marketplace) stay in sync.
