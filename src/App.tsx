import { useState } from 'react'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Process from './components/Process'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'
import type { Project } from './data/projects'

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <main id="contenido">
        <Hero />
        <About />
        <Skills />
        <Process />
        <Projects onSelect={setActiveProject} />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  )
}
