import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCalendar, FiRadio, FiMic, FiCloud } from 'react-icons/fi';
import { PROJECTS } from '../../data';
import type { Project } from '../../types';
import { SectionHeader } from '../ui/SectionHeader';

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            className='group glass gradient-border rounded-2xl overflow-hidden flex flex-col'
        >
            {/* Project Image / Visual */}
            <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                <div className='absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]' />

                {/* Abstract illustration */}
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='relative'>
                        <div className='w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center'>
                            {project.id === 'xlotter' && (
                                <FiCalendar size={32} className='text-white' />
                            )}
                            {project.id === 'igather' && (
                                <FiRadio size={32} className='text-white' />
                            )}
                            {project.id === 'hospital-ai-bot' && (
                                <FiMic size={32} className='text-white' />
                            )}
                            {/* {project.id === 'nodejs-learning' && <FiServer   size={32} className="text-white" />} */}
                            {project.id === 'weather-app' && (
                                <FiCloud size={32} className='text-white' />
                            )}
                        </div>
                        {/* <div className="absolute -top-3 -right-3 w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-sm">
              {project.id === 'xlotter' ? '🏆' : project.id === 'iGather' ? '💬' : '📍'}
            </div> */}
                    </div>
                </div>

                {/* Hover overlay */}
                {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <FiGithub size={20} />
          </motion.a>
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <FiExternalLink size={20} />
          </motion.a>
        </div> */}

                {project.featured && (
                    <div className='absolute top-3 left-3 px-2.5 py-1 bg-brand-500/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-brand-400/30'>
                        ✦ Featured
                    </div>
                )}
            </div>

            {/* Content */}
            <div className='p-6 flex flex-col flex-1'>
                <h3 className='text-lg font-bold text-white mb-2'>{project.title}</h3>
                <p className='text-slate-400 text-sm leading-relaxed mb-4 flex-1'>
                    {project.description}
                </p>

                {/* Technologies */}
                <div className='flex flex-wrap gap-1.5 mb-5'>
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className='px-2.5 py-1 text-xs font-mono bg-white/5 text-slate-400 border border-white/10 rounded-full'
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                {/* <div className="flex gap-3">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors font-medium"
          >
            <FiGithub size={14} />
            Code
          </motion.a>
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-accent transition-colors font-medium"
          >
            <FiExternalLink size={14} />
            Live Demo
          </motion.a>
        </div> */}
            </div>
        </motion.div>
    );
}

export function Projects() {
    return (
        <section id='projects' className='section-padding relative overflow-hidden'>
            <div className='absolute inset-0 bg-surface-900' />
            <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent' />
            <div className='absolute left-1/4 top-1/2 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl pointer-events-none' />

            <div className='relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <SectionHeader
                    eyebrow='Projects'
                    title="Things I've"
                    highlight='Built'
                    description='A selection of projects that reflect my approach to problem-solving and product thinking.'
                />

                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {PROJECTS.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>

                {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 glass hover:bg-white/10 border border-white/10 hover:border-brand-500/40 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200"
          >
            <FiGithub size={18} />
            View All on GitHub
          </motion.a>
        </motion.div> */}
            </div>
        </section>
    );
}
