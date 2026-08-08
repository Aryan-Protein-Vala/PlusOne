-- PlusOne Phase 1 launch configuration: India only.
-- The schema stays expansion-ready, but all newly created marketplace records
-- are constrained to India until international operations are deliberately enabled.

ALTER TABLE public.profiles
  ALTER COLUMN country_code SET DEFAULT 'IN',
  ALTER COLUMN preferred_currency SET DEFAULT 'INR';

ALTER TABLE public.profiles
  DROP CONSTRAINT IF EXISTS profiles_country_code_check,
  ADD CONSTRAINT profiles_country_code_check CHECK (country_code IS NULL OR country_code = 'IN'),
  DROP CONSTRAINT IF EXISTS profiles_preferred_currency_check,
  ADD CONSTRAINT profiles_preferred_currency_check CHECK (preferred_currency = 'INR');

ALTER TABLE public.plans
  ADD COLUMN IF NOT EXISTS country_code TEXT NOT NULL DEFAULT 'IN',
  ADD COLUMN IF NOT EXISTS currency TEXT NOT NULL DEFAULT 'INR';

ALTER TABLE public.plans
  DROP CONSTRAINT IF EXISTS plans_country_code_check,
  ADD CONSTRAINT plans_country_code_check CHECK (country_code = 'IN'),
  DROP CONSTRAINT IF EXISTS plans_currency_check,
  ADD CONSTRAINT plans_currency_check CHECK (currency = 'INR');

ALTER TABLE public.provider_listings
  DROP CONSTRAINT IF EXISTS provider_listings_country_code_check,
  ADD CONSTRAINT provider_listings_country_code_check CHECK (country_code = 'IN'),
  DROP CONSTRAINT IF EXISTS provider_listings_currency_check,
  ADD CONSTRAINT provider_listings_currency_check CHECK (currency = 'INR');

ALTER TABLE public.bookings
  DROP CONSTRAINT IF EXISTS bookings_currency_check,
  ADD CONSTRAINT bookings_currency_check CHECK (currency = 'INR');

ALTER TABLE public.wallet_transactions
  DROP CONSTRAINT IF EXISTS wallet_transactions_currency_check,
  ADD CONSTRAINT wallet_transactions_currency_check CHECK (currency = 'INR');

CREATE INDEX IF NOT EXISTS plans_india_discovery_idx
  ON public.plans (country_code, status, start_time);

-- Keep this launch restriction centralized and easy to remove in the future.
CREATE TABLE IF NOT EXISTS public.launch_config (
  id BOOLEAN PRIMARY KEY DEFAULT TRUE CHECK (id),
  country_code TEXT NOT NULL DEFAULT 'IN' CHECK (country_code = 'IN'),
  currency TEXT NOT NULL DEFAULT 'INR' CHECK (currency = 'INR'),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO public.launch_config (id, country_code, currency)
VALUES (TRUE, 'IN', 'INR')
ON CONFLICT (id) DO UPDATE SET updated_at = NOW();

ALTER TABLE public.launch_config ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Launch config is publicly readable"
  ON public.launch_config FOR SELECT USING (true);
