"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { faqs } from "@/public/list";

function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-right hover:bg-bg-tertiary/50 transition-colors"
      >
        <span className="font-semibold text-text-primary">{faq.q}</span>
        <ChevronDown
          className={`text-accent-gold shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          size={20}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="px-5 pb-5 text-text-secondary leading-relaxed text-sm">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionTitle
          title="الأسئلة الشائعة"
          subtitle="إجابات على أكثر الأسئلة شيوعاً حول شراء وبيع الأثاث المستعمل"
        />

        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
