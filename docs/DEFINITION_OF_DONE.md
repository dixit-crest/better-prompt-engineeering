# Definition of Done

A ticket is **Done** only when every item below is satisfied. AI agents must verify this list before marking work complete.

## Ticket & Branch

- [ ] Jira ticket exists with clear acceptance criteria
- [ ] Ticket moved to **In Progress** before work begins
- [ ] Branch created using [BRANCHING.md](./BRANCHING.md) format (`feature/PE-XX-slug`)
- [ ] Branch contains only work for this ticket

## Implementation

- [ ] All acceptance criteria met
- [ ] Code follows [CODING_STANDARDS.md](./CODING_STANDARDS.md)
- [ ] Files placed per [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md)
- [ ] Commits follow [COMMITS.md](./COMMITS.md) with `Refs: <JIRA-KEY>` footer
- [ ] Local-first Ollama constraint preserved (no cloud LLM calls added)
- [ ] User wording preserved in prompt assembly paths

## Quality Gates

- [ ] `npm run lint` passes
- [ ] `npm test` passes
- [ ] `npm run build` passes
- [ ] `./scripts/verify-local.sh` passes (or equivalent three commands)
- [ ] New/changed behavior has tests per [TESTING.md](./TESTING.md)

## Documentation

- [ ] `ARCHITECTURE.md` updated if system structure changed
- [ ] Relevant `docs/` files updated if process changed
- [ ] Inline code is self-explanatory; comments only for non-obvious logic

## Pull Request

- [ ] PR opened against `main`
- [ ] PR template fully completed (Jira link, summary, test plan)
- [ ] Jira ticket linked in PR description
- [ ] CI green: lint, test, build, Firebase preview deploy

## Review & Merge

- [ ] Code review approved by a human reviewer
- [ ] Reviewer confirmed [REVIEW_CHECKLIST.md](./REVIEW_CHECKLIST.md)
- [ ] All review comments addressed or explicitly deferred with ticket
- [ ] PR merged to `main`

## Deploy & Close

- [ ] Firebase live deploy succeeded (automatic on merge to `main`)
- [ ] Jira ticket moved to **Done** with PR link in comment
- [ ] No open blockers or follow-up tickets required for this scope
