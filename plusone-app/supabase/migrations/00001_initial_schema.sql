-- 1. Create custom types
CREATE TYPE user_role AS ENUM ('customer', 'host', 'admin');
CREATE TYPE availability_status AS ENUM ('free_now', 'available_today', 'busy', 'offline');
CREATE TYPE plan_status AS ENUM ('open', 'matched', 'completed', 'cancelled');
CREATE TYPE app_status AS ENUM ('pending', 'accepted', 'rejected');

-- 2. Create Profiles table (extends auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  avatar_url TEXT,
  role user_role DEFAULT 'customer',
  availability_status availability_status DEFAULT 'offline',
  bio TEXT,
  hourly_rate NUMERIC,
  city TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public profiles are viewable by everyone." ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can insert their own profile." ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update their own profile." ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- 3. Create Plans table (The Bidirectional Marketplace Feature)
CREATE TABLE public.plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id UUID REFERENCES public.profiles(id) NOT NULL,
  activity TEXT NOT NULL,
  location TEXT NOT NULL,
  start_time TIMESTAMPTZ NOT NULL,
  budget NUMERIC NOT NULL,
  description TEXT,
  status plan_status DEFAULT 'open',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for plans
ALTER TABLE public.plans ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Plans are viewable by everyone." ON public.plans FOR SELECT USING (true);
CREATE POLICY "Users can insert their own plans." ON public.plans FOR INSERT WITH CHECK (auth.uid() = creator_id);
CREATE POLICY "Users can update their own plans." ON public.plans FOR UPDATE USING (auth.uid() = creator_id);

-- 4. Create Plan Applications table (Hosts bidding on plans)
CREATE TABLE public.plan_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_id UUID REFERENCES public.plans(id) ON DELETE CASCADE NOT NULL,
  applicant_id UUID REFERENCES public.profiles(id) NOT NULL,
  proposed_rate NUMERIC,
  message TEXT,
  status app_status DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(plan_id, applicant_id) -- Prevent multiple applications to the same plan
);

-- Enable RLS for applications
ALTER TABLE public.plan_applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Plan creators and applicants can see applications." ON public.plan_applications 
  FOR SELECT USING (
    auth.uid() = applicant_id OR 
    auth.uid() IN (SELECT creator_id FROM public.plans WHERE id = plan_id)
  );
CREATE POLICY "Hosts can insert applications." ON public.plan_applications FOR INSERT WITH CHECK (auth.uid() = applicant_id);
CREATE POLICY "Plan creators can update application status." ON public.plan_applications 
  FOR UPDATE USING (
    auth.uid() IN (SELECT creator_id FROM public.plans WHERE id = plan_id) OR
    auth.uid() = applicant_id
  );

-- 5. Handle user creation automatically via trigger
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, name, role)
  VALUES (
    new.id, 
    new.email, 
    COALESCE(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    COALESCE((new.raw_user_meta_data->>'role')::user_role, 'customer'::user_role)
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- 6. Setup Realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.plans;
ALTER PUBLICATION supabase_realtime ADD TABLE public.plan_applications;
ALTER PUBLICATION supabase_realtime ADD TABLE public.profiles;
