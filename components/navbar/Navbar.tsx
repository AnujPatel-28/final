"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { BrainCircuit, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <div
            className={`
              flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500
              ${isScrolled
                ? 'bg-white/70 backdrop-blur-3xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]'
                : 'bg-transparent border-transparent'
              }
            `}
          >

            {/* Logo + Name */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-blue-600/10 group-hover:bg-blue-600/20' : 'bg-white/50 group-hover:bg-white/80'}`}>
                <BrainCircuit className="w-6 h-6 text-blue-600" />
              </div>
              <span className="font-bold text-xl text-slate-800 tracking-tight">TalentMesh</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="/industries">Industries</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/insights">Insights</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>

            {/* Action / Mobile Toggle */}
            <div className="flex items-center gap-4">
              <button className="hidden md:block bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-md hover:shadow-lg">
                Sign In
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-slate-600 hover:text-slate-900"
              >
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 inset-x-4 z-[90] p-4 bg-white/90 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-4 p-2">
              <MobileLink href="/industries" onClick={() => setIsOpen(false)}>Industries</MobileLink>
              <MobileLink href="/about" onClick={() => setIsOpen(false)}>About</MobileLink>
              <MobileLink href="/insights" onClick={() => setIsOpen(false)}>Insights</MobileLink>
              <MobileLink href="/contact" onClick={() => setIsOpen(false)}>Contact</MobileLink>
              <hr className="border-slate-200" />
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold">
                Sign In
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
    {children}
  </Link>
);

const MobileLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => (
  <Link href={href} onClick={onClick} className="block text-lg font-medium text-slate-800 py-2">
    {children}
  </Link>
);

export default Navbar;