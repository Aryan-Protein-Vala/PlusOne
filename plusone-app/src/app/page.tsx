import type { Metadata } from "next";
import PlusOneLanding from "@/components/landing/PlusOneLanding";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "PlusOne — Make plans. Meet people.",
  description:
    "PlusOne helps you find your next favorite thing — and the people who make it better. The world's safest marketplace for finding verified people to share real-life activities.",
};

export default async function HomePage() {
  let user = null;
  try {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    user = data?.user ?? null;
  } catch (err) {
    // Graceful fallback when Supabase is unconfigured or unreachable
  }

  return <PlusOneLanding isLoggedIn={!!user} />;
}
