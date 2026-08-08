-- PlusOne marketplace foundation
-- Worldwide-safe money, time, profile, trust, communication, and booking primitives.
-- This migration intentionally does not process payments; it stores the records needed
-- for a later payment provider integration.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS phone TEXT,
  ADD COLUMN IF NOT EXISTS country_code TEXT,
  ADD COLUMN IF NOT EXISTS timezone TEXT NOT NULL DEFAULT 'UTC',
  ADD COLUMN IF NOT EXISTS preferred_currency TEXT NOT NULL DEFAULT 'USD',
  ADD COLUMN IF NOT EXISTS languages TEXT[] NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS is_verified BOOLEAN NOT NULL DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS trust_score NUMERIC(5,2) NOT NULL DEFAULT 0;

ALTER TABLE public.profiles
  DROP CONSTRAINT IF EXISTS profiles_country_code_check,
  ADD CONSTRAINT profiles_country_code_check CHECK (country_code IS NULL OR country_code ~ '^[A-Z]{2}$'),
  DROP CONSTRAINT IF EXISTS profiles_preferred_currency_check,
  ADD CONSTRAINT profiles_preferred_currency_check CHECK (preferred_currency ~ '^[A-Z]{3}$'),
  DROP CONSTRAINT IF EXISTS profiles_trust_score_check,
  ADD CONSTRAINT profiles_trust_score_check CHECK (trust_score >= 0 AND trust_score <= 100);

-- Never allow a normal user to promote themselves to host/admin or change another role.
CREATE OR REPLACE FUNCTION public.prevent_role_escalation()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF TG_OP = 'UPDATE'
     AND OLD.role IS DISTINCT FROM NEW.role
     AND COALESCE(current_setting('request.jwt.claim.role', true), '') <> 'service_role' THEN
    IF auth.uid() IS NULL OR auth.uid() <> OLD.id THEN
      RAISE EXCEPTION 'Only the account owner or service role can change a profile role';
    END IF;
    IF OLD.role <> 'admin' OR NEW.role = 'admin' THEN
      RAISE EXCEPTION 'Profile roles are managed by PlusOne administrators';
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS protect_profile_role ON public.profiles;
CREATE TRIGGER protect_profile_role
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.prevent_role_escalation();

CREATE TABLE IF NOT EXISTS public.provider_listings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  host_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL CHECK (char_length(title) BETWEEN 3 AND 120),
  description TEXT NOT NULL CHECK (char_length(description) BETWEEN 10 AND 4000),
  category TEXT NOT NULL,
  city TEXT NOT NULL,
  country_code TEXT NOT NULL CHECK (country_code ~ '^[A-Z]{2}$'),
  timezone TEXT NOT NULL DEFAULT 'UTC',
  hourly_rate NUMERIC(12,2) NOT NULL CHECK (hourly_rate > 0),
  currency TEXT NOT NULL DEFAULT 'USD' CHECK (currency ~ '^[A-Z]{3}$'),
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'paused', 'archived')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_id UUID REFERENCES public.plans(id) ON DELETE SET NULL,
  listing_id UUID REFERENCES public.provider_listings(id) ON DELETE SET NULL,
  customer_id UUID NOT NULL REFERENCES public.profiles(id),
  host_id UUID NOT NULL REFERENCES public.profiles(id),
  starts_at TIMESTAMPTZ NOT NULL,
  ends_at TIMESTAMPTZ NOT NULL,
  location TEXT NOT NULL,
  amount NUMERIC(12,2) NOT NULL CHECK (amount >= 0),
  currency TEXT NOT NULL DEFAULT 'USD' CHECK (currency ~ '^[A-Z]{3}$'),
  platform_fee NUMERIC(12,2) NOT NULL DEFAULT 0 CHECK (platform_fee >= 0),
  provider_payout NUMERIC(12,2) NOT NULL DEFAULT 0 CHECK (provider_payout >= 0),
  status TEXT NOT NULL DEFAULT 'requested' CHECK (status IN ('requested', 'accepted', 'declined', 'paid', 'in_progress', 'completed', 'cancelled', 'disputed', 'no_show')),
  payment_status TEXT NOT NULL DEFAULT 'unpaid' CHECK (payment_status IN ('unpaid', 'pending', 'paid', 'partially_refunded', 'refunded', 'failed')),
  cancellation_reason TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CHECK (ends_at > starts_at),
  CHECK (provider_payout + platform_fee <= amount)
);

CREATE TABLE IF NOT EXISTS public.conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID NOT NULL UNIQUE REFERENCES public.bookings(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID NOT NULL REFERENCES public.conversations(id) ON DELETE CASCADE,
  sender_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  body TEXT NOT NULL CHECK (char_length(body) BETWEEN 1 AND 5000),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  read_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID NOT NULL REFERENCES public.bookings(id) ON DELETE CASCADE,
  reviewer_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  reviewed_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment TEXT CHECK (comment IS NULL OR char_length(comment) <= 4000),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (booking_id, reviewer_id),
  CHECK (reviewer_id <> reviewed_id)
);

CREATE TABLE IF NOT EXISTS public.reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reporter_id UUID NOT NULL REFERENCES public.profiles(id),
  reported_user_id UUID REFERENCES public.profiles(id),
  booking_id UUID REFERENCES public.bookings(id) ON DELETE SET NULL,
  category TEXT NOT NULL CHECK (category IN ('safety', 'harassment', 'fraud', 'prohibited_activity', 'spam', 'other')),
  details TEXT NOT NULL CHECK (char_length(details) BETWEEN 10 AND 5000),
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'investigating', 'resolved', 'dismissed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  resolved_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS public.verification_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  verification_type TEXT NOT NULL CHECK (verification_type IN ('phone', 'identity', 'selfie', 'social')),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'expired')),
  provider_reference TEXT,
  rejection_reason TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  reviewed_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS public.wallet_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  booking_id UUID REFERENCES public.bookings(id) ON DELETE SET NULL,
  type TEXT NOT NULL CHECK (type IN ('earning', 'platform_fee', 'payout', 'refund', 'adjustment')),
  amount NUMERIC(12,2) NOT NULL CHECK (amount >= 0),
  currency TEXT NOT NULL DEFAULT 'USD' CHECK (currency ~ '^[A-Z]{3}$'),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'reversed')),
  external_reference TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  link TEXT,
  read_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS provider_listings_discovery_idx ON public.provider_listings (country_code, city, category, status);
CREATE INDEX IF NOT EXISTS provider_listings_host_idx ON public.provider_listings (host_id, status);
CREATE INDEX IF NOT EXISTS bookings_customer_idx ON public.bookings (customer_id, created_at DESC);
CREATE INDEX IF NOT EXISTS bookings_host_idx ON public.bookings (host_id, created_at DESC);
CREATE INDEX IF NOT EXISTS messages_conversation_idx ON public.messages (conversation_id, created_at);
CREATE INDEX IF NOT EXISTS reports_status_idx ON public.reports (status, created_at DESC);
CREATE INDEX IF NOT EXISTS notifications_user_idx ON public.notifications (user_id, read_at, created_at DESC);

ALTER TABLE public.provider_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verification_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wallet_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- Admin helper: SECURITY DEFINER avoids recursive profile RLS checks.
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin');
$$;

DROP POLICY IF EXISTS "Published listings are public" ON public.provider_listings;
CREATE POLICY "Published listings are public" ON public.provider_listings FOR SELECT USING (status = 'published' OR host_id = auth.uid() OR public.is_admin());
CREATE POLICY "Hosts manage their listings" ON public.provider_listings FOR INSERT WITH CHECK (host_id = auth.uid() AND NOT public.is_admin());
CREATE POLICY "Hosts update their listings" ON public.provider_listings FOR UPDATE USING (host_id = auth.uid() OR public.is_admin()) WITH CHECK (host_id = auth.uid() OR public.is_admin());
CREATE POLICY "Hosts delete their listings" ON public.provider_listings FOR DELETE USING (host_id = auth.uid() OR public.is_admin());

CREATE POLICY "Booking participants can view bookings" ON public.bookings FOR SELECT USING (customer_id = auth.uid() OR host_id = auth.uid() OR public.is_admin());
CREATE POLICY "Customers create bookings" ON public.bookings FOR INSERT WITH CHECK (customer_id = auth.uid() AND customer_id <> host_id);
CREATE OR REPLACE FUNCTION public.prevent_booking_party_change()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  IF OLD.customer_id IS DISTINCT FROM NEW.customer_id OR OLD.host_id IS DISTINCT FROM NEW.host_id THEN
    RAISE EXCEPTION 'Booking participants cannot be changed';
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS protect_booking_parties ON public.bookings;
CREATE TRIGGER protect_booking_parties
  BEFORE UPDATE ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION public.prevent_booking_party_change();

CREATE POLICY "Participants update bookings" ON public.bookings FOR UPDATE USING (customer_id = auth.uid() OR host_id = auth.uid() OR public.is_admin()) WITH CHECK (customer_id = auth.uid() OR host_id = auth.uid() OR public.is_admin());

CREATE POLICY "Conversation participants can view" ON public.conversations FOR SELECT USING (public.is_admin() OR EXISTS (SELECT 1 FROM public.bookings b WHERE b.id = booking_id AND (b.customer_id = auth.uid() OR b.host_id = auth.uid())));
CREATE POLICY "Booking participants create conversations" ON public.conversations FOR INSERT WITH CHECK (EXISTS (SELECT 1 FROM public.bookings b WHERE b.id = booking_id AND (b.customer_id = auth.uid() OR b.host_id = auth.uid())));
CREATE POLICY "Conversation participants view messages" ON public.messages FOR SELECT USING (sender_id = auth.uid() OR EXISTS (SELECT 1 FROM public.conversations c JOIN public.bookings b ON b.id = c.booking_id WHERE c.id = conversation_id AND (b.customer_id = auth.uid() OR b.host_id = auth.uid())));
CREATE POLICY "Conversation participants send messages" ON public.messages FOR INSERT WITH CHECK (sender_id = auth.uid() AND EXISTS (SELECT 1 FROM public.conversations c JOIN public.bookings b ON b.id = c.booking_id WHERE c.id = conversation_id AND (b.customer_id = auth.uid() OR b.host_id = auth.uid())));

CREATE POLICY "Reviews are public" ON public.reviews FOR SELECT USING (true);
CREATE POLICY "Completed booking participants review" ON public.reviews FOR INSERT WITH CHECK (reviewer_id = auth.uid() AND EXISTS (SELECT 1 FROM public.bookings b WHERE b.id = booking_id AND b.status = 'completed' AND (b.customer_id = auth.uid() OR b.host_id = auth.uid()) AND reviewed_id IN (b.customer_id, b.host_id)));
CREATE POLICY "Review authors update reviews" ON public.reviews FOR UPDATE USING (reviewer_id = auth.uid() OR public.is_admin());

CREATE POLICY "Users create reports" ON public.reports FOR INSERT WITH CHECK (reporter_id = auth.uid());
CREATE POLICY "Reporters view their reports" ON public.reports FOR SELECT USING (reporter_id = auth.uid() OR public.is_admin());
CREATE POLICY "Admins manage reports" ON public.reports FOR UPDATE USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY "Users view their verification" ON public.verification_requests FOR SELECT USING (user_id = auth.uid() OR public.is_admin());
CREATE POLICY "Users submit verification" ON public.verification_requests FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "Admins review verification" ON public.verification_requests FOR UPDATE USING (public.is_admin()) WITH CHECK (public.is_admin());

CREATE POLICY "Users view wallet" ON public.wallet_transactions FOR SELECT USING (user_id = auth.uid() OR public.is_admin());
CREATE POLICY "Admins manage wallet" ON public.wallet_transactions FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "Users view notifications" ON public.notifications FOR SELECT USING (user_id = auth.uid() OR public.is_admin());
CREATE POLICY "Users mark notifications read" ON public.notifications FOR UPDATE USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());

ALTER PUBLICATION supabase_realtime ADD TABLE public.provider_listings;
ALTER PUBLICATION supabase_realtime ADD TABLE public.bookings;
ALTER PUBLICATION supabase_realtime ADD TABLE public.messages;
ALTER PUBLICATION supabase_realtime ADD TABLE public.notifications;
