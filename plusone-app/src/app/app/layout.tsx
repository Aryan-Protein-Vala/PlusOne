import type { Metadata } from "next";
import UnifiedAppNav from "@/components/UnifiedAppNav";

export const metadata: Metadata = {
  title: "PlusOne",
  description: "Find your PlusOne.",
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UnifiedAppNav />
      {/* 
        md:pl-[240px] accommodates the desktop sidebar.
        pb-20 accommodates the mobile bottom nav.
      */}
      <div className="md:pl-[240px] pb-20 md:pb-0 min-h-screen bg-[var(--background)]">
        {children}
      </div>
    </>
  );
}
