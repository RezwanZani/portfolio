

import { motion } from 'framer-motion';

export default function About() {
    const affiliations = [
        {
            name: "AAUB Rover-71",
            role: "Core Software Team Member",
            duration: "2023 - Present",
            logo: "/assets/rover71.png"
        },
        {
            name: "AAUB AI & Robotics Club",
            role: "Software Team Member",
            duration: "2021 - Present",
            logo: "/assets/aairc.png"
        },
        {
            name: "Freelance",
            role: "Frontend Developer",
            duration: "2022 - Present",
            logo: "/assets/freelance.png"
        }
    ];

    return (
        <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden place-items-center justify-center transition-colors duration-300">
            <div className="container mx-auto max-w-[1400px] xl:max-w-[1200px] 2xl:max-w-[1280px]">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text py-2 text-transparent">
                        About Me
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
                        Discover more about my journey, skills, and what drives me.
                    </p>
                </motion.div>

                {/* Personal Info Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-start justify-center text-slate-600 dark:text-slate-300 text-lg mb-12 md:mb-0">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center justify-center w-full p-4 dark:bg-gray-800 bg-slate-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300  border border-gray-200 dark:border-gray-700 dark:border"
                    >
                        <img
                            src="/assets/rezwan.jpg"
                            alt="Rezwan Zani"
                            className={`
                                 rounded-xl object-cover m-4
                                md:w-max-w-64 md:h-max-w-64
                                `}
                        />
                        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">Md. Rezwan Zani</h2>
                        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mt-6 text-justify">
                            I am an Avionics Engineering student who bridges the gap between hardware laws and software logic. Currently a core member of the Rover-71 software team and a Frontend developer specializing in React, Next.js, and C++. I don't just write code; I engineer reliable systems.
                        </p>
                    </motion.div>


                    {/* Affiliations Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center justify-between w-full"
                    >
                        <h3 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">Affiliations</h3>
                        <div className="flex flex-col gap-4 p-4 w-full">

                            {/* University */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-slate-50 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300  border border-gray-200 dark:border-gray-700 dark:border`}
                            >

                                <img src="/assets/aaub.png"
                                    alt="AAUB"
                                    className="relative top-1/2 -translate-y-1/2 border-4 border-gray-900 w-25 h-25 rounded-full object-cover"
                                />
                                <div className="w-full  -mt-8">
                                    <span className="text-xl md:text-2xl font-semibold text-center w-full text-blue-900 dark:text-sky-400 break-words"> Aviation and Aerospace University, Bangladesh </span>
                                    <span className="text-lg text-left text-gray-500 dark:text-gray-400 block"> B.Sc. in Avionics Engineering (Level 2) </span>
                                    <span className="text-lg text-left text-gray-500 dark:text-gray-400 block"> Session: 2023-24 </span>
                                    <span className="text-lg text-left text-gray-500 dark:text-gray-400 block"> Expected Graduation: 2028 </span>
                                </div>
                            </motion.div>

                            {/* Affiliation */}
                            {affiliations.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className={`flex items-start gap-2 p-4 rounded-lg bg-slate-50 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 dark:border`}
                                >
                                    <div className="relative inset-0 my-auto">
                                        <img src={item.logo}
                                            alt={item.name}
                                            className="p-1 w-15 h-15 rounded-full object-cover"
                                        />
                                    </div>

                                    <div className="flex-shrink-0">
                                        <span className="text-xl md:text-2xl font-semibold  text-gray-900 dark:text-gray-100"> {item.name} </span>
                                        <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 block"> {item.role} </span>
                                        <span className="text-sm md:text-base text-gray-500 dark:text-gray-400 block"> {item.duration} </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}