'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SuperGlowUp = () => {
  // 1. Target the container to measure vertical scroll progress
  const targetRef = useRef<HTMLDivElement>(null);

  // 2. Track the scroll progress of this specific container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  // 3. Map scroll progress to visual changes
  
  // Opacity of the blue glow: Starts at 0, peaks at 1 in the middle, fades out at the end
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  
  // Scale of the blue glow: Starts small, expands to fill screen
  const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1.5]);

  // Text movement: Slight parallax effect
  const yText = useTransform(scrollYProgress, [0.3, 0.7], [50, -50]);
  const opacityText = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);

  return (
    <section 
      ref={targetRef} 
      className="relative h-[300vh] bg-black" // 300vh height gives us 'scroll room' to play the animation
    >
      {/* Sticky Container: Keeps content in view while we scroll through the 300vh */}
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        
        {/* BACKGROUND LAYER 1: Base Dark Background */}
        <div className="absolute inset-0 bg-neutral-950" />

        {/* BACKGROUND LAYER 2: The Blue Glow */}
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 z-0 flex items-center justify-center"
        >
          {/* This radial gradient mimics the specific Supermemory glow */}
          <div className="h-[60vh] w-[60vw] rounded-full bg-blue-600 blur-[120px]" />
        </motion.div>

        {/* CONTENT LAYER */}
        <div className="relative z-10 px-4 text-center">
          <motion.div style={{ y: yText, opacity: opacityText }}>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-7xl">
              supermemory <br />
              <span className="text-blue-100/80">makes your AI agent</span>
            </h2>
            <h1 className="mt-4 text-6xl font-extrabold text-white md:text-9xl tracking-tighter">
              Unforgettable
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SuperGlowUp;