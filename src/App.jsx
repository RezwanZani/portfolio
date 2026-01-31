import Header from './components/Header';
import useTheme from './hooks/useTheme';

function App() {
  useTheme(); // Initialize theme from localStorage

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
          Portfolio Setup Complete
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          Vite + React + Tailwind + Dark Mode
        </p>
      </div>
    </>
  );
}

export default App;