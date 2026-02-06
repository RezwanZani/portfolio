import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative overflow-hidden bg-slate-200/50 dark:bg-gray-900/80 py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-10">
      {/* Decoration: Faint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container mx-auto max-w-[1400px] xl:max-w-[1200px] 2xl:max-w-[1280px] relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-2">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Rezwan Zani
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md">
              Building reliable systems with clean, focused interfaces.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
          >
            <span>Return to Base</span>
            <span className="p-2 bg-slate-200 dark:bg-gray-800 rounded-lg group-hover:bg-cyan-600 group-hover:text-white dark:group-hover:bg-cyan-500 dark:group-hover:text-slate-900 transition-all">
              <ArrowUp className="w-4 h-4" />
            </span>
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/70 dark:border-slate-700/60 flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <span>
            &copy; {new Date().getFullYear()} <span className="font-semibold text-slate-600 dark:text-slate-300">RezwanZani.me</span>. All systems nominal.
          </span>
          <span className="inline-flex items-center gap-2">
            <Heart className="w-4 h-4 text-rose-500" />
            Engineered with React & Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;