'use client';

import { useState, useEffect } from 'react';

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-[#f2e4d8] flex items-center justify-center z-[100]">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-2 text-gray-900 animate-pulse">
          Sandstore
        </h1>
        <p className="text-lg">by Anish</p>
      </div>
    </div>
  );
}