import {
  Github,
  Linkedin,
  Mail,
  Dribbble,
  Code2,
  Server,
  Wrench,
  Users,
  type LucideIcon,
} from 'lucide-react';

export interface SocialLink {
  icon: LucideIcon;
  url: string;
  label: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  icon: LucideIcon;
  color: string;
  items: string[];
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  icon: string;
  color: string;
}

export interface Proficiency {
  name: string;
  percentage: number;
  color: string;
}

export const portfolioData = {
  personal: {
    name: 'Sarvesh Yadav',
    initials: 'SY',
    title: 'Full Stack & Next.js Developer',
    bio: 'Full Stack and Next.js developer with hands-on experience building scalable web applications in production environments. Skilled in developing responsive user interfaces using Next.js and Ant Design (AntD), integrating REST APIs, and optimizing performance for seamless user experiences. Experienced in collaborative development workflows, Git-based version control, and delivering reliable, user-focused solutions.',
    email: 'sarvesh843910@gmail.com',
    phone: '+91-8439101163',
    location: 'Bengaluru, India',
    tagline: 'Building scalable web applications with modern technologies.',
  },

  socialLinks: [
    { icon: Github, url: 'https://github.com/sarvesh843910', label: 'GitHub' },
    { icon: Linkedin, url: 'https://in.linkedin.com/in/sarvesh-yadav-96ab90258', label: 'LinkedIn' },
    { icon: Dribbble, url: 'https://dribbble.com/sarvesh843910', label: 'Dribbble' },
    { icon: Mail, url: 'mailto:sarvesh843910@gmail.com', label: 'Email' },
  ] as SocialLink[],

  proficiencies: [
    { name: 'Frontend Development', percentage: 90, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Next.js & React', percentage: 85, color: 'from-blue-400 to-blue-600' },
    { name: 'React Native', percentage: 75, color: 'from-purple-400 to-purple-600' },
    { name: 'API Integration', percentage: 80, color: 'from-pink-400 to-pink-600' },
  ] as Proficiency[],

  skillCategories: [
    {
      category: 'Frontend',
      icon: Code2,
      color: 'cyan',
      items: [
        'JavaScript',
        'Next.js',
        'React.js',
        'React Native',
        'HTML5 & CSS3',
        'Ant Design (AntD)',
        'Responsive Design',
        'UI/UX Development',
      ],
    },
    {
      category: 'Backend & Database',
      icon: Server,
      color: 'blue',
      items: [
        'RESTful APIs',
        'SQL',
        'Firebase',
        'Firestore',
        'API Integration',
        'Server-side Rendering',
        'Dynamic Routing',
        'Real-time Data',
      ],
    },
    {
      category: 'Tools & DevOps',
      icon: Wrench,
      color: 'purple',
      items: [
        'Git & GitHub',
        'GitHub Actions',
        'VS Code',
        'Version Control',
        'Code Reviews',
        'CI/CD',
        'Production Deployment',
        'Collaborative Development',
      ],
    },
    {
      category: 'Soft Skills',
      icon: Users,
      color: 'pink',
      items: [
        'Problem Solving',
        'Team Collaboration',
        'Cross-functional Communication',
        'Code Review',
        'Performance Optimization',
        'User-focused Solutions',
        'Adaptability',
        'Continuous Learning',
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      title: 'Next.js Developer',
      company: 'Adeptek Solutions',
      duration: 'Oct 2025 – Present',
      description:
        'Working as a Next.js Developer at Adeptek Solutions in Bengaluru, building scalable web applications with modern frontend technologies.',
      achievements: [
        'Developed reusable and scalable UI components using Next.js and Ant Design (AntD)',
        'Built and maintained web applications using Next.js with server-side rendering and optimized routing',
        'Implemented responsive dashboards and feature modules aligned with product requirements',
        'Integrated RESTful APIs to enable dynamic frontend workflows and real-time data updates',
        'Improved application performance, layout consistency, and cross-device compatibility',
        'Fixed UI issues, optimized component rendering, and ensured production-ready deployments',
        'Collaborated with cross-functional teams through code reviews and Git/GitHub-based version control',
      ],
    },
    {
      title: 'Full Stack & React Native Developer (Intern)',
      company: 'Adeptek Solutions',
      duration: 'July 2025 – Sept 2025',
      description:
        'Interned as a Full Stack & React Native Developer, gaining hands-on experience with production workflows and collaborative development.',
      achievements: [
        'Supported frontend development tasks using React, React Native, and Next.js under senior developer guidance',
        'Assisted in implementing UI screens using Ant Design (AntD) and integrating APIs for internal product features',
        'Gained hands-on experience with production workflows, Git-based version control, and collaborative development',
        'Contributed to Aurali — AI Conversational System using React Native, Firebase, Gemini, and Embeddings',
        'Built and refined conversational UI screens using React Native with focus on usability and performance',
        'Implemented frontend logic for chat interactions, message rendering, and state management',
        'Supported implementation of real-time voice-to-text functionality for seamless message input',
      ],
    },
  ] as Experience[],

  projects: [
    {
      title: 'Aurali — AI Conversational System',
      description:
        'An AI-powered conversational system built with React Native featuring real-time voice-to-text, chat interactions, and AI-driven workflows using Gemini and embeddings.',
      tech: ['React Native', 'Firebase', 'Gemini', 'Embeddings', 'Real-time Audio'],
      link: 'https://github.com/sarvesh843910',
      icon: '🤖',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      title: 'Responsive Dashboard Application',
      description:
        'A modern dashboard built with Next.js and Ant Design featuring responsive layouts, data visualization, and real-time updates through RESTful API integration.',
      tech: ['Next.js', 'Ant Design', 'REST API', 'TypeScript'],
      link: 'https://github.com/sarvesh843910',
      icon: '📊',
      color: 'from-green-400 to-emerald-500',
    },
    {
      title: 'E-Commerce Web Application',
      description:
        'Full-stack e-commerce platform with product catalog, shopping cart, and checkout functionality built with Next.js and Firebase.',
      tech: ['Next.js', 'Firebase', 'Firestore', 'CSS'],
      link: 'https://github.com/sarvesh843910',
      icon: '🛒',
      color: 'from-purple-400 to-pink-500',
    },
    {
      title: 'Portfolio Website',
      description:
        'Modern portfolio website showcasing projects and skills with smooth animations, responsive design, and interactive elements.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://github.com/sarvesh843910',
      icon: '💼',
      color: 'from-orange-400 to-red-500',
    },
  ] as Project[],
};

export const navLinks = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' },
];
