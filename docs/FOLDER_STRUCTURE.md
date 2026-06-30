# Folder Structure

## Top Level

```
prompt-engineer/
├── docs/           # Engineering process standards (authoritative)
├── scripts/        # Local automation scripts
├── tests/          # Vitest tests (smoke, integration, shared setup)
├── src/            # Application source code
├── public/         # Static assets served as-is
├── .github/        # GitHub Actions workflows and PR template
├── .agents/        # Agent rules and third-party skills
├── .cursor/        # Cursor IDE settings and rules
├── .claude/        # Claude Code skill symlinks
├── dist/           # Build output (gitignored)
└── node_modules/   # Dependencies (gitignored)
```

| Path       | Belongs                                      | Does not belong                                    |
| ---------- | -------------------------------------------- | -------------------------------------------------- |
| `docs/`    | Process standards, branching, DoD            | Application code, API docs                         |
| `scripts/` | Shell/Node automation for dev workflow       | Business logic                                     |
| `tests/`   | Test setup, smoke tests, integration tests   | Production source                                  |
| `src/`     | All application code                         | Tests (prefer `tests/` or co-located `*.test.tsx`) |
| `public/`  | Favicon, static icons, `index.html` fallback | Compiled bundles                                   |

## `src/` Layout

```
src/
├── App.tsx                 # Root application component
├── main.tsx                # Vite entry point
├── index.css               # Global styles and Tailwind imports
├── assets/                 # Images and static imports
├── components/
│   ├── assembly/           # Final prompt assembly views
│   ├── common/             # Shared presentational components
│   ├── sections/           # One component per prompt section
│   └── ui/                 # shadcn/ui primitives
├── hooks/                  # Custom React hooks (state, Ollama, projects)
├── lib/
│   └── utils.ts            # shadcn cn() utility
├── services/               # External integrations (Ollama, IndexedDB)
├── types/
│   ├── config.ts           # PROMPT_SECTIONS — single source of truth
│   └── index.ts            # TypeScript interfaces
└── utils/                  # Pure helper functions (assembly, hints)
```

## Where to Put New Code

| Adding...                      | Location                                                                        |
| ------------------------------ | ------------------------------------------------------------------------------- |
| New prompt section UI          | `src/components/sections/<Name>Section.tsx` + register in `src/types/config.ts` |
| New hook                       | `src/hooks/use<Name>.ts`                                                        |
| Ollama or storage logic        | `src/services/`                                                                 |
| Pure formatting/assembly logic | `src/utils/`                                                                    |
| New type or interface          | `src/types/index.ts`                                                            |
| New shadcn component           | `src/components/ui/` via CLI                                                    |
| Smoke or integration test      | `tests/`                                                                        |
| Unit test for one component    | Co-located `ComponentName.test.tsx` next to component                           |

## Config Files (Root)

| File                  | Purpose                                       |
| --------------------- | --------------------------------------------- |
| `package.json`        | Dependencies and npm scripts                  |
| `vite.config.ts`      | Vite dev server (port 9000) and Vitest config |
| `tsconfig*.json`      | TypeScript project references                 |
| `eslint.config.js`    | ESLint flat config                            |
| `tailwind.config.cjs` | Tailwind theme                                |
| `components.json`     | shadcn/ui configuration                       |
| `firebase.json`       | Firebase Hosting deploy config                |
| `CLAUDE.md`           | Claude Code project guidance                  |
| `AGENTS.md`           | AI agent entry point                          |
