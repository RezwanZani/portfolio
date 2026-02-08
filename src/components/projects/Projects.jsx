import { Github, ExternalLink, Code2 } from 'lucide-react';
import projects from '../../data/projects';
import { motion } from 'framer-motion';

const Projects = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-10 overflow-hidden relative bg-slate-200/50 dark:bg-gray-900/80 transition-colors duration-300">

      {/* Decoration: Faint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container mx-auto max-w-[1400px] xl:max-w-[1200px] 2xl:max-w-[1280px] relative z-10"></div>


      <div className="container mx-auto px-4">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-2 sm:mb-3 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text py-2 leading-tight text-transparent drop-shadow-lg">
            Feaured Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
            A selection of my work in Web Development and Softwares.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
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

            </motion.div>
          ))}
        </motion.div>

        {/* Mobile "View All" Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/RezwanZani"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-200 dark:bg-slate-800 border border-slate-700 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 font-medium hover:border-primary dark:hover:border-cyan-500 dark:hover:shadow-lg dark:hover:shadow-cyan-500/20 transition-all duration-200"
          >
            <Github size={18} /> View Detailed Github
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;