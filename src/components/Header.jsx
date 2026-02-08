import useTheme from "../hooks/useTheme";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", url: "#" },
  { name: "Service", url: "#services" },
  { name: "Projects", url: "#projects" },
  { name: "About", url: "#about" },
  { name: "Contact", url: "#contact" },
];

function Header({ darkMode, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      {/* PARENT CONTAINER (The "Island") 
         1. Flex-col: Stacks the "Top Bar" and "Mobile Menu" vertically.
         2. Overflow-hidden: Ensures the menu doesn't spill out when closed.
      */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className={`
          flex flex-col w-full max-w-5xl
          bg-white/80 dark:bg-gray-800/80 
          backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg
          transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? "rounded-3xl" : "rounded-full"}
        `}
      >
        {/* --- ROW 1: THE TOP BAR (Logo + Buttons) --- */}
        <div className="flex items-center justify-between px-6 py-3 w-full">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-rose-600 to-yellow-600 bg-clip-text text-transparent text-2xl font-bold whitespace-nowrap">
              Rezwan Zani
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.url}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {darkMode ? (
                <Moon className="w-5 h-5 text-indigo-400" />
              ) : (
                <Sun className="w-5 h-5 text-amber-500" />
              )}
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="md:block bg-indigo-600 text-white px-2 py-1 md:px-5 md:py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Hire Me
            </motion.a>

            {/* Mobile Toggle Button */}
            <button
              className="md:hidden p-2 text-gray-600 dark:text-gray-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* --- ROW 2: MOBILE MENU (The Hidden Drawer) --- */}
        {/* NOTE: This div is OUTSIDE the "Top Bar" div above */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden flex flex-col items-center gap-4 overflow-hidden pb-6"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  className="text-gray-700 dark:text-gray-300 font-medium hover:text-indigo-600 dark:hover:text-indigo-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

export default Header;