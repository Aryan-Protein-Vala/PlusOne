# PlusOne implementation plan

PlusOne is being built as a worldwide marketplace where people can find someone for any lawful social plan and earn money by meeting new people. The product will support international users, currencies, time zones, languages, and local safety requirements.

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

## Worldwide requirements

- Store timestamps as `timestamptz` and render them in the user's timezone.
- Store prices with an ISO 4217 currency code; never assume INR.
- Store country and timezone separately from city.
- Do not use phone-number formats or payment providers that only work in one country.
- Localize legal, tax, payout, age, verification, and safety requirements before launch in each country.

The UI will continue to use the current PlusOne visual language. Product scope is intentionally kept broad for now; market focus can be decided after the complete product flow is working.
