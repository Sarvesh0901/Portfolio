import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { useSmoothScroll } from '@/hooks/useScrollAnimation';

export function Footer() {
  const scrollToSection = useSmoothScroll();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: 'home' },
    { label: 'About', href: 'about' },
    { label: 'Skills', href: 'skills' },
    { label: 'Experience', href: 'experience' },
    { label: 'Projects', href: 'projects' },
    { label: 'Contact', href: 'contact' },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/2 bg-gradient-to-t from-cyan-500/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-slate-900 font-bold">
                    {portfolioData.personal.initials}
                  </div>
                  <span className="text-white font-semibold text-lg">
                    {portfolioData.personal.name}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {portfolioData.personal.tagline}
                </p>
                <div className="flex gap-3">
                  {portfolioData.socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {footerLinks.map((link) => (
                    <li key={link.href}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {portfolioData.personal.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${portfolioData.personal.phone}`}
                      className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {portfolioData.personal.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-slate-400 text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {portfolioData.personal.location}
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-500 text-sm flex items-center gap-1"
            >
              © {currentYear} {portfolioData.personal.name}. Made with{' '}
              <Heart className="w-4 h-4 text-red-400 fill-red-400" /> using React & Tailwind
            </motion.p>

            {/* Back to Top */}
            <motion.button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to top
              <span className="p-1.5 rounded-lg bg-slate-800 group-hover:bg-cyan-400/10 transition-colors">
                <ArrowUp className="w-4 h-4" />
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
