import type { CSSProperties } from 'react'
import { SiCss, SiGit, SiHtml5, SiJavascript, SiReact, SiTypescript, SiVite } from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa6'
import type { IconType } from 'react-icons'
import Reveal from './Reveal'
import { useLang } from '../i18n/context'
import type { L10n } from '../i18n/dictionary'

const SKILLS: { Icon: IconType; color: string; name: string; desc: L10n }[] = [
  {
    Icon: SiHtml5,
    color: '#E34F26',
    name: 'HTML5',
    desc: { es: 'Estructura semántica y accesible.', en: 'Semantic and accessible structure.' },
  },
  {
    Icon: SiCss,
    color: '#1572B6',
    name: 'CSS3',
    desc: {
      es: 'Layouts modernos, animaciones y responsive.',
      en: 'Modern layouts, animations and responsive design.',
    },
  },
  {
    Icon: SiJavascript,
    color: '#F7DF1E',
    name: 'JavaScript',
    desc: { es: 'Lógica, DOM y asíncrono.', en: 'Logic, DOM and async code.' },
  },
  {
    Icon: SiTypescript,
    color: '#3178C6',
    name: 'TypeScript',
    desc: {
      es: 'Tipado seguro en proyectos reales.',
      en: 'Type safety in real-world projects.',
    },
  },
  {
    Icon: SiReact,
    color: '#61DAFB',
    name: 'React',
    desc: { es: 'Componentes, hooks y estado.', en: 'Components, hooks and state.' },
  },
  {
    Icon: SiVite,
    color: '#646CFF',
    name: 'Vite',
    desc: {
      es: 'Build rápido y desarrollo ágil.',
      en: 'Fast builds and agile development.',
    },
  },
  {
    Icon: SiGit,
    color: '#F05032',
    name: 'Git & GitHub',
    desc: {
      es: 'Control de versiones y flujo de equipo.',
      en: 'Version control and team workflows.',
    },
  },
  {
    Icon: FaDatabase,
    color: '#38BDF8',
    name: 'SQL',
    desc: {
      es: 'Consultas y modelado de bases de datos.',
      en: 'Queries and database modeling.',
    },
  },
]

export default function Skills() {
  const { t, lang } = useLang()

  return (
    <section className="section" id="habilidades">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-eyebrow">{t('skills.eyebrow')}</span>
            <h2 className="section-title">
              {t('skills.titleA')} <span className="gradient-text">{t('skills.titleB')}</span>
            </h2>
            <p className="section-sub">{t('skills.sub')}</p>
          </div>
        </Reveal>

        <div className="skills-grid">
          {SKILLS.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 70}>
              <article className="skill-card">
                <div
                  className="skill-icon"
                  style={{ '--icon-color': skill.color } as CSSProperties}
                >
                  <skill.Icon aria-hidden="true" />
                </div>
                <h3>{skill.name}</h3>
                <p>{skill.desc[lang]}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
