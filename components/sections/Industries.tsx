"use client";

import React from "react";
import { 
  Code2, 
  Stethoscope, 
  Building2, 
  Cpu, 
  TrendingUp, 
  Megaphone,
  Briefcase,
  Globe,
  ShoppingCart
} from "lucide-react";

// Data array - easy to edit or fetch from an API later
const industries = [
  {
    title: "IT & Software",
    description: "Sourcing top-tier developers, DevOps engineers, and product managers for startups and enterprises.",
    icon: <Code2 className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Healthcare & Life Sciences",
    description: "Connecting hospitals and clinics with qualified medical professionals, from nursing to administration.",
    icon: <Stethoscope className="w-8 h-8 text-emerald-600" />,
  },
  {
    title: "Finance & Fintech",
    description: "Expert recruitment for banking, accounting, investment firms, and financial technology sectors.",
    icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "Engineering & Manufacturing",
    description: "Technical staffing for civil, mechanical, and electrical engineering roles across various verticals.",
    icon: <Cpu className="w-8 h-8 text-orange-600" />,
  },
  {
    title: "Marketing & Creative",
    description: "Finding the creative minds and strategic thinkers who build brands and drive digital growth.",
    icon: <Megaphone className="w-8 h-8 text-pink-600" />,
  },
  {
    title: "Retail & E-commerce",
    description: "Staffing solutions for supply chain, logistics, and retail management in the digital age.",
    icon: <ShoppingCart className="w-8 h-8 text-purple-600" />,
  },
];

const IndustriesSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">
            Our Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h3>
          <p className="text-gray-600 text-lg">
            At TalentMesh, we specialize in understanding the unique nuances of
            specialized sectors to deliver the perfect candidate match.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-gray-50 rounded-full w-fit group-hover:bg-blue-50 transition-colors duration-300">
                {industry.icon}
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {industry.title}
              </h4>
              
              <p className="text-gray-600 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA (Optional) */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Don't see your industry listed?</p>
          <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center justify-center gap-2 mx-auto transition-colors">
            Contact us for custom solutions 
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;