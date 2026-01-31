import { useState, useEffect} from "react";

export default function useTheme(){
    const [darkMode, setDarkMode] = useState(() => {
        try {
            const stored = localStorage.getItem("darkMode");
            return stored ? JSON.parse(stored) : false;
        } catch (error) {
            console.error("Failed to parse theme preference:", error);
            return false;
        }
    });

    useEffect(() => {
        try {
            const root = window.document.documentElement;
            if (darkMode) {
                root.classList.remove("light");
                root.classList.add("dark");
            } else {
                root.classList.remove("dark");
                root.classList.add("light");
            }
            localStorage.setItem("darkMode", JSON.stringify(darkMode));
        } catch (error) {
            console.error("Failed to update theme:", error);
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode((prev) => !prev);
    };

    return { darkMode, toggleTheme };
}