"use client"

import React, { useState } from 'react';
import Image from "next/image";
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 border-b border-white/15 md:border-none relative">
      <div className="container">
        <div className="flex justify-between items-center border border-white/15 md:p-2.5 p-3 rounded-xl max-w-2xl mx-auto">
          <div>
            <div className="border rounded-lg h-10 w-10 inline-flex justify-center items-center border-white/15">
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
              <a href="#" className="hover:text-white/70 transition">About</a>
              <a href="#" className="hover:text-white/70 transition">Services</a>
              <a href="#" className="hover:text-white/70 transition">Showcase</a>
              <a href="#" className="hover:text-white/70 transition">Blog</a>
            </nav>
          </div>

          <div className="flex gap-4 items-center">
            <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
              <div className="absolute inset-0">
                <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
              </div>
              <span>Get Started</span>
            </button>
            
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

        <div className={`md:hidden absolute top-full left-4 right-4 mt-2 bg-black/95 backdrop-blur-md rounded-xl border border-white/15 shadow-[0px_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 z-50 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <nav className="p-6">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-white hover:text-white/70 transition py-2" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#" className="text-white hover:text-white/70 transition py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#" className="text-white hover:text-white/70 transition py-2" onClick={() => setIsMenuOpen(false)}>Showcase</a>
              <a href="#" className="text-white hover:text-white/70 transition py-2" onClick={() => setIsMenuOpen(false)}>Blog</a>
            </div>
          </nav>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/20 z-40" onClick={() => setIsMenuOpen(false)} />
        )}
      </div>
    </header>
  );
};