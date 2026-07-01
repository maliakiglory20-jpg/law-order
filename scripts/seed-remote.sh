#!/usr/bin/env bash
# Seed a REMOTE database (e.g. the Render Postgres) with all content:
# users, 35 litigation types, 175 cases, 476 glossary terms, 87 statutes.
#
# The production backend image ships without dev deps (no ts-node), so the seed
# is run from your machine against the database's EXTERNAL connection string.
#
# Usage:
#   ./scripts/seed-remote.sh "postgresql://user:pass@host:5432/dbname?sslmode=require"
# or:
#   DATABASE_URL="postgresql://..." ./scripts/seed-remote.sh
set -euo pipefail

DB_URL="${1:-${DATABASE_URL:-}}"
if [ -z "$DB_URL" ]; then
  echo "Error: pass the external DATABASE_URL as an argument or env var." >&2
  echo "Find it in the Render dashboard → your database → 'External Database URL'." >&2
  exit 1
fi

cd "$(dirname "$0")/../backend"

echo "→ Generating Prisma client..."
DATABASE_URL="$DB_URL" npx prisma generate >/dev/null

echo "→ Applying migrations (in case the service hasn't yet)..."
DATABASE_URL="$DB_URL" npx prisma migrate deploy

echo "→ Seeding content..."
DATABASE_URL="$DB_URL" npm run prisma:seed

echo "✓ Remote database seeded."
