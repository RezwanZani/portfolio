import useTheme from "../hooks/useTheme";
import { Phone, Sun, Moon } from "lucide-react"

const navItems = [
    {
        name: "Home",
        url: "#",
        icon: ""
    },
    {
        name: "Projects",
        url: "#",
        icon: ""
    },
    {
        name: "Service",
        url: "#",
        icon: ""
    },
    {
        name: "Education",
        url: "#",
        icon: ""
    },
]

function Header() {
    const { darkMode, toggleTheme } = useTheme();
    
    return(
        <>
        <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 md:py-4 shadow-lg rounded-full bg-white/80 backdrop-blur-md border border-gray-200 max-w-5xl w-[calc(100%-2rem)] dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/50">
            <a href="#" className="flex items-center space-x-2">
                <span className="bg-gradient-to-r from-rose-600 to-yellow-600 bg-clip-text text-transparent text-2xl font-bold">Rezwan Zani</span>
            </a>
            <nav id="menu" className="max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center max-md:h-full max-md:w-0 transition-[width] bg-white/50 backdrop-blur flex-col md:flex-row flex gap-8 text-gray-900 text-sm font-bold dark:bg-gray-800 dark:text-gray-300 rounded-full md:px-0 px-6 py-6 md:py-0 md:static">
                {navItems.map((item) => { 
                    return(
                        <a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200" href={item.url} key={item.name}>
                            {item.name}
                        </a>
                )})}
                
                <button id="closeMenu" className="md:hidden text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </nav>
            <div className="flex items-center space-x-4">
                <button
                    onClick={toggleTheme}
                    aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
                    type="button"
                >
                    {darkMode 
                        ? <Moon className="h-8 w-8 p-1.5 rounded-full hover:bg-indigo-300 dark:hover:bg-indigo-800 text-indigo-800 dark:text-indigo-200 transition-colors duration-300" /> 
                        : <Sun className="h-8 w-8 p-1.5 rounded-full hover:bg-amber-300 dark:hover:bg-amber-800 text-amber-600 dark:text-amber-200 transition-colors duration-300" />
                    }
                </button>
                <a className="hidden md:flex bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-200" href="#">
                    Contact
                </a>
                <button id="openMenu" className="md:hidden text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    </>
    )
}

export default Header;