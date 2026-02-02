export interface Project {
    title: string
    description: string
    tech: string[]
    github?: string
    live?: string
    featured?: boolean
    period?: string
    role?: string
}

export interface Experience {
    role: string
    company: string
    period: string
    location: string
    highlights: string[]
    technologies: string[]
}
