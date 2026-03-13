"use client";

import { ChevronDown, MapPin } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/+971556461731?text=أريد%20الاستفسار%20عن%20الأثاث%20المستعمل";
const MAPS_URL = "https://share.google/iLEgJq3Qt9DduRnRi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden arabesque-bg"
    >
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary/95 to-bg-secondary" />
      <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/5 via-transparent to-accent-gold/5" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-gold/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-20">
        {/* Small badge */}
        <div className="inline-flex items-center gap-2 bg-bg-tertiary/80 border border-card-border rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-whatsapp animate-pulse" />
          <span className="text-sm text-text-secondary">
            شركة مسجلة حكومياً منذ ٢٠١٨
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-text-primary">شراء وبيع </span>
          <span className="gold-gradient-text"> الأثاث المستعمل</span>
          <br className="md:block hidden" />
          <span className="text-text-primary"> في الشارقة </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-text-secondary mb-4 max-w-3xl mx-auto leading-relaxed">
          وجهتكم الأولى والموثوقة للأثاث المستعمل في الإمارات
        </p>

        {/* Trust points */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-accent-gold-light mb-10">
          <span>أكثر من ٢٠ سنة خبرة</span>
          <span className="text-text-muted">•</span>
          <span>شركة مسجلة حكومياً</span>
          <span className="text-text-muted">•</span>
          <span>رد خلال ٥-١٠ دقائق</span>
          <span className="text-text-muted hidden sm:inline">•</span>
          <span className="hidden sm:inline">ضمان ٣٠ يوم</span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-whatsapp/20 w-full sm:w-auto justify-center"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            تواصل عبر واتساب
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-bg-primary px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 w-full sm:w-auto justify-center"
          >
            <MapPin size={22} />
            زُر معرضنا
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="text-accent-gold/60" size={32} />
      </div>
    </section>
  );
}
