import React, { useState, useEffect } from 'react';
import { ChevronLeft, Calendar, Clock, BarChart3, Star, BookOpen, Check, HelpCircle, ChevronDown, ChevronUp, Zap } from 'lucide-react';

const MovieDetail = ({ movie, onBack }) => {
  const [expandedSections, setExpandedSections] = useState({
    boxOffice: true,
    ratings: false,
    story: false
  });

  const [predictions, setPredictions] = useState({
    openingDay: 50,
    openingWeekend: 150,
    lifetimeSlab: '1000Cr+',
    hitFlop: 'Blockbuster',
    imdb7Day: 8.2,
    imdb30Day: 7.9,
    postCredit: 'Yes',
    sequel: 'Yes',
    endingType: 'Happy',
    confidence: 'Medium'
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  if (!movie) return null;

  return (
    <div className="bg-[#14181C] min-h-screen font-graphik pb-32">
      
      {/* 1. IMMERSIVE HEADER */}
      <div className="relative h-[550px] w-full overflow-hidden">
        {/* Blurred Backdrop */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 blur-[60px] scale-110"
          style={{ backgroundImage: `url(${movie.poster || movie.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14181C] via-[#14181C]/40 to-transparent" />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 h-full flex flex-col justify-end pb-12">
          <button 
            onClick={onBack}
            className="absolute top-28 left-6 flex items-center gap-2 text-[#99aabb] hover:text-white transition-colors uppercase text-[11px] font-black tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10 z-20"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Discover
          </button>

          <div className="flex flex-col md:flex-row items-end gap-10">
            {/* Sharp Poster Card */}
            <div className="w-[200px] aspect-[2/3] rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10 shrink-0 hidden md:block">
              <img src={movie.poster || movie.image} className="w-full h-full object-cover" alt={movie.title} />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                 <span className="bg-brand-green/20 text-brand-green border border-brand-green/30 px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest">
                    Challenge Active
                 </span>
                 <div className="flex items-center gap-1.5 text-[#99aabb] text-[12px] font-bold uppercase tracking-widest">
                    <Calendar className="w-4 h-4 opacity-50" /> {movie.releaseDate || 'TBA 2026'}
                 </div>
              </div>
              <h1 className="text-[48px] md:text-[64px] font-black text-white leading-[1.1] tracking-tighter mb-6">
                {movie.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-8">
                 <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-orange/20 flex items-center justify-center">
                       <Clock className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                       <p className="text-[10px] uppercase font-black text-[#99aabb] tracking-[0.2em] mb-0.5">Deadline In</p>
                       <p className="text-[20px] font-black text-white font-mono">14d : 22h : 18m</p>
                    </div>
                 </div>
                 
                 <div className="hidden lg:flex items-center gap-4 text-[#99aabb]">
                    <div className="w-px h-10 bg-white/10" />
                    <div className="text-[13px] font-medium max-w-[200px] opacity-60">
                       Predictions are verified by official industry trackers.
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. PREDICTION SECTIONS GRID */}
      <div className="max-w-[1200px] mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <div className="lg:col-span-8 space-y-6">
          
          {/* SECTION A: BOX OFFICE */}
          <div className="bg-[#1C2227] rounded-3xl border border-white/5 overflow-hidden group">
            <button 
              onClick={() => toggleSection('boxOffice')}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-green/20 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-brand-green" />
                </div>
                <h2 className="text-[20px] font-black text-white tracking-tight">Box Office Projections</h2>
              </div>
              {expandedSections.boxOffice ? <ChevronUp className="w-5 h-5 text-[#99aabb]" /> : <ChevronDown className="w-5 h-5 text-[#99aabb]" />}
            </button>

            {expandedSections.boxOffice && (
              <div className="px-8 pb-10 space-y-10 animate-in fade-in slide-in-from-top-2 duration-300">
                
                {/* Opening Day Slider */}
                <div>
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <p className="text-[13px] font-bold text-white mb-1 uppercase tracking-widest">Opening Day Collection</p>
                      <p className="text-[11px] text-[#99aabb]">Predicted domestic net collection (Day 1)</p>
                    </div>
                    <p className="text-[24px] font-black text-brand-green">₹{predictions.openingDay} Cr</p>
                  </div>
                  <input 
                    type="range" min="0" max="200" step="5"
                    value={predictions.openingDay}
                    onChange={(e) => setPredictions({...predictions, openingDay: e.target.value})}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                  <div className="flex justify-between mt-3 text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">
                    <span>₹0 Cr</span>
                    <span>₹100 Cr</span>
                    <span>₹200 Cr+</span>
                  </div>
                </div>

                {/* Hit/Flop Classification MCQ */}
                <div>
                  <p className="text-[13px] font-bold text-white mb-4 uppercase tracking-widest">Classification</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['Disaster', 'Avg', 'Hit', 'Blockbuster'].map((opt) => (
                      <button 
                        key={opt}
                        onClick={() => setPredictions({...predictions, hitFlop: opt})}
                        className={`py-3 rounded-xl text-[12px] font-black uppercase tracking-widest border transition-all ${
                          predictions.hitFlop === opt 
                            ? 'bg-brand-green border-brand-green text-white shadow-lg shadow-brand-green/20' 
                            : 'bg-white/5 border-white/5 text-[#99aabb] hover:bg-white/10 hover:border-white/20'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* SECTION B: RATINGS & REVIEWS */}
          <div className="bg-[#1C2227] rounded-3xl border border-white/5 overflow-hidden group">
            <button 
              onClick={() => toggleSection('ratings')}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-yellow-400/20 flex items-center justify-center">
                  <Star className="w-5 h-5 text-yellow-500" />
                </div>
                <h2 className="text-[20px] font-black text-white tracking-tight">Ratings & Critical Reception</h2>
              </div>
              {expandedSections.ratings ? <ChevronUp className="w-5 h-5 text-[#99aabb]" /> : <ChevronDown className="w-5 h-5 text-[#99aabb]" />}
            </button>

            {expandedSections.ratings && (
              <div className="px-8 pb-10 space-y-10">
                 {/* Rating Slider Example */}
                 <div>
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <p className="text-[13px] font-bold text-white mb-1 uppercase tracking-widest">IMDb 7-Day Stable Rating</p>
                      <p className="text-[11px] text-[#99aabb]">Average user score after the first week</p>
                    </div>
                    <p className="text-[24px] font-black text-yellow-500">{predictions.imdb7Day}</p>
                  </div>
                  <input 
                    type="range" min="1" max="10" step="0.1"
                    value={predictions.imdb7Day}
                    onChange={(e) => setPredictions({...predictions, imdb7Day: e.target.value})}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* SECTION C: STORY & PLOT */}
          <div className="bg-[#1C2227] rounded-3xl border border-white/5 overflow-hidden group">
            <button 
              onClick={() => toggleSection('story')}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-brand-blue" />
                </div>
                <h2 className="text-[20px] font-black text-white tracking-tight">Story & Plot Outcomes</h2>
              </div>
              {expandedSections.story ? <ChevronUp className="w-5 h-5 text-[#99aabb]" /> : <ChevronDown className="w-5 h-5 text-[#99aabb]" />}
            </button>

            {expandedSections.story && (
              <div className="px-8 pb-10 space-y-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Post Credit Toggle */}
                    <div>
                        <p className="text-[12px] font-black text-white uppercase tracking-widest mb-4">Post-Credit Scene?</p>
                        <div className="flex items-center gap-2 bg-[#14181C] p-1 rounded-xl border border-white/5 w-fit">
                           {['Yes', 'No'].map(opt => (
                              <button 
                                key={opt}
                                onClick={() => setPredictions({...predictions, postCredit: opt})}
                                className={`px-8 py-2 rounded-lg text-[13px] font-bold tracking-widest uppercase transition-all ${
                                   predictions.postCredit === opt ? 'bg-brand-blue text-white' : 'text-[#99aabb] hover:text-white'
                                }`}
                              >
                                {opt}
                              </button>
                           ))}
                        </div>
                    </div>

                    {/* Ending Type MCQ */}
                    <div>
                        <p className="text-[12px] font-black text-white uppercase tracking-widest mb-4">Ending Tone</p>
                        <div className="flex flex-wrap gap-3">
                           {['Happy', 'Tragic', 'Open'].map(opt => (
                              <button 
                                key={opt}
                                onClick={() => setPredictions({...predictions, endingType: opt})}
                                className={`px-4 py-2 rounded-lg text-[12px] font-bold border transition-all ${
                                   predictions.endingType === opt ? 'bg-brand-blue border-brand-blue text-white' : 'bg-white/5 border-white/10 text-[#99aabb] hover:border-white/30'
                                }`}
                              >
                                {opt}
                              </button>
                           ))}
                        </div>
                    </div>
                 </div>
              </div>
            )}
          </div>

        </div>

        {/* SIDEBAR: CONFIDENCE & SUBMIT */}
        <div className="lg:col-span-4 space-y-6">
           <div className="bg-[#1C2227] rounded-3xl p-8 border border-white/5">
              <div className="flex items-center gap-3 mb-8">
                 <HelpCircle className="w-5 h-5 text-brand-green" />
                 <h3 className="text-[18px] font-black text-white uppercase tracking-tighter">Summary</h3>
              </div>
              
              <div className="space-y-6 mb-10">
                 <div>
                    <p className="text-[11px] font-black text-[#99aabb] uppercase tracking-[0.2em] mb-4">Prediction Confidence</p>
                    <div className="grid grid-cols-3 gap-2">
                       {['Low', 'Medium', 'High'].map(level => (
                          <button 
                             key={level}
                             onClick={() => setPredictions({...predictions, confidence: level})}
                             className={`py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                                predictions.confidence === level ? 'bg-brand-green text-white' : 'bg-white/5 text-[#99aabb] border border-white/5'
                             }`}
                          >
                             {level}
                          </button>
                       ))}
                    </div>
                 </div>

                 <div className="p-4 bg-[#14181C] rounded-2xl border border-white/5">
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-[12px] font-bold text-white/40">Total Points at Stake</span>
                       <span className="text-[18px] font-black text-brand-green underline decoration-brand-green/30">1,250</span>
                    </div>
                    <p className="text-[10px] text-[#99aabb] leading-relaxed">
                       Points are calculated based on difficulty and community sentiment alignment.
                    </p>
                 </div>
              </div>

              <button className="w-full bg-brand-green hover:bg-[#00c048] text-white py-5 rounded-2xl text-[16px] font-black uppercase tracking-widest shadow-2xl shadow-brand-green/20 transition-all flex items-center justify-center gap-3 group">
                 Lock Predictions <Zap className="w-5 h-5 fill-current group-hover:scale-125 transition-transform" />
              </button>
              
              <p className="text-center text-[11px] text-[#99aabb] mt-6 px-4">
                 By locking in, you expend **50 Energy Credits**. No edits allowed after submission.
              </p>
           </div>

           <div className="bg-[#1C2227] rounded-3xl p-8 border border-white/5 overflow-hidden relative group">
              <div className="relative z-10">
                 <h4 className="text-[14px] font-black text-white uppercase tracking-widest mb-4">Community Vibes</h4>
                 <div className="space-y-4">
                    <div className="flex justify-between text-[12px]">
                       <span className="text-[#99aabb]">Bullish</span>
                       <span className="text-brand-green font-black">92%</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-brand-green w-[92%]" />
                    </div>
                 </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-[80px]" />
           </div>
        </div>

      </div>

    </div>
  );
};

export default MovieDetail;
