import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { motion } from 'framer-motion';

const Hero = () => {
  const roles = ["Avionics Aspirant", "Web Developer", "Product Designer"];
  const typedRole = useTypewriter(roles);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-2 text-center lg:text-left"
        >

          <motion.div variants={itemVariants} className={`
                        inline-block px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full
                        dark:bg-sky-600/50 dark:text-slate-200 dark:border dark:border-blue-400
                        text-xs w-fit mx-auto lg:mx-0 shadow-sm
                  `}
          >
            🚀 Avionics Engineering Student & Developer
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-slate-800 leading-tight dark:text-sky-600">
            Hi! This is <span className="bg-gradient-to-r from-rose-600 to-fuchsia-700 bg-clip-text text-transparent dark:from-rose-400 dark:to-fuchsia-400">Rezwan.</span> <br />
          </motion.h1>

          <motion.h2 variants={itemVariants} className="leading-relaxed">
            <span className=" text-xl md:text-2xl lg:text-4xl font-extrabold leading-tight gap-2 text-slate-800 dark:text-sky-200">
              I am a{' '}
              <span className="ml-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 dark:from-cyan-400">
                {typedRole}
              </span>
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed dark:text-gray-400 mt-4 text-justify lg:text-left">
            I am an aspiring Avionics Software Specialist dedicated to the intersection of aerospace engineering and high-performance computing. I focus on building complex web applications and engineering efficient algorithms to solve real-world technical challenges.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start mt-2">
            <motion.button
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-slate-300 hover:border-slate-800 hover:bg-slate-800 hover:text-white text-slate-700 font-bold rounded-lg transition-all dark:border-gray-400 dark:hover:border-gray-200 dark:text-slate-400 dark:hover:bg-slate-300 dark:hover:text-gray-900"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* --- Right Column: Photo & Graphics --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center items-center group"
        >

          {/* Code Brackets Decoration */}
          <motion.span
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className={`
                          absolute -left-6 top-5 md:-left-4 md:top-10 
                          text-8xl md:text-9xl text-blue-200 md:text-blue-100 dark:text-sky-900 font-mono font-bold 
                          select-none -z-10
            `}>
            {`<`}
          </motion.span>
          <motion.span
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            className={`
                            absolute -right-6 bottom-0 md:-right-4 md:bottom-10 
                            text-8xl md:text-9xl text-blue-300 dark:text-sky-800 md:dark:text-gray-800 font-mono font-bold 
                            select-none -z-10
            `}>
            {`/>`}
          </motion.span>

          {/* Image Wrapper */}
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <img
              src="/assets/rezwan_formal.jpg"
              alt="Developer"
              className="w-full h-full object-cover border-4 border-white shadow-2xl transition-all duration-500 ease-in-out
                         rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] 
                         group-hover:rounded-[50%]"
            />

            {/* Floating Experience Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3"
            >
              <div className="bg-blue-100 p-2 rounded-lg text-2xl">
                💻
              </div>
              <div>
                <p className="font-bold text-slate-800">2+ Years</p>
                <p className="text-xs text-slate-500">Experience</p>
              </div>
            </motion.div>

            {/* --- SPREAD OUT TECH ICONS --- */}

            {/* 1. Top Left: React */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 bg-white dark:bg-sky-100 p-2 rounded-full shadow-lg"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-8 h-8" alt="React" />
            </motion.div>

            {/* 2. Top Right: C++ */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.1 }}
              className="absolute -top-6 right-10 bg-white dark:bg-sky-100 p-2 rounded-full shadow-lg"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" className="w-8 h-8" alt="C++" />
            </motion.div>

            {/* 3. Mid Right: JavaScript */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.2 }}
              className="absolute top-20 -right-10 bg-white dark:bg-sky-100  p-2 rounded-full shadow-lg"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-8 h-8" alt="JavaScript" />
            </motion.div>

            {/* 4. Mid Left: CSS3 */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.3 }}
              className="absolute top-32 -left-10 bg-white dark:bg-sky-100 p-2 rounded-full shadow-lg"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-8 h-8" alt="CSS3" />
            </motion.div>

            {/* 5. Bottom Right: ROS */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-20 -right-6 bg-white dark:bg-sky-100 p-2 rounded-full shadow-lg"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ros/ros-original.svg" className="w-8 h-8" alt="ROS 2" />
            </motion.div>

            {/* 6. Bottom Center: C (Shifted slightly right to avoid Experience card) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.7 }}
              className="absolute -bottom-10 left-1/2 bg-white dark:bg-sky-100 p-2 rounded-full shadow-lg"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" className="w-8 h-8" alt="C" />
            </motion.div>

          </div>
        </motion.div>

      </div>
    </header>
  );
};

export default Hero;