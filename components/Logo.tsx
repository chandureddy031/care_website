import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Inverted Moon / Semicircle Concept */}
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_10px_rgba(79,70,229,0.8)]">
          <defs>
            <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
          </defs>
          {/* The inverted moon (semicircle facing down/up depending on interpretation, here a cup/bowl shape implying 'care') */}
          <path 
            d="M 10 40 Q 50 90 90 40 L 90 35 Q 50 80 10 35 Z" 
            fill="url(#moonGradient)" 
            className="animate-pulse-slow"
          />
          {/* A futuristic ring */}
          <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
        </svg>
      </div>
      <span className="text-2xl font-display font-bold tracking-widest text-white neon-text">
        CARE
      </span>
    </div>
  );
};