import { useEffect, useRef } from 'react'

export function Hero() {
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
