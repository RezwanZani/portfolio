import useTheme from "../hooks/useTheme";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
  { name: "Home", url: "#" },
  { name: "Projects", url: "#" },
  { name: "Service", url: "#" },
  { name: "Education", url: "#" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      {/* PARENT CONTAINER (The "Island") 
         1. Flex-col: Stacks the "Top Bar" and "Mobile Menu" vertically.
         2. Overflow-hidden: Ensures the menu doesn't spill out when closed.
      */}
      <nav
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
              <a
                key={item.name}
                href={item.url}
                className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? (
                <Moon className="w-5 h-5 text-indigo-400" />
              ) : (
                <Sun className="w-5 h-5 text-amber-500" />
              )}
            </button>

            <a
              href="#"
              className="hidden md:block bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Contact
            </a>

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
        <div
          className={`
            md:hidden flex flex-col items-center gap-4
            transition-[max-height, opacity, padding] duration-300 ease-in-out
            ${isOpen ? "max-h-64 opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"}
          `}
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
        </div>
      </nav>
    </header>
  );
}

export default Header;