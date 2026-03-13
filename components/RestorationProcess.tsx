"use client";

import { Search, Wrench, Sparkles, Paintbrush } from "lucide-react";
import SectionTitle from "./SectionTitle";

const steps = [
  {
    num: "١",
    icon: Search,
    title: "فحص شامل ودقيق",
    description:
      "يتم فحص كل قطعة بدقة للتحقق من السلامة الهيكلية وتحديد احتياجات الإصلاح. نقيّم كل جانب من جوانب الأثاث لضمان أنه يستحق مكاناً في معرضنا.",
  },
  {
    num: "٢",
    icon: Wrench,
    title: "إصلاح احترافي متكامل",
    description:
      "حرفيون مهرة يصلحون المفاصل المفكوكة، يستبدلون القطع المتآكلة، ويعالجون أي تلف. نستخدم مواد عالية الجودة لضمان متانة الإصلاح.",
  },
  {
    num: "٣",
    icon: Sparkles,
    title: "تنظيف عميق ومتخصص",
    description:
      "تنظيف متخصص يزيل سنوات من الأوساخ والبقع المتراكمة. نستخدم منتجات تنظيف احترافية مناسبة لكل نوع من الأسطح والأقمشة.",
  },
  {
    num: "٤",
    icon: Paintbrush,
    title: "تلميع وتشطيب نهائي",
    description:
      "الأخشاب تحصل على تلميع احترافي بينما المفروشات يتم تنظيفها بالبخار. النتيجة النهائية هي أثاث يبدو ويشعر وكأنه جديد.",
  },
];

export default function RestorationProcess() {
  return (
    <section className="py-24 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          title="عملية ترميم الجودة"
          subtitle="إليك ما لن يخبرك به معظم تجار الأثاث المستعمل: هم يشترون الأثاث ويعيدون بيعه كما هو. في ركن العروبة، كل قطعة تمر بعملية ترميم شاملة."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Connecting arrow (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -left-3 text-accent-gold/30 text-2xl">
                  ←
                </div>
              )}
              <div className="bg-bg-primary border border-border rounded-2xl p-6 h-full">
                <div className="w-10 h-10 rounded-full bg-accent-gold text-bg-primary flex items-center justify-center text-lg font-bold mb-4">
                  {step.num}
                </div>
                <div className="w-10 h-10 rounded-lg bg-accent-gold/10 flex items-center justify-center mb-3">
                  <step.icon className="text-accent-gold" size={20} />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
