import React from 'react';

const MovieRow = ({ movies = [], onPredict }) => {
  const rowMovies = movies.slice(0, 6);

  return (
    <section className="bg-[#14181C] pt-6 pb-20 px-8">
      <div className="max-w-[1024px] mx-auto">
        {/* Social Text Section */}
        <div className="flex items-center justify-center gap-2 text-[#99aabb] font-graphik text-[14px] antialiased mb-10">
          <span>A smarter way to experience movies. Also available on</span>
          <div className="flex items-center gap-2.5 ml-1">
            {/* Apple Icon */}
            <svg className="w-4 h-4 fill-current transition-colors hover:text-white cursor-pointer" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .76-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.36 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path>
            </svg>
            {/* Android Icon */}
            <svg className="w-4 h-4 fill-current transition-colors hover:text-white cursor-pointer" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.523 15.3414L20.355 20.247C20.4765 20.4573 20.4043 20.7267 20.194 20.8482C20.1265 20.8872 20.0494 20.9077 19.9709 20.9077C19.8396 20.9077 19.7153 20.8415 19.6429 20.7297L16.7828 15.7758C16.4891 15.8459 16.1852 15.9082 15.8715 15.9608L16.5057 19.4678C16.5435 19.6766 16.4046 19.8767 16.1958 19.9144C16.1555 19.9217 16.1146 19.9254 16.0736 19.9254C15.8929 19.9254 15.7353 19.8005 15.6967 19.5878L15.0238 15.8691C14.0567 15.98 13.0441 16.0366 12 16.0366C10.9559 16.0366 9.94333 15.98 8.97621 15.8691L8.30325 19.5878C8.26471 19.8005 8.10707 19.9254 7.92641 19.9254C7.88536 19.9254 7.84446 19.9217 7.80415 19.9144C7.59542 19.8767 7.45654 19.6766 7.49428 19.4678L8.12847 15.9608C7.8148 15.9082 7.51093 15.8459 7.21715 15.7758L4.35711 20.7297C4.28468 20.8415 4.16041 20.9077 4.02908 20.9077C3.95062 20.9077 3.87347 20.8872 3.80601 20.8482C3.59569 20.7267 3.52353 20.4573 3.64499 20.247L6.47697 15.3414C4.16781 14.1648 2.60156 12.0156 2.27438 9.51053C2.26125 9.40994 2.25469 9.30906 2.25469 9.20819L21.7453 9.20819C21.7453 9.30906 21.7388 9.40994 21.7256 9.51053C21.3984 12.0156 19.8322 14.1648 17.523 15.3414ZM16.3262 5.37891C16.3262 5.86989 16.7243 6.26806 17.2153 6.26806C17.7063 6.26806 18.1044 5.86989 18.1044 5.37891C18.1044 4.88794 17.7063 4.48976 17.2153 4.48976C16.7243 4.48976 16.3262 4.88794 16.3262 5.37891ZM5.89555 5.37891C5.89555 5.86989 6.29373 6.26806 6.7847 6.26806C7.27568 6.26806 7.67385 5.86989 7.67385 5.37891C7.67385 4.88794 7.27568 4.48976 6.7847 4.48976C6.29373 4.48976 5.89555 4.88794 5.89555 5.37891Z"></path>
            </svg>
          </div>
        </div>

        {/* Poster Row */}
        <div className="overflow-x-auto scroll-smooth pb-2 hide-scrollbar">
          <div className="flex gap-[8px] min-w-max px-1">
            {rowMovies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => onPredict(movie)}
                className="relative w-[180px] sm:w-[200px] md:w-[220px] flex-shrink-0 aspect-[2/3] rounded-[4px] overflow-hidden border border-white/10 group cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:border-white/40 ring-1 ring-white/0 hover:ring-white/20 shadow-xl"
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <p className="text-sm font-black tracking-tight">{movie.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieRow;
