import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickActions from "@/components/QuickActions";
import TrustBadges from "@/components/TrustBadges";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import RestorationProcess from "@/components/RestorationProcess";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import src from "@/public/ركن-العروبة-للأثاث-المستعمل-في-الشارقة.jpg";
import Image from "next/image";
import { generateFAQSchema } from "@/public/GenerateFaqSchema";
import Script from "next/script";
import { faqs } from "@/public/list";

const faqSchema = generateFAQSchema(faqs);
export default function Home() {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />
      <Header />
      <main>
        <Hero />
        <div className="max-w-[1100px] md:h-[407px] h-60 mx-auto my-10 bg-accent-gold-light relative overflow-hidden md:rounded-4xl">
          <Image
            src={src}
            alt="ركن العروبة للاثاث المستعمل في الشارقة"
            className=" object-cover md:object-center object-right"
            fill
            placeholder="blur"
            loading="eager"
          />
        </div>
        <QuickActions />
        <TrustBadges />
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <RestorationProcess />
        <ServiceAreas />
        <Testimonials />
        <FAQ />
        <Contact />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.86979676251!2d55.3955491!3d25.342149799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b39dde3733b%3A0x70627f406a04df1e!2sRukun%20AL%20arooba%20used%20furniture%20and%20electronics%20trading!5e0!3m2!1sen!2sae!4v1773428704861!5m2!1sen!2sae"
          className="my-10 mx-auto max-w-5xl aspect-video"
          title="ركن العروبة للأثاث المستعمل في الشارقة"
          style={{
            border: "0px",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
