"use client";

import { MapPin } from "lucide-react";
import SectionTitle from "./SectionTitle";

const areas = [
  {
    name: "الشارقة",
    badge: "المقر الرئيسي",
    title: "شراء وبيع الأثاث المستعمل في الشارقة",
    description:
      "قاعدتنا الرئيسية على شارع الاستقلال. نوفر استلام وتوصيل فوري في جميع أنحاء الإمارة.",
    areas: "النهدة، المجاز، مويلح، القاسمية، الخان",
    service: "رد في نفس اليوم (٥-١٠ دقائق)",
    featured: true,
  },
  {
    name: "دبي",
    badge: "خدمة اليوم التالي",
    title: "أثاث مستعمل في دبي",
    description:
      "توصيل في اليوم التالي. نخدم جميع المناطق والمجمعات السكنية الرئيسية.",
    areas: "داون تاون، مارينا، JLT، بزنس باي، ديرة، البرشاء",
    featured: false,
  },
  {
    name: "أبوظبي",
    badge: "خدمة مجدولة",
    title: "أثاث مستعمل في أبوظبي",
    description:
      "خدمة احترافية للشراء والبيع في العاصمة. سواء كنت في وسط المدينة أو في الجزر.",
    areas: "وسط المدينة، جزيرة ياس، جزيرة الريم، مصفح",
    featured: false,
  },
  {
    name: "عجمان",
    badge: "خدمة سريعة",
    title: "أثاث مستعمل في عجمان",
    description:
      "خدمة سريعة مع إمكانية التنفيذ في نفس اليوم بسبب قربنا من عجمان.",
    featured: false,
  },
  {
    name: "رأس الخيمة",
    title: "أثاث مستعمل في رأس الخيمة",
    description:
      "رحلات خدمة أسبوعية تضمن التوفر المنتظم. احجز مسبقاً لأقصى قدر من الراحة.",
    featured: false,
  },
  {
    name: "العين",
    title: "أثاث مستعمل في العين",
    description:
      "خدمة بموعد مسبق لمدينة الحدائق. رحلات فعالة لتقليل التكاليف مع الحفاظ على الجودة.",
    featured: false,
  },
  {
    name: "أم القيوين والفجيرة",
    title: "أثاث مستعمل في أم القيوين والفجيرة",
    description:
      "خدمة عند الطلب لأم القيوين ورحلات مجدولة لسكان الفجيرة.",
    featured: false,
  },
];

export default function ServiceAreas() {
  return (
    <section className="py-24 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          title="نخدم جميع أنحاء الإمارات"
          subtitle="معرضنا في الشارقة، لكن خدماتنا تصل لكل مكان في الإمارات. من حركة دبي إلى هدوء العين، نحن نصل إليك."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((area) => (
            <div
              key={area.name}
              className={`rounded-2xl p-6 border transition-all duration-300 ${
                area.featured
                  ? "bg-accent-gold/5 border-accent-gold/30 sm:col-span-2 lg:col-span-1 lg:row-span-2"
                  : "bg-bg-secondary border-border hover:border-accent-gold/20"
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <MapPin
                  className={`shrink-0 mt-0.5 ${
                    area.featured ? "text-accent-gold" : "text-text-muted"
                  }`}
                  size={20}
                />
                <div>
                  <h3 className="font-bold text-text-primary text-lg">
                    {area.name}
                  </h3>
                  {area.badge && (
                    <span
                      className={`inline-block text-xs px-2 py-0.5 rounded-full mt-1 ${
                        area.featured
                          ? "bg-accent-gold text-bg-primary font-semibold"
                          : "bg-bg-tertiary text-accent-gold-light"
                      }`}
                    >
                      {area.badge}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-2">
                {area.description}
              </p>
              {area.areas && (
                <p className="text-text-muted text-xs">{area.areas}</p>
              )}
              {area.service && (
                <p className="text-accent-gold text-sm font-medium mt-2">
                  {area.service}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
