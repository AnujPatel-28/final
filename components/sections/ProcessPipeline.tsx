"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Globe,
    Cpu,
    UserFocus,
    RocketLaunch,
    ArrowRight
} from "phosphor-react";
import GridPattern from "../ui/GridPattern";

const steps = [
    {
        title: "Global Sourcing",
        description: "AI-driven identification of top 1% talent across 50+ countries.",
        icon: <Globe size={28} weight="duotone" />,
    },
    {
        title: "Deep Vetting",
        description: "Rigorous technical assessments & cultural fit analysis.",
        icon: <Cpu size={28} weight="duotone" />,
    },
    {
        title: "Precision Match",
        description: "Algorithm + Human Expert validation for perfect alignment.",
        icon: <UserFocus size={28} weight="duotone" />,
    },
    {
        title: "Rapid Deploy",
        description: "Seamless onboarding and integration into your workflows.",
        icon: <RocketLaunch size={28} weight="duotone" />,
    }
];

const ProcessPipeline = () => {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden bg-slate-50">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <GridPattern opacity={0.25} />
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-[#044396]/10 bg-[#044396]/5 text-[#044396] text-[11px] font-mono font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm"
                    >
                        The Workflow
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight"
                    >
                        Engineered for <span className="text-[#044396]">Speed.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        From initial signal to final placement, our pipeline is optimized for precision and velocity.
                    </motion.p>
                </div>

                {/* Desktop Horizontal Pipeline */}
                <div className="hidden md:grid grid-cols-4 gap-6 relative">
                    {/* Connecting Line - Constrained to centers */}
                    {/* Connecting Line - Constrained to centers */}
                    <div className="absolute top-[calc(2rem-1px)] left-[calc(12.5%-9px)] right-[calc(12.5%-9px)] h-0.5 bg-slate-200 -z-10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full w-full bg-[#044396] origin-left"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="group relative flex flex-col items-center text-center"
                        >
                            {/* Node Circle - Floating Card Style */}
                            <div className="mb-8 w-24 h-24 rounded-[2rem] bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex items-center justify-center relative z-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:border-blue-200">
                                <div className="text-slate-400 group-hover:text-[#044396] transition-colors duration-500 transform group-hover:scale-110">
                                    {React.cloneElement(step.icon, { size: 32 })}
                                </div>
                            </div>

                            {/* Content Card */}
                            <div className="w-full h-full bg-white/60 backdrop-blur-sm border border-slate-100/50 rounded-3xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col items-center">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#044396] transition-colors">{step.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Vertical Pipeline */}
                <div className="md:hidden flex flex-col gap-8 relative pl-8">
                    {/* Connecting Line Vertical */}
                    <div className="absolute left-[calc(2rem+1.75rem-1px)] top-7 bottom-0 w-0.5 bg-slate-200 -z-10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full w-full bg-[#044396] origin-top"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex items-start gap-6 group"
                        >
                            {/* Node Circle */}
                            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center relative z-10 group-hover:border-blue-200 transition-colors">
                                <div className="text-slate-400 group-hover:text-[#044396] transition-colors">
                                    {React.cloneElement(step.icon, { size: 24 })}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative overflow-hidden bg-white/60 backdrop-blur-sm p-6 rounded-[2rem] border border-slate-100/50 shadow-sm w-full group-hover:border-blue-200 group-hover:shadow-lg transition-all duration-300">
                                <div className="relative z-10">
                                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#044396] transition-colors">{step.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessPipeline;
