import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [started, setStarted] = useState(false)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const frame = requestAnimationFrame(() => setValue(to))
      return () => cancelAnimationFrame(frame)
    }

    const duration = 1500
    const start = performance.now()
    let frame = 0

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(to * eased))
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [started, to])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

const STATS = [
  { to: 10, suffix: '+', label: 'Proyectos completados' },
  { to: 12, suffix: '+', label: 'Tecnologías manejadas' },
  { to: 3, suffix: '+', label: 'Años de formación' },
  { to: 100, suffix: '%', label: 'Compromiso y puntualidad' },
]

export default function About() {
  return (
    <section className="section" id="sobre-mi">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-eyebrow">Sobre mí</span>
            <h2 className="section-title">
              Perfil <span className="gradient-text">profesional</span>
            </h2>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <div className="about-text">
              <p>
                Soy <strong>Joel Ortiz</strong>, desarrollador Full-Stack en formación con foco
                en el ecosistema web moderno. Me gusta entender el problema antes de escribir la
                primera línea de código.
              </p>
              <p>
                Trabajo con <strong>React, TypeScript y Vite</strong> para interfaces rápidas, y
                cuido los detalles que hacen la diferencia: rendimiento, accesibilidad y una
                experiencia visual que transmita seriedad.
              </p>
              <p>
                Busco un equipo donde pueda <strong>aprender rápido, aportar desde el día uno</strong>{' '}
                y crecer profesionalmente. Si buscas a alguien comprometido y con ganas de
                hacer las cosas bien, hablemos.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="stats-grid">
              {STATS.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <div className="stat-number">
                    <Counter to={stat.to} suffix={stat.suffix} />
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
