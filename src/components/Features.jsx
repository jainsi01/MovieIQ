import React from 'react';
import { Zap, Target, Trophy, Activity, Ticket, Flame } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-[30px] h-[30px] text-[#99aabb] group-hover:text-white transition-colors duration-200" />,
      text: "Make smart predictions on box office, ratings, and story outcomes before release.",
      hoverColor: 'hover:bg-brand-green'
    },
    {
      icon: <Target className="w-[30px] h-[30px] text-[#99aabb] group-hover:text-white transition-colors duration-200" />,
      text: "Challenge yourself across different categories and improve your prediction accuracy.",
      hoverColor: 'hover:bg-brand-orange'
    },
    {
      icon: <Trophy className="w-[30px] h-[30px] text-[#99aabb] group-hover:text-white transition-colors duration-200" />,
      text: "Climb weekly and monthly rankings and prove you’re the ultimate movie predictor.",
      hoverColor: 'hover:bg-brand-blue'
    },
    {
      icon: <Activity className="w-[30px] h-[30px] text-[#99aabb] group-hover:text-white transition-colors duration-200" />,
      text: "See your accuracy, points, and prediction history in one place.",
      hoverColor: 'hover:bg-brand-green'
    },
    {
      icon: <Ticket className="w-[30px] h-[30px] text-[#99aabb] group-hover:text-white transition-colors duration-200" />,
      text: "Get movie tickets, passes, and merch based on your ranking (no cash, skill-based).",
      hoverColor: 'hover:bg-brand-orange'
    },
    {
      icon: <Flame className="w-[30px] h-[30px] text-[#99aabb] group-hover:text-white transition-colors duration-200" />,
      text: "Follow upcoming movies, deadlines, and trending predictions all in one place.",
      hoverColor: 'hover:bg-brand-blue'
    }
  ];

  return (
    <section className="bg-[#14181C] py-16 px-8 select-none">
      <div className="max-w-[950px] mx-auto">
        <h2 className="text-[#99aabb] font-graphik text-[11px] font-semibold tracking-[0.16em] uppercase mb-5">
          MovieIQ lets you…
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4px] antialiased">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-[#2C3440] ${feature.hoverColor} transition-all duration-300 p-[20px] rounded-[4px] flex items-center gap-[18px] group cursor-pointer border border-transparent border-b-white/5 shadow-lg`}
            >
              <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <p className="text-[#99aabb] font-graphik text-[14px] leading-[1.4] transition-colors group-hover:text-white font-medium">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
