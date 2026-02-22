import { motion } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full" />

      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-semibold uppercase tracking-widest mb-6">
            Available for new projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8"
        >
          CRAFTING <br />
          <span className="text-gradient">DIGITAL</span> <br />
          EXPERIENCES
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row md:items-end gap-8"
        >
          <p className="text-lg md:text-xl text-zinc-400 max-w-md leading-relaxed">
            I'm a full-stack engineer and designer focused on building high-performance, 
            visually stunning web applications that push the boundaries of the digital world.
          </p>
          
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-emerald-500 hover:text-white transition-colors"
          >
            View Work <ArrowDownRight size={18} />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-500 to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Scroll</span>
      </motion.div>
    </section>
  );
}
