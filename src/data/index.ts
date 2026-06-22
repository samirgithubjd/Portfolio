import type { NavItem, Experience, Project, ContactInfo, SkillCategory } from '../types';

export const NAV_ITEMS: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export const ROLES = [
    'React Native Developer',
    'React.js Developer',
    'Frontend Developer',
    'TypeScript Engineer',
];

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: 'Languages',
        skills: [
            { name: 'JavaScript', level: 92, icon: '⚡', color: '#f7df1e' },
            { name: 'TypeScript', level: 88, icon: '🔷', color: '#3178c6' },
            { name: 'HTML5', level: 95, icon: '🌐', color: '#e34f26' },
            { name: 'CSS3', level: 90, icon: '🎨', color: '#1572b6' },
        ],
    },
    {
        title: 'Frameworks & Libraries',
        skills: [
            { name: 'React.js', level: 90, icon: '⚛️', color: '#61dafb' },
            { name: 'React Native', level: 87, icon: '📱', color: '#61dafb' },
            { name: 'Tailwind CSS', level: 92, icon: '💨', color: '#06b6d4' },
            { name: 'NativeWind', level: 84, icon: '🌬️', color: '#06b6d4' },
        ],
    },
    {
        title: 'Tools & Platforms',
        skills: [
            { name: 'Node.js', level: 75, icon: '🟢', color: '#339933' },
            { name: 'Git', level: 88, icon: '🔀', color: '#f05032' },
            { name: 'VS Code', level: 95, icon: '💻', color: '#007acc' },
            { name: 'Figma', level: 70, icon: '🎭', color: '#f24e1e' },
        ],
    },
];

export const EXPERIENCES: Experience[] = [
    {
        id: 'exp-1',
        company: 'Matrixbrains Pvt Ltd',
        role: 'Frontend Developer',
        duration: 'Dec 2024 – Present',
        location: 'Ahmedabad, Gujarat',
        type: 'Full-time',
        current: true,
        description: [
            'Developed and maintained Xlotter and iGather, production-grade React Native applications for sports and event booking',
            'Implemented end-to-end booking workflows, authentication, and user management features',
            'Integrated REST APIs and managed application state using Context API, custom hooks, and efficient data handling techniques',
            'Optimized application performance and enhanced user experience through code optimization and reusable components',
            'Collaborated closely with UI/UX designers and backend developers to deliver responsive and pixel-perfect mobile interfaces',
        ],
        technologies: [
            'React Native',
            'React Js',
            'TypeScript',
            'NativeWind',
            'Expo',
            'CLI',
            'Redux',
        ],
    },
];

export const PROJECTS: Project[] = [
    {
        id: 'xlotter',
        title: 'Xlotter',
        description:
            'Sports Ground Booking Platform — find, book, and manage sports facilities near you in real time.',
        longDescription:
            'A full-featured sports venue booking platform that lets users search for nearby grounds, check real-time availability, and make instant reservations. Includes an admin panel for venue owners to manage slots and revenue.',
        image: '',
        color: 'from-indigo-500 to-purple-600',
        technologies: ['React Native', 'TypeScript', 'NativeWind', 'Node.js', 'REST API'],
        githubUrl: 'https://github.com',
        liveUrl: '#',
        featured: true,
    },
    {
        id: 'igather',
        title: 'iGather',
        description:
            'A mobile event booking application that enables users to discover, book, and pay for events seamlessly through an intuitive user experience.',
        longDescription:
            'Developed iGather, a React Native-based event booking application that allows users to browse events, view event details, and complete bookings securely. Integrated REST APIs for real-time event data and implemented Razorpay payment gateway for seamless online transactions. Utilized Redux for efficient state management and built responsive, user-friendly interfaces to deliver a smooth mobile experience.',
        image: '',
        color: 'from-purple-500 to-pink-600',
        technologies: ['React Native', 'Redux', 'Razorpay', 'REST API', 'JavaScript'],
        githubUrl: 'https://github.com',
        liveUrl: '#',
        featured: true,
    },
    {
        id: 'hospital-ai-bot',
        title: 'Hospital Appointment AI Bot',
        description:
            'AI-powered voice bot that handles hospital appointment booking through natural conversation — no forms, no friction.',
        longDescription:
            'A voice-enabled AI assistant that lets patients book, reschedule, and cancel hospital appointments by simply speaking. Built with Node.js on the backend and integrated with a voice AI provider for real-time speech recognition and response.',
        image: '',
        color: 'from-emerald-500 to-teal-600',
        technologies: ['Next.js', 'Node.js', 'Vapi AI Voice', 'REST API', 'TypeScript'],
        githubUrl: 'https://github.com',
        liveUrl: '#',
        featured: false,
    },

    {
        id: 'weather-app',
        title: 'Weather App',
        description:
            'Clean, accurate weather forecasting with hourly and 7-day outlooks, powered by OpenWeatherMap.',
        longDescription:
            'A beautiful weather application with animated weather icons, geolocation-based forecasts, and detailed hourly/weekly breakdowns. Features dark/light mode and city search with autocomplete.',
        image: '',
        color: 'from-orange-500 to-rose-600',
        technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'OpenWeatherMap API'],
        githubUrl: 'https://github.com',
        liveUrl: '#',
    },
];

export const CONTACT_INFO: ContactInfo = {
    email: 'samirjadav271@gmail.com',
    phone: '+91 7861843187',
    location: 'Rajkot, Gujarat, India',
};
