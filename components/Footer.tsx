import { Armchair, Phone, MapPin, Clock, Globe } from "lucide-react";

const quickLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "من نحن", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "لماذا نحن", href: "#why-us" },
  { label: "الأسئلة الشائعة", href: "#faq" },
  { label: "تواصل معنا", href: "#contact" },
];

const serviceLinks = [
  "أثاث غرف النوم",
  "أثاث غرف المعيشة",
  "أثاث المكاتب",
  "أثاث المطبخ والطعام",
  "الأجهزة المنزلية",
  "أثاث خارجي وحدائق",
];

const areaLinks = [
  "أثاث مستعمل الشارقة",
  "أثاث مستعمل دبي",
  "أثاث مستعمل أبوظبي",
  "أثاث مستعمل عجمان",
  "أثاث مستعمل رأس الخيمة",
  "أثاث مستعمل العين",
];

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-accent-gold/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <Armchair className="text-accent-gold" size={24} />
              <span className="text-lg font-bold text-accent-gold">
                ركن العروبة للأثاث المستعمل
              </span>
            </a>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              ركن العروبة للأثاث المستعمل — شركة متخصصة في شراء وبيع جميع أنواع
              الأثاث والأجهزة المستعملة في جميع أنحاء الإمارات. مقرنا الرئيسي في
              الشارقة مع خدمة توصيل لكل الإمارات.
            </p>
            <p className="text-accent-gold/80 text-xs">
              شركة مسجلة رسمياً لدى حكومة الشارقة — رخصة تجارية منذ ٢٠١٨
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-text-primary mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-accent-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-text-primary mb-4">خدماتنا</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-text-secondary text-sm hover:text-accent-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-bold text-text-primary mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+971556461731"
                  className="flex items-center gap-2 text-text-secondary text-sm hover:text-accent-gold transition-colors"
                >
                  <Phone size={14} className="text-accent-gold shrink-0" />
                  <span dir="ltr">055 6461731</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-text-secondary text-sm">
                <MapPin size={14} className="text-accent-gold shrink-0 mt-1" />
                شارع الاستقلال، بو شغارة، الشارقة
              </li>
              <li className="flex items-center gap-2 text-text-secondary text-sm">
                <Clock size={14} className="text-accent-gold shrink-0" />
                يومياً ٩ ص - ١١ م
              </li>
              <li>
                <a
                  href="https://rukunalaroobausedfurniture.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-secondary text-sm hover:text-accent-gold transition-colors"
                >
                  <Globe size={14} className="text-accent-gold shrink-0" />
                  English Website
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-text-muted text-xs">
          <span>© ٢٠٢٦ ركن العروبة للأثاث المستعمل. جميع الحقوق محفوظة.</span>
          <div className="flex gap-4">
            <span>سياسة الخصوصية</span>
            <span>الشروط والأحكام</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
