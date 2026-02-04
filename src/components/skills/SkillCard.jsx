import React from 'react';
import useProgressDot from '../../hooks/useProgressBar';

// --- Skill Card Component ---
const SkillCard = ({ name, icon, color, progress }) => {
  const progressDots = useProgressDot(progress);

  const iconClass = `${icon} colored text-[1.5rem] sm:text-[2rem] md:text-[2.5rem]`;
  const iconBgStyle = {
    backgroundColor: color,
  };

  const iconStyle = {
    color: "#FFFFFF",
    filter: "brightness(0) invert(1)",
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center w-full h-full p-[1rem] sm:p-[1.25rem] md:p-[1.5rem]
        rounded-2xl border border-white/20 bg-gradient-to-br from-cyan-500/15 via-purple-500/10 to-pink-500/15 backdrop-blur-xl shadow-sm transition-all duration-300
        hover:-translate-y-[0.25rem] hover:shadow-lg dark:shadow-black/40`}
    >
      {/* Icon Container */}
      <div
        style={iconBgStyle}
        className={`flex items-center justify-center w-[2.5rem] h-[2.5rem] sm:w-[3rem] sm:h-[3rem] md:w-[4rem] md:h-[4rem] rounded-xl mb-[0.5rem] sm:mb-[0.75rem] md:mb-[1rem]
          shadow-inner transition-transform duration-300 hover:scale-105`}
      >
        <i style={iconStyle} className={`${iconClass} text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] drop-shadow-sm`}></i>
      </div>

      {/* Skill Name */}
      <h3 className="text-[0.875rem] sm:text-[1rem] md:text-[1.25rem] font-bold tracking-wide text-slate-800 dark:text-slate-100 mb-[0.5rem] sm:mb-[0.75rem] md:mb-[1rem] text-center">
        {name}
      </h3>

      {/* Fluency Bars */}
      <div className="flex gap-[0.3rem] sm:gap-[0.35rem] md:gap-[0.4rem] w-full max-w-[6rem] sm:max-w-[7rem] md:max-w-[8rem]">
        {progressDots.map((isActive, i) => (
          <div
            key={i}
            className={`h-[0.25rem] sm:h-[0.3rem] md:h-[0.35rem] flex-1 rounded-full transition-colors duration-500
              ${isActive 
                ? 'bg-slate-900 dark:bg-slate-100 shadow-[0_0_8px_rgba(0,0,0,0.1)]' 
                : 'bg-slate-300/60 dark:bg-slate-600/50'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCard;