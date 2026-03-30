import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Experience } from '@/sections/Experience';
import { Projects } from '@/sections/Projects';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
