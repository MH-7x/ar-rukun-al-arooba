export interface PlainFAQ {
  q: string;
  a: string;
}

export const generateFAQSchema = (faqs: PlainFAQ[]) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return JSON.stringify(schema, null, 2);
};
