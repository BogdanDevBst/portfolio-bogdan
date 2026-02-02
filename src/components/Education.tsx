import { EDUCATION } from '../data/constants'

export function Education() {
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
