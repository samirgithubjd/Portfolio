import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiSmartphone, FiTrendingUp, FiHeart } from 'react-icons/fi';
import { SectionHeader, Reveal } from '../ui/SectionHeader';

const STATS = [
  { label: 'Years of Experience', value: '1.6+' },
  { label: 'Projects Delivered', value: '2+' },
  { label: 'Satisfied Clients', value: '2+' },
  { label: 'Lines of Code', value: '20k+' },
];

const HIGHLIGHTS = [
  { icon: FiSmartphone, title: 'Mobile-First Mindset', desc: 'Specializing in React Native for cross-platform iOS & Android apps.' },
  { icon: FiCode, title: 'Clean Architecture', desc: 'Writing maintainable, scalable code with SOLID principles.' },
  { icon: FiTrendingUp, title: 'Performance Focus', desc: 'Obsessed with app speed, render optimization, and UX smoothness.' },
  { icon: FiHeart, title: 'User Empathy', desc: 'Building interfaces that people love to use, not just look at.' },
];

export function About() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-surface-800" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About Me"
          title="Crafting Digital"
          highlight="Experiences"
          description="A passionate frontend developer who loves turning complex problems into simple, beautiful, intuitive solutions."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Text */}
          <div className="space-y-6">
            <Reveal>
              <p className="text-slate-300 text-base leading-relaxed">
                I'm a frontend developer based in <span className="text-accent font-medium">Rajkot, Gujarat</span> with 1.6+ years of experience building
                production-grade mobile and web applications. My primary stack is{' '}
                <span className="text-brand-400 font-medium">React Native + TypeScript</span> for mobile and{' '}
                <span className="text-brand-400 font-medium">React.js + Tailwind CSS</span> for web.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-slate-400 text-base leading-relaxed">
                I thrive at the intersection of design and engineering — bridging the gap between beautiful Figma designs
                and polished, performant code. I care deeply about accessibility, responsiveness, and every micro-interaction
                that makes a product feel alive.
              </p>
            </Reveal>

            {/* <Reveal delay={0.15}>
              <p className="text-slate-400 text-base leading-relaxed">
                My goal is to join a product-focused team where I can contribute to meaningful user-facing features,
                grow as an engineer, and work alongside people who care as much about quality as I do.
              </p>
            </Reveal> */}

            {/* Highlights Grid */}
            <Reveal delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-3 mt-4">
                {HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
                  <motion.div
                    key={title}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="glass gradient-border rounded-xl p-4 cursor-default"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-500/20 flex items-center justify-center mb-3">
                      <Icon size={16} className="text-brand-400" />
                    </div>
                    <div className="text-sm font-semibold text-white mb-1">{title}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{desc}</div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — Stats */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4">
              {STATS.map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
                  className="glass gradient-border rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-black gradient-text mb-1">{value}</div>
                  <div className="text-xs text-slate-400 font-medium">{label}</div>
                </motion.div>
              ))}
            </div>

            {/* Currently Reading / Interests card */}
            <Reveal delay={0.3}>
              <div className="glass gradient-border rounded-2xl p-6 space-y-4">
                <div className="text-sm font-semibold text-slate-300 mb-3">Quick facts</div>
                {[
                  ['🎓', 'BSc IT (Information Technology)'],
['🎯', 'Goal: Land a role where I can build impactful products'],                  ['🚀', 'Currently leveling up: Mobile App Development & Redux'],
                  ['🎧', 'Music while coding: Lo-fi hip-hop, always'],
                  ['💡', 'Always exploring: new libraries, tools, and dev trends'],
                ].map(([emoji, text]) => (
                  <div key={text} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="text-base mt-0.5 flex-shrink-0">{emoji}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
