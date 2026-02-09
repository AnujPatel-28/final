"use client";

import React from "react";
import { 
  Code2, 
  Stethoscope, 
  TrendingUp, 
  Cpu, 
  Megaphone, 
  ShoppingCart, 
  ArrowRight 
} from "lucide-react";
import Industries from "./Industries";

const industries = [
  {
    title: "ITt & Software",
    description: "Sourcing elite DevOps, Full-Stack, and AI engineers for next-gen platforms.",
    icon: <Code2 className="w-6 h-6" />,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "Healthcare",
    description: "Connecting specialized medical professionals with top-tier institutions.",
    icon: <Stethoscope className="w-6 h-6" />,
    gradient: "from-emerald-400 to-green-500",
  },
  {
    title: "Fintech",
    description: "Quantitative analysts and blockchain experts for the future of finance.",
    icon: <TrendingUp className="w-6 h-6" />,
    gradient: "from-indigo-400 to-purple-500",
  },
  {
    title: "Engineering",
    description: "Technical staffing for robotics, civil, and aerospace verticals.",
    icon: <Cpu className="w-6 h-6" />,
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "Growth & Marketing",
    description: "Data-driven marketers and creative directors who scale brands.",
    icon: <Megaphone className="w-6 h-6" />,
    gradient: "from-pink-400 to-rose-500",
  },
  {
    title: "E-commerce",
    description: "Logistics and supply chain management for the digital retail age.",
    icon: <ShoppingCart className="w-6 h-6" />,
    gradient: "from-violet-400 to-fuchsia-500",
  },
];

const IndustriesSection = () => {
  return (
    <section className="py-24 bg-[#0F1117] relative overflow-hidden" id="industries">
      
      {/* Background Gradients (Subtle Glows) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:flex md:justify-between md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold tracking-wider uppercase text-sm mb-3">
              Core Sectors
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Specialized Talent <br /> For Complex Industries.
            </h3>
          </div>
          <p className="hidden md:block text-slate-400 max-w-sm text-sm leading-relaxed text-right">
            We don't generalize. We specialize. Deep expertise in the fields that matter most.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover Gradient Overlay */}
              <div 
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${industry.gradient}`} 
              />
              
              <div className="relative z-10">
                {/* Icon Box */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-gradient-to-br ${industry.gradient} shadow-lg shadow-black/50`}>
                  <div className="text-white">
                    {industry.icon}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                  {industry.title}
                </h4>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                  {industry.description}
                </p>

                {/* Arrow Link */}
                <div className="flex items-center gap-2 text-sm font-medium text-white/50 group-hover:text-white transition-colors cursor-pointer">
                  <span>Explore roles</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;