'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      } bg-[#fff5ed] border-b-[3px] border-black`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="text-xl md:text-2xl font-black text-gray-900 hover:opacity-80 transition-opacity"
          >
            Sandstore
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {['home', 'how-it-works', 'devlog', 'demo', 'about-me'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="px-4 py-2 border-[2px] border-black rounded-md font-bold hover:bg-black hover:text-white transition-colors shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px]"
              >
                {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden border-[2px] border-black p-2 rounded-md shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px]"
          >
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t-2 border-black pt-4">
            <div className="flex flex-col space-y-3">
              {['home', 'how-it-works', 'devlog', 'demo', 'about-me'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="px-4 py-2 border-[2px] border-black rounded-md font-bold hover:bg-black hover:text-white transition-colors shadow-[2px_2px_0_0_rgba(0,0,0,1)] text-left"
                >
                  {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}