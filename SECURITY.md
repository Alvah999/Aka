# Security — MEMENTO OS

**Status:** Standards approved. Controls are not implemented because the application is not built. Prototype findings below were checked against the current code on 2026-11-21.

## Standards

Follow OWASP guidance and least privilege.

The server must protect against:

- SQL injection. Use Prisma queries and parameters. Do not build SQL by concatenating input.
- Cross-site scripting. Escape output in React, and do not inject raw HTML from users.
- Cross-site request forgery. Session cookies need CSRF protection once cookie authentication exists.
- Broken access control. Check authentication and authorization on the server for every project and every record.
- Authentication weaknesses. Hash passwords with a current password-hashing algorithm, use HTTP-only session cookies, and do not put session tokens in local storage.
- Sensitive data exposure. Do not return employee or financial fields a caller does not need. Do not put secrets in the frontend bundle.
- Malicious uploads. File upload is not in the first release. When it is approved, restrict type and size and store files outside the web root.
- Insecure API access. No anonymous access to company data.

Additional rules:

- Secrets live in environment variables. Never hard-code them and never commit `.env`.
- Do not send confidential company data to an external AI service without authorization.
- Review dependencies for known vulnerabilities when they change.
- Keep security-relevant audit logs. Who may read them is not approved yet.
- Frontend checks are for usability only. They are not the security control.

## Prototype findings

These apply to `aka-ai/`, not to a MEMENTO OS build.

| Finding | Evidence | Impact |
| --- | --- | --- |
| The chat route has no authentication or rate limit. | `app.post("/api/chat")` in `aka-ai/server.js` checks only that `message` is a non-empty string. | Anyone who can reach a running server can spend the external AI credential and send arbitrary text to that service. |
| Message length is not limited. | The same handler. | A large body can create a large external request and a large response. |
| The server does not start from a normal install. | `npm install` in `aka-ai/public/` then `node server.js` in `aka-ai/` fails with `ERR_MODULE_NOT_FOUND` for `dotenv`. Verified 2026-11-21 on Node.js 22. | The unsafe route is not reachable until the layout is fixed. The finding still matters before anyone "fixes" startup. |
| The credential is loaded from the environment, and `.env` is gitignored. | `import "dotenv/config"` and `aka-ai/.gitignore`. | This part is the right pattern. The key was not present in the repository. |
| Unexpected failures return a generic message. | HTTP 500 body is `{ "error": "Something went wrong." }`. The server logs `error.message`. | Responses do not include a stack trace. Logs can still contain upstream details, so log access should stay limited. |
| Dependency audit of the declared tree reported no known vulnerabilities. | `npm install` in `aka-ai/public/` on 2026-11-21. | This is a point-in-time result for that tree only. It does not mean the prototype is safe to expose. |

No exploit was developed while checking these findings. The prototype should stay on a local machine. It should not be deployed, and it should not receive confidential company data.

## MEMENTO OS security work still open

- Choose the password hashing library when authentication is designed.
- Choose the session store and cookie flags (`HttpOnly`, `Secure`, `SameSite`) when authentication is designed.
- Write the permission matrix with the role decisions in [ROADMAP.md](ROADMAP.md).
- Define the audit events.
- Add dependency review to the workflow that introduces MEMENTO OS packages. There is no MEMENTO OS package file yet.
