# Deployment — MEMENTO OS

**Status:** Not deployed. No hosting provider is selected. 2026-11-21.

## Rule

Choose hosting only after the company's security, budget, backup, and operational requirements are known. Do not pick a provider by default.

Until those requirements exist:

- Do not deploy the AKA AI prototype. It has no authentication, it forwards message text to an external service, and it does not start from the committed layout.
- Do not deploy MEMENTO OS. There is no application to deploy.

## Environments

Keep three environments separate before any production use:

| Environment | Purpose | Data |
| --- | --- | --- |
| Development | Local work on one machine | Mock data or a local SQLite file |
| Staging | Try a release against production-like settings | Non-production data |
| Production | The company system | Real company data, PostgreSQL |

Each environment has its own secrets. Secrets are injected by the environment, not stored in the repository.

## Before the first production release

- A backup and a tested restore procedure for PostgreSQL
- A way to run Prisma migrations on purpose, not by accident
- HTTPS, HTTP-only session cookies, and the rest of the controls in [SECURITY.md](SECURITY.md)
- Separate credentials for development, staging, and production
- An owner for logs, backups, and dependency updates

None of these are set up.

## Local prototype note

The only runnable target in the repository is `aka-ai/`, and it does not currently start. Fixing that layout is a code change that should be approved on its own. It is not a deployment.
