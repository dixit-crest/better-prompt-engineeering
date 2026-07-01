# GitHub CLI Setup for Cursor Agents

Cursor agents run `gh pr create` and other GitHub commands in a non-interactive shell. That shell must have GitHub CLI credentials available.

## Common confusion

| Command | Credential source | Agent worked before? |
| ------- | ----------------- | -------------------- |
| `git push` | Git Credential Manager (`credential.helper=manager`) | Often yes |
| `gh pr create` | `gh auth login` token file **or** `GH_TOKEN` env var | Often no |

If `git push` succeeds but `gh auth status` fails, you still need to set up `gh` separately.

## Verify current state

```bash
./scripts/verify-gh-auth.sh
```

Healthy output includes a logged-in account and a `hosts.yml` file at:

- Windows (Git Bash): `~/.config/gh/hosts.yml`
- Windows (PowerShell): `%USERPROFILE%\.config\gh\hosts.yml`

If only `device-id` exists and `hosts.yml` is missing, `gh auth login` was never completed.

## One-time setup (recommended)

### Option A — `gh auth login` (simplest)

Run in the **Cursor integrated terminal** (Git Bash):

```bash
gh auth login
```

Choose:

1. GitHub.com
2. HTTPS
3. Login with a web browser (or paste a token)

Verify:

```bash
gh auth status
ls ~/.config/gh/hosts.yml
```

### Option B — `GH_TOKEN` environment variable (most reliable for agents)

1. Create a fine-grained or classic PAT with `repo` scope: https://github.com/settings/tokens
2. Set it where the agent shell can read it:

**Windows (persistent, all terminals):**

- Settings → System → About → Advanced system settings → Environment Variables
- Add user variable `GH_TOKEN` = your token

**Cursor only** (`%APPDATA%\Cursor\User\settings.json`):

```json
{
  "terminal.integrated.env.windows": {
    "GH_TOKEN": "ghp_..."
  }
}
```

Restart Cursor after changing settings.

Verify:

```bash
gh auth status
```

## Agent network access

This repo includes `.cursor/sandbox.json` allowing `api.github.com` and `github.com`. In Cursor:

**Settings → Agents → Auto Run → Auto-Run Network Access** should use `sandbox.json` or `sandbox.json + Defaults`.

Without this, `gh` may fail even when credentials are valid.

## Agent workflow

Before opening a PR:

```bash
./scripts/verify-gh-auth.sh
gh pr create --base main ...
```

See [.cursor/rules/engineering-process.mdc](../.cursor/rules/engineering-process.mdc) for the full ticket → PR flow.
