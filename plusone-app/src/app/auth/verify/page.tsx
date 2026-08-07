import { Suspense } from "react";
import { VerifyContent } from "./VerifyContent";

export const dynamic = "force-dynamic";

export default function VerifyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-surface-999">
        <div className="text-white/30">Loading...</div>
      </div>
    }>
      <VerifyContent />
    </Suspense>
  );
}
