import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { api, type Experience } from '@/lib/api';

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await api.getExperience();
        setExperiences(response.experiences);
      } catch (error) {
        console.error('Failed to fetch experience:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperience();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-slate-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-cyan-500/5 to-transparent" />
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/2 bg-gradient-to-t from-blue-500/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-4">
            <Briefcase className="w-4 h-4" />
            Work Experience
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My career path and the valuable experiences I've gained along the way.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500" />

          {/* Experience Items */}
          <div className="space-y-12">
            {loading ? (
              <div className="text-center text-slate-400 py-12">Loading experience...</div>
            ) : (
              experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.2, type: 'spring', stiffness: 200 }}
                  className="absolute left-2 sm:left-6 top-0 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-900 shadow-glow"
                />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card p-6 sm:p-8 group hover:shadow-xl hover:shadow-cyan-400/10 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {experience.title}
                      </h3>
                      <p className="text-lg text-slate-300 mt-1">{experience.company}</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-slate-400">
                      <Calendar className="w-4 h-4" />
                      {experience.duration}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-300 mb-3">Key Achievements:</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + index * 0.2 + achievementIndex * 0.1 }}
                          className="flex items-start gap-2 text-sm text-slate-400"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))
          )}
          </div>
        </motion.div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-4">Want to know more about my experience?</p>
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 border border-slate-700 text-white font-medium rounded-xl hover:bg-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Briefcase className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
