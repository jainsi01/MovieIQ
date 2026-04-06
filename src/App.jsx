import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import FeaturedPredictions from './components/FeaturedPredictions';
import MovieListing from './components/MovieListing';
import MovieDetail from './components/MovieDetail';
import Features from './components/Features';

import PredictionsSummary from './components/PredictionsSummary';
import Leaderboard from './components/Leaderboard';
import Rewards from './components/Rewards';

function App() {
  const [view, setView] = useState('home'); // home, detail, predictions, leaderboard, rewards
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handlePredict = (movie) => {
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

  const handleBack = () => {
    setView('home');
    window.scrollTo(0, 0);
  };

  return (
    <div className="font-sans antialiased text-white bg-[#14181C] min-h-screen">
      <Navbar 
        onHomeClick={handleBack} 
        onPredictionsClick={handlePredictions} 
        onLeaderboardClick={handleLeaderboard}
        onRewardsClick={handleRewards}
      />
      
      {view === 'home' && (
        <>
          <Hero />
          <MovieRow />
          <FeaturedPredictions onPredict={handlePredict} />
          <MovieListing onPredict={handlePredict} />
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
    </div>
  );
}

export default App;
