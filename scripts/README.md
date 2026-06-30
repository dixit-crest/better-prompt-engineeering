# Scripts

Local automation scripts for the development workflow.

| Script | Description |
| ------ | ----------- |
| [`verify-local.sh`](./verify-local.sh) | Pre-PR quality gate: lint → test → build |

## Usage

From the repository root:

```bash
./scripts/verify-local.sh
```

On Windows (Git Bash or WSL):

```bash
bash scripts/verify-local.sh
```

Exit code is non-zero if any step fails.

## Adding Scripts

- Place new scripts in this directory.
- Document them in this README.
- Prefer shell scripts for orchestration; use `npm run` for individual tasks.
