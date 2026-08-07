import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, AlertTriangle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Legal disclaimer for PlusOne — important limitations and disclaimers.",
};

export default function DisclaimerPage() {
  const disclaimers = [
    {
      title: "Nature of the Platform",
      text: "PlusOne is an online marketplace technology platform that enables independent adult users to discover, connect with, and pay for lawful social and recreational activities with one another. We are not a dating service, matrimonial service, escort service, employment agency, or matchmaking platform. We do not organize, conduct, supervise, guarantee, or endorse any user interaction or activity.",
    },
    {
      title: "No Guarantee of Results",
      text: "We do not guarantee that any booking will result in a safe, satisfactory, or successful interaction. User ratings and reviews represent the subjective opinions of other users and are not guarantees of future performance. You use the Platform at your own risk.",
    },
    {
      title: "No Professional Advice",
      text: "The Platform does not provide and is not a substitute for professional legal, medical, financial, or safety advice. The safety recommendations provided are general suggestions only. You are responsible for taking appropriate precautions based on your own circumstances and judgment.",
    },
    {
      title: "User Responsibility",
      text: "Each user is solely responsible for their own conduct, decisions, and interactions with other users. You are responsible for verifying the accuracy of information you provide and for complying with all applicable laws in your activities. You assume all risks associated with meeting another independent adult through the Platform.",
    },
    {
      title: "Limitation of Liability",
      text: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, PLUSONE TECHNOLOGIES PVT. LTD. AND ITS OFFICERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE PLATFORM, INCLUDING BUT NOT LIMITED TO ANY PERSONAL INJURY, PROPERTY DAMAGE, OR FINANCIAL LOSS ARISING FROM A USER INTERACTION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
      important: true,
    },
    {
      title: "Accuracy of Information",
      text: "We make reasonable efforts to ensure user information is accurate, but we do not guarantee the accuracy, completeness, or timeliness of any information on the Platform. User profiles, reviews, ratings, and availability information may not always reflect current reality.",
    },
    {
      title: "Third-Party Links and Services",
      text: "The Platform may contain links to third-party websites or services. We are not responsible for the content, privacy practices, or policies of any third-party sites. Your interaction with third-party services is governed by their terms and policies, not ours.",
    },
    {
      title: "Changes to the Platform",
      text: "We reserve the right to modify, suspend, or discontinue any aspect of the Platform at any time without notice. We are not liable for any loss or damage resulting from changes to the Platform or its discontinuation.",
    },
    {
      title: "Indemnification",
      text: "You agree to indemnify, defend, and hold harmless PlusOne Technologies Pvt. Ltd., its affiliates, officers, employees, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or relating to your use of the Platform, your violation of these Terms, or your violation of any rights of any third party.",
    },
    {
      title: "Governing Law",
      text: "These disclaimers and the Platform are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra, India.",
    },
  ];

  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
              <ArrowLeft size={14} />
              Back to PlusOne
            </Link>
            <div className="flex items-center gap-2 text-xs text-white/20">
              <Shield size={12} />
              Disclaimer
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-300 text-xs font-medium mb-4">
            <AlertTriangle size={11} />
            Important Legal Notice
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Legal Disclaimer
          </h1>
          <p className="text-white/30 max-w-2xl">
            Please read the following disclaimers carefully. They govern your use of PlusOne.
          </p>
        </div>

        <div className="space-y-5">
          {disclaimers.map((d, i) => (
            <div key={i} className={`rounded-2xl p-5 border transition-all ${d.important ? "bg-amber-500/5 border-amber-500/15" : "bg-white/[0.02] border-white/5"}`}>
              <div className="flex items-start gap-3">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${d.important ? "bg-amber-500/20" : "bg-plus-purple-500/20"}`}>
                  {d.important ? <AlertTriangle size={13} className="text-amber-300" /> : <CheckCircle2 size={13} className="text-plus-purple-300" />}
                </div>
                <div>
                  <h2 className="text-white font-semibold text-sm mb-2">{d.title}</h2>
                  <p className={`text-sm leading-relaxed ${d.important ? "text-amber-200/80" : "text-white/40"}`}>
                    {d.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-surface-900/50 border border-white/5 rounded-2xl">
          <p className="text-white/20 text-xs text-center leading-relaxed">
            This disclaimer is part of the PlusOne Terms of Service. These disclaimers do not limit liability where such limitation is prohibited by law (including liability for death or personal injury caused by negligence).
            © {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
