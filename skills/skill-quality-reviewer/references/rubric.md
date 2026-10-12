# Skill Review Rubric

Score each dimension from 1 to 5, and cite evidence for every score.

| Dimension         | 1: weak                                        | 3: adequate                          | 5: strong                                                                           |
| ----------------- | ---------------------------------------------- | ------------------------------------ | ----------------------------------------------------------------------------------- |
| Purpose and scope | Its job can't be stated in one sentence        | Clear job, fuzzy edges               | One job with clear boundaries; names sibling skills for adjacent work               |
| Triggering        | Generic description that fires never or always | Says what it does, vaguely says when | Third person; says what and when in the words users type; near-misses wouldn't fire |
| Workflow          | Loose advice, no order                         | Ordered steps, some vague            | Ordered, imperative steps with done conditions and stated defaults                  |
| Output contract   | Unstated                                       | Listed but loose                     | Exact deliverables, their location, and a closing summary                           |
| Examples          | None                                           | Generic or toy                       | A realistic prompt plus the shape of a strong result                                |
| Concision         | Repeats itself or explains basics              | Some padding                         | Every line changes behavior; body well under 500 lines, detail in references        |
| Guardrails        | Silent on risks                                | Generic warnings                     | Specific anti-patterns and limits for this task                                     |
| Consistency       | Breaks repo conventions                        | Mostly consistent                    | Matches sibling skills in structure, metadata, and tone                             |

## Reading the total

- **36–40:** ready to publish.
- **28–35:** publishable after the top fixes.
- **27 or below:** rework before publishing.

## Common fixes

- **Never triggers:** rewrite the description to name concrete tasks, file types, and phrases users say.
- **Triggers too often:** narrow the description and add "For X, use Y instead."
- **Agent skips steps:** number the steps, make them imperative, and give each a done condition.
- **Too long:** move tables, checklists, and templates into `references/` or `assets/`, and link to them.
- **Inconsistent output:** add an output contract and an example of the result.
