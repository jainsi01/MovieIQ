import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  Search,
  SlidersHorizontal,
  Sparkles,
  Building2,
  Film,
  ArrowUpRight,
} from 'lucide-react';

const tabs = ['Daily', 'Weekend', 'Weekly', 'Yearly'];

const rankingData = {
  Daily: [
    { rank: 1, movie: 'Project Hail Mary', gross: '$3.8M', total: '$48.2M' },
    { rank: 2, movie: 'The Last Hunt', gross: '$2.9M', total: '$44.1M' },
    { rank: 3, movie: 'Nightfall', gross: '$2.4M', total: '$37.8M' },
    { rank: 4, movie: 'Echoes of Tomorrow', gross: '$2.0M', total: '$31.5M' },
    { rank: 5, movie: 'Golden Hour', gross: '$1.8M', total: '$27.6M' },
  ],
  Weekend: [
    { rank: 1, movie: 'Project Hail Mary', gross: '$14.6M', change: '+18.2%', screens: '3,812' },
    { rank: 2, movie: 'Nightfall', gross: '$10.9M', change: '+11.6%', screens: '3,146' },
    { rank: 3, movie: 'Echoes of Tomorrow', gross: '$9.4M', change: '+7.3%', screens: '2,891' },
    { rank: 4, movie: 'The Last Hunt', gross: '$8.2M', change: '+3.5%', screens: '2,740' },
    { rank: 5, movie: 'Golden Hour', gross: '$7.1M', change: '+2.4%', screens: '2,418' },
  ],
  Weekly: [
    { rank: 1, movie: 'Project Hail Mary', gross: '$41.2M', share: '18.4%' },
    { rank: 2, movie: 'Nightfall', gross: '$33.7M', share: '15.1%' },
    { rank: 3, movie: 'Echoes of Tomorrow', gross: '$26.3M', share: '11.9%' },
    { rank: 4, movie: 'The Last Hunt', gross: '$22.9M', share: '10.3%' },
    { rank: 5, movie: 'Golden Hour', gross: '$18.8M', share: '8.8%' },
  ],
  Yearly: [
    { rank: 1, movie: 'Project Hail Mary', gross: '$612M', share: '14.8%' },
    { rank: 2, movie: 'The Last Hunt', gross: '$528M', share: '12.6%' },
    { rank: 3, movie: 'Nightfall', gross: '$481M', share: '11.2%' },
    { rank: 4, movie: 'Echoes of Tomorrow', gross: '$459M', share: '10.9%' },
    { rank: 5, movie: 'Golden Hour', gross: '$412M', share: '9.7%' },
  ],
};

const franchiseStats = [
  { label: 'Marvel Universe', revenue: '$7.3B', avg: '$182M' },
  { label: 'Star Wars', revenue: '$5.1B', avg: '$213M' },
  { label: 'Harry Potter', revenue: '$7.8B', avg: '$194M' },
];

const studioStats = [
  { name: 'Disney', total: '$1.84B', movies: 18, avg: '$102M' },
  { name: 'Warner Bros.', total: '$1.36B', movies: 16, avg: '$85M' },
  { name: 'Universal', total: '$1.22B', movies: 14, avg: '$87M' },
];

const PlatformInsights = () => {
  const [activeTab, setActiveTab] = useState('Daily');

  const selectedSet = rankingData[activeTab];

  return (
    <section className="bg-[#0F1317] py-24 px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.35em] text-[#99aabb] mb-3 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-brand-green" />
              Box Office Intelligence
            </p>
            <h2 className="text-[36px] md:text-[46px] font-black text-white tracking-tight leading-tight">
              Rankings, trends, and franchise performance.
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-[#1C2227] p-1 rounded-xl border border-white/5">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-[12px] font-black uppercase tracking-widest transition-all ${
                  activeTab === tab ? 'bg-brand-green text-white' : 'text-[#99aabb] hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          <div className="xl:col-span-8 bg-[#1C2227] rounded-3xl border border-white/5 overflow-hidden">
            <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#99aabb]">{activeTab} Rankings</p>
              </div>
              <div className="hidden md:flex items-center gap-3 text-[#99aabb] text-[12px] font-bold">
                <Search className="w-4 h-4" />
                Search titles
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="text-[11px] uppercase tracking-widest text-[#99aabb]">
                    <th className="px-6 py-4">Rank</th>
                    <th className="px-6 py-4">Movie</th>
                    <th className="px-6 py-4">{activeTab === 'Weekend' ? 'Weekend Gross' : activeTab === 'Weekly' ? 'Weekly Gross' : activeTab === 'Yearly' ? 'Total Gross' : 'Daily Gross'}</th>
                    <th className="px-6 py-4">{activeTab === 'Weekend' ? '% Change' : activeTab === 'Weekly' ? 'Market Share' : activeTab === 'Yearly' ? 'Market Share' : 'Total Gross'}</th>
                    {activeTab === 'Weekend' && <th className="px-6 py-4">Screens</th>}
                  </tr>
                </thead>
                <tbody>
                  {selectedSet.map((row) => (
                    <tr key={`${row.rank}-${row.movie}`} className="border-t border-white/5 hover:bg-white/[0.03] transition-colors">
                      <td className="px-6 py-4 text-[14px] font-black text-white">#{row.rank}</td>
                      <td className="px-6 py-4 text-[14px] font-semibold text-white">{row.movie}</td>
                      <td className="px-6 py-4 text-[14px] font-bold text-brand-green">{row.gross}</td>
                      <td className="px-6 py-4 text-[14px] text-[#99aabb]">{row.total || row.change || row.share}</td>
                      {activeTab === 'Weekend' && <td className="px-6 py-4 text-[14px] text-[#99aabb]">{row.screens}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="xl:col-span-4 space-y-6">
            <div className="bg-[#1C2227] rounded-3xl border border-white/5 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-green/15 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-[#99aabb]">Market Growth</p>
                  <h3 className="text-[24px] font-black text-white">+8.4%</h3>
                </div>
              </div>
              <div className="space-y-4">
                {[76, 68, 82, 91, 88].map((value, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-[11px] uppercase tracking-widest text-[#99aabb] mb-1">
                      <span>{['Action', 'Drama', 'Comedy', 'Sci-Fi', 'Thriller'][idx]}</span>
                      <span>{value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-brand-green to-brand-blue" style={{ width: `${value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1C2227] rounded-3xl border border-white/5 p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-[#99aabb]">Discover</p>
                  <h3 className="text-[18px] font-black text-white">Search & Filters</h3>
                </div>
                <SlidersHorizontal className="w-5 h-5 text-[#99aabb]" />
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-black/20 border border-white/5 px-4 py-3 mb-4">
                <Search className="w-4 h-4 text-[#99aabb]" />
                <input
                  type="text"
                  placeholder="Search by title, actor, studio..."
                  className="w-full bg-transparent outline-none text-[14px] text-white placeholder:text-[#99aabb]"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {['Drama', 'Sci-Fi', 'Thriller', '2025', 'PG-13', '$100M+'].map((filter) => (
                  <span key={filter} className="px-3 py-1.5 rounded-full bg-white/5 text-[11px] font-bold uppercase tracking-widest text-[#99aabb]">
                    {filter}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-6">
              <div className="bg-[#1C2227] rounded-3xl border border-white/5 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-brand-orange" />
                  <p className="text-[11px] uppercase tracking-widest text-[#99aabb]">Franchise Spotlight</p>
                </div>
                <div className="space-y-3">
                  {franchiseStats.map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-2xl bg-white/[0.03] px-4 py-3">
                      <span className="text-[13px] font-bold text-white">{item.label}</span>
                      <span className="text-[11px] text-brand-green font-black">{item.revenue}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#1C2227] rounded-3xl border border-white/5 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-4 h-4 text-brand-blue" />
                  <p className="text-[11px] uppercase tracking-widest text-[#99aabb]">Studio Analytics</p>
                </div>
                <div className="space-y-3">
                  {studioStats.map((item) => (
                    <div key={item.name} className="flex items-center justify-between rounded-2xl bg-white/[0.03] px-4 py-3">
                      <span className="text-[13px] font-bold text-white">{item.name}</span>
                      <span className="text-[11px] text-[#99aabb]">{item.total}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformInsights;
