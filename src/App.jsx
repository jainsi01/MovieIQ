import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import FeaturedPredictions from './components/FeaturedPredictions';
import MovieListing from './components/MovieListing';
import PlatformInsights from './components/PlatformInsights';
import MovieDetail from './components/MovieDetail';
import Features from './components/Features';
import movies from './data/movies';

import PredictionsSummary from './components/PredictionsSummary';
import Leaderboard from './components/Leaderboard';
import Rewards from './components/Rewards';
import Ranking from './components/Ranking';
import SearchMovies from './components/SearchMovies';
import StudioAnalytics from './components/StudioAnalytics';

function App() {
  const [view, setView] = useState('home'); // home, detail, predictions, leaderboard, rewards, ranking, search, analytics
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handlePredict = (movie) => {
    console.log('handlePredict called for movie:', movie && movie.title);
    setSelectedMovie(movie);
    setView('detail');
    window.scrollTo(0, 0);
  };

  const handlePredictions = () => {
    setView('predictions');
    window.scrollTo(0, 0);
  };

  const handleLeaderboard = () => {
    setView('leaderboard');
    window.scrollTo(0, 0);
  };

  const handleRewards = () => {
    setView('rewards');
    window.scrollTo(0, 0);
  };

  const handleRanking = () => {
    setView('ranking');
    window.scrollTo(0, 0);
  };

  const handleSearch = () => {
    setView('search');
    window.scrollTo(0, 0);
  };

  const handleAnalytics = () => {
    setView('analytics');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setView('home');
    window.scrollTo(0, 0);
  };

  return (
    <div className="font-sans antialiased text-white bg-[#14181C] min-h-screen">
      <Navbar 
        onHomeClick={handleBack} 
        onSearchClick={handleSearch}
        onRankingClick={handleRanking}
        onAnalyticsClick={handleAnalytics}
        onPredictionsClick={handlePredictions} 
        onLeaderboardClick={handleLeaderboard}
        onRewardsClick={handleRewards}
      />
      
      {view === 'home' && (
        <>
          <Hero />
          <MovieRow movies={movies} onPredict={handlePredict} />
          <FeaturedPredictions onPredict={handlePredict} />
          <MovieListing movies={movies} onPredict={handlePredict} />
          <PlatformInsights />
          <Features />
        </>
      )}

      {view === 'detail' && (
        <MovieDetail movie={selectedMovie} onBack={handleBack} />
      )}

      {view === 'predictions' && (
        <PredictionsSummary onEditPrediction={handlePredict} />
      )}

      {view === 'leaderboard' && (
        <Leaderboard />
      )}

      {view === 'rewards' && (
        <Rewards />
      )}

      {view === 'ranking' && (
        <Ranking movies={movies} onPredict={handlePredict} onMovieSelect={handlePredict} />
      )}

      {view === 'search' && (
        <SearchMovies movies={movies} onPredict={handlePredict} onMovieSelect={handlePredict} />
      )}

      {view === 'analytics' && (
        <StudioAnalytics movies={movies} onMovieSelect={handlePredict} />
      )}
    </div>
  );
}

export default App;
