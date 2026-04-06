import React from 'react';
import { Calendar, Clock, BarChart3, Star, CheckCircle2, AlertCircle, ChevronRight, Trophy, Zap, Target } from 'lucide-react';

const PredictionsSummary = ({ onEditPrediction }) => {
  const mockPredictions = [
    {
      id: 1,
      title: "Project Hail Mary",
      poster: "https://m.media-amazon.com/images/M/MV5BNTkwNzJiYTctNzI3NC00NjE1LTlhYjktY2Q5MTdmMWFmNzcxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      status: "OPEN",
      deadline: "2d 14h",
      myPick: "₹10-20 Cr Day 1",
      confidence: "High",
      pointsAtStake: 1250,
      category: "Drama / Thriller"
    },
    {
      id: 2,
      id_movie: "peaky",
      title: "Peaky Blinders",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1RfnNxjkJjv6su_9EVi-AqVTvMyaiWergB9Vh_utvs1n6ZYTWygADBA1Xzwx0kxDfH5S&s=10",
      status: "LOCKED",
      deadline: "Passed",
      myPick: "Blockbuster",
      confidence: "Medium",
      pointsAtStake: 2500,
      category: "Crime / Drama"
    },
    {
      id: 3,
      title: "Project Hail Mary",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfl2H2Hd7Lf3_4QEElNKG-XKZLpNDHziIfKaVKBn8X_HIPeewbZNbCGybVuZj8yjOusBm5&s=10",
      status: "LIVE",
      deadline: "Passed",
      myPick: "8.5 IMDb",
      confidence: "Low",
      pointsAtStake: 3000,
      category: "Sci-Fi / Adventure",
      currentAccuracy: "92.4%"
    }
  ];

  return (
    <div className="bg-[#14181C] min-h-screen pt-32 pb-20 font-graphik antialiased">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* DASHBOARD HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-1 bg-brand-green rounded-full" />
              <span className="text-brand-green text-[12px] font-black uppercase tracking-[0.3em]">Your Activity</span>
            </div>
            <h1 className="text-[40px] md:text-[56px] font-black text-white leading-tight tracking-tighter">
              Predictions Dashboard
            </h1>
          </div>

          <div className="flex gap-4">
             <div className="bg-[#1C2227] border border-white/5 rounded-2xl px-6 py-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-green/20 flex items-center justify-center">
                   <Trophy className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                   <p className="text-[10px] uppercase font-black text-[#99aabb] tracking-widest mb-0.5">Total Points</p>
                   <p className="text-[20px] font-black text-white">6,750</p>
                </div>
             </div>
             <div className="bg-[#1C2227] border border-white/5 rounded-2xl px-6 py-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/20 flex items-center justify-center">
                   <Target className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                   <p className="text-[10px] uppercase font-black text-[#99aabb] tracking-widest mb-0.5">Rank</p>
                   <p className="text-[20px] font-black text-white">#142</p>
                </div>
             </div>
          </div>
        </div>

        {/* LIST SECTION */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-8 py-4 text-[11px] font-black text-[#99aabb] uppercase tracking-[0.2em] border-b border-white/5">
            <span>Movie & Category</span>
            <div className="hidden md:flex items-center gap-20 lg:gap-32 w-[60%] justify-end">
              <span>Your Prediction</span>
              <span>Deadline Status</span>
              <span>Action</span>
            </div>
          </div>

          {mockPredictions.map((pred) => (
            <div 
              key={pred.id}
              className="bg-[#1C2227] border border-white/5 rounded-2xl p-4 md:px-8 md:py-6 flex flex-col md:flex-row items-center gap-6 hover:bg-white/[0.03] transition-all group"
            >
              <div className="flex items-center gap-6 w-full md:w-auto">
                <div className="w-16 h-24 rounded-lg overflow-hidden shrink-0 shadow-xl">
                  <img src={pred.poster} className="w-full h-full object-cover" alt={pred.title} />
                </div>
                <div>
                  <h3 className="text-[18px] font-black text-white leading-tight mb-1 group-hover:text-brand-green transition-colors">
                    {pred.title}
                  </h3>
                  <p className="text-[12px] text-[#99aabb] font-medium">{pred.category}</p>
                </div>
              </div>

              <div className="flex-1 flex items-center justify-between md:justify-end gap-10 lg:gap-24 w-full">
                <div className="flex flex-col md:items-end">
                  <span className="text-[14px] font-black text-white whitespace-nowrap">{pred.myPick}</span>
                  <span className="text-[10px] font-bold text-[#99aabb] uppercase tracking-widest">Confidence: {pred.confidence}</span>
                </div>

                <div className="flex flex-col md:items-end">
                  {pred.status === "OPEN" ? (
                    <div className="flex items-center gap-2 text-brand-green">
                      <Zap className="w-4 h-4 fill-current" />
                      <span className="text-[12px] font-black uppercase tracking-widest">{pred.deadline} Left</span>
                    </div>
                  ) : pred.status === "LIVE" ? (
                    <div className="flex items-center gap-2 text-brand-orange animate-pulse">
                      <Clock className="w-4 h-4" />
                      <span className="text-[12px] font-black uppercase tracking-widest">Results Live</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-white/30">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-[12px] font-black uppercase tracking-widest leading-none">Locked</span>
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => pred.status === "OPEN" && onEditPrediction(pred)}
                  className={`px-6 py-2.5 rounded-lg text-[11px] font-black uppercase tracking-widest transition-all w-full md:w-auto ${
                    pred.status === "OPEN" 
                    ? "bg-white/5 text-white hover:bg-brand-green hover:text-white hover:shadow-lg hover:shadow-brand-green/20" 
                    : "bg-white/5 text-white/30 cursor-not-allowed"
                  }`}
                >
                  {pred.status === "OPEN" ? "Edit" : "View"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER INFO */}
        <div className="mt-12 p-8 border border-white/5 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent">
           <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                 <CheckCircle2 className="w-8 h-8 text-brand-green" />
              </div>
              <div>
                 <h4 className="text-[16px] font-black text-white uppercase tracking-tight mb-2">Predictions Policy</h4>
                 <p className="text-[13px] text-[#99aabb] leading-relaxed max-w-[800px]">
                    Once a prediction window closes (the "Locked" state), responses are finalized and hashed for verification. 
                    Points are awarded based on official industry data from verified entertainment tracking agencies.
                 </p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default PredictionsSummary;
