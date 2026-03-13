"use client";

import { useEffect, useRef, useState } from "react";
import { Award, BadgeCheck, Clock, ShieldCheck } from "lucide-react";

const badges = [
  {
    icon: Award,
    number: "+٢٠",
    label: "سنة خبرة",
    description: "نعمل في هذا المجال منذ عام ٢٠٠٥",
  },
  {
    icon: BadgeCheck,
    number: "٢٠١٨",
    label: "مسجلة حكومياً",
    description: "مسجلة رسمياً لدى حكومة الشارقة",
  },
  {
    icon: Clock,
    number: "٥-١٠",
    label: "دقائق وقت الرد",
    description: "رد سريع عبر واتساب والموقع",
  },
  {
    icon: ShieldCheck,
    number: "٣٠",
    label: "يوم ضمان",
    description: "ضمان شامل على كل قطعة أثاث",
  },
];

export default function TrustBadges() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-bg-primary border-y border-border">
      <div
        ref={ref}
        className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {badges.map((badge, i) => (
          <div
            key={badge.label}
            className={`text-center transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <badge.icon
              className="text-accent-gold mx-auto mb-3"
              size={36}
              strokeWidth={1.5}
            />
            <div className="text-3xl sm:text-4xl font-bold text-text-primary mb-1">
              {badge.number}
            </div>
            <div className="text-accent-gold font-semibold mb-1">
              {badge.label}
            </div>
            <div className="text-sm text-text-muted">{badge.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
