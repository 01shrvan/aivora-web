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
    <header className="py-4 border-b border-white/15 md:border-none relative">
      <div className="container">
        <div className="flex justify-between items-center md:border md:border-white/15 md:p-2.5 md:rounded-xl md:max-w-2xl md:mx-auto">
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

        <div className={`md:hidden absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-md border-t border-white/15 shadow-[0px_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 z-50 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <nav className="p-4">
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