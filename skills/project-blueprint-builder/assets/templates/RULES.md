# Rules

## Engineering principles

- Favor clarity, maintainability, and deliberate simplicity over unnecessary complexity.
- Keep modules focused on a single responsibility.
- Prefer explicit design and readable implementations over clever abstractions.
- Optimize for long-term changeability, not just first-pass speed.

## Code style

- Use clear, intention-revealing names.
- Keep functions compact and easy to reason about.
- Avoid hidden side effects and overly implicit behavior.
- Document non-obvious logic, assumptions, and edge cases.

## Testing expectations

- Unit tests for core domain logic.
- Integration tests for critical workflows.
- End-to-end tests for important user journeys where appropriate.
- Regression tests for bug fixes and released behavior.

## Security rules

- Never expose secrets in code or configuration.
- Validate and sanitize user input at every boundary.
- Apply least-privilege access controls by default.
- Review permissions, logging, and data handling with each change.

## Collaboration and delivery rules

- Document important decisions and rationale as they emerge.
- Keep pull requests focused, reviewable, and easy to validate.
- Update the memory file whenever context changes materially.
- Trace implementation work back to the blueprint documents.
- Prefer reversible changes and staged rollout when risk is non-trivial.

## Operational expectations

- Add meaningful logging and observability from the outset.
- Define rollback and recovery steps for risky releases.
- Keep documentation current as the system evolves.
