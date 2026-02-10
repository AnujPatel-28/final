"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Brain,
  List,
  X,
  Sparkle,
  UserCircleGear,
  Buildings,
  LinkSimple,
  CaretDown
} from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'Solutions',
      href: '#',
      dropdown: [
        { name: 'Pulse Protocol', href: '#how-it-works', description: 'Neural orchestration system' },
        { name: 'Industry Nodes', href: '#industries', description: 'Strategic domain alignment' },
      ]
    },
    {
      name: 'Ecosystem',
      href: '#',
      dropdown: [
        { name: 'Consensus', href: '#testimonials', description: 'Network feedback loop' },
        { name: 'Insights', href: '#insights', description: 'Neural market analytics' },
        { name: 'Origin', href: '#about', description: 'Our neural alignment strategy' },
      ]
    },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "circOut" }}
      className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none"
    >
      <motion.div
        animate={{
          marginTop: isScrolled ? "1rem" : "0rem",
          width: isScrolled ? "92%" : "100%",
          maxWidth: isScrolled ? "1300px" : "100%",
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.02)",
          backdropFilter: isScrolled ? "blur(30px)" : "blur(0px)",
          borderRadius: isScrolled ? "100px" : "0px",
          paddingLeft: isScrolled ? "2.5rem" : "2rem",
          paddingRight: isScrolled ? "2.5rem" : "2rem",
          paddingTop: isScrolled ? "0.85rem" : "1.75rem",
          paddingBottom: isScrolled ? "0.85rem" : "1.75rem",
          boxShadow: isScrolled ? "0 25px 60px -15px rgba(15, 23, 42, 0.15)" : "0 4px 30px rgba(0, 0, 0, 0.02)",
          borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.5)" : "1px solid rgba(15, 23, 42, 0.05)",
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20
        }}
        className="pointer-events-auto relative group/nav"
      >
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center w-full max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex justify-start">
            <Link
              href="#hero"
              className="flex items-center gap-3 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="relative h-12 w-auto">
                <img
                  src="/TalentMesh_Logo-removebg-preview.png"
                  alt="TalentMesh Wordmark"
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Nav - Absolutely Centered */}
          <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-2">
                <Link
                  href={link.href}
                  className="flex items-center gap-3"
                >
                  <span className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${isScrolled ? 'text-slate-900 group-hover:text-slate-500' : 'text-slate-800 group-hover:text-black'}`}>
                    {link.name}
                  </span>
                  {link.dropdown && <CaretDown size={12} weight="bold" className={`transition-transform duration-500 group-hover:rotate-180 ${isScrolled ? 'text-slate-900' : 'text-slate-400'}`} />}
                </Link>

                {link.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500">
                    <div className="bg-white rounded-[2rem] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-zinc-100 w-[280px] backdrop-blur-3xl bg-white/95">
                      <div className="flex flex-col gap-6">
                        {link.dropdown.map((item) => (
                          <Link key={item.name} href={item.href} className="flex flex-col gap-1 group/item">
                            <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest group-hover/item:text-slate-500 transition-colors">
                              {item.name}
                            </span>
                            <span className="text-[9px] text-slate-500 font-medium">
                              {item.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-slate-900 transition-all duration-500 group-hover:w-full rounded-full" />
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-6 sm:gap-10">
            <div className="hidden sm:flex items-center gap-8">
              <button className="flex items-center gap-2 group transition-all py-1">
                <UserCircleGear size={16} weight="bold" className="text-slate-400 group-hover:text-slate-900 transition-colors" />
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${isScrolled ? 'text-slate-900 group-hover:text-slate-500' : 'text-slate-700 group-hover:text-slate-900'}`}>Talent</span>
              </button>
              <button className="flex items-center gap-2 group transition-all py-1">
                <Buildings size={16} weight="bold" className="text-slate-400 group-hover:text-slate-900 transition-colors" />
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${isScrolled ? 'text-slate-900 group-hover:text-slate-500' : 'text-slate-700 group-hover:text-slate-900'}`}>Firm</span>
              </button>
            </div>

            <Link href="#contact" className="hidden md:flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-slate-700 transition-all shadow-xl group overflow-hidden relative">
              <span className="relative z-10 font-black tracking-widest">Connect</span>
              <LinkSimple size={18} weight="bold" className="relative z-10 group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute inset-0 bg-slate-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-4 bg-slate-100 rounded-full text-slate-900 hover:bg-slate-200 transition-all"
            >
              {isOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-x-4 top-32 z-50 pointer-events-auto"
          >
            <div className="bg-white/95 backdrop-blur-2xl rounded-[3rem] p-10 shadow-[0_40px_100px_rgba(0,0,0,0.15)] border border-slate-100 flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <div key={link.name} className="flex flex-col gap-4">
                    <Link
                      href={link.href}
                      onClick={() => !link.dropdown && setIsOpen(false)}
                      className="text-[14px] font-black uppercase tracking-[0.3em] text-slate-900 flex items-center justify-between"
                    >
                      {link.name}
                      {link.dropdown && <CaretDown size={14} weight="bold" />}
                    </Link>
                    {link.dropdown && (
                      <div className="flex flex-col gap-4 pl-6 border-l-2 border-slate-50">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="flex flex-col gap-1"
                          >
                            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{sub.name}</span>
                            <span className="text-[9px] text-slate-400 font-medium">{sub.description}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="h-px bg-slate-50 w-full" />
              <div className="flex flex-col gap-6">
                <button className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-slate-900 transition-colors">
                  <UserCircleGear size={20} weight="bold" />
                  Talent Protocol
                </button>
                <button className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-slate-900 transition-colors">
                  <Buildings size={20} weight="bold" />
                  Firm Infrastructure
                </button>
              </div>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full bg-slate-900 text-white py-6 rounded-full text-[11px] font-black uppercase tracking-[0.3em] text-center shadow-xl flex items-center justify-center gap-4"
              >
                Establish Connection
                <LinkSimple size={20} weight="bold" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav >
  );
};

export default Navbar;