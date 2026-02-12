"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Wrench,
    TrafficCone,
    ArrowRight,
    Envelope,
    Gear,
    Cpu,
    Barricade,
} from "phosphor-react";
import GridPattern from "./ui/GridPattern";

const UnderConstruction = () => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => setIsSubmitting(false), 2000);
    };

    return (
        <section className="relative min-h-screen bg-slate-50 overflow-hidden flex flex-col items-center justify-center px-6 py-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <GridPattern opacity={0.4} />
            </div>

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-2xl w-full text-center"
            >
                {/* Icon Container */}
                <div className="mb-10 flex justify-center">
                    <div className="relative w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-zinc-100 p-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-3xl opacity-50" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        >
                            <Gear weight="duotone" className="text-[#044396] w-12 h-12" />
                        </motion.div>
                        <motion.div
                            className="absolute -bottom-2 -right-2 bg-slate-900 text-white p-2 rounded-xl shadow-lg border-2 border-white"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                        >
                            <Wrench weight="fill" className="w-5 h-5" />
                        </motion.div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="space-y-6 mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#044396] text-[10px] font-mono font-black uppercase tracking-widest">
                        <TrafficCone weight="fill" />
                        <span>System Maintenance</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                        We're <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#044396] to-blue-400">Upgrading</span> <br />
                        the Network.
                    </h1>

                    <p className="text-slate-500 text-lg md:text-xl font-medium max-w-lg mx-auto leading-relaxed">
                        Our digital architects are currently implementing improvements to enhance your experience. We'll be back online shortly.
                    </p>
                </div>

                {/* Notify Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-md mx-auto mb-12 relative group"
                >
                    <div className="relative flex items-center">
                        <Envelope className="absolute left-5 text-slate-400 z-10" size={20} />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Notify me when live..."
                            className="w-full bg-white h-14 pl-14 pr-36 rounded-2xl border border-zinc-200 shadow-sm text-sm font-bold font-mono text-slate-800 focus:outline-none focus:border-[#044396] focus:ring-1 focus:ring-[#044396]/20 transition-all placeholder:text-slate-300"
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="absolute right-1.5 h-11 px-5 bg-slate-900 text-white rounded-xl text-[10px] font-black font-mono uppercase tracking-wider hover:bg-[#044396] transition-colors disabled:opacity-70 flex items-center gap-2"
                        >
                            {isSubmitting ? (
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                >
                                    <Gear weight="bold" size={14} />
                                </motion.div>
                            ) : (
                                <>
                                    Notify
                                    <ArrowRight weight="bold" />
                                </>
                            )}
                        </button>
                    </div>
                </motion.form>

                {/* Footer Meta */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 opacity-60">
                    <div className="flex items-center gap-2 text-[10px] font-black font-mono text-slate-400 uppercase tracking-widest">
                        <Cpu size={16} />
                        <span>System Status: Building</span>
                    </div>
                    <div className="hidden md:block w-px h-4 bg-slate-300" />
                    <div className="flex items-center gap-2 text-[10px] font-black font-mono text-slate-400 uppercase tracking-widest">
                        <Barricade size={16} />
                        <span>Est. Completion: Soon</span>
                    </div>
                </div>
            </motion.div>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#044396]/20 to-transparent" />
        </section>
    );
};

export default UnderConstruction;