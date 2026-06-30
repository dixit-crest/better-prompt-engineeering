# AI Agent Guidelines

**Read this file before making any code changes.** Do not guess engineering conventions — read the linked documentation.

## Mandatory Reading Order

1. This file (`AGENTS.md`)
2. Relevant `docs/` standard for your task (see mapping below)
3. [ARCHITECTURE.md](./ARCHITECTURE.md) for system context
4. [`.agents/rules/react.md`](./.agents/rules/react.md) for React patterns

## Never Guess

| Topic                 | Read this — do not invent                                  |
| --------------------- | ---------------------------------------------------------- |
| Branch names          | [docs/BRANCHING.md](./docs/BRANCHING.md)                   |
| Commit messages       | [docs/COMMITS.md](./docs/COMMITS.md)                       |
| Code style            | [docs/CODING_STANDARDS.md](./docs/CODING_STANDARDS.md)     |
| Where files go        | [docs/FOLDER_STRUCTURE.md](./docs/FOLDER_STRUCTURE.md)     |
| What to test          | [docs/TESTING.md](./docs/TESTING.md)                       |
| When work is complete | [docs/DEFINITION_OF_DONE.md](./docs/DEFINITION_OF_DONE.md) |
| How to review         | [docs/REVIEW_CHECKLIST.md](./docs/REVIEW_CHECKLIST.md)     |

## Task → Document Mapping

| Task type      | Primary docs                                             |
| -------------- | -------------------------------------------------------- |
| New feature    | BRANCHING, CODING_STANDARDS, TESTING, DEFINITION_OF_DONE |
| Bug fix        | BRANCHING, CODING_STANDARDS, TESTING                     |
| Refactor       | CODING_STANDARDS, FOLDER_STRUCTURE, TESTING              |
| Documentation  | COMMITS, FOLDER_STRUCTURE                                |
| Opening a PR   | DEFINITION_OF_DONE, REVIEW_CHECKLIST                     |
| Reviewing a PR | REVIEW_CHECKLIST                                         |

## Development Commands

```bash
npm install
npm run dev          # Port 9000
npm run lint
npm test
npm run build
./scripts/verify-local.sh   # Pre-PR gate
```

## Application Constraints

1. **Local-first Ollama** — never add cloud LLM API calls.
2. **Optional sections** — all sections except Main Prompt must remain toggleable.
3. **Preserve user wording** — do not paraphrase business rules or acceptance criteria in assembly.
4. **Single source of truth** — section metadata lives in `src/types/config.ts`.

## Before Marking Work Complete

Verify every item in [docs/DEFINITION_OF_DONE.md](./docs/DEFINITION_OF_DONE.md):

- Correct branch name with Jira key
- Conventional Commits with `Refs: <JIRA-KEY>`
- `npm run lint && npm test && npm run build` pass
- Tests for changed behavior
- PR template ready

## Full Standards Index

See [docs/README.md](./docs/README.md) for the complete list of process documents.
