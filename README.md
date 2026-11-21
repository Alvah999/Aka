# MEMENTO OS

MEMENTO OS is the planned internal company management system for MEMENTO VIVERE LLC. It is meant to become one place for projects, tasks, collaboration, progress, deadlines, and management reporting.

This repository does not contain that system yet. It contains:

- `aka-ai/` — a small personal chat prototype that sends a message to an external AI service and shows the reply
- the project documents listed below

The chat prototype and MEMENTO OS are different products. The chat prototype is not an ERP module, and it is not production software.

## Current status

The project is in **requirements analysis**.

There is no approved product requirements document, software requirements specification, business-rule list, or Figma design in this repository. Until those exist, MEMENTO OS application code should not be written. Inventing screens, database fields, or workflows would lock in rules the company has not approved.

## Documents

| Document | What it is for |
| --- | --- |
| [PRD.md](PRD.md) | Why the system exists, who it is for, and which modules are in the first release |
| [SRS.md](SRS.md) | Requirements that are already fixed, and requirements that are still missing |
| [ARCHITECTURE.md](ARCHITECTURE.md) | How the system is structured today, and the approved target shape |
| [DATABASE.md](DATABASE.md) | Data rules. No tables are approved yet |
| [API.md](API.md) | The one prototype endpoint, and the API rules for the future system |
| [SECURITY.md](SECURITY.md) | Security rules and the risks found in the current prototype |
| [TESTING.md](TESTING.md) | What must be tested once features exist |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Environment rules. No host has been chosen |
| [ROADMAP.md](ROADMAP.md) | Phase, open questions, and the next decision |
| [CHANGELOG.md](CHANGELOG.md) | What changed in the repository |

## Approved technology stack

These choices are already approved. Do not replace them without explaining why and getting developer approval.

**Frontend:** React, TypeScript, Vite, Tailwind CSS, React Router, TanStack Query

**Backend:** Node.js, Express.js, TypeScript, REST

**Database:** SQLite for early local demos, PostgreSQL for production, Prisma for database access

**Authentication:** server sessions, password hashing, role-based access control, secure HTTP-only cookies

**Shape:** one modular application (a modular monolith), not microservices

## AKA AI prototype

`aka-ai/server.js` is an Express server. It serves `aka-ai/public/` and exposes `POST /api/chat`. The page is plain HTML, CSS, and JavaScript. It does not use the approved MEMENTO OS stack.

Verified on 2026-11-21 with Node.js 22:

1. `node server.js` from `aka-ai/` fails because the `dotenv` package cannot be resolved.
2. `npm install` inside `aka-ai/public/` succeeds and reports no known vulnerabilities in that tree, but the server still fails with the same error.

The cause is layout. `server.js` lives in `aka-ai/`, while `package.json` and the installed packages live in `aka-ai/public/`. Node does not look there for imports made by `server.js`. `package.json` also says `"type": "commonjs"` while `server.js` uses JavaScript `import` syntax. Node 22 can detect the import syntax when no package file sits beside the server, which is why the failure appears as a missing package rather than a syntax error.

The prototype reads its AI credential from the environment. That credential is not stored in git. `.env` is listed in `aka-ai/.gitignore`. Do not send confidential company information through this prototype: the server forwards the typed message to an external AI service.

## Working agreement

- One developer, about 16 hours per week. Build a small first release.
- A designer owns the interface. Do not invent a replacement for an approved design.
- Use mock data in prototypes, and label prototype behavior so it is not mistaken for production behavior.
- Do not build future modules (production, calendar, approvals, files, chat, notifications, CRM, HR, leave, finance, workflow automation) before they are approved.
- Security and approved requirements come before new features.
