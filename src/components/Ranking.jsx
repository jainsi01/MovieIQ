import React, { useState, useMemo } from 'react';
import { Trophy, TrendingUp, TrendingDown, Minus, Search, Filter, Play, Calendar, Star, DollarSign, Flame, Clock } from 'lucide-react';

const Ranking = ({ movies, onPredict, onMovieSelect }) => {
  const [timeframe, setTimeframe] = useState('weekly'); // daily, weekly, monthly, yearly
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');

  // Timeframe Configurations containing custom descriptors and metric headers
  const timeframeConfig = {
    daily: {
      label: 'Daily Hype',
      metricLabel: 'Hype Score',
      metricIcon: <Flame className="w-4 h-4 text-brand-orange" />,
      description: 'Movies trending right now based on active community prediction velocity in the last 24 hours.'
    },
    weekly: {
      label: 'Weekly Sentiment',
      metricLabel: 'Critics / Bullish %',
      metricIcon: <Star className="w-4 h-4 text-yellow-400" />,
      description: 'Highest community sentiment and critical consensus rankings for this week.'
    },
    monthly: {
      label: 'Monthly Projections',
      metricLabel: 'Weekend Projection',
      metricIcon: <Clock className="w-4 h-4 text-brand-blue" />,
      description: 'Projected theatrical box office opening weekends based on aggregated prediction pools.'
    },
    yearly: {
      label: 'Yearly Standings',
      metricLabel: 'Projected Total Gross',
      metricIcon: <DollarSign className="w-4 h-4 text-brand-green" />,
      description: 'Overall leaderboard of predicted lifetime theatrical box office earnings.'
    }
  };

  // Extract all unique genres from movies
  const genres = useMemo(() => {
    const allGenres = new Set();
    movies.forEach(movie => {
      movie.genres?.forEach(genre => allGenres.add(genre));
    });
    return ['All', ...Array.from(allGenres)];
  }, [movies]);

  // Compute stats and rankings based on the timeframe
  const rankedMovies = useMemo(() => {
    return movies
      .map(movie => {
        let score = 0;
        let displayMetric = '';
        let trend = 'flat'; // up, down, flat
        
        // Custom values mapped dynamically to existing movie data
        if (timeframe === 'daily') {
          // Rank based on a simulated hype score
          // Project Hail Mary: 1, Peaky Blinders: 5, Hoppers: 2, etc.
          const hypeMap = {
            1: { score: 98.4, display: '98.4 Hype Pts', trend: 'up' }, // Project Hail Mary
            2: { score: 84.1, display: '84.1 Hype Pts', trend: 'up' }, // Hoppers
            3: { score: 71.5, display: '71.5 Hype Pts', trend: 'down' }, // Ready or Not 2
            4: { score: 89.6, display: '89.6 Hype Pts', trend: 'up' }, // Undertone
            5: { score: 92.3, display: '92.3 Hype Pts', trend: 'down' }, // Peaky Blinders
            6: { score: 76.8, display: '76.8 Hype Pts', trend: 'flat' }  // The Good Boy
          };
          const data = hypeMap[movie.id] || { score: 50, display: '50.0 Hype Pts', trend: 'flat' };
          score = data.score;
          displayMetric = data.display;
          trend = data.trend;
        } else if (timeframe === 'weekly') {
          // Rank based on IMDb/Rotten Tomatoes values
          const rtScore = parseInt(movie.ratings?.rottenTomatoes) || 80;
          const imdbScore = parseFloat(movie.ratings?.imdb) * 10 || 75;
          score = (rtScore + imdbScore) / 2;
          displayMetric = `${movie.ratings?.rottenTomatoes || '80%'} RT / ${movie.ratings?.imdb || '7.5'} IMDb`;
          
          const trendMap = { 1: 'up', 2: 'flat', 3: 'down', 4: 'up', 5: 'up', 6: 'down' };
          trend = trendMap[movie.id] || 'flat';
        } else if (timeframe === 'monthly') {
          // Rank based on opening weekend projections
          const weekendVal = parseFloat(movie.boxOffice?.openingWeekend) || 0;
          score = weekendVal;
          displayMetric = `${movie.boxOffice?.openingWeekend || 'N/A'}`;
          
          const trendMap = { 1: 'up', 2: 'up', 3: 'flat', 4: 'down', 5: 'up', 6: 'down' };
          trend = trendMap[movie.id] || 'flat';
        } else if (timeframe === 'yearly') {
          // Rank based on total gross projections
          const totalVal = parseFloat(movie.boxOffice?.totalGross) || 0;
          score = totalVal;
          displayMetric = `${movie.boxOffice?.totalGross || 'N/A'}`;
          
          const trendMap = { 1: 'up', 2: 'flat', 3: 'down', 4: 'up', 5: 'up', 6: 'flat' };
          trend = trendMap[movie.id] || 'flat';
        }

        return {
          ...movie,
          score,
          displayMetric,
          trend
        };
      })
      // Sort descending by score
      .sort((a, b) => b.score - a.score)
      // Assign overall rank position
      .map((movie, idx) => ({ ...movie, rank: idx + 1 }));
  }, [movies, timeframe]);

  // Apply search query and genre filters
  const filteredRankedMovies = useMemo(() => {
    return rankedMovies.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.genres?.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesGenre = selectedGenre === 'All' || movie.genres?.includes(selectedGenre);
      return matchesSearch && matchesGenre;
    });
  }, [rankedMovies, searchQuery, selectedGenre]);

  // Split into Top 3 (podium) and the rest
  const podiumMovies = useMemo(() => {
    // Only return top 3 if there is no query/filter active, otherwise display all in the main grid
    if (searchQuery || selectedGenre !== 'All') return [];
    return filteredRankedMovies.slice(0, 3);
  }, [filteredRankedMovies, searchQuery, selectedGenre]);

  const gridMovies = useMemo(() => {
    if (searchQuery || selectedGenre !== 'All') return filteredRankedMovies;
    return filteredRankedMovies.slice(3);
  }, [filteredRankedMovies, searchQuery, selectedGenre]);

  // Render trend icon helper
  const renderTrend = (trend, id) => {
    const changeVal = ((id || 0) % 4) + 1;
    if (trend === 'up') return <span className="flex items-center text-brand-green gap-1 text-[11px] font-bold font-mono"><TrendingUp className="w-3.5 h-3.5" /> +{changeVal}%</span>;
    if (trend === 'down') return <span className="flex items-center text-red-500 gap-1 text-[11px] font-bold font-mono"><TrendingDown className="w-3.5 h-3.5" /> -{changeVal}%</span>;
    return <span className="flex items-center text-[#99aabb] gap-1 text-[11px] font-bold font-mono"><Minus className="w-3.5 h-3.5" /> Static</span>;
  };

  // Reorder top 3 for podium visualization: [Rank 2, Rank 1, Rank 3]
  const arrangedPodium = useMemo(() => {
    if (podiumMovies.length < 3) return podiumMovies;
    return [podiumMovies[1], podiumMovies[0], podiumMovies[2]];
  }, [podiumMovies]);

  return (
    <div className="bg-[#14181C] min-h-screen pt-28 pb-20 font-graphik antialiased selection:bg-brand-green selection:text-black">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-white/5 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2 text-brand-green text-[12px] font-black uppercase tracking-[0.3em]">
              <Trophy className="w-5 h-5" /> MovieLeaderboards
            </div>
            <h1 className="text-[36px] md:text-[48px] font-black text-white leading-tight tracking-tight">
              Top Ranked Movies
            </h1>
            <p className="text-[#99aabb] text-sm max-w-[600px] mt-2 font-medium">
              {timeframeConfig[timeframe].description}
            </p>
          </div>

          {/* Timeframe Selectors */}
          <div className="flex items-center bg-white/5 border border-white/10 p-1.5 rounded-xl self-start md:self-end">
            {Object.keys(timeframeConfig).map((key) => (
              <button
                key={key}
                onClick={() => setTimeframe(key)}
                className={`px-4 py-2 rounded-lg text-[12px] font-black uppercase tracking-wider transition-all ${
                  timeframe === key 
                    ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20' 
                    : 'text-[#99aabb] hover:text-white hover:bg-white/5'
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between mb-12">
          
          {/* Search Input */}
          <div className="relative w-full md:max-w-md group">
            <input
              type="text"
              placeholder="Search by movie title or genre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#1C2227] border border-white/5 rounded-2xl py-3.5 pl-12 pr-4 text-sm w-full focus:outline-none focus:border-brand-green/30 focus:bg-[#22292f] transition-all text-white placeholder-white/30"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-brand-green transition-colors" />
          </div>

          {/* Genre Pill Filter */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto hide-scrollbar py-2">
            <div className="flex items-center gap-2 text-[#99aabb] text-xs font-bold uppercase tracking-widest shrink-0 mr-2">
              <Filter className="w-4 h-4 text-brand-green" /> Filters:
            </div>
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all shrink-0 ${
                  selectedGenre === genre
                    ? 'bg-[#22292f] border border-brand-green text-brand-green shadow-md shadow-brand-green/10'
                    : 'bg-white/5 border border-white/5 text-[#99aabb] hover:text-white hover:border-white/10'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* podium displays (only when no search/genre filters are active) */}
        {podiumMovies.length === 3 && (
          <div className="mb-20">
            <h2 className="text-[12px] font-black uppercase tracking-[0.25em] text-[#99aabb] mb-8 text-center">
              🏆 Current Podium Standings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-6 max-w-[960px] mx-auto">
              
              {/* Render arranged podium (Rank 2, Rank 1, Rank 3) */}
              {arrangedPodium.map((movie) => {
                const isFirst = movie.rank === 1;
                const isSecond = movie.rank === 2;
                const isThird = movie.rank === 3;
                
                let podiumColor = 'border-brand-blue/20 bg-[#1C2227]';
                let rankLabel = '🥈 Runner Up';
                let badgeStyle = 'bg-brand-blue/10 border-brand-blue/20 text-brand-blue';
                
                if (isFirst) {
                  podiumColor = 'border-brand-green/30 bg-[#222b27] shadow-[0_0_30px_rgba(0,224,84,0.15)] ring-1 ring-brand-green/10 scale-105';
                  rankLabel = '👑 Leading Hype';
                  badgeStyle = 'bg-brand-green/10 border-brand-green/20 text-brand-green';
                } else if (isThird) {
                  podiumColor = 'border-brand-orange/20 bg-[#1C2227]';
                  rankLabel = '🥉 3rd Position';
                  badgeStyle = 'bg-brand-orange/10 border-brand-orange/20 text-brand-orange';
                }

                return (
                  <div 
                    key={movie.id} 
                    className={`flex flex-col rounded-3xl border p-6 transition-all duration-300 hover:translate-y-[-8px] group ${podiumColor} ${isFirst ? 'order-1 md:order-2 md:-translate-y-4' : isSecond ? 'order-2 md:order-1' : 'order-3'}`}
                  >
                    {/* Rank Badge */}
                    <div className="flex justify-between items-center mb-4">
                      <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${badgeStyle}`}>
                        {rankLabel}
                      </span>
                      <span className="text-[32px] font-black text-white/15 font-mono">#{movie.rank}</span>
                    </div>

                    {/* Movie Cover Card */}
                    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-5 border border-white/10 cursor-pointer" onClick={() => onMovieSelect(movie)}>
                      <img 
                        src={movie.poster || movie.image} 
                        alt={movie.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#99aabb] mb-1">{movie.genres?.join(' • ')}</p>
                        <h3 className="text-[18px] font-black text-white leading-tight truncate">{movie.title}</h3>
                      </div>
                    </div>

                    {/* Metric Stats */}
                    <div className="space-y-4 border-t border-white/5 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-[12px] font-medium text-[#99aabb] uppercase tracking-wider flex items-center gap-1.5">
                          {timeframeConfig[timeframe].metricIcon}
                          {timeframeConfig[timeframe].metricLabel}
                        </span>
                        <span className="text-[15px] font-black text-white font-mono">{movie.displayMetric}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[12px] font-medium text-[#99aabb] uppercase tracking-wider">Trend Direction</span>
                        {renderTrend(movie.trend, movie.id)}
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <button
                          onClick={() => onMovieSelect(movie)}
                          className="bg-white/5 border border-white/10 text-white font-black text-[11px] uppercase tracking-widest py-2.5 rounded-lg hover:bg-white/10 transition-all text-center"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => onPredict(movie)}
                          className="bg-brand-green hover:bg-[#00c048] text-white font-black text-[11px] uppercase tracking-widest py-2.5 rounded-lg transition-all text-center shadow-lg shadow-brand-green/20"
                        >
                          Predict
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        )}

        {/* Grid Rankings list */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[12px] font-black uppercase tracking-[0.25em] text-[#99aabb]">
              ⚡ {searchQuery || selectedGenre !== 'All' ? 'Matched Movies' : `Positions #4 – #${rankedMovies.length}`}
            </h2>
            <span className="text-xs text-[#99aabb] font-mono">{filteredRankedMovies.length} movies listed</span>
          </div>

          {filteredRankedMovies.length === 0 ? (
            <div className="bg-[#1C2227] rounded-3xl border border-white/5 p-12 text-center">
              <p className="text-[#99aabb] text-[16px] font-medium mb-2">No movies match your filters.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedGenre('All'); }}
                className="text-brand-green text-[13px] font-bold uppercase tracking-widest hover:underline mt-2"
              >
                Clear Search & Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridMovies.map((movie) => (
                <div 
                  key={movie.id} 
                  className="bg-[#1C2227] rounded-3xl border border-white/5 p-5 transition-all duration-300 hover:border-white/10 hover:translate-y-[-4px] group flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Rank + Date */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[28px] font-black text-white/15 font-mono">#{movie.rank}</span>
                      <span className="flex items-center gap-1.5 text-[11px] font-bold text-[#99aabb] uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        <Calendar className="w-3.5 h-3.5 opacity-55" /> {movie.releaseDate?.split(',')[1]?.trim() || movie.releaseDate || 'TBA'}
                      </span>
                    </div>

                    {/* Movie Info Split */}
                    <div className="flex gap-4 mb-4">
                      <div className="w-[85px] aspect-[2/3] rounded-xl overflow-hidden border border-white/10 shrink-0 cursor-pointer" onClick={() => onMovieSelect(movie)}>
                        <img 
                          src={movie.poster || movie.image} 
                          alt={movie.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 
                            className="text-[17px] font-black text-white leading-snug group-hover:text-brand-green transition-colors cursor-pointer" 
                            onClick={() => onMovieSelect(movie)}
                          >
                            {movie.title}
                          </h3>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {movie.genres?.slice(0, 2).map((g) => (
                              <span key={g} className="text-[10px] font-bold uppercase tracking-wider text-[#99aabb] bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                                {g}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-[#99aabb] text-xs font-medium line-clamp-2 mt-2 leading-relaxed">
                          {movie.story}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metrics & Actions */}
                  <div className="border-t border-white/5 pt-4 mt-2 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-medium text-[#99aabb] uppercase tracking-wider flex items-center gap-1.5">
                        {timeframeConfig[timeframe].metricIcon}
                        {timeframeConfig[timeframe].metricLabel}
                      </span>
                      <span className="text-[14px] font-black text-white font-mono">{movie.displayMetric}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-medium text-[#99aabb] uppercase tracking-wider">Trend Direction</span>
                      {renderTrend(movie.trend, movie.id)}
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <button
                        onClick={() => onMovieSelect(movie)}
                        className="bg-white/5 border border-white/10 text-white font-black text-[11px] uppercase tracking-widest py-2 rounded-lg hover:bg-white/10 transition-all text-center"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => onPredict(movie)}
                        className="bg-brand-green/10 border border-brand-green/20 text-brand-green hover:bg-brand-green hover:text-white font-black text-[11px] uppercase tracking-widest py-2 rounded-lg transition-all text-center"
                      >
                        Predict
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Ranking;
