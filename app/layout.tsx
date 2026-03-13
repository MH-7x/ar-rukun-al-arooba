import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm-plex-arabic",
});

export const metadata: Metadata = {
  title: "ركن العروبة للأثاث المستعمل | شراء وبيع الأثاث المستعمل في الشارقة",
  description:
    "ركن العروبة للأثاث المستعمل — شراء وبيع جميع أنواع الأثاث والأجهزة المستعملة في الشارقة ودبي وجميع الإمارات. شركة مسجلة حكومياً منذ ٢٠١٨ مع أكثر من ٢٠ سنة خبرة. رد خلال ٥-١٠ دقائق وضمان ٣٠ يوم.",
  keywords:
    "أثاث مستعمل, أثاث مستعمل الشارقة, شراء أثاث مستعمل, بيع أثاث مستعمل, أثاث مستعمل دبي, أثاث مستعمل أبوظبي, ركن العروبة, أجهزة منزلية مستعملة",
  openGraph: {
    title: "ركن العروبة للأثاث المستعمل | شراء وبيع الأثاث المستعمل في الشارقة",
    description:
      "شراء وبيع جميع أنواع الأثاث والأجهزة المستعملة في الشارقة ودبي وجميع الإمارات. شركة مسجلة حكومياً منذ ٢٠١٨.",
    locale: "ar_AE",
    type: "website",
    countryName: "United Arab Emirates",
    phoneNumbers: ["+971556461731"],
    images: [
      {
        url: "/ركن-العروبة-للأثاث-المستعمل-في-الشارقة.jpg",
        width: 1200,
        height: 630,
        alt: "ركن العروبة للأثاث المستعمل في الشارقة",
      },
    ],
    url: "https://ar.rukunalaroobausedfurniture.ae",
    siteName: "ركن العروبة للأثاث المستعمل",
  },
  alternates: {
    canonical: "https://ar.rukunalaroobausedfurniture.ae",
  },
  applicationName: "ركن العروبة للأثاث المستعمل",
  robots: {
    "max-image-preview": "large",
    follow: true,
    index: true,
    googleBot: {
      "max-image-preview": "large",
      follow: true,
      index: true,
      notranslate: true,
    },
    notranslate: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={ibmPlexArabic.variable}>
      <body
        className={`${ibmPlexArabic.className} bg-bg-primary text-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
