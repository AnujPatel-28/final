'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Database, 
  Cloud, 
  Server, 
  FileJson, 
  Code2, 
  HardDrive, 
  Globe 
} from 'lucide-react';

/**
 * Utility for tailwind class merging. 
 * If you don't have a 'cn' helper, you can use standard strings.
 */
const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');
// 1. CONFIGURATION: The icons you want to display in the circle
const INTEGRATIONS = [
  { icon: Database, color: "#4285F4", label: "Drive" },    // Google Driveish
  { icon: FileJson, color: "#000000", label: "Notion" },   // Notionish
  { icon: Cloud, color: "#FF9900", label: "AWS" },         // AWSish
  { icon: Globe, color: "#3776AB", label: "Python" },      // Pythonish
  { icon: Github, color: "#ffffff", label: "GitHub" },
  { icon: Code2, color: "#F7DF1E", label: "JS" },          // JSish
  { icon: Server, color: "#E34F26", label: "Server" },
  { icon: HardDrive, color: "#333333", label: "Storage" },
];

const RADIUS = 140; // The distance of icons from the center

export default function IntegrationsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* LEFT COLUMN: The Visual Hub */}
          <div className="relative flex h-[500px] w-full items-center justify-center">
            <IntegrationGraph />
          </div>

          {/* RIGHT COLUMN: The Text Content */}
          <div className="flex flex-col items-start space-y-6">
            <div className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-sm text-neutral-400 backdrop-blur-sm">
              Connectors and Integrations
            </div>
            
            <h2 className="text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl">
              Bring your user’s <br />
              <span className="text-neutral-400">context from</span> <br />
              where they are.
            </h2>
            
            <p className="max-w-md text-lg text-neutral-500">
              Supermemory connects to Google Drive, Notion, OneDrive and more and syncs user context. 
              Forget custom infra. Supermemory drops into your stack with just a few lines of code.
            </p>

            <button className="group mt-4 flex items-center gap-2 rounded-full border border-neutral-700 bg-transparent px-6 py-3 text-sm font-medium transition-colors hover:bg-neutral-800">
              Read more about connectors
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

// SUB-COMPONENT: The Graph itself
const IntegrationGraph = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      
      {/* 1. BACKGROUND LINES (SVG) */}
      {/* We use an SVG overlay to draw lines from center (50%,50%) to each icon's position */}
      <svg className="absolute inset-0 h-full w-full opacity-20 pointer-events-none">
        {INTEGRATIONS.map((_, i) => {
          const angle = (i * 360) / INTEGRATIONS.length;
          // Convert polar to cartesian coordinates for SVG lines
          // We add 50% to center it in the SVG container
          const x = 50 + (40 * Math.cos((angle * Math.PI) / 180)); // 40% width radius
          const y = 50 + (40 * Math.sin((angle * Math.PI) / 180));
          return (
            <line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${x}%`}
              y2={`${y}%`}
              stroke="white"
              strokeWidth="1"
            />
          );
        })}
      </svg>

      {/* 2. CENTRAL LOGO */}
      {/* This is the glowing core */}
      <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-black border border-neutral-800 shadow-[0_0_50px_-12px_rgba(6,182,212,0.5)]">
         {/* Simple Abstract Logo shape */}
         <div className="relative h-12 w-12 text-cyan-400">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
         </div>
      </div>

      {/* 3. ORBITING ICONS */}
      {INTEGRATIONS.map((item, i) => {
        // Calculate position
        const angle = (i * 360) / INTEGRATIONS.length;
        const x = RADIUS * Math.cos((angle * Math.PI) / 180);
        const y = RADIUS * Math.sin((angle * Math.PI) / 180);

        return (
          <motion.div
            key={i}
            className="absolute z-20 flex h-14 w-14 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/80 shadow-lg backdrop-blur-sm"
            style={{
              x: x, // Framer motion handles the transform: translate(x, y) automatically
              y: y,
            }}
            // Add a subtle floating animation
            animate={{ 
              y: [y - 5, y + 5, y - 5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2, // Stagger the animation so they don't move in sync
            }}
          >
            <item.icon className="h-6 w-6 text-neutral-300" style={{ color: item.color }} />
          </motion.div>
        );
      })}
    </div>
  );
};