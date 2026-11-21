# Database — MEMENTO OS

**Status:** No schema is approved or implemented. 2026-11-21.

MEMENTO OS has no database. The AKA AI prototype does not store messages, users, or files.

## Approved rules

These rules apply when a schema is eventually approved. They do not create tables by themselves.

- Document the entity-relationship diagram in this file when tables exist.
- Every table has a primary key. Relationships use foreign keys that the database enforces.
- Use Prisma migrations for every structural change. Do not edit the production database by hand.
- Local demos may use SQLite. Production uses PostgreSQL. Design the schema so it can run on both, and call out anything SQLite cannot enforce.
- Add `createdAt` and `updatedAt` on records that change over time.
- Add an index when a real query needs it (for example, listing tasks by project). Do not add indexes for every column in advance.
- Use a transaction when several writes must succeed or fail together.
- Security-relevant actions get an audit record. The exact action list is not approved yet.
- Do not delete production data, and do not run a destructive migration, without explicit approval.
- A backup and recovery procedure must exist before production deployment. See [DEPLOYMENT.md](DEPLOYMENT.md).

## What is intentionally absent

No `User`, `Project`, `Task`, `Comment`, or `Report` table is defined here. Naming those tables without approved fields would invent business rules. The first schema should be written only for the first feature that has approved fields, roles, and acceptance criteria.

## Sensitive data

Employee and financial data need least-privilege access. Finance is not in the first release. Even so, employee account fields must be chosen deliberately: store only what a feature needs, and do not return sensitive fields from APIs that do not need them.
