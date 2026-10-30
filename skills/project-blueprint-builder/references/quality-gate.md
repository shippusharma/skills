# Quality Gate

Check every item before handing off. Fix each failure, or record it as an open question in MEMORY.

- [ ] Every requirement has an ID (`FR-n` in PRD, `NFR-n` in TRD) and a testable acceptance criterion, and its ID appears under "Requirements covered" in at least one phase.
- [ ] Every component in ARCHITECTURE appears in its diagrams, and every diagram node is a real component.
- [ ] Every entity in SCHEMA has key fields, constraints, an owner, and a retention rule.
- [ ] Every trust boundary in SECURITY has at least one threat, and every threat has a mitigation.
- [ ] Every phase has exit criteria someone could verify without asking the author.
- [ ] No fact is stated in two documents; cross-references link instead. Decisions, assumptions, and open questions live only in MEMORY.
- [ ] No placeholder (`...`, `TBD`, an empty field, an unchanged template diagram) remains; unknowns are open questions in MEMORY.
- [ ] Every technology choice has a one-line reason tied to a requirement or constraint.
- [ ] Every risky change has a rollback path.
