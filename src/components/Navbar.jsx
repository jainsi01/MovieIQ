import React, { useState, useEffect } from 'react';
import { Search, Menu, X, User, LogOut, Check } from 'lucide-react';

import SignupModal from './SignupModal';

const Navbar = ({ onHomeClick, onPredictionsClick, onLeaderboardClick, onRewardsClick }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  // Handle sticky scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', action: onHomeClick },
    { name: 'Movies', href: '#' },
    { name: 'Predictions', href: '#', action: onPredictionsClick },
    { name: 'Leaderboard', href: '#', action: onLeaderboardClick },
    { name: 'Rewards', href: '#', action: onRewardsClick },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-graphik antialiased ${
        scrolled || isLoginOpen ? 'bg-[#14181C]/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 lg:px-10">
        
        {/* 1. LEFT SECTION (BRAND) - Hidden when login is open on some mobile designs, but keeping for balance */}
        <div className={`flex items-center transition-opacity duration-300 ${isLoginOpen ? 'opacity-0 md:opacity-100 pointer-events-none' : 'opacity-100'}`}>
          <a href="/" onClick={(e) => { e.preventDefault(); onHomeClick(); setActiveTab('Home'); }} className="group flex items-center gap-4 transition-all duration-300 hover:scale-[1.02]">
            <div className="relative w-[56px] h-[48px] flex items-center justify-center">
              <svg viewBox="0 0 120 80" className="w-full h-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(0,224,84,0.3)] transition-all duration-500">
                {/* MOVIE TICKET (Orange) */}
                <g transform="translate(5, 25) rotate(-15)">
                  <rect x="0" y="0" width="35" height="45" rx="4" fill="#FF8A00" />
                  <circle cx="0" cy="22.5" r="5" fill="#14181C" />
                  <circle cx="35" cy="22.5" r="5" fill="#14181C" />
                  <line x1="28" y1="5" x2="28" y2="40" stroke="#14181C" strokeWidth="2" strokeDasharray="3 3" opacity="0.4" />
                </g>

                {/* POPCORN (Green) */}
                <g transform="translate(45, 15)">
                  {/* Bucket */}
                  <path d="M5 25 L35 25 L30 55 L10 55 Z" fill="#00E054" />
                  <path d="M12 25 L15 55 M20 25 L20 55 M28 25 L25 55" stroke="#14181C" strokeWidth="1.5" opacity="0.2" />
                  {/* Popcorn Top */}
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
                  <rect x="5" y="32" width="20" height="4" rx="1" fill="#14181C" opacity="0.2" />
                </g>
              </svg>
            </div>
            <span className="text-[28px] font-black text-white tracking-[-0.03em] hidden sm:block">
              MovieIQ
            </span>
          </a>
        </div>

        {/* HORIZONTAL SIGN IN INTERFACE (The user's core request) */}
        {isLoginOpen ? (
          <div className="flex-1 flex items-center justify-center gap-2 sm:gap-4 lg:gap-8 transition-all duration-300 bg-[#14181C] z-[60]">
            <button 
              onClick={() => setIsLoginOpen(false)}
              className="text-white/40 hover:text-white transition-colors p-2 shrink-0"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
              {/* Username Field */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-[#99aabb] uppercase tracking-widest pl-1">Username</label>
                <input 
                  type="text" 
                  className="bg-white border-none rounded-[3px] px-3 py-1.5 text-[12px] sm:text-[13px] text-black w-[90px] sm:w-[130px] lg:w-[160px] focus:ring-2 ring-brand-green/30 outline-none" 
                  autoFocus
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center pl-1">
                  <label className="text-[10px] font-bold text-[#99aabb] uppercase tracking-widest">Password</label>
                  <a href="#" className="hidden sm:block text-[10px] font-bold text-brand-green hover:underline uppercase tracking-widest">Forgotten?</a>
                </div>
                <input 
                  type="password" 
                  className="bg-[#2c3440] border-none rounded-[3px] px-3 py-1.5 text-[12px] sm:text-[13px] text-white w-[90px] sm:w-[130px] lg:w-[160px] focus:ring-2 ring-brand-green/30 outline-none" 
                />
              </div>

              {/* Remember Me */}
              <div className="hidden md:flex items-center gap-2 mt-4">
                <div className="w-4 h-4 rounded-[2px] bg-[#2c3440] border border-white/10 flex items-center justify-center cursor-pointer">
                  <Check className="w-3 h-3 text-brand-green" />
                </div>
                <span className="text-[12px] font-bold text-[#99aabb] whitespace-nowrap">Remember me</span>
              </div>

              <button className="bg-brand-green hover:bg-[#00c048] text-white px-4 sm:px-6 py-2 rounded-[3px] text-[12px] sm:text-[13px] font-black uppercase tracking-widest transition-all shadow-lg shadow-brand-green/20 mt-4 h-[32px] sm:h-[36px] flex items-center justify-center">
                SIGN IN
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* 2. CENTER SECTION (Nav Links) */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => { 
                    e.preventDefault(); 
                    setActiveTab(link.name);
                    if (link.action) link.action();
                  }}
                  className={`text-[15px] font-medium tracking-wide transition-all duration-200 relative group py-2 ${
                    activeTab === link.name ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-green rounded-full transition-all duration-300 ${
                    activeTab === link.name ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-75'
                  }`} />
                </a>
              ))}
            </div>

            {/* 3. RIGHT SECTION (Auth + Search) */}
            <div className="hidden md:flex items-center gap-6">
              <div className="relative group/search max-w-[200px]">
                <input 
                  type="text" 
                  placeholder="Search movies..."
                  className="bg-white/5 border border-white/10 rounded-full py-1.5 pl-9 pr-4 text-[14px] w-full focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all text-white placeholder-white/30"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within/search:text-brand-green transition-colors" />
              </div>

              <div className="flex items-center gap-5">
                <button 
                  onClick={() => setIsLoginOpen(true)}
                  className="text-[13px] font-bold text-white/70 hover:text-white transition-colors uppercase tracking-widest"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => setIsSignupOpen(true)}
                  className="bg-brand-green hover:bg-[#00c048] text-white px-5 py-1.5 rounded-[3px] text-[12px] font-black uppercase tracking-widest transition-all shadow-lg shadow-brand-green/10"
                >
                  Create Account
                </button>
              </div>
            </div>
          </>
        )}

        {/* MOBILE MENU TOGGLE */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 top-[60px] bg-black/60 backdrop-blur-sm z-40" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-full left-0 w-full bg-[#1c2227] border-t border-white/5 shadow-2xl z-50 animate-fade-in-down">
            <div className="flex flex-col p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(link.name);
                      if (link.action) link.action();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex flex-col space-y-1 group"
                  >
                    <span className="text-white/90 text-[15px] font-bold tracking-wide group-hover:text-brand-green transition-colors uppercase">
                      {link.name}
                    </span>
                    <span className="h-[2px] w-0 bg-brand-green group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>
              
              <div className="relative">
                <input 
                  type="text" 
                  className="bg-white/5 border border-white/10 rounded-lg py-3 pl-11 pr-4 text-[15px] w-full focus:outline-none focus:border-brand-green/30 text-white placeholder-white/30"
                  placeholder="Search movies..."
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              </div>

              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => { setIsLoginOpen(true); setIsMobileMenuOpen(false); }}
                  className="w-full bg-[#343d4a] py-3 rounded-lg text-white font-black uppercase tracking-widest text-[14px]"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => { setIsSignupOpen(true); setIsMobileMenuOpen(false); }}
                  className="w-full bg-brand-green py-3 rounded-lg text-white font-black uppercase tracking-widest text-[14px] shadow-lg"
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* SIGNUP MODAL */}
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </nav>
  );
};

export default Navbar;

