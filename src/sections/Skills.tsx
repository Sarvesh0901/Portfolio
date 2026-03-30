import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Code, Database, Palette, Server, type LucideIcon } from 'lucide-react';
import { api, type Skill } from '@/lib/api';

const iconMap: Record<string, LucideIcon> = {
  Code,
  Database,
  Palette,
  Server,
  Zap,
};

const colorMap: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  cyan: {
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/30',
    text: 'text-cyan-400',
    glow: 'shadow-cyan-400/20',
  },
  blue: {
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/30',
    text: 'text-blue-400',
    glow: 'shadow-blue-400/20',
  },
  purple: {
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/30',
    text: 'text-purple-400',
    glow: 'shadow-purple-400/20',
  },
  pink: {
    bg: 'bg-pink-400/10',
    border: 'border-pink-400/30',
    text: 'text-pink-400',
    glow: 'shadow-pink-400/20',
  },
};

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await api.getSkills();
        setSkills(response.skills);
      } catch (error) {
        console.error('Failed to fetch skills:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
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
      id="skills"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-slate-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-gradient-to-r from-cyan-500/5 to-transparent" />
        <div className="absolute bottom-1/4 right-0 w-1/3 h-1/2 bg-gradient-to-l from-blue-500/5 to-transparent" />
        
        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"
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
            <Zap className="w-4 h-4" />
            My Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit I've built over years of professional development experience.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {loading ? (
            <div className="text-center text-slate-400 py-12">Loading skills...</div>
          ) : (
            skills.map((category) => {
            const colors = colorMap[category.color];

            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className={`glass-card p-6 group hover:shadow-xl ${colors.glow} transition-all duration-300`}
              >
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {(() => {
                      const IconComponent = iconMap[category.icon] || Zap;
                      return <IconComponent className={`w-6 h-6 ${colors.text}`} />;
                    })()}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-3">
                  {category.items.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + skillIndex * 0.05 }}
                      className="flex items-center gap-2 text-slate-300 group/item"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.bg.replace('/10', '')} group-hover/item:scale-150 transition-transform`} />
                      <span className="text-sm group-hover/item:text-white transition-colors">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
            })
          )}
        </motion.div>

        {/* Tech Stack Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-6">Technologies I work with daily</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker',
              'PostgreSQL', 'GraphQL', 'Tailwind', 'Git', 'CI/CD', 'Kubernetes'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
