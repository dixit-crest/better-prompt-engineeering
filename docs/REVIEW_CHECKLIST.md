# Review Checklist

Reviewers use this checklist for every PR. Do not approve until all applicable items are satisfied.

## Ticket Alignment

- [ ] PR links to the correct Jira ticket
- [ ] Changes match the ticket acceptance criteria
- [ ] No scope creep — unrelated changes are in separate tickets/PRs
- [ ] Branch name follows [BRANCHING.md](./BRANCHING.md)

## Code Quality

- [ ] Follows [CODING_STANDARDS.md](./CODING_STANDARDS.md)
- [ ] Files are in the correct locations per [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md)
- [ ] No unnecessary abstractions or premature optimization
- [ ] No `any` types without justification
- [ ] No commented-out code or debug logging left behind
- [ ] Commit messages follow [COMMITS.md](./COMMITS.md)

## Testing

- [ ] `npm run lint`, `npm test`, and `npm run build` pass in CI
- [ ] New/changed behavior has adequate test coverage per [TESTING.md](./TESTING.md)
- [ ] Edge cases considered (empty input, disabled sections, API failure)
- [ ] Tests are deterministic — no flaky timing dependencies

## Application Constraints

- [ ] Local-first: Ollama integration unchanged or improved, no cloud LLM calls added
- [ ] Optional sections remain toggleable
- [ ] User-entered text in business rules and acceptance criteria is preserved verbatim in assembly
- [ ] `PROMPT_SECTIONS` config updated if new sections added

## Security & Dependencies

- [ ] No secrets, tokens, or credentials committed
- [ ] No new dependencies without justification in PR description
- [ ] No unnecessary dependency version bumps bundled with feature work

## UI / Accessibility (when UI changed)

- [ ] Keyboard navigation works for interactive elements
- [ ] Semantic HTML and ARIA used appropriately
- [ ] Loading and error states handled
- [ ] Visual changes are consistent with existing shadcn/Tailwind patterns

## Documentation

- [ ] PR template completed with test plan
- [ ] Architecture or process docs updated if structure changed
- [ ] No contradictory documentation introduced

## Approval

Only approve when all applicable items above are checked. Request changes with specific, actionable feedback referencing the relevant standard doc.
