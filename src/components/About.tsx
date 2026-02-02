import { SKILLS } from '../data/constants'

export function About() {
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
