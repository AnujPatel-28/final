'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import HeroBackground from './HeroBackground';
import RecruitingVisual from './RecruitingVisual';

export default function HeroContextSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax for text
  const textY = useTransform(scrollY, [0, 300], [0, 100]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] w-full pt-32 pb-20 overflow-hidden font-sans selection:bg-blue-500/30 bg-white text-slate-900">

      {/* 1. BACKGROUND */}
      <HeroBackground />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT COLUMN: Text Content (Span 7) */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
            style={{ y: textY, opacity: textOpacity }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 inline-flex"
            >
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:bg-blue-100 transition-all cursor-pointer">
                <span className="mr-2 flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="mr-1">New:</span> AI Matching Engine v2.0
              </div>
            </motion.div>

            <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl leading-[1.1]">
              <motion.span
                className="block animate-shimmer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                The
                <span
                  className="mx-2 animate-shimmer relative inline-block"
                >
                  intelligent
                </span>
              </motion.span>
              <motion.span
                className="block animate-shimmer"
                style={{ '--color-primary': '#044396' } as React.CSSProperties}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                infrastructure for recruiting
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 max-w-2xl text-lg text-slate-600 md:text-xl leading-relaxed"
            >
              Connect top talent with leading companies using our autonomous AI agents.
              Sourcing, screening, and matching with human-level precision at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <button className="group relative overflow-hidden rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-1">
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Start Hiring
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
              </button>

              <button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 font-bold text-slate-600 transition-all hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 shadow-sm">
                View Demo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Bento Card Visualization (Span 5) */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Bento Box Container */}
            <div className="relative h-full min-h-[500px] rounded-3xl border border-white/60 bg-white/40 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden group transition-all duration-500 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)]">

              {/* Inner Gradient Highlight - Subtle */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-blue-400/30 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card Content */}
              <div className="absolute inset-0 p-8 flex flex-col">
                {/* Top Bar */}
                <div className="flex justify-between items-center mb-4 z-20">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-white/60 backdrop-blur-md">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">System Active</span>
                  </div>
                </div>

                {/* Visualization - Taking Full Space */}
                <div className="flex-1 w-full h-full flex items-center justify-center scale-110">
                  <RecruitingVisual />
                </div>
              </div>
            </div>

            {/* Decorative Elements behind Bento */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/30 rounded-full blur-[60px] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-[60px] -z-10" />

          </motion.div>

        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
    </section>
  );
}