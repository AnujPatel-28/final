'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Zap, CheckCircle2 } from 'lucide-react';

export default function RecruitingVisual() {
    // Animation variants
    const pulse = {
        initial: { scale: 1, opacity: 0.5 },
        animate: {
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
            transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }
    };

    return (
        <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">

            {/* Central AI Node - Normal/Light Mode */}
            <div className="relative z-20 flex items-center justify-center">
                {/* Core Glow */}
                <motion.div
                    className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"
                    variants={pulse}
                    initial="initial"
                    animate="animate"
                />

                {/* Core Circle */}
                <div className="relative w-24 h-24 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] z-20">
                    <Zap className="w-10 h-10 text-blue-500 fill-blue-50" />
                </div>

                {/* Orbiting Rings */}
                <div className="absolute inset-0 -m-12 border border-blue-200 rounded-full w-48 h-48 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-0 -m-24 border border-indigo-100 rounded-full w-72 h-72 animate-[spin_15s_linear_infinite_reverse]" />
            </div>

            {/* Floating Nodes (Absolute positioning relative to center) */}

            {/* Candidate Node 1 (Top Left) */}
            <motion.div
                className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200 shadow-xl shadow-slate-200/50">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                        <User className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="h-2 w-16 bg-slate-100 rounded-full" />
                        <div className="flex gap-1">
                            <div className="h-1.5 w-8 bg-blue-100 rounded-full" />
                            <div className="h-1.5 w-4 bg-indigo-100 rounded-full" />
                        </div>
                    </div>
                </div>

                {/* Connecting Line */}
                <svg className="absolute top-1/2 left-full w-24 h-24 -z-10 pointer-events-none overflow-visible">
                    <motion.path
                        d="M 0 0 Q 40 10 90 60"
                        fill="none"
                        stroke="url(#gradient-line)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.4 }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </svg>
            </motion.div>

            {/* Job Node 1 (Bottom Right) */}
            <motion.div
                className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200 shadow-xl shadow-slate-200/50">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100">
                        <Briefcase className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="h-2 w-20 bg-slate-100 rounded-full" />
                        <div className="h-2 w-12 bg-emerald-100 rounded-full" />
                    </div>
                </div>
            </motion.div>

            {/* NEW: Skill Badges Floating */}
            <motion.div
                className="absolute top-[20%] right-[30%]"
                animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
                <span className="px-2 py-1 rounded-lg bg-white text-indigo-600 text-[10px] font-bold border border-indigo-100 shadow-sm">Python</span>
            </motion.div>

            <motion.div
                className="absolute bottom-[30%] left-[20%]"
                animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
            >
                <span className="px-2 py-1 rounded-lg bg-white text-orange-600 text-[10px] font-bold border border-orange-100 shadow-sm">React</span>
            </motion.div>

            <motion.div
                className="absolute top-[60%] right-[15%]"
                animate={{ x: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            >
                <span className="px-2 py-1 rounded-lg bg-white text-pink-600 text-[10px] font-bold border border-pink-100 shadow-sm">Neural Networks</span>
            </motion.div>

            {/* Match Success Pop-up (Replaces Text Stats) */}
            <motion.div
                className="absolute top-1/2 right-[10%] transform -translate-y-1/2 z-30"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.8, 1], delay: 2 }}
            >
                <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-green-200 shadow-2xl flex items-center gap-3">
                    <div className="bg-green-100 p-1.5 rounded-full">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</div>
                        <div className="text-sm font-bold text-slate-800">Match Confirmed</div>
                    </div>
                </div>
            </motion.div>

            {/* SVG Definitions */}
            <svg className="absolute w-0 h-0">
                <defs>
                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                        <stop offset="50%" stopColor="rgba(59, 130, 246, 1)" />
                        <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                    </linearGradient>
                </defs>
            </svg>

        </div>
    );
}
