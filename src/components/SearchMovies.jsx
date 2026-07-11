import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowUpDown, Calendar, Lock, Play, Star, DollarSign, Tag, X } from 'lucide-react';

const SearchMovies = ({ movies = [], onPredict, onMovieSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('All'); // All, Open, Locked
  const [selectedYear, setSelectedYear] = useState('All'); // All, 2025, 2026
  const [sortBy, setSortBy] = useState('title-asc'); // title-asc, title-desc, date-asc, date-desc, rating-desc, budget-desc

  // Extract all unique genres
  const allGenres = useMemo(() => {
    const genresSet = new Set();
    movies.forEach(movie => {
      movie.genres?.forEach(g => genresSet.add(g));
    });
    return Array.from(genresSet);
  }, [movies]);

  // Toggle genre filter selection
  const handleGenreToggle = (genre) => {
    setSelectedGenres(prev => 
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    );
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedGenres([]);
    setSelectedStatus('All');
    setSelectedYear('All');
    setSortBy('title-asc');
  };

  // Filter and sort logic
  const filteredAndSortedMovies = useMemo(() => {
    let result = [...movies];

    // 1. Text Search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(movie => 
        movie.title.toLowerCase().includes(query) ||
        movie.genres?.some(g => g.toLowerCase().includes(query)) ||
        movie.crew?.director?.toLowerCase().includes(query)
      );
    }

    // 2. Genre Filter (match any selected genres)
    if (selectedGenres.length > 0) {
      result = result.filter(movie => 
        selectedGenres.every(g => movie.genres?.includes(g))
      );
    }

    // 3. Status Filter
    if (selectedStatus !== 'All') {
      result = result.filter(movie => movie.status === selectedStatus);
    }

    // 4. Release Year Filter
    if (selectedYear !== 'All') {
      result = result.filter(movie => {
        const releaseYear = movie.releaseDate?.includes('2025') ? '2025' : 
                            movie.releaseDate?.includes('2026') ? '2026' : '';
        return releaseYear === selectedYear;
      });
    }

    // 5. Sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        case 'date-asc':
          return new Date(a.releaseDate) - new Date(b.releaseDate);
        case 'date-desc':
          return new Date(b.releaseDate) - new Date(a.releaseDate);
        case 'rating-desc': {
          const ratingA = parseFloat(a.ratings?.imdb) || 0;
          const ratingB = parseFloat(b.ratings?.imdb) || 0;
          return ratingB - ratingA;
        }
        case 'budget-desc': {
          const budgetA = parseInt(a.boxOffice?.budget) || 0;
          const budgetB = parseInt(b.boxOffice?.budget) || 0;
          return budgetB - budgetA;
        }
        default:
          return 0;
      }
    });

    return result;
  }, [movies, searchQuery, selectedGenres, selectedStatus, selectedYear, sortBy]);

  return (
    <div className="bg-[#14181C] min-h-screen pt-28 pb-20 font-graphik antialiased selection:bg-brand-green selection:text-black">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        
        {/* Title */}
        <div className="border-b border-white/5 pb-6 mb-8">
          <h1 className="text-[36px] md:text-[44px] font-black text-white leading-tight tracking-tight">
            Search & Discover
          </h1>
          <p className="text-[#99aabb] text-sm mt-1">
            Search predictions, filters, and sort to find specific movies in the prediction pool.
          </p>
        </div>

        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* SIDEBAR FILTERS (3 Cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-[#1C2227] rounded-3xl border border-white/5 p-6 space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
                  <Filter className="w-4 h-4 text-brand-green" /> Filters
                </span>
                <button 
                  onClick={handleClearFilters}
                  className="text-[11px] font-bold text-brand-green hover:underline uppercase tracking-wider flex items-center gap-1"
                >
                  Clear All
                </button>
              </div>

              {/* Status Filter */}
              <div className="space-y-3">
                <h3 className="text-[11px] font-black text-[#99aabb] uppercase tracking-widest">Prediction Status</h3>
                <div className="flex flex-col gap-2">
                  {['All', 'Open', 'Locked'].map((status) => (
                    <button
                      key={status}
                      onClick={() => setSelectedStatus(status)}
                      className={`text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                        selectedStatus === status 
                          ? 'bg-brand-green/10 border-brand-green/20 text-brand-green' 
                          : 'bg-white/5 border-transparent text-[#99aabb] hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {status === 'All' ? 'All Movies' : status === 'Open' ? 'Predictions Open' : 'Predictions Locked'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Genres Multi-select */}
              <div className="space-y-3">
                <h3 className="text-[11px] font-black text-[#99aabb] uppercase tracking-widest">Filter by Genre</h3>
                <div className="flex flex-wrap gap-2">
                  {allGenres.map((genre) => {
                    const isSelected = selectedGenres.includes(genre);
                    return (
                      <button
                        key={genre}
                        onClick={() => handleGenreToggle(genre)}
                        className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${
                          isSelected 
                            ? 'bg-brand-green text-white border-brand-green shadow-md shadow-brand-green/10' 
                            : 'bg-white/5 border-white/5 text-[#99aabb] hover:text-white hover:border-white/10'
                        }`}
                      >
                        {genre}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Release Year Filter */}
              <div className="space-y-3">
                <h3 className="text-[11px] font-black text-[#99aabb] uppercase tracking-widest">Release Year</h3>
                <div className="grid grid-cols-3 gap-2">
                  {['All', '2025', '2026'].map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`py-2 rounded-lg text-xs font-bold text-center transition-all border ${
                        selectedYear === year 
                          ? 'bg-brand-green/10 border-brand-green/20 text-brand-green' 
                          : 'bg-white/5 border-transparent text-[#99aabb] hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* MAIN SEARCH CONTENT (9 Cols) */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Search Input and Sort Row */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              
              {/* Search Bar */}
              <div className="relative w-full group">
                <input
                  type="text"
                  placeholder="Search by title, genre, director..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-[#1C2227] border border-white/5 rounded-2xl py-3.5 pl-12 pr-10 text-sm w-full focus:outline-none focus:border-brand-green/30 focus:bg-[#22292f] transition-all text-white placeholder-white/30"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-brand-green transition-colors" />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Sorting Selector */}
              <div className="flex items-center gap-2 bg-[#1C2227] border border-white/5 px-4 py-2.5 rounded-2xl shrink-0 w-full sm:w-auto">
                <ArrowUpDown className="w-4 h-4 text-[#99aabb]" />
                <span className="text-xs text-[#99aabb] uppercase font-bold tracking-wider">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-none text-white text-xs font-bold outline-none cursor-pointer focus:ring-0 pr-6"
                >
                  <option value="title-asc" className="bg-[#1C2227] text-white">Title (A-Z)</option>
                  <option value="title-desc" className="bg-[#1C2227] text-white">Title (Z-A)</option>
                  <option value="date-asc" className="bg-[#1C2227] text-white">Release Date (Oldest)</option>
                  <option value="date-desc" className="bg-[#1C2227] text-white">Release Date (Newest)</option>
                  <option value="rating-desc" className="bg-[#1C2227] text-white">IMDb Rating (High-Low)</option>
                  <option value="budget-desc" className="bg-[#1C2227] text-white">Budget (High-Low)</option>
                </select>
              </div>

            </div>

            {/* Results Overview */}
            <div className="flex items-center justify-between text-xs text-[#99aabb] font-mono pl-2">
              <span>Found {filteredAndSortedMovies.length} results</span>
              {selectedGenres.length > 0 && (
                <div className="flex items-center gap-2">
                  <span>Active Genres:</span>
                  <div className="flex gap-1">
                    {selectedGenres.map(g => (
                      <span key={g} className="bg-white/5 border border-white/5 px-2 py-0.5 rounded text-[10px] text-white">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Grid Layout of Movies */}
            {filteredAndSortedMovies.length === 0 ? (
              <div className="bg-[#1C2227] rounded-3xl border border-white/5 p-16 text-center">
                <p className="text-[#99aabb] text-lg font-medium mb-3">No movies match your filters.</p>
                <button 
                  onClick={handleClearFilters}
                  className="text-brand-green text-sm font-bold uppercase tracking-widest hover:underline"
                >
                  Reset all search and filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedMovies.map((movie) => (
                  <div 
                    key={movie.id} 
                    className="bg-[#1C2227] rounded-3xl border border-white/5 p-5 transition-all duration-300 hover:border-white/10 hover:translate-y-[-4px] group flex flex-col justify-between"
                  >
                    <div>
                      {/* Status / Year Badge */}
                      <div className="flex items-center justify-between mb-4">
                        {movie.status === 'Open' ? (
                          <span className="bg-brand-green/10 border border-brand-green/20 text-brand-green text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                            Predict Open
                          </span>
                        ) : (
                          <span className="bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1">
                            <Lock className="w-2.5 h-2.5" /> Locked
                          </span>
                        )}
                        <span className="text-[10px] font-bold text-[#99aabb] uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                          {movie.releaseDate?.split(',')[1]?.trim() || movie.releaseDate || 'TBA'}
                        </span>
                      </div>

                      {/* Movie Card */}
                      <div className="flex gap-4 mb-4">
                        <div 
                          className="w-[80px] aspect-[2/3] rounded-xl overflow-hidden border border-white/10 shrink-0 cursor-pointer"
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
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {movie.genres?.slice(0, 2).map((g) => (
                                <span key={g} className="text-[9px] font-bold uppercase tracking-wider text-[#99aabb] bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                                  {g}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="text-[11px] text-[#99aabb] font-mono mt-1">
                            Dir: {movie.crew?.director || 'Unknown'}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stats & Actions */}
                    <div className="border-t border-white/5 pt-4 mt-2 space-y-3">
                      <div className="flex justify-between items-center text-[12px]">
                        <span className="text-[#99aabb] font-medium flex items-center gap-1.5">
                          <Star className="w-3.5 h-3.5 text-yellow-400" /> IMDb Rating
                        </span>
                        <span className="text-white font-black font-mono">{movie.ratings?.imdb || 'N/A'}</span>
                      </div>

                      <div className="flex justify-between items-center text-[12px]">
                        <span className="text-[#99aabb] font-medium flex items-center gap-1.5">
                          <DollarSign className="w-3.5 h-3.5 text-brand-green" /> Budget
                        </span>
                        <span className="text-white font-black font-mono">{movie.boxOffice?.budget || 'N/A'}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <button
                          onClick={() => onMovieSelect(movie)}
                          className="bg-white/5 border border-white/10 text-white font-black text-[10px] uppercase tracking-widest py-2 rounded-lg hover:bg-white/10 transition-all text-center"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => onPredict(movie)}
                          className={`font-black text-[10px] uppercase tracking-widest py-2 rounded-lg transition-all text-center ${
                            movie.status === 'Open'
                              ? 'bg-brand-green/10 border border-brand-green/20 text-brand-green hover:bg-brand-green hover:text-white'
                              : 'bg-white/5 border-white/5 text-white/40 cursor-not-allowed'
                          }`}
                          disabled={movie.status !== 'Open'}
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
    </div>
  );
};

export default SearchMovies;
