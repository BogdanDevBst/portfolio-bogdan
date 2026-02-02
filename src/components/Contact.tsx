export function Contact() {
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
                        className="text-text-muted hover:text-accent-primary transition-colors"
                    >
                        <span className="sr-only">GitHub</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
