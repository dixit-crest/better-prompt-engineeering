# Prompt Checklist Builder

A structured web application that helps developers transform rough LLM prompts into precise, context-rich instruction sets. Uses a local [Ollama](https://ollama.com/) model to auto-fill structured fields from an initial prompt, forcing specificity and reducing hallucinations in generated code.

## Prerequisites

- **Node.js** 20 or later
- **npm** 10 or later
- **Ollama** running locally (default: `http://localhost:11434`)

## Quick Start

```bash
npm install
npm run dev        # http://localhost:9000
```

## Commands

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start Vite dev server on port 9000 |
| `npm run build` | Type-check and production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run Vitest test suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run preview` | Preview production build locally |

## Pre-PR Verification

```bash
./scripts/verify-local.sh
```

Runs lint, test, and build in sequence.

## Documentation

| Doc | Description |
| --- | ----------- |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | How to contribute |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | System design |
| [AGENTS.md](./AGENTS.md) | AI agent guidelines |
| [docs/](./docs/README.md) | Engineering process standards |

## Deployment

- **PR:** Firebase Hosting preview deploy (lint + test + build in CI)
- **Merge to `main`:** Automatic live deploy to Firebase Hosting (`better-prompt-engineering`)

## License

Private project.
