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