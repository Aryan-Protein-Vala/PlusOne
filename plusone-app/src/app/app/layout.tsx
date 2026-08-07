import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "PlusOne Dashboard",
  description: "Manage your PlusOne account, bookings, and wallet.",
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface-999 pb-20">
        {children}
      </main>
      <Footer />
    </>
  );
}
