"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';
import { UserCircleGear, Buildings, LinkSimple, List, CaretDown, X } from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'Services',
      href: '#',
      dropdown: [
        { name: 'Our Process', href: '#how-it-works', description: 'The TalentMesh Method' },
        { name: 'Practice Areas', href: '#industries', description: 'Strategic domain alignment' },
      ]
    },
    {
      name: 'Expertise',
      href: '#',
      dropdown: [
        { name: 'Success Stories', href: '#testimonials', description: 'Client & Candidate Impact' },
        { name: 'Insights', href: '#insights', description: 'Market intelligence' },
        { name: 'About Us', href: '#about', description: 'Our mission & team' },
      ]
    },
    {
      name: 'Product',
      href: '#',
      dropdown: [
        { name: 'AI HR Agent Tools', href: '#ai-hrvagents-tools', description: 'Advanced AI-powered HR solutions' },
      ]
    },
    { name: 'Contact', href: '#contact' },
  ];

  // Prevent hydration mismatch by not rendering dynamic styles until mounted
  if (!mounted) {
    return (
      <>
        <nav className="fixed top-0 left-0 right-0 z-[100] py-2 md:py-4">
          <div className="max-w-7xl mx-auto px-4 md:px-0">
            <div className="flex items-center justify-between px-4 py-2 md:px-6 md:py-3 rounded-full bg-transparent border-transparent">
              {/* Simplified SSR-safe navbar */}
            </div>
          </div>
        </nav>
      </>
    );
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'py-2' : 'py-2 md:py-4'}`}>
        <div className="max-w-full md:max-w-7xl mx-auto px-4">
          <div
            className={`
              flex items-center justify-between gap-3 md:gap-6 lg:gap-8 px-4 py-2 md:px-8 md:py-3 rounded-full transition-all duration-500
              ${isScrolled
                ? 'bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(4,67,150,0.05)]'
                : 'bg-transparent border-transparent'
              }
            `}
          >

            {/* Left Section: Logo */}
            <div className="flex-1 flex justify-start">
              <Link
                href="/"
                className="flex items-center gap-2 group"
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                <div className="relative h-10 md:h-12 w-[140px] md:w-[180px] flex items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/TalentMesh_page-0002-removebg-preview.png"
                    alt="TalentMesh Solutions"
                    className="absolute top-1/2 left-0 -translate-y-1/2 h-14 md:h-15 w-auto max-w-none object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
            </div>

            {/* Center Section: Desktop Nav */}
            <div className="hidden lg:flex items-center justify-center gap-8 lg:gap-0">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-sans text-sm font-bold uppercase tracking-wide ${isScrolled
                      ? 'text-slate-800 hover:bg-slate-100'
                      : 'text-slate-800 hover:bg-white/50 hover:text-black'
                      }`}
                  >
                    {link.name}
                    {link.dropdown && <CaretDown size={12} weight="bold" className="opacity-50 group-hover:opacity-100 transition-opacity" />}
                  </Link>

                  {link.dropdown && (
                    <AnimatePresence>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white/80 backdrop-blur-2xl rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-white/50 overflow-hidden p-2 transform origin-top transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 pointer-events-auto z-50">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-blue-50/20 pointer-events-none" />
                        <div className="relative flex flex-col gap-1">
                          {link.dropdown.map((item) => (
                            <Link key={item.name} href={item.href} className="flex flex-col gap-0.5 group/item px-4 py-3 hover:bg-white/60 rounded-xl transition-all hover:shadow-sm border border-transparent hover:border-white/50">
                              <span className="text-sm font-semibold text-slate-900 group-hover/item:text-[#044396] transition-colors">{item.name}</span>
                              <span className="text-[10px] text-slate-500 font-medium leading-relaxed group-hover/item:text-slate-600 transition-colors">
                                {item.description}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Right Section: Action Buttons */}
            <div className="flex-1 flex justify-end items-center gap-4 md:gap-6">
              <div className="hidden sm:flex items-center gap-6 md:gap-8">
                <Link href="/under-construction" className="flex items-center gap-2 group transition-all py-1">
                  <UserCircleGear size={18} weight="bold" className="text-slate-400 group-hover:text-slate-900 transition-colors" />
                  <span className={`text-xs font-mono uppercase tracking-[0.2em] transition-colors ${isScrolled ? 'text-slate-900 group-hover:text-slate-500' : 'text-slate-700 group-hover:text-slate-900'}`}>Candidates</span>
                </Link>
                <Link href="/under-construction" className="flex items-center gap-2 group transition-all py-1">
                  <Buildings size={18} weight="bold" className="text-slate-400 group-hover:text-slate-900 transition-colors" />
                  <span className={`text-xs font-mono uppercase tracking-[0.2em] transition-colors ${isScrolled ? 'text-slate-900 group-hover:text-slate-500' : 'text-slate-700 group-hover:text-slate-900'}`}>Employers</span>
                </Link>
              </div>

              <Link href="#contact" className="hidden md:flex items-center gap-1 bg-slate-900 text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-xs font-mono uppercase tracking-[0.2em] hover:bg-slate-700 transition-all shadow-xl group overflow-hidden relative">
                <span className="relative z-10 font-black tracking-widest">Connect</span>
                <LinkSimple size={20} weight="bold" className="relative z-10 group-hover:rotate-45 transition-transform duration-500" />
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
        </div>


        {/* Mobile Menu */}
        <AnimatePresence>
          {
            isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="lg:hidden fixed inset-x-4 top-24 z-50 pointer-events-auto"
              >
                <div className="bg-white/80 backdrop-blur-3xl rounded-[2rem] p-8 shadow-[0_40px_100px_rgba(0,0,0,0.2)] border border-white/40 flex flex-col gap-8 w-full relative overflow-y-auto max-h-[75vh]">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-blue-50/30 pointer-events-none" />

                  <div className="relative flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <div key={link.name} className="flex flex-col">
                        <Link
                          href={link.href}
                          onClick={() => !link.dropdown && setIsOpen(false)}
                          className="text-2xl font-bold text-slate-900 flex items-center justify-between py-3 group"
                        >
                          <span className="group-hover:text-[#044396] transition-colors">{link.name}</span>
                          {link.dropdown && <CaretDown size={20} weight="bold" className="text-slate-400 group-hover:text-[#044396] transition-colors" />}
                        </Link>
                        {link.dropdown && (
                          <div className="flex flex-col gap-3 pl-0 pb-4">
                            {link.dropdown.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/50 border border-transparent hover:border-white/50 transition-all group/item"
                              >
                                <div className="h-1.5 w-1.5 rounded-full bg-slate-200 group-hover/item:bg-[#044396] transition-colors" />
                                <div className="flex flex-col">
                                  <span className="text-sm font-semibold text-slate-700 group-hover/item:text-[#044396] transition-colors">{sub.name}</span>
                                  <span className="text-[10px] text-slate-400 font-medium">{sub.description}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                        <div className="h-px bg-slate-100/50 w-full" />
                      </div>
                    ))}
                  </div>

                  <div className="relative flex flex-col gap-4">
                    <Link href="/under-construction" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/50 transition-all text-left group border border-transparent hover:border-white/50">
                      <div className="p-2 rounded-lg bg-slate-100 text-slate-500 group-hover:bg-[#044396] group-hover:text-white transition-colors shadow-sm">
                        <UserCircleGear size={20} weight="duotone" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-[#044396] transition-colors">For Candidates</span>
                        <span className="text-[10px] text-slate-500">Browse jobs & create profile</span>
                      </div>
                    </Link>

                    <Link href="/under-construction" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/50 transition-all text-left group border border-transparent hover:border-white/50">
                      <div className="p-2 rounded-lg bg-slate-100 text-slate-500 group-hover:bg-[#044396] group-hover:text-white transition-colors shadow-sm">
                        <Buildings size={20} weight="duotone" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-[#044396] transition-colors">For Employers</span>
                        <span className="text-[10px] text-slate-500">Hire top talent fast</span>
                      </div>
                    </Link>
                  </div>

                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="relative w-full bg-[#044396] text-white py-6 rounded-xl text-center shadow-lg shadow-blue-900/20 hover:shadow-xl hover:bg-blue-700 transition-all overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <div className="relative flex items-center justify-center gap-3 font-bold tracking-widest text-xs uppercase">
                      Start Your Search
                      <LinkSimple size={16} weight="bold" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            )
          }
        </AnimatePresence >
      </nav >
    </>
  );
};

export default Navbar;