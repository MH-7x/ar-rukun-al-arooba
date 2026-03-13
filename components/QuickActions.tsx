"use client";

import { ShoppingCart, Banknote } from "lucide-react";

const cards = [
  {
    icon: ShoppingCart,
    title: "أريد شراء أثاث مستعمل",
    description:
      "تصفح مجموعتنا الواسعة من الأثاث المستعمل عالي الجودة بأسعار لا تُقاوم. كل قطعة تم فحصها وترميمها باحترافية.",
    cta: "تواصل للشراء الآن",
    href: "https://wa.me/+971556461731?text=أريد%20شراء%20أثاث%20مستعمل",
  },
  {
    icon: Banknote,
    title: "أريد بيع أثاثي المستعمل",
    description:
      "بِع أثاثك المستعمل بأفضل الأسعار واحصل على نقد فوري. تقييم مجاني وسريع خلال ٥-١٠ دقائق واستلام في نفس اليوم.",
    cta: "بِع أثاثك الآن",
    href: "https://wa.me/+971556461731?text=أريد%20بيع%20أثاثي%20المستعمل",
  },
];

export default function QuickActions() {
  return (
    <section className="py-20 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-bg-primary border border-border rounded-2xl p-8 hover:border-accent-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-gold/5"
            >
              <div className="w-14 h-14 rounded-xl bg-accent-gold/10 flex items-center justify-center mb-5 group-hover:bg-accent-gold/20 transition-colors">
                <card.icon className="text-accent-gold" size={28} />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {card.title}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                {card.description}
              </p>
              <span className="inline-flex items-center gap-2 text-accent-gold font-semibold group-hover:gap-3 transition-all">
                {card.cta}
                <span className="text-lg">←</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
