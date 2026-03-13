export const RukunAlAroobaSchema = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: "Rukun Al Arooba Used Furniture",
  description:
    "Rukun Al Arooba is Sharjah's and UAE's leading supplier of used home furniture and appliances. We have a vast selection of used items ranging from sofas, beds, refrigerators, to office furniture, all with a warranty. We buy and sell used furniture at affordable prices without cutting back on quality and style.",
  url: "https://rukunalaroobausedfurniture.ae/",
  telephone: "+971556461731",
  priceRange: "$$",

  image: "https://rukunalaroobausedfurniture.ae/path/storefront-image.jpg",
  logo: "https://rukunalaroobausedfurniture.ae/square-logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Estiqlal Street, Bu Shaghara",
    addressLocality: "Sharjah",
    addressRegion: "Sharjah",
    postalCode: "00000",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.3377,
    longitude: 55.4124,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "16",
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Delivery Service Available",
      value: "true",
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "In-Store Pickup",
      value: "true",
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Accepts Cash",
      value: "true",
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Accepts Bank Checks",
      value: "true",
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Warranty on Purchases",
      value: "true",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Tuesday",
      opens: "09:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "09:00",
      closes: "22:30",
    },
  ],
  sameAs: [
    "https://www.google.com/maps/place/Rukun+AL+arooba+used+furniture+and+electronics+trading/@25.3377035,55.4123512,15z/data=!4m6!3m5!1s0x3e5f590ac9a2245b:0xb6338b255c468962!8m2!3d25.3377035!4d55.4123512!16s%2Fg%2F11bbr23m8s?entry=ttu",
    "https://www.facebook.com/rukun.al.arooba.used.furniture/",
    "https://www.pinterest.com/rukun_al_arooba_used_furniture/",
  ],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://rukunalaroobausedfurniture.ae/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const faqs = [
  {
    q: "كم يستغرق بيع أثاثي في الشارقة؟",
    a: "سريع جداً! تواصل معنا عبر واتساب بصور أثاثك واحصل على تقييم خلال ٥-١٠ دقائق خلال ساعات العمل. إذا قبلت عرضنا، نوفر استلام في نفس اليوم لجميع مواقع الشارقة. يمكنك حرفياً بيع أثاثك والحصول على النقد في يدك خلال ٢-٣ ساعات من أول تواصل. للإمارات الأخرى، نرتب الاستلام عادة خلال ٢٤-٤٨ ساعة.",
  },
  {
    q: "هل تشترون أثاث تالف أو قديم؟",
    a: "بالتأكيد! على عكس مشتري الأثاث الآخرين في الشارقة الذين يريدون فقط القطع المثالية، نحن نشتري أثاث بأي حالة. مخدوش، باهت، يهتز، أو قديم الطراز — نحن نرى الإمكانية حيث يرى الآخرون مشاكل. ورشة الترميم الاحترافية عندنا تقدر تحول أي قطعة تقريباً إلى حالة ممتازة.",
  },
  {
    q: "ما هي طرق الدفع المتاحة للشراء؟",
    a: "نحن من تجار الأثاث القلائل الذين يقدمون خيارات دفع متعددة. نقبل: الدفع النقدي، التحويلات البنكية الإلكترونية، الشيكات المصدقة، وحتى المحافظ الرقمية. هذه المرونة تميزنا عن المنافسين الذين يعملون بالكاش فقط. للبائعين، نوفر دفع نقدي فوري عند استلام الأثاث.",
  },
  {
    q: "هل التوصيل متوفر خارج الشارقة؟",
    a: "نعم! نوصل لجميع أنحاء الإمارات العربية المتحدة: دبي، أبوظبي، عجمان، رأس الخيمة، العين، أم القيوين، والفجيرة. رسوم التوصيل تختلف حسب الموقع وحجم الطلب، لكن من خلال شراكتنا مع شركة أبو محمد للنقل، نوفر أكثر الأسعار تنافسية في السوق.",
  },
  {
    q: "ما الفرق بينكم وبين دوبيزل أو فيسبوك ماركت بليس؟",
    a: "الفرق شاسع. نحن شركة مسجلة رسمياً بمعرض حقيقي يمكنك زيارته، نقدم ضمان ٣٠ يوم، ترميم احترافي للجودة، وخدمة محترفة. على عكس المنصات الإلكترونية حيث تتعامل مع بائعين مجهولين وتخاطر بالاحتيال وليس لديك أي حماية إذا حدث خطأ.",
  },
  {
    q: "كيف تحددون سعر شراء الأثاث؟",
    a: "تسعيرنا الشفاف يأخذ بعين الاعتبار عدة عوامل: الماركة الأصلية والجودة، الحالة الحالية، عمر القطعة، الطلب في السوق، ومتطلبات الترميم. نشرح تقييمنا لكل بائع، ونوضح كيف يؤثر كل عامل على السعر.",
  },
  {
    q: "هل يمكنني زيارة المعرض بدون موعد مسبق؟",
    a: "طبعاً! معرضنا على شارع الاستقلال في الشارقة مفتوح كل يوم في الأسبوع. مرحب بكم في أي وقت خلال ساعات العمل من ٩ صباحاً حتى ١١ مساءً لتصفح مجموعتنا. فريقنا الودود يتحدث العربية والإنجليزية والهندية والأردية.",
  },
  {
    q: "هل توفرون خدمات نقل أيضاً؟",
    a: "نعم! من خلال شراكتنا الحصرية مع شركة أبو محمد للنقل، نوفر خدمات استلام وتوصيل احترافية بأفضل الأسعار في السوق. هذه الخدمة المتكاملة تعني نقطة اتصال واحدة لكامل عملية البيع أو الشراء.",
  },
  {
    q: "ما هي سياسة الإرجاع إذا لم يلبِ الأثاث توقعاتي؟",
    a: "نوفر فترة إرجاع ٧ أيام لأي أثاث لا يلبي توقعاتكم. ببساطة تواصلوا معنا ودعونا نرى حالة الأثاث، وإذا كان كل شيء بخير، سنستلم الأثاث ونعيد لكم المبلغ نقداً فوراً.",
  },
];