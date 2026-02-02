import { useState, useEffect, useRef } from 'react'

// Types
interface Project {
    title: string
    description: string
    tech: string[]
    github?: string
    live?: string
    featured?: boolean
    period?: string
    role?: string
}

interface Experience {
    role: string
    company: string
    period: string
    location: string
    highlights: string[]
    technologies: string[]
}

// Data - Accurate from CV
const PROJECTS: Project[] = [
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

const EXPERIENCE: Experience[] = [
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

const SKILLS = {
    frontend: ["React", "Redux", "Redux Toolkit", "Next.js", "Remix.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Vite"],
    backend: ["Node.js", "Express", "NestJS", "TypeORM", "RESTful APIs"],
    desktop: ["Electron.js"],
    databases: ["PostgreSQL", "MySQL", "Firebase"],
    tools: ["Git", "GitHub", "CI/CD", "Agile/Scrum", "Jest", "Enzyme", "Linux deployment"]
}

const EDUCATION = [
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

// Components
function Navigation() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#experience", label: "Experience" },
        { href: "#education", label: "Education" },
        { href: "#contact", label: "Contact" }
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-surface-dark/90 backdrop-blur-xl border-b border-white/5' : ''
            }`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#" className="font-display font-bold text-xl tracking-tight group">
                        <span className="text-accent-primary">B</span>
                        <span className="text-text-primary group-hover:text-accent-secondary transition-colors">ogdan</span>
                        <span className="text-text-muted">.dev</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-text-secondary hover:text-accent-primary transition-colors duration-300 font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="https://github.com/BogdanDevBst"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 bg-accent-primary/10 text-accent-primary border border-accent-primary/30 rounded-full text-sm font-semibold hover:bg-accent-primary hover:text-surface-dark transition-all duration-300"
                        >
                            GitHub
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-text-secondary hover:text-accent-primary transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-white/5">
                        {navLinks.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-3 text-text-secondary hover:text-accent-primary transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}

function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        // Animated grid particles
        const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = []
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                alpha: Math.random() * 0.5 + 0.1
            })
        }

        const animate = () => {
            ctx.fillStyle = 'rgba(10, 10, 11, 0.1)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Draw grid
            ctx.strokeStyle = 'rgba(0, 255, 136, 0.03)'
            ctx.lineWidth = 1
            const gridSize = 60
            for (let x = 0; x < canvas.width; x += gridSize) {
                ctx.beginPath()
                ctx.moveTo(x, 0)
                ctx.lineTo(x, canvas.height)
                ctx.stroke()
            }
            for (let y = 0; y < canvas.height; y += gridSize) {
                ctx.beginPath()
                ctx.moveTo(0, y)
                ctx.lineTo(canvas.width, y)
                ctx.stroke()
            }

            // Draw and update particles
            particles.forEach(p => {
                p.x += p.vx
                p.y += p.vy

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(0, 255, 136, ${p.alpha})`
                ctx.fill()
            })

            // Connect nearby particles
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x
                    const dy = p1.y - p2.y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < 150) {
                        ctx.beginPath()
                        ctx.moveTo(p1.x, p1.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.strokeStyle = `rgba(0, 255, 136, ${0.1 * (1 - dist / 150)})`
                        ctx.stroke()
                    }
                })
            })

            requestAnimationFrame(animate)
        }
        animate()

        return () => window.removeEventListener('resize', resize)
    }, [])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 -z-10" />

            {/* Gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
                <div className="animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-light/50 backdrop-blur-sm border border-white/10 rounded-full mb-8">
                        <span className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
                        <span className="text-sm text-text-secondary">Available for opportunities • Immediate start</span>
                    </div>

                    <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-8xl tracking-tight mb-6">
                        <span className="block text-text-primary">Bogdan</span>
                        <span className="block bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                            Niculescu
                        </span>
                    </h1>

                    <p className="text-xl sm:text-2xl text-text-secondary max-w-2xl mx-auto mb-4 font-display">
                        Full-Stack Developer
                    </p>

                    <p className="text-lg text-text-muted max-w-xl mx-auto mb-8">
                        5+ years building modern, scalable web and desktop applications with React, TypeScript, Node.js, and Electron.js
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {["React", "TypeScript", "Node.js", "Electron.js", "PostgreSQL", "Next.js", "Remix.js"].map(tech => (
                            <span key={tech} className="px-4 py-2 bg-surface-light/30 text-text-secondary text-sm font-mono rounded-full border border-white/10">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 bg-accent-primary text-surface-dark font-bold rounded-full overflow-hidden transition-transform hover:scale-105"
                        >
                            <span className="relative z-10">View My Work</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 border border-white/20 text-text-primary font-semibold rounded-full hover:bg-white/5 hover:border-accent-primary/50 transition-all"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    )
}

function About() {
    return (
        <section id="about" className="py-32 bg-surface-mid relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-secondary/10 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="font-mono text-accent-primary text-sm tracking-wider mb-4 block">// ABOUT ME</span>
                        <h2 className="font-display font-bold text-4xl lg:text-5xl text-text-primary mb-8">
                            Building digital<br />
                            <span className="text-accent-secondary">experiences</span> that matter
                        </h2>
                        <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                            <p>
                                I'm an experienced full-stack developer from <strong className="text-text-primary">Timișoara, Romania</strong>,
                                with over 5 years of expertise building modern, scalable web and desktop applications. I specialize in the
                                JavaScript/TypeScript ecosystem with a proven track record delivering production-ready solutions across
                                e-commerce, green tech, smart vending, and education sectors.
                            </p>
                            <p>
                                Previously serving as Tech Lead at N-and Group (UK/Italy), I led greenfield projects and mentored
                                development teams. My work has contributed to platforms serving <strong className="text-accent-primary">6M+ users</strong> and
                                environmental solutions that reduced over <strong className="text-accent-primary">150 tons of CO₂ emissions</strong>.
                            </p>
                            <p>
                                I hold a BSc (Hons) in Computing from Arden University and have 5+ years of experience working remotely
                                with international teams across the UK, Italy, and USA.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <div className="px-4 py-2 bg-surface-light/50 rounded-lg border border-white/5">
                                <span className="text-text-muted text-sm">Languages</span>
                                <p className="text-text-primary font-semibold">English (Fluent) • Romanian (Native)</p>
                            </div>
                            <div className="px-4 py-2 bg-surface-light/50 rounded-lg border border-white/5">
                                <span className="text-text-muted text-sm">Work Model</span>
                                <p className="text-text-primary font-semibold">Remote • Hybrid • On-site</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Skills grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {Object.entries(SKILLS).map(([category, skills]) => (
                                <div
                                    key={category}
                                    className={`p-6 bg-surface-light/50 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-accent-primary/30 transition-colors ${category === 'frontend' ? 'sm:col-span-2' : ''
                                        }`}
                                >
                                    <h3 className="font-mono text-accent-primary text-xs tracking-wider mb-4 uppercase">
                                        {category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map(skill => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1.5 bg-surface-dark/50 text-text-secondary text-sm rounded-lg border border-white/5"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -top-4 -right-4 px-4 py-2 bg-accent-tertiary text-white text-sm font-bold rounded-full shadow-lg shadow-accent-tertiary/20">
                            5+ Years
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <article
            className={`group relative p-8 bg-surface-light/30 backdrop-blur-sm border border-white/5 rounded-3xl hover:border-accent-primary/30 transition-all duration-500 hover:-translate-y-2 ${project.featured ? 'lg:col-span-2' : ''
                }`}
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {project.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-accent-primary/20 text-accent-primary text-xs font-mono rounded-full">
                    Featured
                </div>
            )}

            <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-accent-primary/10 rounded-xl group-hover:bg-accent-primary/20 transition-colors">
                    <svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                </div>

                <div className="flex items-center gap-2">
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-text-muted hover:text-accent-secondary transition-colors"
                            aria-label="View live site"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-text-muted hover:text-accent-primary transition-colors"
                            aria-label="View on GitHub"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>

            {(project.period || project.role) && (
                <div className="flex flex-wrap items-center gap-2 mb-3">
                    {project.role && (
                        <span className="px-2 py-1 bg-accent-secondary/10 text-accent-secondary text-xs font-semibold rounded">
                            {project.role}
                        </span>
                    )}
                    {project.period && (
                        <span className="text-text-muted text-xs font-mono">{project.period}</span>
                    )}
                </div>
            )}

            <h3 className="font-display font-bold text-xl text-text-primary mb-3 group-hover:text-accent-primary transition-colors">
                {project.title}
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                    <span
                        key={tech}
                        className="px-3 py-1 bg-surface-dark/50 text-text-muted text-xs font-mono rounded-md border border-white/5"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </article>
    )
}

function Projects() {
    const [showAll, setShowAll] = useState(false)
    const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 6)

    return (
        <section id="projects" className="py-32 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-secondary/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="font-mono text-accent-secondary text-sm tracking-wider mb-4 block">// PROJECTS</span>
                    <h2 className="font-display font-bold text-4xl lg:text-5xl text-text-primary mb-4">
                        Featured Work
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        A selection of projects spanning e-commerce, green tech, smart vending, and education sectors
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {displayedProjects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>

                <div className="text-center mt-12 space-y-4">
                    {!showAll && PROJECTS.length > 6 && (
                        <button
                            onClick={() => setShowAll(true)}
                            className="px-6 py-3 bg-surface-light/50 text-text-primary font-semibold rounded-full border border-white/10 hover:border-accent-primary/50 transition-all"
                        >
                            Show All Projects ({PROJECTS.length})
                        </button>
                    )}
                    <div>
                        <a
                            href="https://github.com/BogdanDevBst"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors font-semibold"
                        >
                            View all projects on GitHub
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Experience() {
    return (
        <section id="experience" className="py-32 bg-surface-mid relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-primary/10 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="font-mono text-accent-primary text-sm tracking-wider mb-4 block">// EXPERIENCE</span>
                    <h2 className="font-display font-bold text-4xl lg:text-5xl text-text-primary mb-4">
                        Professional Journey
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        From educational platforms to environmental tech, delivering impactful solutions across diverse industries
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-tertiary hidden lg:block" />

                    <div className="space-y-12">
                        {EXPERIENCE.map((exp, index) => (
                            <div
                                key={`${exp.company}-${exp.period}`}
                                className={`relative lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:ml-auto lg:pl-12'}`}
                            >
                                {/* Timeline dot */}
                                <div className={`absolute top-0 w-4 h-4 bg-accent-primary rounded-full border-4 border-surface-mid hidden lg:block ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                                    }`} />

                                <article className="p-8 bg-surface-light/30 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-accent-primary/30 transition-all">
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <span className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-sm font-mono rounded-full">
                                            {exp.period}
                                        </span>
                                        <span className="text-text-muted text-sm">{exp.location}</span>
                                    </div>

                                    <h3 className="font-display font-bold text-xl text-text-primary mb-1">
                                        {exp.role}
                                    </h3>
                                    <p className="text-accent-secondary font-semibold mb-4">{exp.company}</p>

                                    <ul className="space-y-2 mb-6">
                                        {exp.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start gap-3 text-text-secondary">
                                                <span className="mt-2 w-1.5 h-1.5 bg-accent-primary rounded-full shrink-0" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map(tech => (
                                            <span key={tech} className="px-2 py-1 bg-surface-dark/50 text-text-muted text-xs font-mono rounded border border-white/5">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function Education() {
    return (
        <section id="education" className="py-32 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-secondary/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="font-mono text-accent-secondary text-sm tracking-wider mb-4 block">// EDUCATION</span>
                    <h2 className="font-display font-bold text-4xl lg:text-5xl text-text-primary mb-4">
                        Academic Background
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {EDUCATION.map((edu) => (
                        <article
                            key={edu.degree}
                            className="p-8 bg-surface-light/30 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-accent-primary/30 transition-all"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 flex items-center justify-center bg-accent-secondary/10 rounded-xl">
                                    <svg className="w-6 h-6 text-accent-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-text-muted text-sm font-mono">{edu.period}</span>
                                    <p className="text-text-muted text-sm">{edu.location}</p>
                                </div>
                            </div>

                            <h3 className="font-display font-bold text-lg text-text-primary mb-1">
                                {edu.degree}
                            </h3>
                            <p className="text-accent-secondary font-semibold mb-2">{edu.institution}</p>
                            {edu.description && (
                                <p className="text-text-secondary text-sm">{edu.description}</p>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

function Contact() {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-tertiary/30 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-[150px] -z-10" />

            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                <span className="font-mono text-accent-tertiary text-sm tracking-wider mb-4 block">// GET IN TOUCH</span>
                <h2 className="font-display font-bold text-4xl lg:text-6xl text-text-primary mb-6">
                    Let's build something<br />
                    <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                        amazing together
                    </span>
                </h2>
                <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8">
                    I'm currently open to new opportunities and available for immediate start. Whether you have a project in mind,
                    a question, or just want to say hi — my inbox is always open.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-text-secondary mb-8">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>(+40) 0742298181</span>
                    </div>
                    <span className="hidden sm:block">•</span>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Timișoara, Romania</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <a
                        href="mailto:bn.workdev@gmail.com"
                        className="group relative px-8 py-4 bg-accent-primary text-surface-dark font-bold rounded-full overflow-hidden transition-transform hover:scale-105"
                    >
                        <span className="relative z-10">bn.workdev@gmail.com</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                </div>

                <div className="flex items-center justify-center gap-6">
                    <a
                        href="https://github.com/BogdanDevBst"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 text-text-muted hover:text-accent-primary transition-colors"
                        aria-label="GitHub"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/bogdan-niculescu-dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 text-text-muted hover:text-accent-secondary transition-colors"
                        aria-label="LinkedIn"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

function Footer() {
    return (
        <footer className="py-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-text-muted text-sm">
                        © {new Date().getFullYear()} Bogdan Niculescu.
                    </p>
                    <p className="text-text-muted text-sm">
                        Designed with <span className="text-accent-tertiary">♥</span> in Timișoara
                    </p>
                </div>
            </div>
        </footer>
    )
}

function App() {
    return (
        <div className="min-h-screen bg-surface-dark">
            <Navigation />
            <main>
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Education />
                <Contact />
            </main>
            <Footer />

            {/* Global styles for animations */}
            <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
        </div>
    )
}

export default App
