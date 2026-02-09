// app/page.tsx

import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/Contact";
import IndustriesSection from "@/components/sections/Industries";
import Industries from "@/components/sections/Industries2";
import GlowSection from '@/components/GlowSection'
import InsightsSection from "@/components/sections/Insights";
import StatsSection from "@/components/sections/StatsSection";
import { Contact } from "lucide-react";
import { section } from "framer-motion/m";
import { motion } from "framer-motion";
import GllowSection from "@/components/GlowSection";
import SuperGlowUp from "@/components/sections/SuperGlowUp";
import HowItWorks from "@/components/sections/HowItWorks";
import Hero from "@/components/sections/Hero";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      <Hero/>
      
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-linear-to-r from-blue-50 to-white">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Connecting Top Talent with <span className="text-blue-600">Global Leaders</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          TalentMesh Solutions simplifies recruitment. Whether you're scaling a startup or looking for your next career move, we bridge the gap.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold">Hire Talent</button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md font-semibold">Find a Job</button>
        </div>

  
      </section>

   


      <SuperGlowUp />
     

      {/* Quick Stats or Industries Preview */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-white rounded-xl shadow-sm">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">500+</h3>
            <p className="text-gray-500 uppercase tracking-widest text-sm">Placements</p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-sm">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">50+</h3>
            <p className="text-gray-500 uppercase tracking-widest text-sm">Industries</p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-sm">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">98%</h3>
            <p className="text-gray-500 uppercase tracking-widest text-sm">Retention Rate</p>
          </div>
        </div>
      </section>

      <StatsSection />
      <AboutSection />
      <InsightsSection />
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industries We Serve</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["Tech", "Finance", "Healthcare", "Marketing"].map((industry) => (
              <div key={industry} className="p-6 bg-white rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-gray-800">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustriesSection />
      
      {/* Testimonials */}  
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Jane Doe",
              role: "CEO, Tech Startup",
              testimonial: "TalentMesh Solutions helped us find the perfect team to scale our business. Highly recommend!",
            },
            {
              name: "John Smith",
              role: "HR Manager, Finance Firm",
              testimonial: "The recruitment process was seamless and efficient. We found top talent in no time.",
            },
            {
              name: "Emily Johnson",
              role: "Marketing Director, Healthcare Company",
              testimonial: "Their personalized approach made all the difference. We couldn't be happier with our new hires.",
            },
          ].map((client) => (
            <div key={client.name} className="p-6 bg-white rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">"{client.testimonial}"</p>
              <h3 className="text-lg font-semibold text-gray-800">{client.name}</h3>
              <p className="text-sm text-gray-500">{client.role}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-linear-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">Join TalentMesh Solutions today and experience the future of recruitment.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold">Sign Up Now</button>
        </div>
      </section>
      <section className="py-8 bg-gray-800 text-white text-center">
        <p className="text-sm">&copy; 2024 TalentMesh Solutions. All rights reserved.</p>
      </section>
      <HowItWorks />

      <ContactSection />
      <Industries />
    </main>
  );
}