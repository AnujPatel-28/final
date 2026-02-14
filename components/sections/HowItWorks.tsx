"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import {
  Database,
  BookOpen,
  Cloud,
  Globe,
  GithubLogo,
  Code,
  Cube,
  HardDrive,
  Lightning,
  CaretRight
} from 'phosphor-react';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import ProcessPipeline from './ProcessPipeline';

export default function IntegrationsSection() {
  return (
    <section
      id="how-it-works"
      className="relative w-full overflow-hidden py-24 md:py-32 bg-white scroll-mt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50/50 text-[#044396] text-[11px] font-bold uppercase tracking-widest backdrop-blur-md shadow-sm mb-8">
            <Lightning size={16} weight="fill" className="animate-pulse" />
            The TalentMesh Method
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
            From Search to <span className="text-[#044396]">Scale.</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 leading-loose font-medium">
            A streamlined, data-driven pathway to building elite engineering teams. We handle the complexity so you can focus on shipping.
          </p>
        </div>

        {/* Process Visualization */}
        <div className="mb-20">
          <ProcessPipeline />
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link href="/under-construction">
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 rounded-2xl bg-[#044396] text-white font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-xl hover:shadow-blue-900/20 hover:bg-blue-700 flex items-center gap-3"
            >
              Start Your Process
              <CaretRight size={16} weight="bold" />
            </motion.button>
          </Link>
        </div>

      </div>
    </section>
  );
}