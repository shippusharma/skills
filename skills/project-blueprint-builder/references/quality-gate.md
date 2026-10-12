# Quality Gate

Check every item before handing off. Fix each failure, or record it as an open question in MEMORY.

- [ ] Every PRD requirement has an acceptance criterion and maps to a phase in PHASES.
- [ ] Every component in ARCHITECTURE appears in its diagrams, and every diagram node is a real component. No example diagram from the templates is left unchanged.
- [ ] Every entity in SCHEMA has key fields, constraints, and a retention rule.
- [ ] Every trust boundary in SECURITY has at least one mitigation.
- [ ] Every phase has exit criteria someone could verify without asking the author.
- [ ] No fact is stated in two documents; cross-references link instead.
- [ ] No placeholder text (`...`, `TBD`, empty fields) remains; unknowns are listed as open questions.
- [ ] Every technology choice has a one-line reason tied to a requirement or constraint.
- [ ] Every risky change has a rollback path.
