# Architecture — MEMENTO OS

**Status:** Current system recorded. Target architecture approved in principle, not built. 2026-11-21.

## What exists today

```
aka-ai/
  server.js          Express server, JavaScript, started with Node
  public/
    index.html       Chat page
    script.js        Browser code that calls /api/chat
    style.css        Page styles
    package.json     Dependency list (express, dotenv, openai)
```

Request path:

1. The browser loads static files from `public/`.
2. The page sends the typed text as JSON to `POST /api/chat`.
3. The server checks that the body contains a non-empty string.
4. The server sends that string to an external AI service and returns the text reply.
5. Failures return HTTP 400 for a bad message and HTTP 500 with a generic error for anything else.

This path is a prototype. It has no accounts, no database, no sessions, and no MEMENTO OS modules. It also does not match the approved stack: the server is plain JavaScript, the page is not React, and there is no TypeScript, Vite, Tailwind, router, or data-fetching library.

A layout problem stops the server from starting. Details and the verification note are in [README.md](README.md) and [SECURITY.md](SECURITY.md).

## Target architecture

Build one application with three layers. Do not split it into microservices.

```
apps/web     React + TypeScript + Vite
apps/api     Express + TypeScript
prisma/      Schema, migrations, and the database client
```

Inside `apps/web` and `apps/api`, group files by business feature (authentication, employees, projects, tasks, comments, reports) instead of grouping every controller in one pile and every page in another. Shared UI pieces that are not tied to one feature live in a components folder.

Each feature on the server should keep these responsibilities separate when the feature is large enough to need it:

| Piece | Responsibility |
| --- | --- |
| Route | URL, HTTP method, and which controller runs |
| Controller | Read the request, call the service, choose the status code |
| Service | Business rules |
| Data access | Prisma queries |

Small features can keep this split light. The split exists so routing and page layout do not become the place where business rules hide.

The browser talks only to the REST API. The API talks to the database. The browser does not open the database.

Proposed request path for a future feature:

1. React route renders the screen from the approved design.
2. TanStack Query calls a documented REST endpoint.
3. Express middleware checks the session cookie.
4. The feature service checks that this user may touch this project or record.
5. Prisma reads or writes SQLite locally, or PostgreSQL in production.
6. The response is JSON. Lists that can grow are paginated.

This folder layout is a proposal for the first implementation pass. It is not created yet because no product workflow is approved to put inside it. Creating the empty applications is the first coding step after the open questions in [ROADMAP.md](ROADMAP.md) are answered.

## Rules that keep the system changeable

- A new module gets its own feature folder and its own routes. It should not require rewriting an existing module.
- Shared code must not import from a feature in a cycle. If two features need the same helper, the helper moves to a shared folder.
- API shapes are written down in [API.md](API.md) when they are created.
- Prototype endpoints and mock data stay marked as prototype so they are not confused with production behavior.
- Dependencies are added only when a feature needs them.

## Environments

Local development, staging, and production stay separate. Local demos may use SQLite. Staging and production use PostgreSQL. See [DEPLOYMENT.md](DEPLOYMENT.md).

## Decision log

| Date | Decision | Reason |
| --- | --- | --- |
| 2026-11-21 | Do not scaffold `apps/web` and `apps/api` yet | No approved workflows or design. An empty app would imply the product had started. |
| 2026-11-21 | Leave `aka-ai/` in place | It is the only working-area code in the repository. Replacing it was not approved. It does not currently start; see [README.md](README.md). |
| 2026-11-21 | Keep the approved stack unchanged | No demonstrated need to change it. |
