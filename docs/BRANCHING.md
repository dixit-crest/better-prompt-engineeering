# Branch Naming

All branches must include a Jira ticket key. Do not create branches without a linked ticket.

## Base Branch

- **Default:** `main`
- All feature, fix, and chore work branches from `main`.

## Naming Format

```
<type>/<JIRA-KEY>-<kebab-slug>
```

| Type | Pattern | Example |
| ---- | ------- | ------- |
| Feature | `feature/<JIRA-KEY>-<kebab-slug>` | `feature/PE-42-add-project-export` |
| Bug fix | `fix/<JIRA-KEY>-<kebab-slug>` | `fix/PE-57-ollama-timeout` |
| Chore | `chore/<JIRA-KEY>-<kebab-slug>` | `chore/PE-60-bump-deps` |
| Docs | `docs/<JIRA-KEY>-<kebab-slug>` | `docs/PE-61-update-architecture` |
| Hotfix | `hotfix/<JIRA-KEY>-<kebab-slug>` | `hotfix/PE-99-fix-copy-crash` |

## Rules

1. **Jira key is required** — use the exact key from the ticket (e.g. `PE-42`).
2. **One ticket per branch** — do not combine unrelated work.
3. **Slug:** lowercase, kebab-case, max ~50 characters, descriptive of the change.
4. **No spaces or underscores** in the slug — use hyphens only.
5. **No direct commits to `main`** except documented hotfixes merged via PR.

## Creating a Branch

```bash
git checkout main
git pull origin main
git checkout -b feature/PE-42-add-project-export
```

## Invalid Examples

| Branch | Reason |
| ------ | ------ |
| `feature/add-export` | Missing Jira key |
| `PE-42-add-export` | Missing type prefix |
| `feature/PE-42_add_export` | Underscores in slug |
| `Feature/PE-42-Add-Export` | Wrong casing |
