# Coding Standards

Authoritative coding conventions for this repository. Run `npm run lint` before every PR.

## TypeScript

Configured in [`tsconfig.app.json`](../tsconfig.app.json):

- **Strict linting:** `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`
- **Module:** ESNext with bundler resolution
- **JSX:** `react-jsx` (no React import required for JSX)
- **Path alias:** `@/*` maps to `src/*`

### Rules

- Do not use `any` without an inline justification comment.
- Prefer explicit types on public function signatures and hook return values.
- Use `type` imports (`import type { ... }`) for type-only imports.
- Export types from `src/types/` — do not duplicate type definitions.

## ESLint

Configured in [`eslint.config.js`](../eslint.config.js):

- `@eslint/js` recommended
- `typescript-eslint` recommended
- `eslint-plugin-react-hooks` recommended
- `eslint-plugin-react-refresh` (Vite)

Run before every commit/PR:

```bash
npm run lint
```

## React

Follow [`.agents/rules/react.md`](../.agents/rules/react.md). Key points:

- Functional components only — no class components.
- Extract reusable logic into custom hooks under `src/hooks/`.
- Keep components small; one responsibility per component.
- Use controlled inputs for forms.
- Implement error boundaries for async failure paths.
- Memoize (`useMemo`, `useCallback`, `React.memo`) only when profiling shows benefit.

## UI / shadcn

Configured in [`components.json`](../components.json):

- Style: `base-sera` with Tailwind CSS variables
- Icons: `lucide-react`
- Import UI primitives from `@/components/ui/`
- Import utilities from `@/lib/utils`
- Add new shadcn components via the shadcn CLI — do not hand-copy from docs

## File Naming

| Kind | Convention | Example |
| ---- | ---------- | ------- |
| Components | PascalCase | `MainPromptSection.tsx` |
| Hooks | camelCase with `use` prefix | `usePromptState.ts` |
| Services | camelCase | `ollamaService.ts` |
| Utils | camelCase | `assemblePrompt.ts` |
| Types | camelCase file, PascalCase exports | `index.ts` → `FullPrompt` |
| Tests | `*.test.ts` / `*.test.tsx` | `assemblePrompt.test.ts` |

## Component Organization

- **Section UIs:** `src/components/sections/`
- **Shared UI:** `src/components/common/`
- **shadcn primitives:** `src/components/ui/` (do not edit casually)
- **Assembly / views:** `src/components/assembly/`

## Architecture Rules

1. **Single source of truth:** Prompt section metadata lives in [`src/types/config.ts`](../src/types/config.ts).
2. **Local-first:** All AI analysis goes through local Ollama — no cloud LLM calls in app code.
3. **Preserve user wording:** Do not paraphrase business rules, acceptance criteria, or user-entered text during assembly.
4. **Prefer extension over duplication:** Reuse existing hooks and services before adding new abstractions.

## Dependencies

- Do not add dependencies without justification in the PR description.
- Never commit secrets, API keys, or `.env` files.
- Pin major tooling versions in `package.json` — avoid `*` ranges.
