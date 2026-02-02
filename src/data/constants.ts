import type { Project, Experience } from '../types'

export const PROJECTS: Project[] = [
    {
        title: "VenueHub - Multi-Tenant SaaS Platform",
        description: "VenueHub is a full-stack SaaS application that allows venue owners to manage their spaces, handle bookings, process payments, and analyze their business - all in one place. The platform features a multi-tenant architecture where each organization has isolated data and customized settings.",
        tech: ["TypeScript", "Next.js 15", "Tailwind CSS + Shadcn UI", "React Query (TanStack Query)", "React Hook Form + Zod", "Node.js", "Express.js", "PostgreSQL", "JWT (jsonwebtoken)", "Stripe (planned)", "Socket.IO (planned)", "NodeMailer (planned)"],
        live: "https://github.com/BogdanDevBst/venuehub",
        period: "Nov 2025 – Present",
        role: "Full-Stack Developer"
    },
    {
        title: "PERN-stack",
        description: "Created a PERN-stack application with React, TypeScript, Express.js, Node.js, and PostgreSQL.",
        tech: ["React", "TypeScript", "Express.js", "Node.js", "PostgreSQL"],
        live: "https://github.com/BogdanDevBst/pern-stack-project",
        period: "Nov 2025 – Dec 2025",
        role: "Full-Stack Developer"
    },
    {
        title: "PDF-signer",
        description: "Created a PDF signer application with React and TypeScript.",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        live: "https://github.com/BogdanDevBst/pdf-signer",
        period: "Oct 2025 – Nov 2025",
        role: "Full-Stack Developer"
    },
    {
        title: "MyShine",
        description: "Modernized legacy codebase migrating from Material UI to Tailwind CSS. Implemented responsive interface from Adobe XD designs.",
        tech: ["Remix.js", "Tailwind CSS", "Express.js", "Node.js", "TypeScript"],
        live: "https://myshine.co.uk/",
        period: "Jan 2022 – Jul 2022",
        role: "Frontend Developer"
    },
    {
        title: "Carbon Savvy Calculator",
        description: "Created carbon footprint calculator from scratch with real-time computation engine using JSON schemas.",
        tech: ["Blitz.js", "Tailwind CSS", "React"],
        live: "https://calculator.carbonsavvy.uk/",
        period: "Jan 2021 – Jun 2021",
        role: "Full-Stack Developer"
    }
]

export const EXPERIENCE: Experience[] = [
    {
        role: "Freelance Full-Stack Developer",
        company: "Logiscript SRL",
        period: "Jul 2025 – Present",
        location: "Timișoara, Romania",
        highlights: [
            "Developed end-to-end web applications using React and TypeScript",
            "Built cross-platform desktop applications with Electron.js",
            "Created APIs, dashboards, and e-commerce platforms for international clients",
            "Designed modern, responsive UIs with Tailwind CSS",
            "Delivered performance-optimized, maintainable codebases"
        ],
        technologies: ["Next.js", "React", "TypeScript", "Electron.js", "Node.js", "Tailwind CSS", "Vite", "PostgreSQL"]
    },
    {
        role: "Software Developer → Tech Lead",
        company: "N-and Group",
        period: "Jul 2023 – May 2025",
        location: "Hybrid (UK & Italy)",
        highlights: [
            "Promoted to Tech Lead on IVS-UI project in January 2024, managing technical direction and team coordination",
            "Led greenfield development of smart vending machine interfaces using React, TypeScript, Electron.js, and Tailwind CSS",
            "Designed and built complete UI/UX from scratch for indoor payment systems",
            "Optimized application performance through code refactoring and caching, significantly reducing load times",
            "Mentored junior developers, fostering continuous learning culture",
            "Achieved seamless deployment on Linux systems across multiple vending machine models"
        ],
        technologies: ["React", "TypeScript", "Electron.js", "Node.js", "Tailwind CSS", "Ubuntu/Linux"]
    },
    {
        role: "Software Developer",
        company: "VenueNow Tech",
        period: "Aug 2022 – Jul 2023",
        location: "Remote (UK)",
        highlights: [
            "Developed backend services using NestJS framework and TypeORM for UK and USA clients",
            "Built VenueNow platform supporting plastic package recycling within corporations",
            "Implemented RESTful APIs facilitating frontend-backend communication",
            "Optimized database queries improving application performance by 10%",
            "Achieved £5k+/month savings in packaging costs and reduced over 150 tons of CO₂ emissions in first year"
        ],
        technologies: ["NestJS", "TypeORM", "Node.js", "Express", "MySQL", "TypeScript"]
    },
    {
        role: "Software Developer",
        company: "Digital Limited",
        period: "Jan 2021 – Jul 2022",
        location: "Remote (UK)",
        highlights: [
            "Built web applications from scratch using mobile-first approach in digital agency environment",
            "Developed Climate Calculator for WWF, National Grid & ScottishPower enabling public engagement with climate policy",
            "Optimized website code for SEO, improving visibility and traffic",
            "Implemented responsive web design and WCAG accessibility standards",
            "Received acknowledgment for frontend development excellence on Climate Calculator"
        ],
        technologies: ["React", "Remix.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"]
    },
    {
        role: "Software Developer (Volunteer)",
        company: "ZNotes",
        period: "Sep 2020 – Dec 2020",
        location: "Remote (UK)",
        highlights: [
            "Contributed to exam revision platform serving 6M+ users across 190+ countries",
            "Developed features using React.js and Node.js",
            "Optimized platform performance"
        ],
        technologies: ["React.js", "Node.js", "Material UI"]
    }
]

export const SKILLS = {
    frontend: ["React", "Redux", "Redux Toolkit", "Next.js", "Remix.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Vite"],
    backend: ["Node.js", "Express", "NestJS", "TypeORM", "RESTful APIs"],
    desktop: ["Electron.js"],
    databases: ["PostgreSQL", "MySQL", "Firebase"],
    tools: ["Git", "GitHub", "CI/CD", "Agile/Scrum", "Jest", "Enzyme", "Linux deployment"]
}

export const EDUCATION = [
    {
        degree: "Horticulture Engineer",
        institution: `"King Mihai I" University of Life Sciences of Timișoara`,
        period: "Oct 2001 - Jul 2006",
        location: "Timișoara, Romania",
        description: "Studied the science and practice of plant cultivation, covering key disciplines including pomology (fruit production), viticulture (grape and wine production), vegetable cultivation, floriculture, landscape design, plant physiology, soil science, and sustainable crop management. The program combined theoretical knowledge with practical training in university greenhouses, orchards, and experimental fields, preparing graduates for careers in agricultural production, landscape architecture, environmental management, and agribusiness."
    },
    {
        degree: "Software Development Bootcamp",
        institution: "Nology",
        period: "Jan 2020 – Apr 2020",
        location: "Bristol, UK",
        description: "Intensive full-stack development training: React.js, Node.js, Agile, CI/CD, testing"
    },
    {
        degree: "BSc (Hons) Computing",
        institution: "Arden University",
        period: "Feb 2023 – Feb 2024",
        location: "Online, UK",
        description: "Introduction to Academic Skills and Professional Development, Introduction to Computer Systems and Security, Introduction to Databases, Introduction to Programming, Introduction to Web Authoring, Productivity and Collaboration Tools for Learning and Work"

    }
]
