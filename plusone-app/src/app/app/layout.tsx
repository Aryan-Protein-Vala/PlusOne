import type { Metadata } from "next";
import AppNav from "@/components/AppNav";

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
      <AppNav />
      <div className="app-page">
        {children}
      </div>
    </>
  );
}
