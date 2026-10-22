import fotoPerfil from '../assets/avatar.jpg'
import { GITHUB } from '../data/contact'
import { useLang } from '../i18n/context'

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div>
          <span className="hero-badge">
            <span className="dot" /> {t('hero.badge')}
          </span>

          <h1>
            {t('hero.hello')} <span className="gradient-text">Joel Ortiz</span>
          </h1>

          <p className="hero-role">
            <span className="typewriter">{t('hero.role')}</span>
            <span className="caret" aria-hidden="true" />
          </p>

          <p className="hero-desc">{t('hero.desc')}</p>

          <div className="hero-actions">
            <a href="#proyectos" className="btn btn-primary">
              {t('hero.viewProjects')}
            </a>
            <a href="#contacto" className="btn btn-ghost">
              {t('hero.contact')}
            </a>
            <a
              href={GITHUB}
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
            <div className="avatar">
              <img src={fotoPerfil} alt={t('hero.avatarAlt')} />
            </div>
          </div>
          <span className="orbit-chip">React</span>
          <span className="orbit-chip">TypeScript</span>
          <span className="orbit-chip">Vite</span>
        </div>
      </div>
    </section>
  )
}
