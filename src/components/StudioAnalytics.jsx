import React, { useMemo } from 'react';
import { BarChart3, TrendingUp, TrendingDown, DollarSign, Percent, AlertTriangle, ShieldCheck, Flame, Info } from 'lucide-react';

const StudioAnalytics = ({ movies = [], onMovieSelect }) => {
  
  // Calculate analytics for each movie
  const processedMovies = useMemo(() => {
    return movies.map(movie => {
      const budgetVal = parseFloat(movie.boxOffice?.budget) || 1; // avoid divide by zero
      const grossVal = parseFloat(movie.boxOffice?.totalGross) || 0;
      
      const roi = grossVal / budgetVal;
      const budgetCoverPercent = Math.round(roi * 100);
      const netGainLoss = grossVal - budgetVal;
      
      // Classify as Hit or Flop
      // Hit: ROI >= 1.5x, Flop: ROI < 1.2x
      let verdict = 'Average';
      let themeColor = 'text-[#99aabb] bg-white/5 border-white/10';
      if (roi >= 1.5) {
        verdict = 'Top Hit';
        themeColor = 'text-brand-green bg-brand-green/10 border-brand-green/20';
      } else if (roi < 1.2) {
        verdict = 'Flop';
        themeColor = 'text-red-500 bg-red-500/10 border-red-500/20';
      }

      return {
        ...movie,
        budgetVal,
        grossVal,
        roi,
        budgetCoverPercent,
        netGainLoss,
        verdict,
        themeColor
      };
    });
  }, [movies]);

  // Split into Top Hits and Flops
  const topHits = useMemo(() => {
    return processedMovies
      .filter(m => m.verdict === 'Top Hit')
      .sort((a, b) => b.roi - a.roi);
  }, [processedMovies]);

  const flops = useMemo(() => {
    return processedMovies
      .filter(m => m.verdict === 'Flop')
      .sort((a, b) => a.roi - b.roi);
  }, [processedMovies]);

  // Aggregate stats
  const stats = useMemo(() => {
    let totalBudget = 0;
    let totalGross = 0;
    
    processedMovies.forEach(m => {
      totalBudget += m.budgetVal;
      totalGross += m.grossVal;
    });

    const averageROI = totalGross / (totalBudget || 1);
    const overallSuccessRate = (topHits.length / (processedMovies.length || 1)) * 100;

    return {
      totalBudget: Math.round(totalBudget),
      totalGross: Math.round(totalGross),
      netProfit: Math.round(totalGross - totalBudget),
      averageROI: parseFloat(averageROI.toFixed(2)),
      overallSuccessRate: Math.round(overallSuccessRate)
    };
  }, [processedMovies, topHits]);

  return (
    <div className="bg-[#14181C] min-h-screen pt-28 pb-20 font-graphik antialiased selection:bg-brand-green selection:text-black">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        
        {/* Header Title */}
        <div className="border-b border-white/5 pb-6 mb-10">
          <div className="flex items-center gap-2 mb-2 text-brand-green text-[12px] font-black uppercase tracking-[0.3em]">
            <BarChart3 className="w-5 h-5" /> StudioIntelligence
          </div>
          <h1 className="text-[36px] md:text-[44px] font-black text-white leading-tight tracking-tight">
            Studio Box Office Analytics
          </h1>
          <p className="text-[#99aabb] text-sm mt-1">
            Analyze production budgets, projected theatrical revenues, and ROI verdicts to forecast box office success and failure.
          </p>
        </div>

        {/* Global Performance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="bg-[#1C2227] rounded-3xl border border-white/5 p-6 flex flex-col justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#99aabb]">Total Industry Budget</span>
            <div className="mt-4">
              <span className="text-[32px] font-black text-white font-mono">{stats.totalBudget} Cr</span>
              <p className="text-[11px] text-white/40 mt-1">Across {processedMovies.length} major releases</p>
            </div>
          </div>

          <div className="bg-[#1C2227] rounded-3xl border border-white/5 p-6 flex flex-col justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#99aabb]">Projected Total Gross</span>
            <div className="mt-4">
              <span className="text-[32px] font-black text-brand-green font-mono">{stats.totalGross} Cr</span>
              <p className="text-[11px] text-brand-green/60 font-bold mt-1">+{Math.round((stats.totalGross / stats.totalBudget - 1) * 100)}% Growth ROI</p>
            </div>
          </div>

          <div className="bg-[#1C2227] rounded-3xl border border-white/5 p-6 flex flex-col justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#99aabb]">Industry Net Projections</span>
            <div className="mt-4">
              <span className="text-[32px] font-black text-brand-blue font-mono">+{stats.netProfit} Cr</span>
              <p className="text-[11px] text-white/40 mt-1">Estimated net profits pool</p>
            </div>
          </div>

          <div className="bg-[#1C2227] rounded-3xl border border-white/5 p-6 flex flex-col justify-between">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#99aabb]">Avg Return Multiple</span>
            <div className="mt-4">
              <span className="text-[32px] font-black text-brand-orange font-mono">{stats.averageROI}x</span>
              <p className="text-[11px] text-[#99aabb] font-bold mt-1">{stats.overallSuccessRate}% Hits Ratio</p>
            </div>
          </div>

        </div>

        {/* Dynamic Split Layout: Hits vs Flops */}
        <div className="space-y-16">
          
          {/* SECTION 1: TOP HITS SECTION */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-brand-green/20 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <h2 className="text-[22px] font-black text-white">Top Hits / Success Stories</h2>
                <p className="text-[#99aabb] text-xs font-medium">Films that successfully recovered their budgets and generated profits (ROI ≥ 1.5x).</p>
              </div>
              <span className="ml-auto bg-brand-green/15 text-brand-green text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider border border-brand-green/20">
                {topHits.length} Hits Identified
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {topHits.map((movie) => (
                <div 
                  key={movie.id} 
                  className="bg-[#1C2227]/60 backdrop-blur-sm rounded-3xl border border-brand-green/10 p-6 flex flex-col justify-between transition-all duration-300 hover:border-brand-green/30 hover:translate-y-[-4px] group"
                >
                  <div>
                    {/* Header info */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-brand-green/10 border border-brand-green/20 text-brand-green text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-brand-green" /> {movie.boxOffice?.status || 'Blockbuster'}
                      </span>
                      <span className="text-[16px] font-black text-brand-green font-mono bg-brand-green/5 px-2.5 py-0.5 rounded border border-brand-green/10">
                        {movie.roi.toFixed(1)}x ROI
                      </span>
                    </div>

                    {/* Movie Cover & details */}
                    <div className="flex gap-4 mb-5">
                      <div 
                        className="w-[80px] aspect-[2/3] rounded-2xl overflow-hidden border border-white/10 shrink-0 cursor-pointer"
                        onClick={() => onMovieSelect(movie)}
                      >
                        <img 
                          src={movie.poster || movie.image} 
                          alt={movie.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 
                            className="text-[16px] font-black text-white leading-snug group-hover:text-brand-green transition-colors cursor-pointer"
                            onClick={() => onMovieSelect(movie)}
                          >
                            {movie.title}
                          </h3>
                          <div className="flex flex-wrap gap-1 mt-1.5">
                            {movie.genres?.slice(0, 2).map((g) => (
                              <span key={g} className="text-[8px] font-black uppercase tracking-widest text-[#99aabb] bg-white/5 px-1.5 py-0.5 rounded">
                                {g}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-[11px] text-white/50 font-medium">
                          Critics: <span className="text-white font-bold">{movie.ratings?.rottenTomatoes || 'N/A'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Financial stats bars */}
                    <div className="space-y-3 pt-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-[#99aabb] font-medium">Budget Investment</span>
                        <span className="text-white font-bold font-mono">{movie.boxOffice?.budget}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-[#99aabb] font-medium">Projected Gross</span>
                        <span className="text-brand-green font-black font-mono">{movie.boxOffice?.totalGross}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-[#99aabb] font-medium">Estimated Net Gain</span>
                        <span className="text-brand-blue font-black font-mono">+{movie.netGainLoss} Cr</span>
                      </div>

                      {/* ROI Progress Bar */}
                      <div className="space-y-1.5 pt-2">
                        <div className="flex justify-between items-center text-[10px] font-bold text-[#99aabb] uppercase">
                          <span>Budget Covered Ratio</span>
                          <span className="text-brand-green font-mono">{movie.budgetCoverPercent}%</span>
                        </div>
                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                          <div 
                            className="bg-brand-green h-full rounded-full" 
                            style={{ width: `${Math.min(movie.budgetCoverPercent / 4, 100)}%` }} // normalized for large ROI
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="border-t border-white/5 pt-4 mt-5 flex gap-2">
                    <button 
                      onClick={() => onMovieSelect(movie)}
                      className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
                    >
                      Audit Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 2: FLOP SECTION */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-red-500/20 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h2 className="text-[22px] font-black text-white">Flops / Box Office Deficits</h2>
                <p className="text-[#99aabb] text-xs font-medium">Films that failed to cover their production budgets or struggled heavily to break even (ROI &lt; 1.2x).</p>
              </div>
              <span className="ml-auto bg-red-500/15 text-red-500 text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider border border-red-500/20">
                {flops.length} Flops Identified
              </span>
            </div>

            {flops.length === 0 ? (
              <div className="bg-[#1C2227] rounded-3xl border border-white/5 p-12 text-center">
                <p className="text-[#99aabb] text-sm">No flop movies identified in the current roster.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {flops.map((movie) => (
                  <div 
                    key={movie.id} 
                    className="bg-[#1C2227]/60 backdrop-blur-sm rounded-3xl border border-red-500/15 p-6 flex flex-col justify-between transition-all duration-300 hover:border-red-500/30 hover:translate-y-[-4px] group"
                  >
                    <div>
                      {/* Header info */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-red-500/10 border border-red-500/20 text-red-500 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5 text-red-500" /> {movie.boxOffice?.status || 'Flop'}
                        </span>
                        <span className="text-[16px] font-black text-red-500 font-mono bg-red-500/5 px-2.5 py-0.5 rounded border border-red-500/10">
                          {movie.roi.toFixed(1)}x ROI
                        </span>
                      </div>

                      {/* Movie Cover & details */}
                      <div className="flex gap-4 mb-5">
                        <div 
                          className="w-[80px] aspect-[2/3] rounded-2xl overflow-hidden border border-white/10 shrink-0 cursor-pointer"
                          onClick={() => onMovieSelect(movie)}
                        >
                          <img 
                            src={movie.poster || movie.image} 
                            alt={movie.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h3 
                              className="text-[16px] font-black text-white leading-snug group-hover:text-red-500 transition-colors cursor-pointer"
                              onClick={() => onMovieSelect(movie)}
                            >
                              {movie.title}
                            </h3>
                            <div className="flex flex-wrap gap-1 mt-1.5">
                              {movie.genres?.slice(0, 2).map((g) => (
                                <span key={g} className="text-[8px] font-black uppercase tracking-widest text-[#99aabb] bg-white/5 px-1.5 py-0.5 rounded">
                                  {g}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="text-[11px] text-white/50 font-medium">
                            Critics: <span className="text-red-500 font-bold">{movie.ratings?.rottenTomatoes || 'N/A'}</span>
                          </div>
                        </div>
                      </div>

                      {/* Financial stats bars */}
                      <div className="space-y-3 pt-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-[#99aabb] font-medium">Budget Investment</span>
                          <span className="text-white font-bold font-mono">{movie.boxOffice?.budget}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-[#99aabb] font-medium">Projected Gross</span>
                          <span className="text-red-500 font-black font-mono">{movie.boxOffice?.totalGross}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-[#99aabb] font-medium">Projected Deficit</span>
                          <span className="text-red-500 font-black font-mono">{movie.netGainLoss} Cr</span>
                        </div>

                        {/* Deficit Progress Bar */}
                        <div className="space-y-1.5 pt-2">
                          <div className="flex justify-between items-center text-[10px] font-bold text-red-500 uppercase">
                            <span>Deficit Deflator</span>
                            <span className="font-mono">-{100 - movie.budgetCoverPercent}% deficit</span>
                          </div>
                          <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                            <div 
                              className="bg-red-500 h-full rounded-full" 
                              style={{ width: `${movie.budgetCoverPercent}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="border-t border-white/5 pt-4 mt-5 flex gap-2">
                      <button 
                        onClick={() => onMovieSelect(movie)}
                        className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
                      >
                        Audit Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Comparative Analytical Insights Panel */}
          <div className="bg-[#1C2227] rounded-3xl border border-white/5 p-8 space-y-6">
            <div className="flex items-center gap-2 text-brand-orange text-[12px] font-black uppercase tracking-[0.25em]">
              <Info className="w-5 h-5 text-brand-orange" /> Intelligence Briefing
            </div>
            <h3 className="text-[22px] font-black text-white">Why Do Movies Hit or Flop?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-white/80 leading-relaxed">
              <div className="space-y-4">
                <h4 className="font-black text-brand-green uppercase text-xs tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Core Success Indicators (Hits)
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Consensus Synergy:</strong> High critics consensus (average 88% Rotten Tomatoes) builds immediate public hype.</li>
                  <li><strong>Optimal Budgets:</strong> Budgets are tightly monitored below 150 Cr, yielding rapid recovery ratios.</li>
                  <li><strong>Franchise Traction:</strong> Established narratives (like <em>Peaky Blinders</em> or adapted works like <em>Project Hail Mary</em>) secure stable opening weekend pools.</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-black text-red-500 uppercase text-xs tracking-wider flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> Deficit Triggers (Flops)
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Budget Inflation:</strong> Unmanaged production expenses exceeding 160 Cr make breaking even mathematically difficult.</li>
                  <li><strong>Audience Apathy:</strong> Critical score falls below 40% (e.g. <em>Borderlands</em> at 12%), causing opening-weekend collapses.</li>
                  <li><strong>Misaligned Genres:</strong> Oversaturated theatrical genres lacking stellar reviews suffer severe drop-offs in subsequent weeks.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default StudioAnalytics;
