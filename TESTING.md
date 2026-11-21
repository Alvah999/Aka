# Testing — MEMENTO OS

**Status:** No MEMENTO OS tests exist. The prototype has no test suite. 2026-11-21.

## What was run on 2026-11-21

| Check | Result |
| --- | --- |
| `node server.js` in `aka-ai/` | Failed. `dotenv` could not be resolved. |
| `npm install` in `aka-ai/public/` | Succeeded. npm reported 0 known vulnerabilities in that tree. |
| `node server.js` in `aka-ai/` after that install | Failed with the same missing-package error. |
| `npm test` | Not run. `aka-ai/public/package.json` defines `test` as a script that prints an error and exits 1. There are no test files. |
| MEMENTO OS typecheck, lint, and build | Not run. Those projects do not exist. |

The chat page was not opened in a browser. The server never reached a listening state, so there was no page to exercise.

## Required coverage once features exist

Each finished feature needs tests appropriate to its risk:

- Business rules (pure functions and services)
- API endpoints, including validation failures and status codes
- Authentication and authorization, including a user who must be rejected
- Database operations that the feature claims to perform
- Project and task workflows named in the acceptance criteria
- Report generation, once a report is specified
- Critical paths a person actually takes through the screens

A feature is not done because the happy path rendered once. It is done when its acceptance criteria pass.

## How to keep tests honest

- Test the server's permission checks. A hidden button is not a passing authorization test.
- Use a separate test database. Do not point tests at a database that holds company data.
- Label tests that run against mock data so a passing mock is not described as a production integration.
- Do not claim a check passed unless this file or the change notes record the command and the result.

## First tests to add

Add the first automated test with the first real feature, not before. The first likely target is authentication: rejected sign-in, accepted sign-in, and a protected route that rejects a missing session. That target waits on an approved authentication design.
