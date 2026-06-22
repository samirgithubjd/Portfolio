import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';
import { CONTACT_INFO } from '../../data';
import { SectionHeader, Reveal } from '../ui/SectionHeader';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const CONTACT_ITEMS = [
  { icon: FiMail, label: 'Email', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { icon: FiPhone, label: 'Phone', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
  { icon: FiMapPin, label: 'Location', value: CONTACT_INFO.location, href: '#' },
];

const SOCIAL_LINKS = [
  { icon: FiGithub, href: 'https://github.com/samirgithubjd', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/samir-jadav-1653812a0/', label: 'LinkedIn' },
  { icon: FiMail, href: `mailto:${CONTACT_INFO.email}`, label: 'Email' },
];

export function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Replace with your Formspree form ID from https://formspree.io/
      const FORMSPREE_ID = 'f/xanwwyye'; // e.g., 'f/abc123def'
      const FORMSPREE_URL = `https://formspree.io/${FORMSPREE_ID}`;

      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inputClasses =
    'w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-brand-500/60 focus:outline-none focus:ring-1 focus:ring-brand-500/30 text-slate-200 placeholder-slate-600 text-sm bg-transparent transition-all duration-200';

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-surface-800" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Work"
          highlight="Together"
          description="Have a project in mind or want to discuss an opportunity? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* <Reveal>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm currently open to full-time roles and select freelance projects. Whether you have a
                brief or just a rough idea, let's start the conversation.
              </p>
            </Reveal> */}

            <Reveal delay={0.1}>
              <div className="space-y-3">
                {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-4 glass gradient-border rounded-xl group transition-all duration-200 hover:border-brand-500/30"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/30 transition-colors">
                      <Icon size={16} className="text-brand-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">{label}</div>
                      <div className="text-sm text-slate-300 font-medium">{value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-widest mb-3 font-semibold">Find me on</div>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ y: -4, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 glass border border-white/10 hover:border-brand-500/40 rounded-xl text-slate-400 hover:text-white transition-all duration-200"
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — Form */}
          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="glass gradient-border rounded-2xl p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  whileHover={{ scale: status === 'idle' ? 1.02 : 1, y: status === 'idle' ? -2 : 0 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    status === 'success'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : status === 'error'
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                      : 'bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/30'
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    <>✓ Message Sent!</>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
