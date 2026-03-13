"use client";

import { Bed, Sofa, Monitor, UtensilsCrossed, Tv, TreePine } from "lucide-react";
import SectionTitle from "./SectionTitle";

const services = [
  {
    icon: Bed,
    title: "أثاث غرف النوم",
    description:
      "أنشئ غرفة نوم أحلامك بدون إنفاق مبالغ طائلة. مجموعتنا تشمل كل شيء من الأسِرّة الفردية إلى أطقم الأسِرّة الملكية الفاخرة.",
    items: [
      "أطقم غرف نوم كاملة",
      "أسِرّة بجميع المقاسات",
      "دواليب وخزائن ملابس",
      "تسريحات ومرايا",
      "كومودينات وأدراج",
    ],
    whatsapp:
      "https://wa.me/+971556461731?text=أريد%20الاستفسار%20عن%20أثاث%20غرف%20النوم",
  },
  {
    icon: Sofa,
    title: "أثاث غرف المعيشة",
    description:
      "حوّل مساحة معيشتك مع مجموعتنا المميزة من الكنب والأثاث المستعمل. من مجالس عربية كلاسيكية إلى كنب حرف L العصرية.",
    items: [
      "أطقم كنب جلد وقماش",
      "طاولات قهوة وطاولات وسط",
      "وحدات تلفزيون ومراكز ترفيه",
      "خزائن عرض ورفوف",
      "كراسي استرخاء وكراسي مميزة",
    ],
    whatsapp:
      "https://wa.me/+971556461731?text=أريد%20الاستفسار%20عن%20أثاث%20غرف%20المعيشة",
  },
  {
    icon: Monitor,
    title: "أثاث المكاتب",
    description:
      "كتاجر رائد للأثاث المكتبي المستعمل في الشارقة، نتخصص في حلول مكتبية متكاملة بأسعار لا تُقارن.",
    items: [
      "مكاتب تنفيذية ومحطات عمل",
      "كراسي مكتب مريحة",
      "طاولات اجتماعات وكراسي",
      "خزائن ملفات وتخزين",
      "أثاث استقبال",
    ],
    whatsapp:
      "https://wa.me/+971556461731?text=أريد%20الاستفسار%20عن%20أثاث%20المكاتب",
  },
  {
    icon: UtensilsCrossed,
    title: "أثاث المطبخ وغرفة الطعام",
    description:
      "طوّر مطبخك ومنطقة الطعام مع مجموعتنا المختارة من أثاث المطبخ والطعام المستعمل.",
    items: [
      "طاولات طعام (٤ إلى ١٢ مقعد)",
      "خزائن مطبخ ومخازن",
      "ثلاجات مستعملة (مفحوصة ومعتمدة)",
      "أفران ميكروويف وبوتاجازات",
      "جزر مطبخ وكراسي بار",
    ],
    whatsapp:
      "https://wa.me/+971556461731?text=أريد%20الاستفسار%20عن%20أثاث%20المطبخ",
  },
  {
    icon: Tv,
    title: "الأجهزة المنزلية والإلكترونيات",
    description:
      "نحن مشترون وبائعون موثوقون للأجهزة المنزلية المستعملة. كل جهاز إلكتروني يتم فحصه بدقة واعتماد سلامته.",
    items: [
      "غسالات ومجففات",
      "مكيفات هواء (سبليت ونافذة)",
      "تلفزيونات (LED وسمارت)",
      "أجهزة مطبخ كهربائية",
      "إلكترونيات منزلية متنوعة",
    ],
    whatsapp:
      "https://wa.me/+971556461731?text=أريد%20الاستفسار%20عن%20الأجهزة%20المنزلية",
  },
  {
    icon: TreePine,
    title: "أثاث خارجي وحدائق",
    description:
      "استمتعوا بأجواء الإمارات الجميلة مع مجموعتنا من الأثاث الخارجي المقاوم للعوامل الجوية.",
    items: [
      "أطقم طعام خارجية",
      "مقاعد حدائق وأراجيح",
      "كنب خارجي وكراسي استلقاء",
      "مظلات وحلول تظليل",
      "طاولات شواء وإكسسوارات",
    ],
    whatsapp:
      "https://wa.me/+971556461731?text=أريد%20الاستفسار%20عن%20أثاث%20الحدائق",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          title="خدماتنا"
          subtitle="مجموعة شاملة من الأثاث والأجهزة المستعملة عالية الجودة"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-bg-secondary border border-border rounded-2xl p-6 hover:border-accent-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center mb-4 group-hover:bg-accent-gold/20 transition-colors">
                <service.icon className="text-accent-gold" size={24} />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <ul className="space-y-1.5 mb-5">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-text-muted"
                  >
                    <span className="text-accent-gold mt-1.5 text-xs">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={service.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-gold text-sm font-semibold hover:text-accent-gold-hover transition-colors"
              >
                تواصل الآن ←
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
