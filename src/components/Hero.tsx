import { useEffect, useState } from 'react'

const ROLES = [
  'Desarrollador Full-Stack',
  'Creador de interfaces modernas',
  'Resolutor de problemas con código',
]

function useTypewriter() {
  const [text, setText] = useState(ROLES[0])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    let roleIndex = 0
    let charIndex = ROLES[0].length
    let deleting = true
    let timeoutId = 0

    const tick = () => {
      const role = ROLES[roleIndex]

      if (!deleting) {
        charIndex += 1
        setText(role.slice(0, charIndex))
        if (charIndex >= role.length) {
          deleting = true
          timeoutId = window.setTimeout(tick, 2000)
          return
        }
        timeoutId = window.setTimeout(tick, 70)
        return
      }

      charIndex -= 1
      setText(role.slice(0, charIndex))
      if (charIndex <= 0) {
        deleting = false
        roleIndex = (roleIndex + 1) % ROLES.length
        timeoutId = window.setTimeout(tick, 350)
        return
      }
      timeoutId = window.setTimeout(tick, 38)
    }

    timeoutId = window.setTimeout(tick, 600)
    return () => window.clearTimeout(timeoutId)
  }, [])

  return text
}

export default function Hero() {
  const typed = useTypewriter()

  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div>
          <span className="hero-badge">
            <span className="dot" /> Disponible para oportunidades
          </span>

          <h1>
            Hola, soy <span className="gradient-text">Joel Ortiz</span>
          </h1>

          <p className="hero-role">
            <span className="typewriter">{typed}</span>
            <span className="caret" aria-hidden="true" />
          </p>

          <p className="hero-desc">
            Construyo experiencias web rápidas, accesibles y con personalidad. Me enfoco en
            escribir código limpio y en transformar ideas en productos que la gente disfrute
            usando.
          </p>

          <div className="hero-actions">
            <a href="#proyectos" className="btn btn-primary">
              Ver proyectos
            </a>
            <a href="#contacto" className="btn btn-ghost">
              Contáctame
            </a>
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-ring">
            <div className="avatar">JO</div>
          </div>
          <span className="orbit-chip">React</span>
          <span className="orbit-chip">TypeScript</span>
          <span className="orbit-chip">Node.js</span>
        </div>
      </div>
    </section>
  )
}
