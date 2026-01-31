import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center gap-4 transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
        Portfolio Setup Complete
      </h1>
      <p className="text-gray-700 dark:text-gray-300">
        Vite + React + Tailwind + Dark Mode
      </p>
      <button
        onClick={toggleTheme}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
      >
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default App;