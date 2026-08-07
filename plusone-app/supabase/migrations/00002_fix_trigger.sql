-- Replace the handle_new_user trigger to be completely indestructible.
-- This ensures that if any metadata is missing, it falls back gracefully without throwing a Postgres error.

CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, name, city, role)
  VALUES (
    new.id, 
    COALESCE(new.email, ''), 
    COALESCE(new.raw_user_meta_data->>'full_name', split_part(COALESCE(new.email, 'unknown@example.com'), '@', 1)),
    COALESCE(new.raw_user_meta_data->>'city', ''),
    'customer'::user_role
  );
  RETURN new;
EXCEPTION
  WHEN OTHERS THEN
    -- If there's an error, still return new so the user is created in auth.users
    -- We can manually sync them later if needed.
    RAISE LOG 'Error in handle_new_user for user %: %', new.id, SQLERRM;
    RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
