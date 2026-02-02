import { useState } from 'react'
import { PROJECTS } from '../data/constants'
import { ProjectCard } from './ProjectCard'

export function Projects() {
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
