import { Github, ExternalLink, Code2 } from 'lucide-react';
import projects from '../../data/projects';

const Projects = () => {

  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-10 overflow-hidden relative">
      <div className="container mx-auto px-4">

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

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-2 sm:mb-3 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text py-2 leading-tight text-transparent drop-shadow-lg">
            Feaured Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
            A selection of my work in Web Development and Softwares.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-gradient-to-r from-slate-100 to-slate-300 via-slate-200 dark:bg-gradient-to-br dark:from-slate-700 dark:via-slate-800 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700/50 overflow-hidden hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/20 hover:border-primary/50 dark:hover:border-primary/60 transition-all duration-300 flex flex-col"
            >
              
              {/* Image Window */}
              <div className="relative h-48 rounded-xl p-2 overflow-hidden">
                {/* Overlay - visible on mobile, hover on desktop */}
                <div className="absolute inset-0 md:bg-slate-900/50 dark:md:bg-slate-950/60 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center md:justify-center gap-4 z-10">
                  <div className="absolute bottom-5 right-5 md:static flex gap-4">
                    <a href={project.github} className="p-2 bg-white dark:bg-slate-200 rounded-full text-slate-900 hover:bg-primary hover:text-white dark:hover:text-white transition-all duration-200 shadow-lg" title="View Code">
                      <Github size={20} />
                    </a>
                    {project.live && (
                      <a href={project.live} className="p-2 bg-white dark:bg-slate-200 rounded-full text-slate-900 hover:bg-primary hover:text-white dark:hover:text-white transition-all duration-200 shadow-lg" title="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                {/* The Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full rounded-xl group-hover:rounded-none object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-2 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 backdrop-blur-sm text-xs font-medium text-white rounded">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 text-xs font-medium bg-sky-600 dark:bg-slate-800 text-slate-100 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-md hover:border-primary dark:hover:border-cyan-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Mobile "View All" Button */}
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/RezwanZani" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-200 dark:bg-slate-800 border border-slate-700 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 font-medium hover:border-primary dark:hover:border-cyan-500 dark:hover:shadow-lg dark:hover:shadow-cyan-500/20 transition-all duration-200"
          >
            <Github size={18} /> View Detailed Github
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;