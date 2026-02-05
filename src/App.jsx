import Header from './components/Header';
import Hero from './components/Hero';
import useTheme from './hooks/useTheme';
import SkillSection from './components/skills/SkillSection';
import Services from './components/services/ServicesSection';
import Projects from './components/projects/Projects';
import ParticleBackground from './components/ParticleBackground';
import WorkProcess from './components/WorkProcess';

function App() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <>
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <div className='relative isolate w-full overflow-hidden bg-gradient-to-br from-bg via-blue-50 to-blue-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-300'>
        <ParticleBackground darkMode={darkMode} />
        <Hero />
        <SkillSection />
      </div>

      <Services />
      <WorkProcess />

      <Projects />
      
      {/* Footer would go here */}
    </>
  );
}

export default App;
