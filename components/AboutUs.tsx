"use client";

import SectionTitle from "./SectionTitle";

const WHATSAPP_URL =
  "https://wa.me/+971556461731?text=أريد%20الاستفسار%20عن%20الأثاث%20المستعمل";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          title="من نحن"
          subtitle="وجهتكم الموثوقة للأثاث المستعمل في الإمارات"
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text content */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-text-secondary leading-[1.9] text-lg">
              مرحباً بكم في{" "}
              <span className="text-accent-gold font-semibold">
                ركن العروبة للأثاث المستعمل
              </span>
              ، وجهتكم الأولى والموثوقة لشراء وبيع الأثاث المستعمل في الشارقة
              وجميع أنحاء الإمارات العربية المتحدة. نحن لسنا مجرد تاجر أثاث
              عادي — بل نحن شريككم الموثوق في توفير أثاث عالي الجودة بأسعار
              مناسبة.
            </p>
            <p className="text-text-secondary leading-[1.9]">
              نحن شركة مسجلة رسمياً لدى حكومة الشارقة منذ عام ٢٠١٨، ولدينا
              معرض فعلي ومجهز على شارع الاستقلال في منطقة بو شغارة، حي
              القاسمية. يمكنكم زيارتنا في أي وقت لمشاهدة مجموعتنا الواسعة من
              الأثاث والأجهزة المستعملة.
            </p>
            <p className="text-text-secondary leading-[1.9]">
              على عكس التجار المستقلين والمنصات الإلكترونية فقط، نحن ملتزمون
              بأعلى معايير الجودة والشفافية. كل قطعة أثاث تمر بعملية فحص وترميم
              شاملة قبل عرضها في معرضنا. سواء كنت تريد شراء أثاث بأسعار لا
              تُقاوم أو بيع أثاثك مقابل نقد فوري، نضمن لك الرد خلال ٥-١٠ دقائق
              وخدمة في نفس اليوم لجميع سكان الشارقة.
            </p>
            <p className="text-text-secondary leading-[1.9]">
              رحلتنا في عالم الأثاث المستعمل تمتد لأكثر من ٢٠ عاماً، منحتنا
              خبرة لا مثيل لها في فهم احتياجات عملائنا — سواء كنتم تجهزون بيتكم
              الأول، تجددون مكتبكم، أو تبحثون عن بيع أثاثكم خلال فترة انتقال.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold-hover text-bg-primary px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 mt-4"
            >
              تواصل معنا الآن
            </a>
          </div>

          {/* Decorative side */}
          <div className="lg:col-span-2 hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-xs">
              <div className="absolute inset-0 bg-accent-gold/10 rounded-2xl rotate-3" />
              <div className="relative bg-bg-tertiary border border-card-border rounded-2xl p-8 space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent-gold mb-2">
                    +٢٠
                  </div>
                  <div className="text-text-secondary">سنة خبرة في المجال</div>
                </div>
                <div className="h-px bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-gold mb-2">
                    ٢٠١٨
                  </div>
                  <div className="text-text-secondary text-sm">
                    مسجلة رسمياً لدى حكومة الشارقة
                  </div>
                </div>
                <div className="h-px bg-border" />
                <div className="text-center">
                  <div className="text-lg font-semibold text-text-primary mb-1">
                    شارع الاستقلال
                  </div>
                  <div className="text-text-muted text-sm">
                    بو شغارة، حي القاسمية
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
