"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Target, Users, Zap } from "lucide-react";

const features = [
  {
    title: "Precision Matching",
    description: "We don't just match keywords. We match culture, vision, and long-term potential.",
    icon: <Target className="w-5 h-5 text-blue-600" />,
  },
  {
    title: "Human-Centric Approach",
    description: "Technology aids us, but humans drive us. We build relationships, not databases.",
    icon: <Users className="w-5 h-5 text-blue-600" />,
  },
  {
    title: "Rapid Turnaround",
    description: "Time is money. Our agile process ensures you get top talent without the wait.",
    icon: <Zap className="w-5 h-5 text-blue-600" />,
  },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image Composition */}
          <div className="relative order-2 lg:order-1">
            {/* Background Decorator (The 'Mesh' element) */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Placeholder Image - Replace with a real office/team photo */}
              <div className="aspect-[4/3] bg-gray-200 relative">
                 <Image 
                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                   alt="TalentMesh Team collaborating"
                   fill
                   className="object-cover"
                 />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Trusted Partner</p>
                    <p className="text-sm font-bold text-gray-900">Connecting Talent Daily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">
              About TalentMesh
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Bridging the Gap Between <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Potential & Opportunity
              </span>
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At TalentMesh Solutions, we believe that a resume tells a story, but not the whole story. We are a new-age recruitment firm dedicated to finding the perfect alignment between candidate aspirations and company missions.
            </p>

            {/* Feature List */}
            <div className="space-y-6 mb-10">
              {features.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="group bg-gray-900 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-blue-500/25">
              More About Our Vision
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;