import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { projects } from '../data/projects'
import { useLang } from '../i18n/context'
import Rich from '../i18n/Rich'
import type { TKey } from '../i18n/dictionary'

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

type Stat = { id: string; label: TKey; to: number; suffix?: string }

const STATS: Stat[] = [
  { id: 'projects', to: projects.length, label: 'about.statProjects' },
  { id: 'tech', to: 8, suffix: '+', label: 'about.statTech' },
  { id: 'commitment', to: 100, suffix: '%', label: 'about.statCommitment' },
]

export default function About() {
  const { t } = useLang()

  return (
    <section className="section" id="sobre-mi">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-eyebrow">{t('about.eyebrow')}</span>
            <h2 className="section-title">
              {t('about.titleA')} <span className="gradient-text">{t('about.titleB')}</span>
            </h2>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <div className="about-text">
              <p>
                <Rich text={t('about.p1')} />
              </p>
              <p>
                <Rich text={t('about.p2')} />
              </p>
              <p>
                <Rich text={t('about.p3')} />
              </p>
              <div className="about-chips">
                <span className="tag">{t('about.chipAge')}</span>
                <span className="tag">{t('about.chipCountry')}</span>
                <span className="tag">{t('about.chipRole')}</span>
                <span className="tag">{t('about.chipAvailable')}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="stats-grid">
              {STATS.map((stat) => (
                <div className="stat-card" key={stat.id}>
                  <div className="stat-number">
                    <Counter to={stat.to} suffix={stat.suffix} />
                  </div>
                  <div className="stat-label">{t(stat.label)}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
