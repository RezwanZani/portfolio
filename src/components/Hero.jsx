import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const Hero = () => {
  const roles = ["Avionics Aspirant", "Web Developer", "Product Designer"];
  const typedRole = useTypewriter(roles);
  return (
    <header className={`
                    relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden
                    md:py-30 py-30 md:px-10 px-3
            `}
    >
      
      {/* --- Background Decorations --- */}
      
      {/* 1. Dot Pattern (Simulated with SVG for developer vibe) */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      {/* 2. Abstract Blob Background */}
      {/* <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-pink-500 rounded-full blur-[100px] opacity-20"></div> */}

      {/* --- Main Grid Container --- */}
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* --- Left Column: Information (Flexbox) --- */}
        <div className="flex flex-col gap-2 text-center lg:text-left animate-fade-in-up">
          
          <div className={`
                        inline-block px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full
                        dark:bg-sky-600/50 dark:text-slate-200 dark:border dark:border-blue-400
                        text-xs w-fit mx-auto lg:mx-0 shadow-sm
                  `}
          >
            🚀 Avionics Engineering Student & Developer
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-slate-800 leading-tight dark:text-sky-600">
            Hi! This is <span className="bg-gradient-to-r from-rose-600 to-fuchsia-700 bg-clip-text text-transparent dark:from-rose-400 dark:to-fuchsia-400">Rezwan.</span> <br />
          </h1>

          <h2 className="leading-relaxed">
            <span className=" text-xl md:text-2xl lg:text-4xl font-extrabold leading-tight gap-2 text-slate-800 dark:text-sky-200">
              I am a{' '}
              <span className="ml-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 dark:from-cyan-400">
                {typedRole}
              </span>
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed dark:text-gray-400 mt-4 text-justify lg:text-left">
            I am an aspiring Avionics Software Specialist dedicated to the intersection of aerospace engineering and high-performance computing. I focus on building complex web applications and engineering efficient algorithms to solve real-world technical challenges.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-2">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1">
              View Projects
            </button>
            <button className="px-8 py-3 border-2 border-slate-300 hover:border-slate-800 hover:bg-slate-800 hover:text-white text-slate-700 font-bold rounded-lg transition-all dark:border-gray-400 dark:hover:border-gray-200 dark:text-slate-400 dark:hover:bg-slate-300 dark:hover:text-gray-900">
              Contact Me
            </button>
          </div>
        </div>

        {/* --- Right Column: Photo & Graphics --- */}
        <div className="relative flex justify-center items-center group">
          
          {/* Code Brackets Decoration */}
          <span className={`
                          absolute -left-6 top-5 md:-left-4 md:top-10 
                          text-8xl md:text-9xl text-blue-200 md:text-blue-100 dark:text-sky-900 font-mono font-bold 
                          select-none -z-10 animate-[bounce_3s_infinite]
            `}>
                          {`<`}
          </span>
          <span className={`
                            absolute -right-6 bottom-0 md:-right-4 md:bottom-10 
                            text-8xl md:text-9xl text-blue-300 dark:text-sky-800 md:dark:text-gray-800 font-mono font-bold 
                            select-none -z-10 animate-[bounce_4s_infinite]
            `}>
                          {`/>`}
          </span>

          {/* Image Wrapper */}
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <img 
              src="src/assets/rezwan_formal.jpg" 
              alt="Developer" 
              className="w-full h-full object-cover border-4 border-white shadow-2xl transition-all duration-500 ease-in-out
                         rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] 
                         group-hover:rounded-[50%]"
            />

            {/* Floating Experience Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-[bounce_5s_infinite]">
              <div className="bg-blue-100 p-2 rounded-lg text-2xl">
                💻
              </div>
              <div>
                <p className="font-bold text-slate-800">2+ Years</p>
                <p className="text-xs text-slate-500">Experience</p>
              </div>
            </div>
            
            {/* --- SPREAD OUT TECH ICONS --- */}

            {/* 1. Top Left: React */}
            <div className="absolute -top-4 -left-4 bg-white dark:bg-sky-100 p-2 rounded-full shadow-lg animate-pulse">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-8 h-8" alt="React" />
            </div>

            {/* 2. Top Right: C++ */}
            <div className="absolute -top-6 right-10 bg-white dark:bg-sky-100 p-2 rounded-full shadow-lg animate-[bounce_3s_infinite] delay-100">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className="w-8 h-8" alt="C++" />
            </div>

            {/* 3. Mid Right: JavaScript */}
            <div className="absolute top-20 -right-10 bg-white dark:bg-sky-100  p-2 rounded-full shadow-lg animate-[bounce_2s_infinite] delay-200">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-8 h-8" alt="JavaScript" />
            </div>

            {/* 4. Mid Left: CSS3 */}
            <div className="absolute top-32 -left-10 bg-white dark:bg-sky-100 p-2 rounded-full shadow-lg animate-[bounce_4s_infinite] delay-300">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-8 h-8" alt="CSS3" />
            </div>

            {/* 5. Bottom Right: ROS */}
            <div className="absolute bottom-20 -right-6 bg-white dark:bg-sky-100 p-2 rounded-full shadow-lg animate-pulse delay-500">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ros/ros-original.svg" className="w-8 h-8" alt="ROS 2" />
            </div>

            {/* 6. Bottom Center: C (Shifted slightly right to avoid Experience card) */}
            <div className="absolute -bottom-10 left-1/2 bg-white dark:bg-sky-100 p-2 rounded-full shadow-lg animate-[bounce_3.5s_infinite] delay-700">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" className="w-8 h-8" alt="C" />
            </div>

          </div>
        </div>

      </div>
    </header>
  );
};

export default Hero;