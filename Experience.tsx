import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative selection:bg-emerald-500 selection:text-black"
      >
        <CustomCursor />
        <Navbar />
        
        <main>
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>

        {/* Subtle background noise/texture */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </motion.div>
    </AnimatePresence>
  );
}
