'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Atom, Box, Zap, Wind } from 'lucide-react';

export default function PoweredBy() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="relative w-full bg-transparent py-24 text-slate-800 overflow-hidden" ref={containerRef}>

            <div className="container relative z-10 mx-auto px-4">

                {/* HEADER */}
                <div className="mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold tracking-tight md:text-5xl text-[#262F40]"
                    >
                        Built on a foundation of fast, production-grade tooling
                    </motion.h2>
                </div>

                {/* MAIN CIRCUIT AREA */}
                <div className="relative flex flex-col items-center">

                    {/* 1. CENTRAL CHIP */}
                    <div className="relative z-20 mb-8 sm:mb-16">
                        <Chip />
                    </div>

                    {/* 2. WIRES (SVG Layer) */}
                    <div className="absolute top-[60px] left-0 h-[150px] w-full hidden md:block pointer-events-none z-10">
                        <CircuitLines />
                    </div>

                    {/* 3. CARDS GRID */}
                    <div className="relative z-20 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 pt-8 md:pt-16">

                        <FeatureCard
                            icon={
                                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                                    <Atom className="h-8 w-8 text-blue-600" />
                                </motion.div>
                            }
                            title="React"
                            description="The library for web and native user interfaces. Next.js is built on the latest React features, including Server Components and Actions."
                            delay={0.2}
                            gradient="from-blue-50/80 to-white/50"
                            borderColor="border-blue-200"
                        />

                        <FeatureCard
                            icon={
                                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                                    <Box className="h-8 w-8 text-purple-600" />
                                </motion.div>
                            }
                            title="Turbopack"
                            description="An incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Next.js."
                            delay={0.4}
                            gradient="from-purple-50/80 to-white/50"
                            borderColor="border-purple-200"
                        />

                        <FeatureCard
                            icon={
                                <motion.div animate={{ skewX: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                                    <Wind className="h-8 w-8 text-orange-600" />
                                </motion.div>
                            }
                            title="Speedy Web Compiler"
                            description="An extensible Rust based platform for the next generation of fast developer tools, and can be used for both compilation and minification."
                            delay={0.6}
                            gradient="from-orange-50/80 to-white/50"
                            borderColor="border-orange-200"
                        />

                    </div>

                </div>
            </div>
        </section>
    );
}

function Chip() {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-center"
        >
            {/* Glow behind chip */}
            <div className="absolute inset-0 rounded-xl bg-blue-500/20 blur-2xl" />

            {/* The Chip Body */}
            <div className="relative h-20 w-48 rounded-xl border border-blue-100 bg-white/80 shadow-xl flex items-center justify-center overflow-hidden backdrop-blur-sm">

                {/* Inner "Circuit" pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:8px_8px]" />

                {/* Text */}
                <div className="relative z-10 flex items-center gap-2">
                    <span className="text-lg font-semibold text-slate-600">Powered By</span>
                </div>

                {/* Pins */}
                <div className="absolute -left-1 top-1/2 h-8 w-2 -translate-y-1/2 bg-slate-300 rounded-r-md" />
                <div className="absolute -right-1 top-1/2 h-8 w-2 -translate-y-1/2 bg-slate-300 rounded-l-md" />

                <div className="absolute left-1/4 -top-1 h-2 w-6 bg-slate-300 rounded-b-md" />
                <div className="absolute right-1/4 -top-1 h-2 w-6 bg-slate-300 rounded-b-md" />
                <div className="absolute left-1/4 -bottom-1 h-2 w-6 bg-slate-300 rounded-t-md" />
                <div className="absolute right-1/4 -bottom-1 h-2 w-6 bg-slate-300 rounded-t-md" />
            </div>

            {/* Connecting "Wires" sticking out slightly */}
            <div className="absolute left-0 top-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50" />
        </motion.div>
    );
}

function CircuitLines() {
    return (
        <svg className="w-full h-full" viewBox="0 0 1000 150" preserveAspectRatio="none">
            <defs>
                <linearGradient id="trace-blue" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="trace-gray" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#161224ff" stopOpacity="0" />
                    <stop offset="50%" stopColor="#161224ff" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#161224ff" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="trace-orange" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
                    <stop offset="50%" stopColor="#f97316" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.5" />
                </linearGradient>
            </defs>

            <CircuitPath
                d="M 450 0 L 400 0 L 400 50 L 200 50 L 200 150"
                stroke="url(#trace-blue)"
            />

            <CircuitPath
                d="M 500 0 L 500 150"
                stroke="url(#trace-gray)"
                delay={0.2}
            />

            <CircuitPath
                d="M 550 0 L 600 0 L 600 50 L 800 50 L 800 150"
                stroke="url(#trace-orange)"
                delay={0.4}
            />
        </svg>
    )
}

function CircuitPath({ d, stroke, delay = 0 }: { d: string, stroke: string, delay?: number }) {
    return (
        <>
            <path d={d} stroke={stroke} strokeWidth="2" fill="none" opacity="0.3" />
            <motion.path
                d={d}
                stroke={stroke}
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay }}
            />
            <motion.circle r="3" fill="#3b82f6">
                <animateMotion
                    dur="2s"
                    repeatCount="indefinite"
                    path={d}
                    calcMode="linear"
                />
            </motion.circle>
        </>
    )
}

function FeatureCard({
    icon, title, description, delay, gradient, borderColor
}: {
    icon: React.ReactNode,
    title: string,
    description: string,
    delay: number,
    gradient: string,
    borderColor: string
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: delay + 0.5 }}
            className={`relative group rounded-2xl border bg-white/60 p-8 backdrop-blur-md ${borderColor} transition-all hover:bg-white/80 hover:shadow-lg`}
        >
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 transition-opacity group-hover:opacity-100`} />

            <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-blue-50/50 p-3 shadow-sm">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        {icon}
                    </motion.div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-800">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                    {description}
                </p>
                <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-slate-200" />
            </div>
        </motion.div>
    );
}
