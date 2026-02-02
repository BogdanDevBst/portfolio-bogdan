import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Contact } from './components/Contact'

function App() {
    return (
        <div className="bg-surface-dark min-h-screen text-text-primary selection:bg-accent-primary/30 selection:text-white">
            <Navigation />
            <main>
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Education />
                <Contact />
            </main>

            <footer className="py-8 text-center text-text-muted text-sm relative z-10">
                <p>&copy; {new Date().getFullYear()} Bogdan Niculescu. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default App
