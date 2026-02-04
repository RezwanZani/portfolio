import Header from './components/Header';
import Hero from './components/Hero';
import useTheme from './hooks/useTheme';
import SkillSection from './components/skills/SkillSection';
import Services from './components/services/ServicesSection';

function App() {
  useTheme(); 

  return (
    <>
      <Header />
      {/* 'isolate' creates a stacking context so z-index works correctly */}
      <div className="relative isolate w-full overflow-hidden bg-gradient-to-br from-bg via-blue-50 to-blue-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-300">
        
        {/* --- Background Blobs --- */}
        {/* Evenly distributed across the entire viewport with deep pulse effect */}
        
        {/* 1. Top Left - Blue */}
        <div className="absolute top-[-10%] left-[-8%] w-[450px] h-[450px] rounded-full 
          bg-blue-400/20 dark:bg-blue-500/10 blur-[80px] animate-deep-pulse -z-10"></div>

        {/* 2. Top Center - Amber */}
        <div className="absolute top-[-12%] left-[40%] w-[400px] h-[400px] rounded-full 
          bg-amber-300/20 dark:bg-amber-400/10 blur-[80px] animate-deep-pulse -z-10" 
          style={{ animationDelay: '1s' }}></div>

        {/* 3. Top Right - Cyan */}
        <div className="absolute top-[-8%] right-[-10%] w-[500px] h-[500px] rounded-full 
          bg-cyan-500/20 dark:bg-cyan-400/10 blur-[80px] animate-deep-pulse -z-10" 
          style={{ animationDelay: '2s' }}></div>

        {/* 4. Middle Left - Indigo */}
        <div className="absolute top-[45%] left-[-12%] w-[400px] h-[400px] rounded-full 
          bg-indigo-400/20 dark:bg-indigo-500/10 blur-[90px] animate-deep-pulse -z-10" 
          style={{ animationDelay: '3s' }}></div>

        {/* 5. Middle Center - Purple */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full 
          bg-purple-500/20 dark:bg-purple-400/10 blur-[90px] animate-deep-pulse -z-10" 
          style={{ animationDelay: '4s' }}></div>

        {/* 6. Middle Right - Rose */}
        <div className="absolute top-[40%] right-[-10%] w-[420px] h-[420px] rounded-full 
          bg-rose-400/20 dark:bg-rose-500/10 blur-[70px] animate-deep-pulse -z-10" 
          style={{ animationDelay: '5s' }}></div>

        {/* 7. Bottom Left - Pink */}
        <div className="absolute bottom-[-10%] left-[-5%] w-[480px] h-[480px] rounded-full 
          bg-pink-500/20 dark:bg-pink-400/10 blur-[80px] animate-deep-pulse -z-10" 
          style={{ animationDelay: '1.5s' }}></div>

        {/* 8. Bottom Right - Teal */}
        <div className="absolute bottom-[-8%] right-[-8%] w-[400px] h-[400px] rounded-full 
          bg-teal-400/20 dark:bg-teal-500/10 blur-[80px] animate-deep-pulse -z-10" 
          style={{ animationDelay: '2.5s' }}></div>


        <Hero />
        <SkillSection />
      </div>

      <Services />
      
      {/* Footer would go here */}
    </>
  );
}

export default App;
