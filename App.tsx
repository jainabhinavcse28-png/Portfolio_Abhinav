import { motion } from 'motion/react';

const skills = [
  { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'] },
  { name: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'GraphQL', 'WebSockets'] },
  { name: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'Vite', 'CI/CD'] },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-semibold text-emerald-500 uppercase tracking-[0.3em] mb-4">Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">TECHNICAL <br /> PROFICIENCY</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Constantly evolving and staying at the forefront of modern web technologies 
               to deliver scalable and maintainable solutions.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((category, i) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-zinc-900 bg-zinc-950/30 hover:border-emerald-500/30 transition-colors group"
              >
                <h4 className="text-lg font-bold mb-6 group-hover:text-emerald-500 transition-colors">{category.name}</h4>
                <ul className="space-y-4">
                  {category.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-zinc-400 text-sm">
                      <div className="w-1 h-1 rounded-full bg-emerald-500" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
