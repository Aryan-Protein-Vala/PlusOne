# PlusOne

PlusOne is an India-first marketplace to find someone for any lawful plan and earn money by meeting new people. The frontend uses the existing PlusOne light/editorial visual system; the backend uses Next.js server actions and Supabase Auth/Postgres.

## Setup

```bash
npm ci
cp ../.env.example .env.local
npm run dev
```

Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`. Never put a Supabase service-role key in the browser, repository, or `.env.local` used by the client.

## Database

Run the migrations in order in Supabase SQL Editor:

1. `supabase/migrations/00001_initial_schema.sql`
2. `supabase/migrations/00002_fix_trigger.sql`
3. `supabase/migrations/00003_marketplace_foundation.sql`
4. `supabase/migrations/00004_india_launch_constraints.sql`
5. `supabase/migrations/00005_booking_integrity.sql`

The fourth migration configures the initial launch for India and INR. The schema retains country, timezone, and currency fields so international expansion can be enabled later without redesigning the marketplace.

To enable the hidden admin dashboard, set the founder's `profiles.role` to `admin` from a trusted Supabase SQL session. Do not allow the user-facing signup form to set this role.

## Current backend actions

Marketplace actions live in `src/app/marketplace/actions.ts` and cover listings, bookings, booking responses, messages, reviews, and reports. The remaining UI screens are being moved from mock data to these actions incrementally while preserving the existing styling.
