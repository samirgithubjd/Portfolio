import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiClock } from 'react-icons/fi';
import { EXPERIENCES } from '../../data';
import { SectionHeader } from '../ui/SectionHeader';

export function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-surface-800" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experience"
          title="My Professional"
          highlight="Journey"
          description="Where I've built, shipped, and grown as an engineer."
        />

        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/60 via-brand-500/20 to-transparent" />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.15 + 0.2, type: 'spring' }}
                  className={`absolute left-4 sm:left-6 top-6 w-5 h-5 rounded-full border-2 -translate-x-1/2 flex items-center justify-center ${
                    exp.current
                      ? 'bg-brand-500 border-brand-400 shadow-lg shadow-brand-500/40'
                      : 'bg-surface-800 border-slate-600'
                  }`}
                >
                  {exp.current && (
                    <motion.div
                      animate={{ scale: [1, 1.8, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-white/60"
                    />
                  )}
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="glass gradient-border rounded-2xl p-6 sm:p-7"
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/30 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-brand-400 font-semibold text-sm">
                        <FiBriefcase size={13} />
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                        <FiClock size={12} />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                        <FiMapPin size={12} />
                        {exp.location}
                      </div>
                      <span className="inline-block px-2 py-0.5 text-xs bg-white/5 text-slate-400 rounded-full border border-white/10">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-5">
                    {exp.description.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500/60 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-brand-500/10 text-brand-300 border border-brand-500/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
