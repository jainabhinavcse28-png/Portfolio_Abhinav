import { motion } from 'motion/react';
import { Mail, Twitter, Linkedin, Github, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-semibold text-emerald-500 uppercase tracking-[0.3em] mb-6">Get in touch</h2>
          <h3 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12">
            LET'S BUILD <br /> SOMETHING <span className="text-gradient italic">GREAT</span>
          </h3>
          
          <a
            href="mailto:hello@elite.dev"
            className="inline-flex items-center gap-4 text-2xl md:text-4xl font-medium hover:text-emerald-500 transition-colors group"
          >
            hello@elite.dev
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={32} />
          </a>
        </motion.div>

        <div className="mt-24 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-500 text-sm">© 2026 Elite Portfolio. All rights reserved.</p>
          
          <div className="flex gap-6">
            {[
              { icon: <Twitter size={20} />, href: '#' },
              { icon: <Linkedin size={20} />, href: '#' },
              { icon: <Github size={20} />, href: '#' },
              { icon: <Mail size={20} />, href: '#' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ y: -5, color: '#10b981' }}
                className="text-zinc-500 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
