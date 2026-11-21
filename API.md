# API — MEMENTO OS

**Status:** Prototype endpoint only. No MEMENTO OS contract exists. 2026-11-21.

## Prototype endpoint

This endpoint belongs to the AKA AI chat prototype. It is not part of MEMENTO OS.

`POST /api/chat`

Request body:

```json
{ "message": "text" }
```

| Case | Status | Body |
| --- | --- | --- |
| `message` is a non-empty string | 200 | `{ "reply": "text from the external AI service" }` |
| `message` is missing, not a string, or blank | 400 | `{ "error": "Please enter a message." }` |
| The server or the external service fails | 500 | `{ "error": "Something went wrong." }` |

There is no authentication on this route. The server must be running to call it. On 2026-11-21 the server did not start; see [README.md](README.md). The behavior above is read from `aka-ai/server.js`, not from a live request.

## MEMENTO OS contract

No MEMENTO OS endpoint is approved. Do not add routes until the feature they serve has approved requirements.

When endpoints are added, use these rules:

- REST paths grouped by resource, with consistent names.
- Validate and sanitize every input on the server.
- Require a session for every route except the approved sign-in and public health routes.
- Check role, project, and record permissions on the server for every read and write.
- Use centralized error handling and correct HTTP status codes.
- Paginate collections.
- Document each new endpoint in this file in the same change that adds it: method, path, who may call it, request body, response body, and error cases.
- Mark prototype routes that return mock data so clients do not treat them as production.

## Suggested error shape for the future API

Not implemented. Recorded so the first real endpoint does not invent a second style:

```json
{ "error": { "code": "SHORT_CODE", "message": "What the client can show." } }
```

Details that help an attacker, including stack traces and database errors, stay in server logs and stay out of the response.
