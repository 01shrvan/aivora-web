"use client"

import { Button } from "@/components/Button"
import React, { useState } from 'react';
import Image from "next/image";
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="w-full flex justify-center px-4">
        <div className="flex justify-between items-center w-full md:max-w-2xl md:border md:border-white/15 md:p-2.5 md:rounded-sm relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <div className="border rounded-sm h-10 w-10 inline-flex justify-center items-center border-white/15">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={40}
                height={40}
              />
            </div>
          </div>

          <div className="hidden md:block">
            <nav className="flex gap-8 text-white text-sm">
              <a href="/about" className="hover:text-white/70 transition">About</a>
              <a href="/services" className="hover:text-white/70 transition">Services</a>
              <a href="/showcase" className="hover:text-white/70 transition">Showcase</a>
              <a href="/blog" className="hover:text-white/70 transition">Blog</a>
              <a href="/contact" className="hover:text-white/70 transition">Contact</a>
            </nav>
          </div>

          <div className="flex gap-4 items-center">
            <Button>Get Started</Button>
            <button 
              onClick={toggleMenu}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X size={32} color="white" />
              ) : (
                <Menu size={32} color="white" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden absolute top-full left-0 right-0 mt-2 mx-4 rounded-xl border border-white/15 bg-black/90 backdrop-blur-md shadow-[0px_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 z-50 overflow-hidden ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <nav className="flex flex-col divide-y divide-white/10">
          <a 
            href="#" 
            className="px-4 py-3 text-white hover:bg-white/10 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#" 
            className="px-4 py-3 text-white hover:bg-white/10 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#" 
            className="px-4 py-3 text-white hover:bg-white/10 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Showcase
          </a>
          <a 
            href="#" 
            className="px-4 py-3 text-white hover:bg-white/10 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </a>
          <a 
            href="#" 
            className="px-4 py-3 text-white hover:bg-white/10 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/20 z-40" onClick={() => setIsMenuOpen(false)} />
      )}
    </header>
  );
};
