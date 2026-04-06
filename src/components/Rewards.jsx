import React from 'react';
import { Gift, Ticket, Star, Users, Info, Award, Zap, Camera, ExternalLink } from 'lucide-react';

const Rewards = () => {
  const prizePool = [
    {
      id: 1,
      title: "PVR Cinemas Voucher",
      type: "Tickets",
      count: "50 winners",
      value: "₹500 each",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mU_eJ8fW_e7_e_e_e_e_e_e_e_e_e_e_e_e_e_s=10", // Placeholder
      icon: <Ticket className="w-6 h-6 text-brand-green" />
    },
    {
      id: 2,
      title: "Movie Premiere Pass",
      type: "Exclusive Access",
      count: "5 winners",
      value: "VIP Entry",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mU_eJ8fW_e7_e_e_e_e_e_e_e_e_e_e_e_e_e_s=10", // Placeholder
      icon: <Zap className="w-6 h-6 text-brand-orange" />
    },
    {
      id: 3,
      title: "Limited Edition Merch",
      type: "Merchandise",
      count: "20 winners",
      value: "Hoodie/T-shirt",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mU_eJ8fW_e7_e_e_e_e_e_e_e_e_e_e_e_e_e_s=10", // Placeholder
      icon: <Gift className="w-6 h-6 text-cyan-400" />
    }
  ];

  const pastWinners = [
    { name: "Rahul S.", prize: "IMAX Ticket", date: "Mar 25", avatar: "RS" },
    { name: "Priya G.", prize: "Signed Poster", date: "Mar 22", avatar: "PG" },
    { name: "Arjun K.", prize: "MovieIQ Hoodie", date: "Mar 18", avatar: "AK" },
    { name: "Sneha M.", prize: "Fan Screening", date: "Mar 15", avatar: "SM" },
    { name: "Vikram R.", prize: "PVR Voucher", date: "Mar 12", avatar: "VR" }
  ];

  return (
    <div className="bg-[#14181C] min-h-screen pt-32 pb-20 font-graphik antialiased">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* HERO SECTION */}
        <div className="relative bg-gradient-to-br from-[#1C2227] to-transparent border border-white/5 rounded-[40px] p-10 md:p-16 overflow-hidden mb-16">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
           
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                 <div className="inline-flex items-center gap-3 bg-brand-green/10 px-4 py-2 rounded-full mb-8">
                    <Gift className="w-5 h-5 text-brand-green" />
                    <span className="text-brand-green text-[12px] font-black uppercase tracking-[0.3em]">Monthly Prize Pool</span>
                 </div>
                 <h1 className="text-[48px] md:text-[64px] font-black text-white leading-[1.1] tracking-tighter mb-8">
                    Predict Movies. <br/>
                    <span className="text-brand-green underline decoration-brand-green/20 underline-offset-8">Win Real Subscriptions.</span>
                 </h1>
                 <p className="text-[#99aabb] text-[18px] leading-relaxed mb-10 max-w-[500px]">
                    At MovieIQ, we reward your cinematic expertise. No cash, just pure movie-themed incentives to fuel your passion.
                 </p>
                 <div className="flex flex-wrap gap-6">
                    <div className="flex flex-col">
                       <span className="text-white text-[24px] font-black">75+</span>
                       <span className="text-[#99aabb] text-[10px] uppercase font-black tracking-widest">Total Prizes</span>
                    </div>
                    <div className="w-px h-10 bg-white/10 hidden sm:block" />
                    <div className="flex flex-col">
                       <span className="text-white text-[24px] font-black">₹25,000</span>
                       <span className="text-[#99aabb] text-[10px] uppercase font-black tracking-widest">Pool Value</span>
                    </div>
                    <div className="w-px h-10 bg-white/10 hidden sm:block" />
                    <div className="flex flex-col">
                       <span className="text-white text-[24px] font-black">0.05%</span>
                       <span className="text-[#99aabb] text-[10px] uppercase font-black tracking-widest">Entry Fee</span>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-brand-green/20 flex items-center justify-center mb-4">
                       <Ticket className="w-6 h-6 text-brand-green" />
                    </div>
                    <h3 className="text-white font-black uppercase text-[14px] mb-2 tracking-wide">PVR Vouchers</h3>
                    <p className="text-[#99aabb] text-[12px]">Watch the latest blockbusters on us.</p>
                 </div>
                 <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 transform rotate-3 hover:rotate-0 transition-transform cursor-pointer mt-8">
                    <div className="w-12 h-12 rounded-2xl bg-brand-orange/20 flex items-center justify-center mb-4">
                       <Star className="w-6 h-6 text-brand-orange" />
                    </div>
                    <h3 className="text-white font-black uppercase text-[14px] mb-2 tracking-wide">Elite Passes</h3>
                    <p className="text-[#99aabb] text-[12px]">Skip the line with VIP screening access.</p>
                 </div>
              </div>
           </div>
        </div>

        {/* PRIZE POOL SECTION */}
        <div className="mb-20">
           <div className="flex items-center justify-between mb-8">
              <h2 className="text-[28px] font-black text-white tracking-tighter uppercase italic">Current Rewards</h2>
              <div className="h-px flex-1 bg-white/10 mx-8 hidden sm:block" />
              <span className="text-[#99aabb] text-[12px] font-bold uppercase tracking-widest">Ends in 24 Days</span>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {prizePool.map((prize) => (
                <div key={prize.id} className="bg-[#1C2227] border border-white/5 rounded-3xl overflow-hidden group hover:border-brand-green/30 transition-all p-8 flex flex-col items-center text-center">
                   <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      {prize.icon}
                   </div>
                   <h3 className="text-[20px] font-black text-white mb-2">{prize.title}</h3>
                   <span className="text-brand-green text-[12px] font-black uppercase tracking-[0.2em] mb-4">{prize.count}</span>
                   <div className="w-full h-px bg-white/5 mb-6" />
                   <p className="text-[#99aabb] text-[14px] leading-relaxed mb-8">
                      Winner selection based on the Monthly Leaderboard Top 50 rankings.
                   </p>
                   <button className="mt-auto w-full py-3 rounded-xl border border-white/10 text-[12px] font-black uppercase tracking-widest text-[#99aabb] hover:bg-white hover:text-black hover:border-white transition-all">
                      View Details
                   </button>
                </div>
              ))}
           </div>
        </div>

        {/* HOW TO WIN SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-center">
           <div className="lg:col-span-5">
              <h2 className="text-[32px] md:text-[40px] font-black text-white leading-tight mb-6">How Winners Are <br/>Selected?</h2>
              <p className="text-[#99aabb] text-[16px] leading-relaxed mb-10">
                 Our selection process is 100% transparent and performance-driven. We use a standardized "Accuracy Score" system to identify our most deserving predictors.
              </p>
              <div className="space-y-6">
                 {[
                    { step: "01", title: "Maintain Streak", desc: "Predict daily to build your multiplier." },
                    { step: "02", title: "Rank Top 50", desc: "Secure a spot in the monthly global leaderboard." },
                    { step: "03", title: "Verification", desc: "Winners are notified via their registered email." }
                 ].map((item) => (
                    <div key={item.step} className="flex gap-6 items-start">
                       <span className="text-brand-green font-black text-[24px] italic">{item.step}</span>
                       <div>
                          <h4 className="text-white font-bold text-[16px] mb-1">{item.title}</h4>
                          <p className="text-[#99aabb] text-[13px]">{item.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
           
           <div className="lg:col-span-7 bg-[#1C2227] rounded-[40px] p-8 md:p-12 border border-white/5 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-10">
                 <Camera className="w-5 h-5 text-brand-green" />
                 <h3 className="text-white font-black uppercase text-[15px] tracking-widest italic">Hall of Fame</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                 {pastWinners.map((winner, idx) => (
                    <div key={idx} className="bg-white/5 p-6 rounded-3xl border border-white/5 hover:bg-brand-green/10 transition-colors">
                       <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 rounded-full bg-slate-400 flex items-center justify-center text-[12px] font-black text-slate-900">
                             {winner.avatar}
                          </div>
                          <div>
                             <p className="text-white font-bold text-[14px] leading-none">{winner.name}</p>
                             <p className="text-[#99aabb] text-[10px] mt-1 uppercase font-black">{winner.date}</p>
                          </div>
                       </div>
                       <p className="text-brand-green text-[12px] font-black uppercase tracking-widest">{winner.prize}</p>
                    </div>
                 ))}
                 <div className="border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center p-6 text-center group cursor-pointer hover:border-brand-green/30 transition-all">
                    <Users className="w-8 h-8 text-white/20 mb-3 group-hover:text-brand-green transition-colors" />
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">View All Winners</span>
                 </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-green/5 blur-[50px] rounded-full" />
           </div>
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <div className="bg-brand-green rounded-[40px] p-12 text-center shadow-2xl shadow-brand-green/10">
           <Award className="w-16 h-16 text-white mx-auto mb-6" />
           <h2 className="text-[32px] md:text-[40px] font-black text-white tracking-tighter mb-4">Ready to Claim Your Rewards?</h2>
           <p className="text-white/80 text-[18px] mb-10 max-w-[600px] mx-auto">
              Start predicting now and secure your spot on the leaderboard. The next rewards pool closes soon!
           </p>
           <button className="bg-white text-black px-12 py-4 rounded-full text-[15px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
              Start Predictions Now
           </button>
        </div>

      </div>
    </div>
  );
};

export default Rewards;
