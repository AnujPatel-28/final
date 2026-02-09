'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with Gradient */}
            {/* Background with Transparent Gradient */}
            <div className="absolute inset-0 bg-blue-600/5 z-0" />

            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-[#262F40] mb-6 tracking-tight">
                    Ready to Build Your Dream Team?
                </h2>
                <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
                    Join TalentMesh Solutions today and experience the future of recruitment with AI-driven precision.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 group">
                        Sign Up Now
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors backdrop-blur-sm">
                        Schedule a Demo
                    </button>
                </div>
            </div>
        </section>
    );
}
