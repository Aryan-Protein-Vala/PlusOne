import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, Database, Lock, Users, FileText } from "lucide-react";

export const metadata: Metadata = { title: "Data Processing Agreement", description: "Data Processing Agreement for PlusOne." };

export default function DPAPage() {
  return (
    <div className="min-h-screen bg-surface-999">
      <div className="sticky top-16 z-40 bg-surface-999/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            <Link href="/" className="flex items-center gap-2 text-sm text-white/40 hover:text-white"><ArrowLeft size={14}/>Back to PlusOne</Link>
            <div className="flex items-center gap-2 text-xs text-white/20"><Shield size={12}/>DPA</div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-plus-blue-500/10 border border-plus-blue-500/20 rounded-full text-plus-blue-300 text-xs font-medium mb-4"><Database size={11}/>Data Processing Agreement</div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">Data Processing Agreement</h1>
          <p className="text-white/30">Version 1.0 · Effective: October 1, 2024</p>
        </div>
        <div className="prose prose-invert prose-sm max-w-none space-y-4">
          <p className="text-white/40 text-sm leading-relaxed">This Data Processing Agreement (\"DPA\") governs the processing of personal data by PlusOne Technologies Pvt. Ltd. (\"Controller\" or \"PlusOne\") and its subprocessors in connection with the provision of the PlusOne platform services.</p>
          {[
            { title: "Roles", text: "PlusOne Technologies Pvt. Ltd. acts as Data Controller for personal data collected directly from users. Service providers processing data on our behalf act as Data Processors." },
            { title: "Processing Instructions", text: "Processors shall process personal data only on documented instructions from the Controller, including with regard to transfers of personal data to a third country or an international organisation, unless required to do so by law." },
            { title: "Confidentiality", text: "Persons authorised to process personal data undertake to comply with obligations of confidentiality and are subject to appropriate technical and organisational measures." },
            { title: "Security", text: "Processors shall implement appropriate technical and organisational measures to ensure a level of security appropriate to the risk, including pseudonymisation, encryption, and resilience of processing systems." },
            { title: "Sub-processors", text: "The Controller grants general authorisation to the Processor to engage sub-processors. The Processor shall inform the Controller of any intended changes concerning the addition or replacement of sub-processors, giving the Controller an opportunity to object." },
            { title: "Data Subject Rights", text: "Processors shall assist the Controller in responding to requests from data subjects exercising their rights under applicable data protection laws, including access, rectification, erasure, restriction, portability, and objection." },
            { title: "Data Breach Notification", text: "Processors shall notify the Controller without undue delay after becoming aware of a personal data breach, and shall cooperate with the Controller in investigating and remedying such breach." },
            { title: "Deletion or Return of Data", text: "At the choice of the Controller, the Processor shall delete or return all personal data to the Controller after the end of the provision of services, and delete existing copies unless required by law." },
            { title: "Audit", text: "The Processor shall make available to the Controller all information necessary to demonstrate compliance and allow for and contribute to audits, including inspections, conducted by the Controller or another auditor mandated by the Controller." },
            { title: "Governing Law", text: "This DPA is governed by the laws of India. For GDPR purposes, this DPA complies with Article 28 of the General Data Protection Regulation (EU) 2016/679." },
          ].map((section, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
              <h3 className="text-white font-medium text-sm mb-1">{section.title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-surface-900/50 border border-white/5 rounded-2xl"><p className="text-white/20 text-xs text-center">For questions about this DPA, contact: <a href="mailto:dpa@plusone.app" className="text-plus-purple-300 hover:text-plus-purple-200 underline">dpa@plusone.app</a> · © {new Date().getFullYear()} PlusOne Technologies Pvt. Ltd.</p></div>
      </div>
    </div>
  );
}
