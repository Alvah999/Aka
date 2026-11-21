# Software requirements — MEMENTO OS

**Status:** Baseline, 2026-11-21. Engineering rules below come from the approved development instructions. Business behavior that is not listed here is not approved.

Requirement ids are stable labels for review. They are not evidence that the behavior exists in code.

## Current system

| ID | Statement | State |
| --- | --- | --- |
| SYS-01 | The repository contains an AKA AI chat prototype under `aka-ai/`. | True today |
| SYS-02 | MEMENTO OS modules are not implemented. | True today |
| SYS-03 | No approved PRD, SRS, business-rule catalog, or Figma design is stored in this repository. | True today |

## Approved product scope

| ID | Statement | State |
| --- | --- | --- |
| FR-01 | The first release is limited to authentication, employee accounts and permissions, dashboard, project management, task management, task status and progress, comments, and downloadable reports. | Approved as a module list. Workflows are not specified. |
| FR-02 | Future modules listed in [PRD.md](PRD.md) must not be implemented before they are approved and prioritized. | Approved |

## Approved engineering requirements

| ID | Statement | State |
| --- | --- | --- |
| NFR-01 | The client uses React, TypeScript, Vite, Tailwind CSS, React Router, and TanStack Query. | Approved, not started |
| NFR-02 | The server uses Node.js, Express.js, TypeScript, and a REST API. | Approved, not started |
| NFR-03 | Local demos may use SQLite. Production uses PostgreSQL. Database access goes through Prisma and migrations. | Approved, not started |
| NFR-04 | Authentication is session-based, passwords are hashed, authorization is role-based, and the session cookie is HTTP-only. | Approved, not started |
| NFR-05 | The first architecture is a modular monolith. Frontend, backend, and database stay separate. Code is organized by business feature. | Approved, not started |
| NFR-06 | Microservices are out of scope unless a later, demonstrated need is approved. | Approved |
| NFR-07 | The server validates and sanitizes input, enforces authentication and authorization, uses centralized error handling, and returns appropriate HTTP status codes. | Approved, not started |
| NFR-08 | The browser must not be treated as the place that enforces permissions. | Approved |
| NFR-09 | Secrets come from environment variables. `.env` files are not committed. Credentials are not hard-coded. | Approved. The prototype already gitignores `.env`. |
| NFR-10 | The system follows the security controls in [SECURITY.md](SECURITY.md). | Approved as a standard, not yet implemented |
| NFR-11 | List and search endpoints that can grow use pagination. Operations that must succeed or fail together use a database transaction. | Approved, not started |
| NFR-12 | Records that need history include `createdAt` and `updatedAt`. Security-relevant actions are written to an audit log. | Approved as a rule. Which actions are security-relevant is not fully listed. |
| NFR-13 | Prototype screens and production screens must be distinguishable. Prototypes may use mock data. | Approved |
| NFR-14 | New modules can be added without rewriting existing modules. | Approved as a design rule |
| NFR-15 | Development, staging, and production are separate environments before production use. | Approved as a rule. Hosting is not chosen. |
| NFR-16 | Behavior changes update the relevant document in this set and [CHANGELOG.md](CHANGELOG.md). | Approved |

## Quality bar for a finished feature

A feature is finished only when its acceptance criteria are met and the checks in [TESTING.md](TESTING.md) that apply to it have been run. Every feature needs a stated business objective, user need, functional requirements, non-functional requirements, roles, acceptance criteria, dependencies, risks, and a development-size note before coding starts.

Acceptance criteria for the eight first-release modules do not exist yet.

## Not specified, and therefore not approved

The following are required before the related feature is built. Do not fill them in by guesswork.

| Topic | What is missing |
| --- | --- |
| Roles | Role names and the actions each role may take on each module |
| Projects | What a project contains, who owns it, and how it starts and ends |
| Tasks | Fields, allowed statuses, who may change status, and how progress is measured |
| Comments | Who can comment, edit, or delete, and whether comments are per task, per project, or both |
| Dashboard | Which facts appear, and for whom |
| Reports | Contents, filters, file format, and who may download |
| Employees | Which profile fields exist, and which of them are sensitive |
| Audit | Which actions must be logged, how long logs are kept, and who may read them |
| Tenancy | Whether all company data is one shared space or is divided by team or project membership |

Project-level and resource-level permissions are required (see [SECURITY.md](SECURITY.md)), but the actual permission matrix is one of the missing items above.
