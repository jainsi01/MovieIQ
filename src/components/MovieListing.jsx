import React, { useState } from 'react';
import { Calendar, Tag, ChevronRight, Play, Lock, CheckCircle2 } from 'lucide-react';

const MovieListing = ({ onPredict }) => {
  const [activeFilter, setActiveFilter] = useState('Upcoming');

  const filters = ['Upcoming', 'Now Showing', 'Big Releases'];

  const movies = [
    {
      id: 1,
      title: "Project Hail Mary",
      releaseDate: "March 20, 2026",
      status: "Open",
      genres: ["Sci-Fi", "Drama"],
      poster: "https://m.media-amazon.com/images/M/MV5BNTkwNzJiYTctNzI3NC00NjE1LTlhYjktY2Q5MTdmMWFmNzcxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      color: "border-brand-green",
      glow: "shadow-brand-green/20"
    },
    {
      id: 2,
      title: "Peaky Blinders: The Immortal Man",
      releaseDate: "March 20, 2026",
      status: "Open",
      genres: ["Crime", "Drama"],
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1RfnNxjkJjv6su_9EVi-AqVTvMyaiWergB9Vh_utvs1n6ZYTWygADBA1Xzwx0kxDfH5S&s=10",
      color: "border-brand-green",
      glow: "shadow-brand-green/20"
    },
    {
      id: 3,
      title: "Ready or Not 2: Here I Come",
      releaseDate: "November 15, 2025",
      status: "Locked",
      genres: ["Horror", "Comedy"],
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfl2H2Hd7Lf3_4QEElNKG-XKZLpNDHziIfKaVKBn8X_HIPeewbZNbCGybVuZj8yjOusBm5&s=10",
      color: "border-brand-orange",
      glow: "shadow-brand-orange/20"
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Open':
        return (
          <div className="flex items-center gap-1.5 bg-brand-green/10 border border-brand-green/30 px-3 py-1 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse shadow-[0_0_8px_rgba(0,224,84,0.8)]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-green">Predictions Open</span>
          </div>
        );
      case 'Locked':
        return (
          <div className="flex items-center gap-1.5 bg-brand-orange/10 border border-brand-orange/30 px-3 py-1 rounded-full">
            <Lock className="w-3 h-3 text-brand-orange" />
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Coming Soon</span>
          </div>
        );
      case 'Results Live':
        return (
          <div className="flex items-center gap-1.5 bg-brand-blue/10 border border-brand-blue/30 px-3 py-1 rounded-full">
            <CheckCircle2 className="w-3 h-3 text-brand-blue" />
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue">Results 0nline</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-[#14181C] font-graphik antialiased">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        
        {/* Header & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 border-b border-white/5 pb-8">
          <div>
            <h2 className="text-[12px] font-black uppercase tracking-[0.4em] text-[#99aabb] mb-2 flex items-center gap-2">
              <span className="w-8 h-[2.5px] bg-brand-green"></span>
              Challenge Library
            </h2>
            <h3 className="text-[36px] font-black text-white tracking-tight leading-tight">
              Discover your next win.
            </h3>
          </div>

          <div className="flex items-center bg-[#1C2227] p-1.5 rounded-xl border border-white/5 self-start md:self-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-lg text-[13px] font-bold uppercase tracking-widest transition-all ${
                  activeFilter === filter 
                    ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20' 
                    : 'text-[#99aabb] hover:text-white hover:bg-white/5'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              className="group relative bg-[#1C2227] rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative aspect-[2/3] overflow-hidden">
                <img 
                  src={movie.poster} 
                  alt={movie.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#14181C] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Status Badge Float */}
                <div className="absolute top-6 left-6 z-20">
                  {getStatusBadge(movie.status)}
                </div>

                {/* Quick Predict Button (Hover Only) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-10 group-hover:translate-y-0 z-20 bg-black/40 backdrop-blur-sm">
                   <button 
                     onClick={() => onPredict(movie)}
                     className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-[14px] font-black uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-2xl"
                   >
                      Predict Now <Play className="w-4 h-4 fill-current" />
                   </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {movie.genres.map(genre => (
                    <span key={genre} className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 text-[10px] font-bold text-[#99aabb] uppercase tracking-widest border border-white/5">
                       <Tag className="w-3 h-3 opacity-60" /> {genre}
                    </span>
                  ))}
                </div>

                <h4 className="text-[22px] font-black text-white leading-tight mb-3 group-hover:text-brand-green transition-colors">
                  {movie.title}
                </h4>

                <div className="flex items-center gap-2 text-[#99aabb] text-[13px] font-bold">
                  <Calendar className="w-4 h-4 opacity-40 shrink-0" />
                  <span>Returns: {movie.releaseDate}</span>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                   <div className="flex -space-x-3">
                      {[1, 2, 3].map(i => (
                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#1C2227] flex items-center justify-center bg-zinc-800 text-[10px] font-black text-white/40`}>
                           U{i}
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full border-2 border-[#1C2227] flex items-center justify-center bg-[#14181C] text-[10px] font-black text-white/60">
                        +14
                      </div>
                   </div>
                   <button className="text-[11px] font-black uppercase tracking-widest text-[#99aabb] hover:text-brand-green transition-colors flex items-center gap-1.5">
                      Analytics <ChevronRight className="w-3.5 h-3.5" />
                   </button>
                </div>
              </div>

              {/* Decorative Accent Line */}
              <div className={`absolute bottom-0 inset-x-0 h-[3px] bg-brand-green opacity-0 group-hover:opacity-100 transition-opacity ${movie.color}`} />
            </div>
          ))}

          {/* Placeholder for "Load More" or Empty States */}
          <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-white/5 bg-white/[0.02] p-12 group cursor-pointer hover:border-brand-green/30 transition-all">
             <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-brand-green/20 group-hover:scale-110 transition-all">
                <Play className="w-6 h-6 text-[#99aabb] group-hover:text-brand-green" />
             </div>
             <p className="text-[14px] font-bold text-[#99aabb] uppercase tracking-widest text-center group-hover:text-white transition-colors">
                Coming Soon:<br />More Challenges
             </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MovieListing;
