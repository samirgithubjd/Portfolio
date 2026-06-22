import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, easeInOut } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { ROLES } from '../../data';
import my_image from '../../../public/my_image.jpg';
import resume from '../../../public/samir_jadav_resume.pdf'

const SOCIAL_LINKS = [
    { icon: FiGithub, href: 'https://github.com/samirgithubjd', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/samir-jadav-1653812a0/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:samirjadav271@gmail.com', label: 'Email' },
];

function AnimatedRole() {
    const [index, setIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        const current = ROLES[index];
        let timeout: ReturnType<typeof setTimeout>;

        if (typing) {
            if (displayed.length < current.length) {
                timeout = setTimeout(
                    () => setDisplayed(current.slice(0, displayed.length + 1)),
                    80,
                );
            } else {
                timeout = setTimeout(() => setTyping(false), 1800);
            }
        } else {
            if (displayed.length > 0) {
                timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
            } else {
                setIndex((i) => (i + 1) % ROLES.length);
                setTyping(true);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayed, typing, index]);

    return (
        <span className='font-mono text-xl sm:text-2xl font-semibold text-accent'>
            {displayed}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, repeatType: 'reverse' }}
                className='inline-block w-0.5 h-5 bg-accent ml-0.5 align-middle'
            />
        </span>
    );
}

function FloatingOrb({ className }: { className: string }) {
    return (
        <motion.div
            animate={{ y: [-20, 20], x: [-10, 10] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
        />
    );
}

export function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
    const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY, currentTarget } = e;
        const { width, height, left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left - width / 2);
        mouseY.set(clientY - top - height / 2);
    };

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeInOut } },
    };

    return (
        <section
            id='home'
            onMouseMove={handleMouseMove}
            className='relative min-h-screen flex items-center justify-center overflow-hidden'
        >
            {/* Background */}
            <div className='absolute inset-0 bg-surface-900' />
            <div className='absolute inset-0 bg-gradient-to-br from-brand-700/10 via-transparent to-cyan-900/10' />

            {/* Orbs */}
            <FloatingOrb className='w-96 h-96 bg-brand-600/20 top-1/4 -left-32' />
            <FloatingOrb className='w-80 h-80 bg-cyan-500/15 bottom-1/4 -right-24' />
            <FloatingOrb className='w-64 h-64 bg-purple-600/15 top-10 right-1/3' />

            {/* Grid dots */}
            <div
                className='absolute inset-0 opacity-[0.03]'
                style={{
                    backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                }}
            />

            <motion.div
                variants={containerVariants}
                initial='hidden'
                animate='visible'
                className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20'
            >
                {/* Left – Text */}
                <div className='flex-1 text-center lg:text-left'>
                    <motion.div
                        variants={itemVariants}
                        className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-500/30 mb-6'
                    >
                        <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse' />
                        <span className='text-sm text-slate-300 font-medium'>
                            Frontend Developer
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className='text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-3 leading-tight'
                    >
                        Hi, I'm <span className='gradient-text'>Samir Jadav</span>
                    </motion.h1>

                    <motion.div variants={itemVariants} className='mb-5'>
                        <AnimatedRole />
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className='text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8'
                    >
                        I craft high-performance mobile and web applications with React Native &
                        React.js. Obsessed with clean code, pixel-perfect UI, and exceptional user
                        experiences.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className='flex flex-wrap gap-3 justify-center lg:justify-start mb-10'
                    >
                        {/* <motion.button
                            onClick={() => handleNavClick('#contact')}
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className='group flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-500/30 transition-colors duration-200'
                        >
                            Hire Me
                            <FiArrowRight className='transition-transform group-hover:translate-x-1' />
                        </motion.button> */}

                        <motion.a
                            href={resume}
                            download
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className='flex items-center gap-2 px-6 py-3 glass hover:bg-white/10 text-slate-200 font-semibold rounded-xl border border-white/10 transition-all duration-200'
                        >
                            <FiDownload size={16} />
                            Download Resume
                        </motion.a>
                    </motion.div>

                    {/* Social Icons */}
                    <motion.div
                        variants={itemVariants}
                        className='flex items-center gap-4 justify-center lg:justify-start'
                    >
                        <span className='text-sm text-slate-500 font-medium'>Find me on</span>
                        <div className='flex gap-3'>
                            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={label}
                                    whileHover={{ y: -4, scale: 1.15 }}
                                    whileTap={{ scale: 0.9 }}
                                    className='p-2.5 glass hover:bg-brand-500/20 hover:border-brand-500/40 border border-white/10 rounded-xl text-slate-400 hover:text-white transition-all duration-200'
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right – Avatar Card */}
                <motion.div
                    variants={itemVariants}
                    style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
                    className='flex-shrink-0 w-72 h-72 sm:w-80 sm:h-80'
                >
                    <motion.div
                        animate={{ y: [-8, 8] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut',
                        }}
                        className='relative w-full h-full'
                    >
                        {/* Outer ring */}
                        <div
                            className='absolute inset-0 rounded-full bg-gradient-to-br from-brand-500 via-cyan-400 to-purple-500 animate-spin-slow opacity-30 blur-sm'
                            style={{ animation: 'spin 12s linear infinite' }}
                        />

                        {/* Avatar container */}
                        <div className='absolute inset-2 rounded-full glass-strong border-2 border-brand-500/40 overflow-hidden glow-brand flex items-center justify-center'>
                            <div className='w-full h-full bg-gradient-to-br from-brand-700/40 to-cyan-800/40 flex items-center justify-center'>
                                {/* Placeholder avatar with initials */}
                                {/* <div className='text-center'>
                                    <div className='text-6xl font-black gradient-text leading-none'>
                                        AM
                                    </div>
                                    <div className='text-xs font-mono text-slate-400 mt-2 tracking-widest'>
                                        DEV
                                    </div>
                                </div> */}
                                <div className="absolute inset-0 rounded-full  border-brand-500/40 overflow-hidden glow-brand">
  <img
    src={my_image}
    alt="Arjun Mehta"
    className="w-full h-100 object-cover object-center"
  />
</div>
                            </div>
                        </div>

                        {/* Floating badges */}
                        <motion.div
                            animate={{ x: [-5, 5] }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                            className='absolute -right-4 top-8 glass border border-white/10 rounded-xl px-3 py-2 shadow-xl'
                        >
                            <div className='flex items-center gap-2'>
                                <span className='text-lg'>⚛️</span>
                                <div>
                                    <div className='text-xs font-semibold text-white'>
                                        React Native
                                    </div>
                                    <div className='text-xs text-slate-400'>Expert</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ x: [5, -5] }}
                            transition={{ duration: 3.5, repeat: Infinity, repeatType: 'reverse' }}
                            className='absolute -left-6 bottom-12 glass border border-white/10 rounded-xl px-3 py-2 shadow-xl'
                        >
                            <div className='flex items-center gap-2'>
                                <span className='text-lg'>🔷</span>
                                <div>
                                    <div className='text-xs font-semibold text-white'>
                                        TypeScript
                                    </div>
                                    <div className='text-xs text-slate-400'>Advanced</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* <motion.div
              animate={{ y: [-5, 5] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
              className="absolute -bottom-2 right-12 glass border border-green-500/30 rounded-xl px-3 py-2 shadow-xl"
            >
              <div className="text-xs font-semibold text-green-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to Work
              </div>
            </motion.div> */}
                        <motion.div
                            animate={{ y: [-5, 5] }}
                            transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
                            className='absolute -bottom-2 right-12 glass border border-green-500/30 rounded-xl px-3 py-2 shadow-xl'
                        >
                            <div className='flex items-center gap-2'>
                                <span className='text-lg'>⚛️</span>
                                <div>
                                    <div className='text-xs font-semibold text-white'>ReactJs</div>
                                    <div className='text-xs text-slate-400'>Expert</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'
            >
                <span className='text-xs text-slate-500 font-mono tracking-widest uppercase'>
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className='w-px h-8 bg-gradient-to-b from-slate-500 to-transparent'
                />
            </motion.div>
        </section>
    );
}
