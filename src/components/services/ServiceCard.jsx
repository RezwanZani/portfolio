import { useState, useRef } from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ title, description, icon: IconComponent, color }) => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const divRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4 }
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ y: -8 }}
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className="relative w-full max-w-[20rem] aspect-square rounded-xl sm:rounded-2xl p-0.5 bg-sky-100 dark:bg-gray-800 backdrop-blur-md text-gray-800 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
            {visible && (
                <div
                    className="pointer-events-none blur-2xl sm:blur-3xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 absolute z-0 transition-opacity duration-300"
                    style={{
                        top: position.y - 80,
                        left: position.x - 80,
                    }}
                />
            )}

            <div className="relative z-10 bg-sky-100 dark:bg-gray-800 p-4 sm:p-6 md:p-8 h-full w-full rounded-xl sm:rounded-2xl flex flex-col items-center justify-center text-center">
                <IconComponent className={`w-14 h-14 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-3 sm:mb-4 ${color}`} />
                <h2 className={`text-2xl sm:text-2xl md:text-2xl font-bold text-gray-800 dark:text-sky-500 mb-1 sm:mb-2`}>
                    {title}
                </h2>
                <p className="text-sm sm:text-sm md:text-base text-gray-500 dark:text-gray-400 px-2 sm:px-4">
                    {description}
                </p>
            </div>

        </motion.div>
    );
};

export default ServiceCard;