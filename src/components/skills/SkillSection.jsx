import SkillCard from './SkillCard';
import { skillsData } from '../../data/skillsData';
import React from 'react';
import { motion } from 'framer-motion';

function SkillSection() {

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  // Animation variants for items
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

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
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-2 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text py-2 leading-tight text-transparent drop-shadow-lg"
        >
          My Skills
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 font-light tracking-wide"
        >
          Technologies & Tools
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-row flex-wrap gap-4 justify-center"
        >
          {skillsData.map((data) => (
            <motion.div
              key={data.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.67rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(20%-0.8rem)] shrink-0 aspect-square"
            >
              <SkillCard
                name={data.name}
                icon={data.icon}
                progress={data.progress}
                color={data.color}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
export default SkillSection;