# Commit Conventions

All commits use [Conventional Commits](https://www.conventionalcommits.org/) with a mandatory Jira reference in the footer.

## Format

```
<type>(<scope>): <imperative summary>

[optional body — explain why, not what]

Refs: <JIRA-KEY>
```

- **Summary:** imperative mood, lowercase, no period at end, max ~72 characters.
- **Body:** optional; use for non-obvious context or breaking changes.
- **Footer:** `Refs: D20-42` is required on every commit.

## Types

| Type       | When to use                              |
| ---------- | ---------------------------------------- |
| `feat`     | New user-facing feature                  |
| `fix`      | Bug fix                                  |
| `docs`     | Documentation only                       |
| `style`    | Formatting, no logic change              |
| `refactor` | Code change that is neither feat nor fix |
| `test`     | Adding or updating tests                 |
| `chore`    | Maintenance (deps, tooling)              |
| `ci`       | CI/CD configuration                      |
| `build`    | Build system or bundler changes          |

## Scopes

Use a scope that matches the area changed:

`ui`, `ollama`, `hooks`, `services`, `types`, `utils`, `ci`, `docs`, `tests`, `scripts`

Omit scope only when the change spans multiple areas equally.

## Examples

```
feat(ollama): add retry logic for auto-fill requests

Refs: D20-42
```

```
fix(ui): prevent double-submit on copy button

Refs: D20-57
```

```
docs(process): add branching and commit standards

Refs: D20-61
```

```
test(utils): add prompt assembly unit tests

Refs: D20-63
```

```
chore(deps): bump vite to 8.0.12

Refs: D20-60
```

```
ci: run lint and test before Firebase deploy

Refs: D20-64
```

## Rules

1. One logical change per commit when practical.
2. Do not mix unrelated changes in a single commit.
3. Every commit on a feature branch must reference the branch's Jira ticket.
4. Do not use vague messages like `fix bug`, `update code`, or `wip`.
