import React, { useState } from 'react';
import { ChevronLeft, Calendar, Clock, BarChart3, Star, BookOpen, HelpCircle, Play, Film, Users, Building2, Globe2, ChevronDown, ChevronUp } from 'lucide-react';

const MovieDetail = ({ movie, onBack }) => {
  console.log('MovieDetail render, movie:', movie && movie.title);
  const [expandedSections, setExpandedSections] = useState({
    boxOffice: true,
    ratings: true,
    media: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  if (!movie) return null;

  const infoFields = [
    { label: 'Release Date', value: movie.releaseDate || 'TBA' },
    { label: 'Runtime', value: movie.runtime || 'N/A' },
    { label: 'Language', value: movie.language || 'N/A' },
    { label: 'Country', value: movie.country || 'N/A' },
  ];

  return (
    <div className="bg-[#14181C] min-h-screen font-graphik pb-24">
      

      <div className="relative h-[560px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 blur-[60px] scale-110"
          style={{ backgroundImage: `url(${movie.poster || movie.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14181C] via-[#14181C]/30 to-transparent" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 h-full flex flex-col justify-end pb-12">
          <button
            onClick={onBack}
            className="absolute top-28 left-6 flex items-center gap-2 text-[#99aabb] hover:text-white transition-colors uppercase text-[11px] font-black tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10 z-20"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Discover
          </button>

          <div className="flex flex-col lg:flex-row items-end gap-16">
            <div className="w-full lg:w-[280px] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10 bg-[#0f1316]">
              <img src={movie.poster || movie.image} className="w-full h-full object-cover" alt={movie.title} />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap gap-3 mb-4">
                {movie.genres?.map((genre) => (
                  <span
                    key={genre}
                    className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-black uppercase tracking-widest text-[#99aabb]"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="rounded-3xl bg-brand-green/10 border border-brand-green/20 px-4 py-2 text-[11px] font-black uppercase tracking-[0.3em] text-brand-green">
                  MOVIE PAGE
                </div>
                <div className="flex items-center gap-2 text-[#99aabb] text-[12px] font-bold uppercase tracking-[0.23em]">
                  <Calendar className="w-4 h-4 opacity-50" /> {movie.releaseDate || 'TBA'}
                </div>
              </div>

              <h1 className="text-[42px] md:text-[56px] font-black text-white leading-[1.05] tracking-tight mb-6">
                {movie.title}
              </h1>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                {infoFields.map((field) => (
                  <div key={field.label} className="rounded-3xl bg-white/5 border border-white/10 p-4">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#99aabb] mb-2">{field.label}</p>
                    <p className="text-white font-black leading-tight">{field.value}</p>
                  </div>
                ))}
              </div>



              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="rounded-3xl bg-white/5 border border-white/10 p-5">
                  <div className="flex items-center gap-2 mb-4 text-[#99aabb] uppercase tracking-[0.2em] text-[10px] font-black">
                    <Building2 className="w-4 h-4" /> Production
                  </div>
                  <ul className="space-y-2 text-sm text-white/80">
                    {movie.productionCompanies?.map((company) => (
                      <li key={company}>{company}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl bg-white/5 border border-white/10 p-5">
                  <div className="flex items-center gap-2 mb-4 text-[#99aabb] uppercase tracking-[0.2em] text-[10px] font-black">
                    <Users className="w-4 h-4" /> Cast
                  </div>
                  <ul className="space-y-2 text-sm text-white/80">
                    {movie.cast?.map((actor) => (
                      <li key={actor}>{actor}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl bg-white/5 border border-white/10 p-5">
                  <div className="flex items-center gap-2 mb-4 text-[#99aabb] uppercase tracking-[0.2em] text-[10px] font-black">
                    <Globe2 className="w-4 h-4" /> Crew
                  </div>
                  <dl className="space-y-3 text-sm text-white/80">
                    {Object.entries(movie.crew || {}).map(([role, name]) => (
                      <div key={role}>
                        <dt className="text-[10px] uppercase tracking-[0.25em] text-[#99aabb]">{role}</dt>
                        <dd>{name}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-[#1C2227] rounded-3xl border border-white/5 p-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#99aabb] mb-2">Story Information</p>
                <h2 className="text-[28px] font-black text-white">Plot & Story</h2>
              </div>
              <div className="flex items-center gap-2 text-[#99aabb] uppercase tracking-[0.25em] text-[12px] font-bold">
                <BookOpen className="w-5 h-5" /> Story details
              </div>
            </div>
            <p className="text-[#d3d8e0] leading-relaxed text-sm">
              {movie.story}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1C2227] rounded-3xl border border-white/5 p-6">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-[#99aabb]">Ratings</p>
                  <h3 className="text-[20px] font-black text-white">Audience & Critics</h3>
                </div>
              </div>
              <div className="space-y-4">
                {movie.ratings && Object.entries(movie.ratings).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
                    <span className="text-sm text-[#99aabb] uppercase tracking-[0.2em]">{key}</span>
                    <span className="text-white font-black">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1C2227] rounded-3xl border border-white/5 p-6">
              <div className="flex items-center gap-3 mb-6">
                <Film className="w-5 h-5 text-brand-green" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-[#99aabb]">Media</p>
                  <h3 className="text-[20px] font-black text-white">Trailer & Gallery</h3>
                </div>
              </div>
              <div className="space-y-5">
                {movie.media?.trailer && (
                  <a
                    href={movie.media.trailer}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-3xl bg-brand-green/10 border border-brand-green/20 px-5 py-3 text-sm font-black uppercase tracking-[0.25em] text-brand-green hover:bg-brand-green/15 transition"
                  >
                    <Play className="w-4 h-4" /> Watch Trailer
                  </a>
                )}
                <div className="grid grid-cols-2 gap-3">
                  {movie.media?.gallery?.slice(0, 4).map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`${movie.title} screenshot ${index + 1}`}
                      className="w-full h-28 object-cover rounded-3xl border border-white/10"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1C2227] rounded-3xl border border-white/5 overflow-hidden">
            <button
              onClick={() => toggleSection('boxOffice')}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-green/20 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-[0.35em] text-[#99aabb]">Box Office</p>
                  <h3 className="text-[20px] font-black text-white">Dashboard</h3>
                </div>
              </div>
              {expandedSections.boxOffice ? <ChevronUp className="w-5 h-5 text-[#99aabb]" /> : <ChevronDown className="w-5 h-5 text-[#99aabb]" />}
            </button>
            {expandedSections.boxOffice && (
              <div className="px-8 pb-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="rounded-3xl bg-white/5 border border-white/10 p-5">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#99aabb] mb-3">Budget</p>
                  <p className="text-[28px] font-black text-white">{movie.boxOffice?.budget || 'N/A'}</p>
                </div>
                <div className="rounded-3xl bg-white/5 border border-white/10 p-5">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#99aabb] mb-3">Opening Day</p>
                  <p className="text-[28px] font-black text-brand-green">{movie.boxOffice?.openingDay || 'N/A'}</p>
                </div>
                <div className="rounded-3xl bg-white/5 border border-white/10 p-5">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#99aabb] mb-3">Opening Weekend</p>
                  <p className="text-[28px] font-black text-brand-green">{movie.boxOffice?.openingWeekend || 'N/A'}</p>
                </div>
                <div className="rounded-3xl bg-white/5 border border-white/10 p-5">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#99aabb] mb-3">Total Gross</p>
                  <p className="text-[28px] font-black text-white">{movie.boxOffice?.totalGross || 'N/A'}</p>
                </div>
                <div className="sm:col-span-2 rounded-3xl bg-white/5 border border-white/10 p-5">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[#99aabb] mb-3">Status</p>
                  <p className="text-[18px] font-black text-brand-green">{movie.boxOffice?.status || 'Projected'}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#1C2227] rounded-3xl border border-white/5 p-8">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-5 h-5 text-brand-green" />
              <h3 className="text-[18px] font-black text-white uppercase tracking-tighter">Quick Facts</h3>
            </div>
            <div className="space-y-4 text-sm text-white/80">
              <div className="flex justify-between gap-3 border-b border-white/10 pb-3">
                <span className="text-[#99aabb] uppercase tracking-[0.2em]">Genre</span>
                <span>{movie.genres?.join(', ')}</span>
              </div>
              <div className="flex justify-between gap-3 border-b border-white/10 pb-3">
                <span className="text-[#99aabb] uppercase tracking-[0.2em]">Runtime</span>
                <span>{movie.runtime}</span>
              </div>
              <div className="flex justify-between gap-3 border-b border-white/10 pb-3">
                <span className="text-[#99aabb] uppercase tracking-[0.2em]">Language</span>
                <span>{movie.language}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-[#99aabb] uppercase tracking-[0.2em]">Country</span>
                <span>{movie.country}</span>
              </div>
            </div>
          </div>

          <div className="bg-[#1C2227] rounded-3xl border border-white/5 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Film className="w-5 h-5 text-brand-green" />
              <h3 className="text-[18px] font-black text-white uppercase tracking-tighter">Media Preview</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {movie.media?.gallery?.slice(0, 4).map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`${movie.title} media ${index + 1}`}
                  className="w-full h-24 object-cover rounded-3xl border border-white/10"
                />
              ))}
            </div>
            {movie.media?.trailer && (
              <a
                href={movie.media.trailer}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-3xl bg-brand-green/10 border border-brand-green/20 px-5 py-3 text-sm font-black uppercase tracking-[0.25em] text-brand-green hover:bg-brand-green/15 transition"
              >
                <Play className="w-4 h-4" /> Watch Trailer
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
