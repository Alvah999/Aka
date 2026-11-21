# Roadmap — MEMENTO OS

**Status:** Phase 2, requirements analysis. Updated 2026-11-21.

## How work proceeds

1. Research
2. Requirements analysis
3. System planning
4. Architecture design
5. UI/UX handoff
6. Database design
7. Frontend development
8. Backend development
9. API integration
10. Testing
11. Deployment
12. Maintenance and improvement

Work is iterative after the first release starts: one feature at a time, each feature testable on its own. One developer, about 16 hours per week. Do not run several product modules in parallel.

## Where the project is

| Phase | State |
| --- | --- |
| 1. Research | Repository inspected. The only product code is the AKA AI chat prototype. No issues or pull requests were open. No prior project documents existed. |
| 2. Requirements analysis | In progress. Approved module names and engineering rules are recorded in [PRD.md](PRD.md) and [SRS.md](SRS.md). Business workflows are not approved. |
| 3. System planning | Not started. Blocked on the questions below. |
| 4. Architecture design | Target shape is written in [ARCHITECTURE.md](ARCHITECTURE.md) as an approved direction. The application folders are not created. |
| 5. UI/UX handoff | No Figma or other design file is in the repository. |
| 6–12 | Not started. |

## First release, after the blockers clear

Build in this order so later features have something real to attach to:

1. Repository skeleton for the approved stack, with typecheck and a passing empty test command
2. Authentication and employee accounts, including server-side permissions
3. Projects and tasks, including status and progress
4. Comments
5. Dashboard
6. One downloadable report

Dashboard and reports come after the data they display exists. Each step still needs its own acceptance criteria before coding.

Future modules stay off this list until they are approved.

## Decisions needed before the next code change

Please answer these in the pull request, in this file, or in a follow-up. Implementation should wait.

1. **Repository.** Should MEMENTO OS be built in this repository beside `aka-ai/`, or in a new repository? Should the chat prototype be fixed, left as-is, or removed?
2. **Existing specifications.** Is there an approved PRD, business-rule list, or Figma file outside this repository? If yes, where should the developer put it?
3. **Roles.** Which roles exist in the first release, and what may each role do?
4. **Projects and tasks.** What fields and statuses are required? Who may change status? How is progress represented?
5. **Comments.** Are comments on tasks, projects, or both? Can the author edit or delete them?
6. **Reports.** Which report, which columns, and which file format?
7. **Sensitive data.** Which employee fields are allowed in the first release?
8. **Hosting.** Are there security, budget, backup, or data-location limits that the later hosting choice must meet?

## This run did not

- Scaffold React, Express, Prisma, or authentication
- Invent database tables or API routes for MEMENTO OS
- Change `aka-ai/` behavior
- Deploy anything
