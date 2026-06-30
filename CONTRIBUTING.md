# Contributing

Thank you for contributing to Prompt Checklist Builder. Follow the process standards in `docs/` — they are authoritative. Do not guess conventions.

## Workflow

```
Jira Ticket → Branch → Implement → Lint/Test/Build → PR → Review → Merge → Deploy
```

1. Pick up a Jira ticket with clear acceptance criteria.
2. Create a branch per [docs/BRANCHING.md](./docs/BRANCHING.md).
3. Implement the change following [docs/CODING_STANDARDS.md](./docs/CODING_STANDARDS.md).
4. Add tests per [docs/TESTING.md](./docs/TESTING.md).
5. Commit using [docs/COMMITS.md](./docs/COMMITS.md).
6. Verify locally:

   ```bash
   ./scripts/verify-local.sh
   ```

7. Open a PR against `main` — the PR template will auto-populate.
8. Link the Jira ticket and complete all checklist sections.
9. Request review; reviewer uses [docs/REVIEW_CHECKLIST.md](./docs/REVIEW_CHECKLIST.md).
10. After merge, Firebase deploys automatically; move Jira to Done per [docs/DEFINITION_OF_DONE.md](./docs/DEFINITION_OF_DONE.md).

## Standards (Single Source of Truth)

| Topic | Document |
| ----- | -------- |
| Branch naming | [docs/BRANCHING.md](./docs/BRANCHING.md) |
| Commit messages | [docs/COMMITS.md](./docs/COMMITS.md) |
| Coding standards | [docs/CODING_STANDARDS.md](./docs/CODING_STANDARDS.md) |
| Folder structure | [docs/FOLDER_STRUCTURE.md](./docs/FOLDER_STRUCTURE.md) |
| Testing | [docs/TESTING.md](./docs/TESTING.md) |
| Definition of Done | [docs/DEFINITION_OF_DONE.md](./docs/DEFINITION_OF_DONE.md) |
| Code review | [docs/REVIEW_CHECKLIST.md](./docs/REVIEW_CHECKLIST.md) |

## PR Requirements

- Branch name includes Jira key
- PR template fully completed
- Jira ticket linked
- CI green (lint, test, build, Firebase preview)
- Definition of Done satisfied

## AI Agents

If you are an AI agent, read [AGENTS.md](./AGENTS.md) before making any changes.
