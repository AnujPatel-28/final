"use client";
import { motion } from "framer-motion";
import { JSX } from "react/jsx-runtime";

export default function GllowSection() {
  return (
  
<section className="relative w-full h-screen bg-white items-center justify-center overflow-hidden">
      
     {/* GLOW EFFECT LAYER */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    
    {/* 1. The Deep Atmospheric Glow (Wide and darker) */}
    <div 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[400px] bg-blue-900/40 blur-[100px] rounded-[100%]" 
    />

    {/* 2. The Bright Core (This is the one that pulses) */}
    <div 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-blue-500 blur-[80px] rounded-[100%] animate-glow-pulse" 
    />

  </div>
      
      {/* CONTENT LAYER */}
      {/* FIX: Added 'relative z-10' to ensure this sits ON TOP of the glow */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold">Your Content</h1>
        <p className="text-gray-400 mt-4">Everything works now!</p>
      </div>

    </section>
  );
}
 

function turn(arg0: JSX.Element) {
    throw new Error("Function not implemented.");
}

