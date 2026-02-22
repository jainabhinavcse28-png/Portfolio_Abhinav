import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Lumina Dashboard',
    category: 'SaaS / Analytics',
    image: 'https://picsum.photos/seed/lumina/800/600',
    description: 'A high-performance data visualization platform for enterprise teams.',
    tags: ['React', 'D3.js', 'Tailwind'],
  },
  {
    title: 'Aether Commerce',
    category: 'E-commerce',
    image: 'https://picsum.photos/seed/aether/800/600',
    description: 'Minimalist shopping experience with seamless transitions and 3D previews.',
    tags: ['Next.js', 'Three.js', 'Stripe'],
  },
  {
    title: 'Nexus Social',
    category: 'Social Media',
    image: 'https://picsum.photos/seed/nexus/800/600',
    description: 'Real-time collaborative platform for creative professionals.',
    tags: ['WebSockets', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Vortex Engine',
    category: 'Developer Tool',
    image: 'https://picsum.photos/seed/vortex/800/600',
    description: 'A lightweight rendering engine for interactive web experiences.',
    tags: ['TypeScript', 'WebGL', 'Rust'],
  },
];

export default function Projects() {
  return (
    <section id="work" className="section-padding bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-semibold text-emerald-500 uppercase tracking-[0.3em] mb-4">Selected Work</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">FEATURED PROJECTS</h3>
          </div>
          <p className="text-zinc-500 max-w-xs text-sm">
            A collection of projects where design meets engineering to solve complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div className="flex gap-4">
                    <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
                      <Github size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-2xl font-bold tracking-tight">{project.title}</h4>
                  <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{project.category}</span>
                </div>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-zinc-900 text-zinc-500 border border-zinc-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
