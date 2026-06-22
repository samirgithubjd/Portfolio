import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { NAV_ITEMS } from '../../data';

const SOCIAL_LINKS = [
  { icon: FiGithub, href: 'https://github.com/samirgithubjd', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/samir-jadav-1653812a0/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:samirjadav271@gmail.com', label: 'Email' },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-surface-900 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <div className="font-mono font-bold text-xl mb-2">
              <span className="gradient-text">&lt;Samir Jadav</span>
              <span className="text-slate-500">/&gt;</span>
            </div>
            <p className="text-xs text-slate-600 max-w-xs">
              Building delightful digital experiences, one component at a time.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 glass border border-white/5 hover:border-white/15 rounded-xl text-slate-500 hover:text-slate-300 transition-all duration-200"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Samir Jadav. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <FiHeart size={12} className="text-rose-500" /> using React.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
