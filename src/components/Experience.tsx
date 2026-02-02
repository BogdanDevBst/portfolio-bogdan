import { EXPERIENCE } from '../data/constants'

export function Experience() {
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
