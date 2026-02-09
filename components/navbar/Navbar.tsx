// components/Navbar.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="shrink-0 font-bold text-2xl text-blue-600">
            TalentMesh
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/industries" className="text-gray-700 hover:text-blue-600">Industries</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/insights" className="text-gray-700 hover:text-blue-600">Insights</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            
            {/* Sign In Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Sign In
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-xl overflow-hidden">
                  <Link href="/under-construction" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                    For Candidates
                  </Link>
                  <Link href="/under-construction" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                    For Employers
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;