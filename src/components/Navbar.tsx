import { useEffect, useState } from 'react'
import { useLang } from '../i18n/context'
import type { TKey } from '../i18n/dictionary'

const LINKS: { id: string; key: TKey }[] = [
  { id: 'inicio', key: 'nav.home' },
  { id: 'sobre-mi', key: 'nav.about' },
  { id: 'habilidades', key: 'nav.skills' },
  { id: 'proceso', key: 'nav.process' },
  { id: 'proyectos', key: 'nav.projects' },
  { id: 'experiencia', key: 'nav.experience' },
  { id: 'contacto', key: 'nav.contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')
  const { t, lang, toggle } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    for (const link of LINKS) {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar-inner" aria-label={t('nav.main')}>
        <a href="#inicio" className="logo">
          Joel<span> Ortiz.</span>
        </a>

        <div className={`nav-links ${open ? 'is-open' : ''}`} id="nav-links">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="nav-lang"
          onClick={toggle}
          aria-label={lang === 'es' ? t('nav.toEnglish') : t('nav.toSpanish')}
        >
          {lang === 'es' ? 'EN' : 'ES'}
        </button>

        <a href="#contacto" className="btn btn-primary btn-sm nav-cta">
          {t('nav.cta')}
        </a>

        <button
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
          aria-expanded={open}
          aria-controls="nav-links"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}
