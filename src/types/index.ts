export interface NavItem {
    label: string;
    href: string;
}

export interface Skill {
    name: string;
    level: number;
    icon: string;
    color: string;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export interface Experience {
    id: string;
    company: string;
    role: string;
    duration: string;
    location: string;
    type: string;
    description: string[];
    technologies: string[];
    current?: boolean;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string;
    featured?: boolean;
    color: string;
}

export interface SocialLink {
    label: string;
    url: string;
    icon: string;
}

export interface ContactInfo {
    email: string;
    phone: string;
    location: string;
}
