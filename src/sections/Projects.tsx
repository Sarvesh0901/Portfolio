import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Folder, ExternalLink, Github } from 'lucide-react';
import { api, type Project } from '@/lib/api';

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.getProjects();
        setProjects(response.projects);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-slate-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-1/3 h-1/2 bg-gradient-to-l from-cyan-500/5 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-1/4 h-1/3 bg-gradient-to-r from-blue-500/5 to-transparent" />
        
        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-40 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -10, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-40 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-4">
            <Folder className="w-4 h-4" />
            Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills and expertise.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {loading ? (
            <div className="text-center text-slate-400 py-12">Loading projects...</div>
          ) : (
            projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative"
            >
              <div className="glass-card overflow-hidden h-full hover:shadow-xl hover:shadow-cyan-400/10 transition-all duration-300">
                {/* Project Header with Icon */}
                <div className={`relative h-32 sm:h-40 bg-gradient-to-br ${project.color} p-6 flex items-center justify-center overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }} />
                  </div>
                  
                  {/* Animated Background */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
                  />
                  
                  {/* Project Icon */}
                  <span className="relative text-6xl sm:text-7xl filter drop-shadow-lg">
                    {project.icon || '📁'}
                  </span>

                  {/* Link Overlay */}
                  <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1.1 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1.1 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-cyan-400 transition-colors"
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700 group-hover:border-cyan-400/30 group-hover:text-cyan-400 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            ))
          )}
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-4">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/alexmorgan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 border border-slate-700 text-white font-medium rounded-xl hover:bg-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
