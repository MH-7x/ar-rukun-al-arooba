"use client";

import {
  Building2,
  Clock,
  Wrench,
  Tag,
  CreditCard,
  ShieldCheck,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const features = [
  {
    icon: Building2,
    title: "شركة مسجلة رسمياً بمعرض حقيقي",
    description:
      "نحن لسنا مختبئين خلف موقع إلكتروني أو رقم واتساب. ركن العروبة شركة مسجلة رسمياً لدى حكومة الإمارات منذ ٢٠١٨، مع رخصة تجارية معروضة في معرضنا. زورونا على شارع الاستقلال، بو شغارة، حي القاسمية.",
  },
  {
    icon: Clock,
    title: "رد مضمون خلال ٥ إلى ١٠ دقائق",
    description:
      "الوقت ثمين، خاصة عندما تحتاج لبيع أثاثك بسرعة. بينما التجار الآخرون قد يستغرقون ساعات أو أيام للرد، نحن نضمن الرد خلال ٥-١٠ دقائق عبر واتساب أو الموقع.",
  },
  {
    icon: Wrench,
    title: "ترميم احترافي للأثاث",
    description:
      "نحن لا نعيد بيع الأثاث كما هو. كل قطعة في ركن العروبة تمر بعملية ترميم شاملة: فحص دقيق، إصلاح احترافي، تنظيف عميق، وتلميع وتشطيب.",
  },
  {
    icon: Tag,
    title: "أسعار شفافة بدون رسوم مخفية",
    description:
      "السعر الذي نعرضه هو المبلغ الذي تحصل عليه. على عكس المنصات الإلكترونية التي تفرض رسوم نشر أو عمولات. عندما نقول ١٠٠٠ درهم، تحصل بالضبط على ١٠٠٠ درهم.",
  },
  {
    icon: CreditCard,
    title: "خيارات دفع مرنة ومتعددة",
    description:
      "نقبل: الدفع النقدي الفوري، التحويلات البنكية المباشرة، الشيكات المصدقة للمشتريات الكبيرة، والمحافظ الرقمية. كل المعاملات مؤمنة ومصحوبة بإيصالات رسمية.",
  },
  {
    icon: ShieldCheck,
    title: "ضمان ٣٠ يوم على كل قطعة",
    description:
      "كل قطعة أثاث من ركن العروبة تأتي مع ضمان حصري لمدة ٣٠ يوم. يغطي الضمان: السلامة الهيكلية، وظائف الأجزاء المتحركة، والمكونات الإلكترونية.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          title="لماذا تختار ركن العروبة؟"
          subtitle="في سوق مليء بالبائعين المجهولين والتجار غير المسجلين، إليك ما يميزنا عن كل تاجر أثاث آخر في الإمارات"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-bg-primary border border-border rounded-2xl p-6 hover:border-accent-gold/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center mb-4">
                <feature.icon className="text-accent-gold" size={24} />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
