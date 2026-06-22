import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../data';
import { SectionHeader } from '../ui/SectionHeader';

interface SkillBarProps {
    name: string;
    level: number;
    icon: string;
    color: string;
    delay: number;
    inView: boolean;
}

function SkillBar({ name, level, icon, color, delay, inView }: SkillBarProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay, duration: 0.5 }}
            className='group'
        >
            <div className='flex items-center justify-between mb-2'>
                <div className='flex items-center gap-2'>
                    <span className='text-base'>{icon}</span>
                    <span className='text-sm font-medium text-slate-300'>{name}</span>
                </div>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: delay + 0.5 }}
                    className='text-xs font-mono text-slate-500'
                >
                    {level}%
                </motion.span>
            </div>
            <div className='h-2 bg-white/5 rounded-full overflow-hidden'>
                <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : {}}
                    transition={{ delay: delay + 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className='h-full rounded-full relative'
                    style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
                >
                    <div className='absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity' />
                </motion.div>
            </div>
        </motion.div>
    );
}

export function Skills() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id='skills' className='section-padding relative overflow-hidden'>
            <div className='absolute inset-0 bg-surface-900' />
            <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent' />

            {/* Background decoration */}
            <div className='absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl pointer-events-none' />

            <div className='relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <SectionHeader
                    eyebrow='Skills'
                    title='My Technical'
                    highlight='Toolbox'
                    description='Technologies I use to build fast, scalable, and beautiful applications.'
                />

                <div ref={ref} className='grid md:grid-cols-3 gap-6'>
                    {SKILL_CATEGORIES.map((category, catIdx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: catIdx * 0.15, duration: 0.6 }}
                            className='glass gradient-border rounded-2xl p-6'
                        >
                            <div className='text-xs font-semibold text-brand-400 uppercase tracking-widest mb-5'>
                                {category.title}
                            </div>
                            <div className='space-y-5'>
                                {category.skills.map((skill, skillIdx) => (
                                    <SkillBar
                                        key={skill.name}
                                        {...skill}
                                        delay={catIdx * 0.15 + skillIdx * 0.08}
                                        inView={inView}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tech badges row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}
                    className='mt-10 flex flex-wrap justify-center gap-3'
                >
                    {[
                        'JavaScript',
                        'TypeScript',
                        'React.js',
                        'React Native',
                        'Tailwind CSS',
                        'NativeWind',
                        'Node.js',
                        'Git',
                        'REST APIs',
                        'Figma',
                    ].map((tech, i) => (
                        <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.7 + i * 0.04 }}
                            whileHover={{ y: -3, scale: 1.08 }}
                            className='px-4 py-1.5 glass border border-white/10 hover:border-brand-500/40 text-sm text-slate-300 hover:text-white rounded-full transition-all duration-200 cursor-default font-mono'
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
