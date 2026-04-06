import React, { useEffect, useState } from 'react';
import Button from './Button';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`relative w-full h-screen bg-[#14181C] overflow-hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* 1. BACKGROUND IMAGE LAYER */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat transition-transform duration-[3000ms] ease-out"
        style={{ 
          backgroundImage: "url('https://a.ltrbxd.com/resized/alternative-backdrop/6/1/1/2/8/8/tmdb/o2xLxY1LdwBMsrGD9hjIaOrIQm6-1200-1200-675-675-crop-000000.jpg')",
          backgroundPosition: 'center 10%',
          backgroundSize: '1100px auto'
        }}
      />

      {/* 2. CINEMATIC GRADIENTS  */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Top Fade to Black */}
        <div className="absolute inset-x-0 top-0 h-[220px] bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
        
        {/* Left Side */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#14181C] via-[#14181C]/60 to-transparent" />
        
        {/* Right Side */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#14181C] via-[#14181C]/60 to-transparent" />
        
        {/* Deep Bottom Shadow */}
        <div className="absolute inset-x-0 bottom-0 h-[500px] bg-gradient-to-t from-[#14181C] via-[#14181C]/90 to-transparent" />
      </div>

      {/* 4. LOWERED HERO CONTENT (ABSOLUTE BOTTOM) */}
      <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 z-30 w-full px-6 text-center max-w-[950px]">
        
        {/* LOGO IN HERO */}
        <div className="flex justify-center mb-8 transform hover:scale-105 transition-transform duration-500">
          <div className="relative w-[80px] h-[80px]">
            {/* Ticket, Popcorn, Chair SVG (Large) */}
            <svg viewBox="0 0 120 80" className="w-[100px] h-auto drop-shadow-[0_0_25px_rgba(0,224,84,0.3)] group-hover:drop-shadow-[0_0_40px_rgba(0,224,84,0.4)] transition-all duration-500">
              {/* MOVIE TICKET (Orange) */}
              <g transform="translate(5, 25) rotate(-15)">
                <rect x="0" y="0" width="35" height="45" rx="4" fill="#FF8A00" />
                <circle cx="0" cy="22.5" r="5" fill="#14181C" />
                <circle cx="35" cy="22.5" r="5" fill="#14181C" />
                <line x1="28" y1="5" x2="28" y2="40" stroke="#14181C" strokeWidth="2" strokeDasharray="3 3" opacity="0.4" />
              </g>

              {/* POPCORN (Green) */}
              <g transform="translate(45, 15)">
                <path d="M5 25 L35 25 L30 55 L10 55 Z" fill="#00E054" />
                <path d="M12 25 L15 55 M20 25 L20 55 M28 25 L25 55" stroke="#14181C" strokeWidth="1.5" opacity="0.2" />
                <path d="M2 28 Q2 15 12 15 Q15 5 25 10 Q38 5 38 20 Q42 30 35 32 L5 32 Z" fill="#FEF9E7" />
                <circle cx="10" cy="20" r="4" fill="#FEF9E7" />
                <circle cx="20" cy="15" r="5" fill="#FEF9E7" />
                <circle cx="30" cy="18" r="4" fill="#FEF9E7" />
              </g>

              {/* CHAIR (Blue) */}
              <g transform="translate(85, 25)">
                <path d="M0 10 Q0 0 10 0 L20 0 Q30 0 30 10 L30 35 L0 35 Z" fill="#1E90FF" />
                <rect x="-4" y="20" width="8" height="15" rx="3" fill="#1E90FF" />
                <rect x="26" y="20" width="8" height="15" rx="3" fill="#1E90FF" />
                <path d="M2 30 L28 30 L26 42 L4 42 Z" fill="#1E90FF" opacity="0.8" />
              </g>
            </svg>
          </div>
        </div>

        <h1 className="font-tiempos text-[42px] font-bold text-white leading-[48px] mb-[30px] tracking-tight drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
         Predict movie outcomes.<br className="hidden sm:block" />
          {' '}Test your film instincts.<br className="hidden sm:block" />
          {' '}Climb the leaderboard.
        </h1>
        
        <button className="bg-[#00AC1C] hover:bg-[#00c048] text-[#FFFFFF] font-graphik font-black px-[17px] py-[11px] rounded-[3px] text-[14px] uppercase tracking-[0.08em] transition-colors duration-200">
         Get started — unlock MovieIQ.
        </button>


      </div>

      {/* 5. VERTICAL FILM TITLE */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 z-40 pointer-events-none hidden xl:block">
        <span className="text-white/30 text-[11px] font-bold tracking-[0.2em] uppercase [writing-mode:vertical-rl] select-none">
          Project Hail Mary (2026)
        </span>
      </div>
      
    </div>
  );
};

export default Hero;
