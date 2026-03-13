"use client";

import { Star } from "lucide-react";
import SectionTitle from "./SectionTitle";

const reviews = [
  {
    name: "فاطمة السيد",
    text: "كنت مترددة في شراء كنبة مستعملة، لكن اللي أخذتها من ركن العروبة تبدو جديدة تماماً! واضح إنهم يفحصون وينظفون كل شي بعناية. محل ممتاز في الشارقة للأثاث المستعمل عالي الجودة. أنصح الكل فيهم!",
  },
  {
    name: "أحمد منصور",
    text: "بعتهم أثاث مكتب كامل. السعر كان عادل والعملية كانت سلسة جداً. من أسرع وأسهل الطرق لبيع الأثاث في الشارقة. تجربة ممتازة من البداية للنهاية.",
  },
  {
    name: "نورة الحمادي",
    text: "لو تدور على سراير مستعملة للبيع، هذا المكان المناسب. أخذت سرير مع مرتبة بسعر ممتاز وبجزء بسيط من السعر الأصلي. نظيف وبحالة ممتازة. بأرجع لهم أكيد!",
  },
  {
    name: "عبدالله الفارسي",
    text: "خبرتهم اللي أكثر من ٢٠ سنة واضحة. يعرفون قيمة الأثاث ويعطون أسعار عادلة سواء كنت تشتري أو تبيع. بعتهم طقم غرفة نوم كامل والمعاملة كانت سلسة ومحترفة.",
  },
  {
    name: "صفية خان",
    text: "سرعة الرد عندهم مو طبيعية! أرسلت لهم رسالة الصبح عن دولاب وجاني الرد بكل التفاصيل في أقل من ٥ دقائق. اشتريته بعد ساعة. كفاءة مذهلة!",
  },
  {
    name: "يوسف المصري",
    text: "سريعين، محترفين، وصادقين. أرسلت لهم صور أثاث مكتبي القديم وعطوني سعر فوري. الفريق جاء يوم ثاني للاستلام. أفضل تاجر أثاث مستعمل في الشارقة بدون منازع.",
  },
  {
    name: "خالد إبراهيم",
    text: "بعتهم أجهزة إلكترونية قديمة مع بعض الأثاث. عطوني سعر مجمع عادل جداً. العملية كاملة من الاتصال للاستلام أخذت أقل من يوم. معجب جداً بسرعتهم واحترافيتهم.",
  },
  {
    name: "سمنثا لي",
    text: "أثثت شقة الاستوديو كاملة من معرضهم على شارع الاستقلال. سراير وكنب وحتى خزائن مطبخ! الجودة مقابل السعر ما لها منافس.",
  },
];

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className="bg-bg-secondary border border-border rounded-2xl p-6 shrink-0 mx-3">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="text-accent-gold fill-accent-gold"
            size={16}
          />
        ))}
      </div>
      <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-5">
        {review.text}
      </p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold font-bold text-sm">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="text-text-primary font-semibold text-sm">
            {review.name}
          </p>
          <p className="text-text-muted text-xs flex items-center gap-1">
            <svg viewBox="0 0 24 24" className="w-3 h-3" fill="#4285F4">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            مراجعة Google
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          title="ماذا يقول عملاؤنا"
          subtitle="ثقة آلاف العملاء في جميع أنحاء الإمارات"
        />
      </div>

      {/* Scrolling carousel */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-6">
          {reviews.map((review, i) => (
            <ReviewCard key={`a-${i}`} review={review} />
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-bg-secondary to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-bg-secondary to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
