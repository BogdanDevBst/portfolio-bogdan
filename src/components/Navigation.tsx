import { useState, useEffect } from 'react'

export function Navigation() {
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
