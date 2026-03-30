import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Mail, Phone, User } from 'lucide-react';
import { api, type PersonalInfo } from '@/lib/api';

interface ProgressBarProps {
  name: string;
  percentage: number;
  color: string;
  delay: number;
  isVisible: boolean;
}

function ProgressBar({ name, percentage, color, delay, isVisible }: ProgressBarProps) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 1500;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCurrentValue(Math.floor(percentage * easeOut));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, percentage, delay]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 font-medium">{name}</span>
        <span className="text-cyan-400 font-semibold">{currentValue}%</span>
      </div>
      <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${percentage}%` : 0 }}
          transition={{ duration: 1.5, delay: delay / 1000, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPersonalInfo = async () => {
      try {
        const response = await api.getPersonalInfo();
        setPersonalInfo(response.personalInfo);
      } catch (error) {
        console.error('Failed to fetch personal info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPersonalInfo();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-slate-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-blue-500/5 to-transparent" />
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
            <User className="w-4 h-4" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Let Me <span className="text-gradient">Introduce</span> Myself
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Bio & Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {/* Bio Card */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-6 sm:p-8 hover-lift"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Professional Summary</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                {loading ? 'Loading...' : personalInfo?.bio || 'Full Stack and Next.js developer with hands-on experience building scalable web applications.'}
              </p>
              <p className="text-slate-400 leading-relaxed">
                I specialize in building modern, scalable web applications using cutting-edge technologies. 
                My expertise spans the entire development lifecycle, from initial architecture design to 
                deployment and maintenance. I'm passionate about clean code, performance optimization, and 
                creating exceptional user experiences.
              </p>
            </motion.div>

            {/* Contact Info Card */}
            <motion.div variants={itemVariants} className="glass-card p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="text-slate-200">{loading ? 'Loading...' : personalInfo?.location || 'Bengaluru, India'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-400/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <a
                      href={`mailto:${personalInfo?.email}`}
                      className="text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                      {loading ? 'Loading...' : personalInfo?.email || 'email@example.com'}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-400/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <a
                      href={`tel:${personalInfo?.phone}`}
                      className="text-slate-200 hover:text-cyan-400 transition-colors"
                    >
                      {loading ? 'Loading...' : personalInfo?.phone || '+91-XXXXXXXXXX'}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skill Proficiencies */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="glass-card p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white mb-2">Skill Proficiencies</h3>
              <p className="text-slate-400 mb-8">
                My expertise across different domains of software development.
              </p>

              <div className="space-y-6">
                {[
                  { name: 'Frontend Development', percentage: 90, color: 'from-cyan-400 to-cyan-600' },
                  { name: 'Next.js & React', percentage: 85, color: 'from-blue-400 to-blue-600' },
                  { name: 'React Native', percentage: 75, color: 'from-purple-400 to-purple-600' },
                  { name: 'API Integration', percentage: 80, color: 'from-pink-400 to-pink-600' },
                ].map((skill, index) => (
                  <ProgressBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    color={skill.color}
                    delay={index * 200}
                    isVisible={isInView}
                  />
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {[
                { value: '8+', label: 'Years Experience' },
                { value: '50+', label: 'Projects Completed' },
                { value: '20+', label: 'Happy Clients' },
                { value: '100%', label: 'Commitment' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="glass-card p-4 text-center hover-lift"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
