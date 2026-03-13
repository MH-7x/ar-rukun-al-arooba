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
export default function Home() {
  return (
    <>
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
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
