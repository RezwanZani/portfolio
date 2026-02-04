import SkillCard from './SkillCard';
import { skillsData } from '../../data/skillsData';
import React from 'react';

function SkillSection() {
    
    return (
      <section id="skills" className="relative min-h-screen py-16 md:px-10 overflow-hidden">
        {/* Light Mode Ambient Glow Backgrounds */}
         {/* <
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 light:opacity-20 dark:opacity-0 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 light:opacity-20 dark:opacity-0 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 light:opacity-20 dark:opacity-0 animate-pulse" style={{ animationDelay: '4s' }}></div>

        {/* Dark Mode Ambient Glow Backgrounds */}
        {/*
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-0 light:opacity-0 dark:opacity-15 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-0 light:opacity-0 dark:opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-0 light:opacity-0 dark:opacity-15 animate-pulse" style={{ animationDelay: '4s' }}></div> */}

        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-6 py-12 md:w-[95%] lg:w-[max(1000px)]">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text py-2 leading-tight text-transparent drop-shadow-lg">
              My Skills
            </h1>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 font-light tracking-wide">
              Technologies & Tools
            </p>
            
            <div className="flex flex-row flex-wrap gap-4 justify-center">
              {skillsData.map((data) => (
                <div key={data.name} className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.67rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(20%-0.8rem)] shrink-0 aspect-square">
                  <SkillCard 
                    name={data.name}
                    icon={data.icon} 
                    progress={data.progress}
                    color={data.color}
                  />
                </div>
              ))}
            </div>
        </div>
      </section>
    )
}

export default SkillSection;