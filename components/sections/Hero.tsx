'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Youtube, 
  Database, 
  FileSpreadsheet, 
  Twitter, 
  Globe,
  ArrowRight
} from 'lucide-react';

/**
 * Utility for tailwind class merging. 
 */
const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

export default function HeroContextSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#88a5e0] pt-20 text-white selection:bg-blue-500/30">
      
      {/* 1. BACKGROUND GLOW */}
      {/* Massive blue radial gradient centered at the top/middle */}
      <div className="pointer-events-none absolute inset-0 z-0 flex justify-center">
        <div className="h-[500px] w-[800px] -translate-y-1/2 rounded-full bg-blue-600/30 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto flex flex-col items-center px-4">
        
        {/* 2. TEXT CONTENT */}
        <div className="mb-16 max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-900/10 px-3 py-1 text-xs font-medium text-blue-300 backdrop-blur-sm">
             <span className="mr-2 flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
             </span>
             Research: Supermemory is now the best memory provider (Benchmark) ›
          </div>
          
          <h1 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-7xl">
            The context engineering <br />
            infrastructure for your AI agent
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100/60 md:text-xl">
            Supermemory gives your agents state-of-the-art memory, RAG, user profiles, 
            connectors, and extractors - all built in. Extremely low latency. Works with any model.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="group relative overflow-hidden rounded-full bg-blue-600 px-8 py-3 font-semibold text-white shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] transition-all hover:bg-blue-500 hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.6)]">
              Setup in 5 mins
            </button>
            <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              Talk to founder <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* 3. VISUALIZATION AREA */}
        {/* We use a fixed height container to manage the absolute positioning of the floating cards */}
        <div className="relative mt-10 h-[500px] w-full max-w-5xl">
          
          {/* CONNECTOR LINES (SVG LAYER) */}
          <svg className="absolute inset-0 h-full w-full opacity-30 pointer-events-none" viewBox="0 0 1000 500">
             {/* Left Top to Center */}
             <path d="M 200 150 C 300 150, 400 250, 500 350" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
             {/* Left Bottom to Center */}
             <path d="M 250 400 C 350 400, 400 350, 500 350" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
             {/* Center to Right Top */}
             <path d="M 500 350 C 600 350, 700 200, 800 150" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
             {/* Center to Right Bottom */}
             <path d="M 500 350 C 600 350, 700 400, 800 400" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />
             
             <defs>
               <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="transparent" />
                 <stop offset="50%" stopColor="#3b82f6" /> {/* Blue center */}
                 <stop offset="100%" stopColor="transparent" />
               </linearGradient>
             </defs>
          </svg>

          {/* CENTRAL LOGO (The "Brain") */}
          <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex h-32 w-32 items-center justify-center rounded-3xl bg-neutral-900 border border-white/10 shadow-2xl shadow-blue-900/20"
            >
              <div className="text-cyan-400">
                {/* Abstract Logo */}
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div className="absolute -bottom-8 text-sm font-medium tracking-widest text-neutral-400 uppercase">Supermemory</div>
            </motion.div>
          </div>

          {/* --- LEFT SIDE: DATA SOURCES --- */}

          {/* Card Group 1: Files (Top Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute left-[5%] top-[10%] md:left-[10%] md:top-[15%]"
          >
            <div className="relative p-4">
              {/* Stacked Icons Effect */}
              <div className="absolute -left-4 -top-4 h-12 w-12 rounded-lg bg-green-600/20 border border-green-500/30 flex items-center justify-center transform -rotate-12 backdrop-blur-md"><FileSpreadsheet className="text-green-500 h-6 w-6"/></div>
              <div className="absolute left-8 -top-6 h-12 w-12 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center transform rotate-12 backdrop-blur-md"><FileText className="text-red-500 h-6 w-6"/></div>
              
              {/* Main Badge */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-800/80 border border-white/10 backdrop-blur-xl shadow-xl">
                 <span className="text-2xl">📄</span>
                 <div className="absolute -right-3 -top-3 rounded-full bg-blue-600 px-2 py-0.5 text-xs font-bold text-white shadow-lg">635</div>
              </div>
            </div>
          </motion.div>

          {/* Card Group 2: Media (Bottom Left) */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute left-[10%] bottom-[10%] md:left-[15%] md:bottom-[15%]"
          >
             <div className="relative p-4">
                <div className="absolute -left-6 top-0 h-10 w-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center transform -rotate-6"><Twitter className="text-white h-5 w-5"/></div>
                <div className="absolute left-10 -top-2 h-10 w-10 rounded-lg bg-red-900/30 border border-red-500/30 flex items-center justify-center transform rotate-6"><Youtube className="text-red-500 h-5 w-5"/></div>

                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-800/80 border border-white/10 backdrop-blur-xl shadow-xl">
                   <Globe className="h-8 w-8 text-blue-400" />
                   <div className="absolute -right-3 -top-3 rounded-full bg-red-600 px-2 py-0.5 text-xs font-bold text-white shadow-lg">14k</div>
                </div>
             </div>
          </motion.div>


          {/* --- RIGHT SIDE: KNOWLEDGE GRAPHS --- */}

          {/* Graph 1 (Top Right) */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="absolute right-[5%] top-[10%] md:right-[10%] md:top-[15%]"
          >
            <GlassCard>
              <div className="flex h-24 w-32 items-center justify-center">
                 {/* Simple CSS Node Graph */}
                 <div className="relative h-16 w-24">
                    <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
                    <div className="absolute right-0 top-4 h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>
                    <div className="absolute left-8 bottom-0 h-3 w-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.6)]"></div>
                    {/* Tiny connecting lines */}
                    <div className="absolute left-1 top-1 h-[1px] w-20 bg-gradient-to-r from-green-500 to-blue-500 origin-top-left rotate-12 opacity-50"></div>
                    <div className="absolute left-2 top-2 h-[1px] w-12 bg-gradient-to-r from-green-500 to-purple-500 origin-top-left rotate-45 opacity-50"></div>
                 </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Graph 2 (Bottom Right) */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute right-[10%] bottom-[10%] md:right-[15%] md:bottom-[15%]"
          >
            <GlassCard>
               <div className="flex h-20 w-32 items-center justify-center">
                  <div className="grid grid-cols-3 gap-2 opacity-80">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className={`h-2 w-8 rounded-full ${i % 2 === 0 ? 'bg-blue-500' : 'bg-neutral-600'}`}></div>
                      ))}
                  </div>
               </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Helper for the glass cards
function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-md shadow-2xl transition-transform hover:scale-105">
      <div className="relative overflow-hidden rounded-xl bg-black/20 p-2">
        {children}
      </div>
    </div>
  );
}