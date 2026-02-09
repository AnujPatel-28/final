// app/page.tsx
import Hero from "@/components/sections/Hero";
import PoweredBy from "@/components/sections/PoweredBy";
import SuperGlowUp from "@/components/sections/SuperGlowUp";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";
import InsightsSection from "@/components/sections/Insights";
import IndustriesSection from "@/components/sections/Industries"; // Using the singular/main one
import TestimonialsSection from "@/components/sections/Testimonials";
import HowItWorks from "@/components/sections/HowItWorks";
import CTASection from "@/components/sections/CTA";
import ContactSection from "@/components/sections/Contact";

// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-white">

      {/* 1. Hero: Impact & Value Prop */}
      <Hero />

      {/* 2. Social Proof: Trusted Tech */}
      <PoweredBy />

      {/* 3. Problem/Solution: The "Glow Up" */}
      <SuperGlowUp />

      {/* 4. Statistics: Hard Numbers */}
      <StatsSection />

      {/* 5. Deeper Dive: About Us */}
      <AboutSection />

      {/* 6. Insights/Features */}
      <InsightsSection />

      {/* 7. Use Cases: Industries */}
      <IndustriesSection />

      {/* 8. Social Proof: Testimonials */}
      <TestimonialsSection />

      {/* 9. Process: How It Works */}
      <HowItWorks />

      {/* 10. Call to Action */}
      <CTASection />

      {/* 11. Contact Form */}
      <ContactSection />

      {/* 12. Footer */}
      {/* <Footer /> */}

    </main>
  );
}