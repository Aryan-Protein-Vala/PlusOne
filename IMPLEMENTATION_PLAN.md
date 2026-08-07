# PlusOne implementation plan

PlusOne is being built as a marketplace where people can find someone for any lawful social plan and earn money by meeting new people. The first launch market is India so we can validate the complete product flow, safety operations, and payments before expanding worldwide. The data model remains ready for future countries.

## Delivery order

### Step 1 — Backend foundation (current)
- Define the marketplace data model beyond profiles, plans, and applications.
- Add listings, bookings, messages, reviews, reports, verification requests, wallet transactions, and notifications.
- Add worldwide profile fields: country, timezone, preferred currency, and phone.
- Add database constraints, status transitions, indexes, and row-level security.
- Protect roles and prevent users from promoting themselves to admin.

### Step 2 — Authentication and account reliability
- Make signup, email confirmation, login, logout, password reset, and session refresh reliable.
- Create/repair profiles safely after signup.
- Replace email-based admin checks with database-backed authorization.
- Add server-side input validation and consistent error responses.

### Step 3 — Real Explore and Earn data
- Replace mock providers and listings with Supabase queries.
- Create and manage provider listings.
- Add search, city/country filters, availability, pagination, and empty/error states.
- Keep the same responsive frontend style.

### Step 4 — End-to-end marketplace flow
- Customer creates or books a plan.
- Provider applies or accepts.
- Both parties see a booking.
- Messaging becomes available after a valid match.
- Booking can be completed, cancelled, reviewed, or reported.

### Step 5 — Payments and wallet
- Add a payment provider abstraction rather than hard-coding an India-only provider.
- Store all money with an amount and ISO currency.
- Verify payment webhooks server-side.
- Add refunds, platform fees, provider payouts, and wallet history.

### Step 6 — Trust, safety, and moderation
- Verification workflow and secure document handling.
- Block/report, moderation queue, admin audit log, dispute handling, and emergency guidance.
- Enforce lawful social activities and prohibit sexual services, minors, illegal activity, harassment, and off-platform payment pressure.

### Step 7 — Production quality
- Remove mock data from live screens.
- Add automated tests for RLS and booking state transitions.
- Fix lint errors and production build warnings.
- Add observability, backups, rate limits, abuse prevention, and internationalization.

## India-first launch requirements

- Launch records are constrained to country code `IN` and currency `INR` by migration `00004_india_launch_constraints.sql`.
- Store timestamps as `timestamptz` and render them in the user's timezone.
- Store country and timezone separately from city.
- Support Indian phone numbers without hardcoding a single city.
- Build payment, refund, payout, tax, age, verification, and safety flows for India first.
- Keep country and currency fields in the schema so international expansion does not require a rewrite.

The UI will continue to use the current PlusOne visual language. Product scope remains broad within India: **Find someone for any plan** and **earn money by meeting new people**.
