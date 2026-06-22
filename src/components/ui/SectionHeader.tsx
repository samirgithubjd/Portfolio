import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionHeaderProps {
    eyebrow: string;
    title: string;
    highlight?: string;
    description?: string;
}

export function SectionHeader({ eyebrow, title, highlight, description }: SectionHeaderProps) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className='text-center mb-16'
        >
            <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-500/30 mb-4'>
                <div className='w-1.5 h-1.5 rounded-full bg-brand-400' />
                <span className='text-xs font-semibold text-brand-400 uppercase tracking-widest'>
                    {eyebrow}
                </span>
            </div>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
                {title} {highlight && <span className='gradient-text'>{highlight}</span>}
            </h2>
            {description && (
                <p className='text-slate-400 text-base max-w-xl mx-auto leading-relaxed'>
                    {description}
                </p>
            )}
        </motion.div>
    );
}

interface RevealProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
