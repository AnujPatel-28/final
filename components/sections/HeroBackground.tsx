'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none bg-white">

            {/* Single Central Blue Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-[120px] mix-blend-multiply pointer-events-none" />

            {/* Optional: Very subtle secondary glow for depth, but keeping it minimal as requested */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[80px] mix-blend-multiply pointer-events-none" />

        </div>
    );
}
