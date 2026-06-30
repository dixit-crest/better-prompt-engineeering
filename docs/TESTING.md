# Testing Requirements

## Stack

| Tool                                                       | Purpose                             |
| ---------------------------------------------------------- | ----------------------------------- |
| [Vitest](https://vitest.dev/)                              | Test runner (Vite-native)           |
| [React Testing Library](https://testing-library.com/react) | Component rendering and interaction |
| [jsdom](https://github.com/jsdom/jsdom)                    | Browser DOM simulation              |
| `@testing-library/jest-dom`                                | DOM assertion matchers              |

## Commands

```bash
npm test              # Run all tests once (CI mode)
npm run test:watch    # Watch mode during development
npm run test:coverage # Run with coverage report
```

## Test Locations

| Location            | Use for                                                    |
| ------------------- | ---------------------------------------------------------- |
| `tests/`            | Smoke tests, integration tests, shared setup               |
| `tests/smoke/`      | App-level render smoke tests                               |
| `tests/utils/`      | Unit tests for pure utility functions                      |
| `src/**/*.test.tsx` | Co-located unit tests for individual components (optional) |

Setup file: [`tests/setup.ts`](../tests/setup.ts)

## PR Requirements

Every PR must:

1. Pass `npm run lint`
2. Pass `npm test`
3. Pass `npm run build`
4. Include tests for new or changed behavior

Run the full local gate:

```bash
./scripts/verify-local.sh
```

## What to Test

| Area                                     | Priority                            |
| ---------------------------------------- | ----------------------------------- |
| Pure utility functions (`src/utils/`)    | High — unit tests                   |
| Prompt assembly logic                    | High — unit tests                   |
| Ollama response parsing                  | High — unit tests with mocked fetch |
| Hook state transitions                   | Medium — hook tests with RTL        |
| Critical UI flows (copy, section toggle) | Medium — component tests            |
| Section form validation                  | Medium — interaction tests          |

## What Not to Test

- Third-party shadcn/ui primitive internals
- Firebase Hosting deploy configuration
- Vite/Tailwind build configuration
- Third-party agent skills under `.agents/` and `.claude/`

## Writing Tests

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
```

### Guidelines

- Test behavior, not implementation details.
- Use `screen.getByRole` and accessible queries over test IDs when possible.
- Mock external services (`ollamaService`, `fetch`) — do not call real Ollama in tests.
- Keep tests deterministic — no `setTimeout` without fake timers.
- One assertion concept per test when practical.

## Coverage

Coverage is informational, not a hard gate in Phase 0. Aim to cover:

- All pure functions in `src/utils/`
- Critical paths in `src/services/`
- At least one smoke test for the root `App` component
