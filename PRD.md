# Product requirements — MEMENTO OS

**Status:** Draft baseline, 2026-11-21.

This file records only the product direction already stated for MEMENTO OS. It is not a signed specification. Detailed business rules are not approved yet. Do not treat the open items at the bottom as decisions.

## Product

MEMENTO OS is an internal web application for MEMENTO VIVERE LLC. It should be the single source of truth for day-to-day company operations.

## Objective

Give the company one secure, maintainable system that improves:

- Project and task management
- Employee collaboration
- Production workflows
- Internal communication
- Project progress visibility
- Deadline management
- Reporting and analytics
- Management decision-making

Production workflows and internal communication beyond task comments are named as goals. They are not part of the first release unless a later approval adds them. See the module lists below.

## Users

The system is for people inside the company. Two audiences are named, without a permission matrix:

- Employees who do the work and collaborate on it
- Managers who need progress, deadlines, and reports in order to make decisions

Exact roles, and what each role may see or change, are not approved.

## First release

The first release should stay small enough for one developer working about 16 hours per week.

Approved module names:

1. Authentication
2. Employee accounts and permissions
3. Dashboard
4. Project management
5. Task management
6. Task status and progress tracking
7. Comments and collaboration
8. Downloadable reports

Each name is a scope boundary, not a finished workflow. Screens, fields, and business rules for these modules still need approval. The interface must follow the designer's approved Figma file once that file exists. There is no design file in this repository.

## Explicitly later

Do not build these until they are approved and prioritized:

- Production management
- Calendar
- Approvals
- File management
- Internal chat
- Notifications
- CRM
- Human resources
- Leave management
- Finance management
- Workflow automation

## Product constraints

- Prefer a working first release over extra features.
- Use affordable, maintainable technology. The approved stack is listed in [README.md](README.md) and [ARCHITECTURE.md](ARCHITECTURE.md).
- Use mock data while a feature is still a prototype, and say so in the interface and the documentation.
- Keep prototype behavior separate from production behavior.
- Do not add business behavior that has not been approved.

## Success for the first release

A person with an approved role can sign in, see the work they are allowed to see, follow a project and its tasks through an approved status flow, comment on that work, and download an approved report. The server, not the browser, enforces who can do each of those things.

That sentence is the intended outcome. The status flow, the report contents, and the role list are still open.

## Open product questions

These must be answered before implementation. They are also listed in [ROADMAP.md](ROADMAP.md).

1. Is this repository the home of MEMENTO OS? The only application code today is the AKA AI chat prototype.
2. Which roles exist, and what may each role view, create, edit, and delete?
3. What is a project in this company, and what is a task? What statuses are allowed, and who may change them?
4. Which reports are required, what do they contain, and what file format should download produce?
5. Where is the approved Figma design, PRD, or business-rule list if one already exists outside this repository?
6. What employee information is allowed to appear in the product, and what must stay hidden?
