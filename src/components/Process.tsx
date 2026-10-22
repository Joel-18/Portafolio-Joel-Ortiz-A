import { FaCode, FaMagnifyingGlass, FaPenRuler, FaRocket } from 'react-icons/fa6'
import type { IconType } from 'react-icons'
import Reveal from './Reveal'
import { useLang } from '../i18n/context'
import type { L10n } from '../i18n/dictionary'

const STEPS: { num: string; Icon: IconType; title: L10n; desc: L10n }[] = [
  {
    num: '01',
    Icon: FaMagnifyingGlass,
    title: { es: 'Entiendo el problema', en: 'I understand the problem' },
    desc: {
      es: 'Antes de escribir código, defino qué resuelve el proyecto y para quién es.',
      en: 'Before writing code, I define what the project solves and who it is for.',
    },
  },
  {
    num: '02',
    Icon: FaPenRuler,
    title: { es: 'Planifico', en: 'I plan' },
    desc: {
      es: 'Diseño la estructura de datos, los componentes y la interfaz paso a paso.',
      en: 'I design the data structure, components and interface step by step.',
    },
  },
  {
    num: '03',
    Icon: FaCode,
    title: { es: 'Construyo', en: 'I build' },
    desc: {
      es: 'Desarrollo con React y TypeScript en bloques pequeños, con código limpio y claro.',
      en: 'I develop with React and TypeScript in small blocks, with clean, clear code.',
    },
  },
  {
    num: '04',
    Icon: FaRocket,
    title: { es: 'Despliego y mejoro', en: 'I deploy and improve' },
    desc: {
      es: 'Pruebo, publico en GitHub Pages y ajusto con cada retroalimentación.',
      en: 'I test, publish to GitHub Pages and refine with every piece of feedback.',
    },
  },
]

export default function Process() {
  const { t, lang } = useLang()

  return (
    <section className="section" id="proceso">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-eyebrow">{t('process.eyebrow')}</span>
            <h2 className="section-title">
              {t('process.titleA')} <span className="gradient-text">{t('process.titleB')}</span>
            </h2>
            <p className="section-sub">{t('process.sub')}</p>
          </div>
        </Reveal>

        <div className="process-grid">
          {STEPS.map((step, index) => (
            <Reveal key={step.num} delay={index * 110}>
              <article className="process-step">
                <div className="process-top">
                  <span className="process-num">{step.num}</span>
                  <span className="process-icon" aria-hidden="true">
                    <step.Icon />
                  </span>
                </div>
                <h3>{step.title[lang]}</h3>
                <p>{step.desc[lang]}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
