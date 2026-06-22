import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

function LoadingScreen({ onDone }: { onDone: () => void }) {
    useEffect(() => {
        const t = setTimeout(onDone, 1800);
        return () => clearTimeout(t);
    }, [onDone]);

    return (
        <motion.div
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className='fixed inset-0 z-[100] bg-surface-900 flex flex-col items-center justify-center'
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className='text-center'
            >
                <div className='font-mono font-black text-3xl mb-6'>
                    <span className='gradient-text'>&lt;Dev</span>
                    <span className='text-slate-500'>/&gt;</span>
                </div>
                <div className='w-48 h-0.5 bg-white/5 rounded-full overflow-hidden mx-auto'>
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity }}
                        className='h-full w-1/3 bg-gradient-to-r from-transparent via-brand-500 to-transparent'
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function App() {
    const [loading, setLoading] = useState(true);

    return (
        <>
            <AnimatePresence>
                {loading && <LoadingScreen onDone={() => setLoading(false)} />}
            </AnimatePresence>

            {!loading && (
                <div className='noise-overlay'>
                    <Navbar />
                    <main>
                        <Hero />
                        <About />
                        <Skills />
                        <Experience />
                        <Projects />
                        <Contact />
                    </main>
                    <Footer />
                </div>
            )}
        </>
    );
}
