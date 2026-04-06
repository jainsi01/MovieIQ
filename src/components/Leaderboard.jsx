import React, { useState } from 'react';
import { Trophy, Medal, Star, TrendingUp, Users, Crown, ChevronUp } from 'lucide-react';

const Leaderboard = () => {
  const [timeframe, setTimeframe] = useState('Weekly');

  const leaderboards = {
    Weekly: [
      { rank: 1, name: "MovieMind", points: 12450, badge: "Top Predictor", avatar: "MM" },
      { rank: 2, name: "Cinephile92", points: 10800, badge: "Streak Master", avatar: "C9" },
      { rank: 3, name: "SpoilerAlert", points: 9600, badge: "Rising Star", avatar: "SA" },
      { rank: 4, name: "BigScreenFan", points: 8900, avatar: "BS" },
      { rank: 5, name: "DirectorCut", points: 8200, avatar: "DC" },
    ],
    Monthly: [
      { rank: 1, name: "BoxOfficeKing", points: 45200, badge: "Grand Master", avatar: "BK" },
      { rank: 2, name: "MovieMind", points: 42100, badge: "Top Predictor", avatar: "MM" },
      { rank: 3, name: "FilmFanatic", points: 38500, badge: "Critic Eye", avatar: "FF" },
      { rank: 4, name: "ScreenRant", points: 35900, avatar: "SR" },
      { rank: 5, name: "PopcornPro", points: 32000, avatar: "PP" },
    ],
    "All-Time": [
      { rank: 1, name: "AncientCinephile", points: 285000, badge: "Legend", avatar: "AC" },
      { rank: 2, name: "BoxOfficeKing", points: 262000, badge: "Grand Master", avatar: "BK" },
      { rank: 3, name: "HistoryBuff", points: 245000, badge: "Archive Master", avatar: "HB" },
      { rank: 4, name: "ClassicFan", points: 210000, avatar: "CF" },
      { rank: 5, name: "MovieMind", points: 198000, badge: "Top Predictor", avatar: "MM" },
    ]
  };

  const currentData = leaderboards[timeframe];

  return (
    <div className="bg-[#14181C] min-h-screen pt-32 pb-20 font-graphik antialiased">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-brand-green/10 px-4 py-2 rounded-full mb-6">
            <Trophy className="w-5 h-5 text-brand-green" />
            <span className="text-brand-green text-[12px] font-black uppercase tracking-[0.2em]">Competitive Arena</span>
          </div>
          <h1 className="text-[48px] md:text-[64px] font-black text-white leading-none tracking-tighter mb-4">
            Global Leaderboard
          </h1>
          <p className="text-[#99aabb] text-[16px] max-w-[600px] mx-auto leading-relaxed">
            Predict with precision, climb the ranks, and earn exclusive badges. 
            The top predictors are rewarded every week.
          </p>
        </div>

        {/* TIMEFRAME TABS */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#1C2227] p-1.5 rounded-2xl border border-white/5 flex gap-2">
            {['Weekly', 'Monthly', 'All-Time'].map((tab) => (
              <button
                key={tab}
                onClick={() => setTimeframe(tab)}
                className={`px-8 py-3 rounded-xl text-[13px] font-black uppercase tracking-widest transition-all ${
                  timeframe === tab 
                    ? "bg-brand-green text-white shadow-lg shadow-brand-green/20" 
                    : "text-[#99aabb] hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* PODIUM (TOP 3) Visualized */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           {/* Rank 2 */}
           <div className="bg-[#1C2227] border border-white/5 rounded-3xl p-8 flex flex-col items-center order-2 md:order-1 mt-8">
              <div className="relative mb-6">
                 <div className="w-20 h-20 rounded-2xl bg-slate-400 flex items-center justify-center text-[24px] font-black text-slate-900 shadow-2xl">
                    {currentData[1].avatar}
                 </div>
                 <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-xl bg-slate-300 flex items-center justify-center text-slate-800 font-black shadow-lg border-4 border-[#1C2227]">2</div>
              </div>
              <h3 className="text-[20px] font-black text-white mb-1">{currentData[1].name}</h3>
              <p className="text-brand-green font-black text-[16px] mb-4">{currentData[1].points.toLocaleString()} pts</p>
              <span className="bg-slate-400/10 text-slate-300 border border-slate-400/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                 {currentData[1].badge || "Contender"}
              </span>
           </div>

           {/* Rank 1 */}
           <div className="bg-[#1C2227] border-2 border-brand-green/30 rounded-3xl p-8 flex flex-col items-center order-1 md:order-2 shadow-2xl shadow-brand-green/5 relative overflow-hidden scale-105">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-[60px]" />
              <Crown className="w-10 h-10 text-brand-green mb-4 animate-bounce" />
              <div className="relative mb-6">
                 <div className="w-24 h-24 rounded-2xl bg-brand-green flex items-center justify-center text-[32px] font-black text-white shadow-2xl">
                    {currentData[0].avatar}
                 </div>
                 <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center text-black font-black shadow-lg border-4 border-[#1C2227]">1</div>
              </div>
              <h3 className="text-[24px] font-black text-white mb-1">{currentData[0].name}</h3>
              <p className="text-brand-green font-black text-[20px] mb-4">{currentData[0].points.toLocaleString()} pts</p>
              <span className="bg-brand-green/20 text-brand-green border border-brand-green/30 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest shadow-lg shadow-brand-green/10">
                 {currentData[0].badge}
              </span>
           </div>

           {/* Rank 3 */}
           <div className="bg-[#1C2227] border border-white/5 rounded-3xl p-8 flex flex-col items-center order-3 mt-12">
              <div className="relative mb-6">
                 <div className="w-20 h-20 rounded-2xl bg-brand-orange flex items-center justify-center text-[24px] font-black text-white shadow-2xl">
                    {currentData[2].avatar}
                 </div>
                 <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-xl bg-orange-700 flex items-center justify-center text-white font-black shadow-lg border-4 border-[#1C2227]">3</div>
              </div>
              <h3 className="text-[20px] font-black text-white mb-1">{currentData[2].name}</h3>
              <p className="text-brand-green font-black text-[16px] mb-4">{currentData[2].points.toLocaleString()} pts</p>
              <span className="bg-brand-orange/10 text-brand-orange border border-brand-orange/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                 {currentData[2].badge || "Pro"}
              </span>
           </div>
        </div>

        {/* RANKING LIST (Rest of the users) */}
        <div className="bg-[#1C2227] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
           <div className="px-8 py-5 border-b border-white/5 flex items-center justify-between text-[11px] font-black text-[#99aabb] uppercase tracking-widest">
              <span>Position & User</span>
              <div className="flex gap-20">
                 <span className="hidden sm:block">Achievement</span>
                 <span>Points</span>
              </div>
           </div>

           <div className="divide-y divide-white/5">
              {currentData.map((user, idx) => (
                <div key={user.name} className="px-8 py-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors group">
                   <div className="flex items-center gap-6">
                      <span className={`text-[18px] font-black w-8 ${idx < 3 ? 'text-brand-green' : 'text-[#99aabb]'}`}>
                         #{user.rank}
                      </span>
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[14px] font-bold text-white group-hover:border-brand-green/30 transition-all">
                            {user.avatar}
                         </div>
                         <span className="text-[16px] font-bold text-white group-hover:text-brand-green transition-colors">
                            {user.name}
                         </span>
                      </div>
                   </div>

                   <div className="flex items-center gap-12 lg:gap-24">
                      {user.badge ? (
                         <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            <span className="text-[10px] font-black text-[#99aabb] uppercase tracking-widest">{user.badge}</span>
                         </div>
                      ) : (
                         <div className="hidden sm:block w-[100px]" />
                      )}
                      <div className="flex items-center gap-3">
                         <span className="text-[18px] font-black text-white">{user.points.toLocaleString()}</span>
                         <TrendingUp className="w-4 h-4 text-brand-green opacity-50" />
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* BOTTOM STATS / FOOTER */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="bg-gradient-to-br from-brand-green/20 to-transparent border border-brand-green/10 p-8 rounded-3xl flex items-center gap-6">
              <Users className="w-12 h-12 text-brand-green" />
              <div>
                 <h4 className="text-white font-black uppercase text-[14px] tracking-widest mb-1">Active Community</h4>
                 <p className="text-[#99aabb] text-[13px]">Over 12,400 predictors competing globally this month.</p>
              </div>
           </div>
           <div className="bg-[#1C2227] border border-white/5 p-8 rounded-3xl flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                 <ChevronUp className="w-6 h-6 text-[#99aabb]" />
              </div>
              <div>
                 <h4 className="text-white font-black uppercase text-[14px] tracking-widest mb-1">Your Standing</h4>
                 <p className="text-[#99aabb] text-[13px]">You are in the **top 15%** of all predictors! Keep going.</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Leaderboard;
