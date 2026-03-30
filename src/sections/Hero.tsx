import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { useSmoothScroll } from '@/hooks/useScrollAnimation';

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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function Hero() {
  const scrollToSection = useSmoothScroll();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute top-20 -left-40 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-blob"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
          className="absolute bottom-20 -right-40 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: '2s' }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2, delay: 0.6, ease: 'easeOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: '4s' }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [-20, -100],
              x: [0, (i % 2 === 0 ? 20 : -20)],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeOut',
            }}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${50 + Math.random() * 50}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Welcome Badge */}
        <motion.div variants={itemVariants} className="mt-20 mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
        >
          Hi, I'm{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 animate-gradient-shift bg-[length:200%_auto]">
            {portfolioData.personal.name}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-medium mb-6"
        >
          {portfolioData.personal.title}
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {portfolioData.personal.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold rounded-xl overflow-hidden transition-all duration-300 shadow-glow hover:shadow-cyan-400/50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">View My Work</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
          {portfolioData.socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}
