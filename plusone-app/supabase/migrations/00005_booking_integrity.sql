-- Prevent double acceptance of one plan. A cancelled booking can be recreated,
-- but there may only be one active booking per plan.
CREATE UNIQUE INDEX IF NOT EXISTS one_active_booking_per_plan
  ON public.bookings (plan_id)
  WHERE plan_id IS NOT NULL
    AND status NOT IN ('cancelled', 'declined');

-- Helpful constraints for real production data.
ALTER TABLE public.plan_applications
  DROP CONSTRAINT IF EXISTS plan_applications_proposed_rate_check,
  ADD CONSTRAINT plan_applications_proposed_rate_check CHECK (proposed_rate IS NULL OR proposed_rate > 0);

CREATE INDEX IF NOT EXISTS plan_applications_plan_status_idx
  ON public.plan_applications (plan_id, status, created_at DESC);
