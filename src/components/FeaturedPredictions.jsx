import React, { useState, useEffect } from 'react';
import { Trophy, Clock, ChevronRight, ChevronLeft, Target, TrendingUp, Users } from 'lucide-react';
import hailMary from '../assets/posters/hail_mary.png';
import hoppers from '../assets/posters/hoppers.png';
import readyOrNot2 from '../assets/posters/ready_or_not_2.png';
import undertone from '../assets/posters/undertone.png';
import peakyBlinders from '../assets/posters/peaky_blinders.png';
import heel from '../assets/posters/heel.png';

const FeaturedPredictions = ({ onPredict }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const featuredMovies = [
    {
      id: 1,
      title: "PEAKY BLINDERS",
      subtitle: "The Immortal Man — Starring Cillian Murphy",
      year: "2026",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1RfnNxjkJjv6su_9EVi-AqVTvMyaiWergB9Vh_utvs1n6ZYTWygADBA1Xzwx0kxDfH5S&s=10",
      deadline: "Oct 20, 2025",
      participants: "42.8k",
      sentiment: "88% Bullish",
      countdown: "12d 04h"
    },
    {
      id: 2,
      title: "READY OR NOT 2",
      subtitle: "Here I Come",
      year: "2025",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfl2H2Hd7Lf3_4QEElNKG-XKZLpNDHziIfKaVKBn8X_HIPeewbZNbCGybVuZj8yjOusBm5&s=10",
      deadline: "Nov 15, 2025",
      participants: "18.2k",
      sentiment: "74% Bullish",
      countdown: "38d 11h"
    },
    {
       id: 3,
       title: "PROJECT HAIL MARY",
       subtitle: "Believe in the Hail Mary — Starring Ryan Gosling",
       year: "2026",
       image: "https://m.media-amazon.com/images/M/MV5BNTkwNzJiYTctNzI3NC00NjE1LTlhYjktY2Q5MTdmMWFmNzcxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
       deadline: "Mar 20, 2026",
       participants: "64.1k",
       sentiment: "92% Bullish",
       countdown: "142d 08h"
    }
  ];

  const topPredictors = [
    { rank: 1, name: "CinematicWhiz", points: "14,820", avatar: "CW", color: "bg-brand-green" },
    { rank: 2, name: "PredictorPro", points: "12,450", avatar: "PP", color: "bg-brand-orange" },
    { rank: 3, name: "MovieMind", points: "11,900", avatar: "MM", color: "bg-brand-blue" },
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % featuredMovies.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length);

  return (
    <section className="py-20 bg-[#14181C] font-graphik antialiased selection:bg-brand-green selection:text-black">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        
        {/* Header Section */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-[12px] font-black uppercase tracking-[0.3em] text-[#99aabb] mb-2 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-brand-green"></span>
              Featured Predictions
            </h2>
            <h3 className="text-[32px] font-black text-white tracking-tight leading-tight">
              Test your film instincts.<br />
              <span className="text-brand-green">Climb the leaderboard.</span>
            </h3>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-[13px] font-bold text-[#99aabb] hover:text-white transition-colors duration-200 uppercase tracking-widest pb-1 border-b border-white/10 hover:border-brand-green">
            Explore All Challenges <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Main Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* CAROUSEL (Left 2/3) */}
          <div className="lg:col-span-8 relative group overflow-hidden rounded-2xl border border-white/5 bg-[#1C2227] min-h-[480px]">
            {/* Background Image Layer (Blurred Backdrop) */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 opacity-40 blur-[40px] scale-110"
              style={{ backgroundImage: `url(${featuredMovies[activeSlide].image})` }}
            />
            
            {/* Overlays */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#14181C] via-transparent to-transparent" />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#14181C] via-[#14181C]/40 to-transparent" />

            {/* Poster Card (Right Side Float) */}
            <div className="absolute right-[10%] top-1/2 -translate-y-1/2 z-20 hidden md:block group-hover:scale-105 transition-transform duration-500">
               <div className="w-[240px] aspect-[2/3] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 ring-1 ring-white/5">
                  <img src={featuredMovies[activeSlide].image} className="w-full h-full object-cover" alt="Poster" />
               </div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-12 flex flex-col justify-end z-20">
              <div className="max-w-[500px]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-brand-orange text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest animate-pulse">
                    Hot Challenge
                  </span>
                  <span className="text-white/60 text-[14px] font-bold tracking-widest uppercase">
                    {featuredMovies[activeSlide].year}
                  </span>
                </div>
                <h4 className="text-[48px] font-black text-white leading-none mb-2 tracking-tighter">
                  {featuredMovies[activeSlide].title}
                </h4>
                <p className="text-[18px] text-white/80 font-medium mb-6 tracking-wide">
                  {featuredMovies[activeSlide].subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-8 mb-8">
                  <div className="flex flex-col">
                    <span className="text-white/40 text-[11px] uppercase tracking-widest font-bold mb-1">Participants</span>
                    <div className="flex items-center gap-2">
                       <Users className="w-4 h-4 text-brand-blue" />
                       <span className="text-white font-black text-[16px]">{featuredMovies[activeSlide].participants}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/40 text-[11px] uppercase tracking-widest font-bold mb-1">Sentiment</span>
                    <div className="flex items-center gap-2">
                       <TrendingUp className="w-4 h-4 text-brand-green" />
                       <span className="text-white font-black text-[16px]">{featuredMovies[activeSlide].sentiment}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => onPredict(featuredMovies[activeSlide])}
                    className="bg-brand-green hover:bg-[#00c048] text-white px-8 py-3.5 rounded-lg text-[14px] font-black uppercase tracking-widest transition-all shadow-xl shadow-brand-green/20"
                  >
                    Predict Now
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Handles */}
            <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 flex justify-between px-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-brand-green hover:border-brand-green transition-all">
                  <ChevronLeft className="w-6 h-6" />
               </button>
               <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-brand-green hover:border-brand-green transition-all">
                  <ChevronRight className="w-6 h-6" />
               </button>
            </div>
          </div>

          {/* SIDEBAR (Right 1/3) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* COUNTDOWN CARD */}
            <div className="bg-[#1C2227] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
               <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="flex items-center gap-2 text-[12px] font-black uppercase tracking-widest text-[#99aabb]">
                      <Clock className="w-4 h-4 text-brand-orange" />
                      Next Closing
                    </h5>
                    <span className="text-white/30 text-[11px] font-mono tracking-tighter">REF: 1042</span>
                  </div>
                  <div className="mb-6">
                    <p className="text-[13px] text-white/60 mb-2">Predictions close in:</p>
                    <div className="flex items-center gap-3">
                      <div className="text-[36px] font-black text-white leading-none font-mono">
                        {featuredMovies[activeSlide].countdown}
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4 group-hover:border-brand-orange/30 transition-colors">
                     <div className="w-10 h-10 rounded-lg bg-brand-orange/20 flex items-center justify-center">
                        <Target className="w-6 h-6 text-brand-orange" />
                     </div>
                     <div>
                        <p className="text-[12px] uppercase font-black text-white/50 tracking-wider">Predict By</p>
                        <p className="text-[14px] font-bold text-white tracking-wide">{featuredMovies[activeSlide].deadline}</p>
                     </div>
                  </div>
               </div>
               {/* Background Accent */}
               <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-brand-orange/10 blur-[80px] -translate-y-1/2 translate-x-1/2" />
            </div>

            {/* LEADERBOARD PREVIEW */}
            <div className="bg-[#1C2227] border border-white/5 rounded-2xl p-6 relative overflow-hidden">
               <div className="flex items-center justify-between mb-8">
                  <h5 className="flex items-center gap-2 text-[12px] font-black uppercase tracking-widest text-[#99aabb]">
                    <Trophy className="w-4 h-4 text-brand-green" />
                    Top Predictors
                  </h5>
                  <a href="#" className="text-[11px] font-bold text-brand-green hover:underline">Full Standings</a>
               </div>
               <div className="space-y-4 mb-2">
                  {topPredictors.map((user) => (
                    <div key={user.rank} className="flex items-center justify-between group cursor-pointer p-2 rounded-xl hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className={`w-10 h-10 rounded-full ${user.color} flex items-center justify-center text-white text-[14px] font-black shadow-lg`}>
                            {user.avatar}
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#14181C] rounded-full flex items-center justify-center border border-white/10 text-[10px] font-black text-white">
                            {user.rank}
                          </div>
                        </div>
                        <div>
                           <p className="text-[14px] font-bold text-white group-hover:text-brand-green transition-colors">{user.name}</p>
                           <p className="text-[11px] text-white/40 uppercase tracking-widest font-black">Diamond Tier</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-black text-[15px]">{user.points}</p>
                        <p className="text-[10px] text-brand-green font-bold flex items-center justify-end gap-1 uppercase">
                          <TrendingUp className="w-2.5 h-2.5" /> +24%
                        </p>
                      </div>
                    </div>
                  ))}
               </div>
               {/* Background Accent */}
               <div className="absolute bottom-0 left-0 w-[120px] h-[120px] bg-brand-green/10 blur-[80px] translate-y-1/2 -translate-x-1/2" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedPredictions;
