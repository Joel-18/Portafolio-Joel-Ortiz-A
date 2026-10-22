import Reveal from './Reveal'
import { useLang } from '../i18n/context'
import type { L10n } from '../i18n/dictionary'

const CERTS: { id: string; title: L10n; image: string; href: string }[] = [
  {
    id: 'alfabetizacion-ia',
    title: { es: 'Alfabetización en IA', en: 'AI Literacy' },
    image: 'certificados/certificado-alfabetizacion-ia.png',
    href: 'certificados/certificado-alfabetizacion-ia.pdf',
  },
  {
    id: 'aws',
    title: { es: 'Fundamentos de AWS', en: 'AWS Fundamentals' },
    image: 'certificados/certificado-aws.jpeg',
    href: 'certificados/certificado-aws.jpeg',
  },
  {
    id: 'daxus-ia',
    title: {
      es: 'Inmersión Agentes de IA en la Práctica',
      en: 'AI Agents Immersion in Practice',
    },
    image: 'certificados/certificado-daxus-inmersion-ia.png',
    href: 'certificados/certificado-daxus-inmersion-ia.pdf',
  },
  {
    id: 'big-school-ia',
    title: { es: 'Iniciación al Desarrollo con IA', en: 'Introduction to AI Development' },
    image: 'certificados/certificado-big-school.jpeg',
    href: 'certificados/certificado-big-school.jpeg',
  },
  {
    id: 'aprende-claude',
    title: { es: 'Aprende Claude desde cero', en: 'Learn Claude from Scratch' },
    image: 'certificados/certificado-aprende-claude.png',
    href: 'certificados/certificado-aprende-claude.pdf',
  },
]

const ITEMS: { date: L10n; title: L10n; place: L10n; desc: L10n }[] = [
  {
    date: { es: 'Octubre 2026', en: 'October 2026' },
    title: {
      es: 'Formación en Inteligencia Artificial',
      en: 'Artificial Intelligence Training',
    },
    place: { es: 'ITLA · NETZUN · Daxus Latam', en: 'ITLA · NETZUN · Daxus Latam' },
    desc: {
      es: 'Alfabetización en IA, la charla "Aprende Claude desde cero" y la inmersión en Agentes de IA en la Práctica — certificados al final de esta sección.',
      en: 'AI literacy, the talk "Learn Claude from Scratch" and the hands-on AI Agents immersion — certificates at the end of this section.',
    },
  },
  {
    date: { es: '2024 — Actualidad', en: '2024 — Present' },
    title: { es: 'Programación Web', en: 'Web Development' },
    place: {
      es: 'Formación autodidacta y proyectos personales',
      en: 'Self-taught learning and personal projects',
    },
    desc: {
      es: 'Domino de HTML, CSS, JavaScript y React mediante proyectos prácticos desplegados en GitHub Pages.',
      en: 'Proficiency in HTML, CSS, JavaScript and React through practical projects deployed on GitHub Pages.',
    },
  },
  {
    date: { es: '2024', en: '2024' },
    title: { es: 'Programación orientada a objetos', en: 'Object-Oriented Programming' },
    place: { es: 'Java · Academia', en: 'Java · Academy' },
    desc: {
      es: 'Fundamentos de POO, estructuras de datos y lógica de negocio aplicados a consola y pequeñas aplicaciones.',
      en: 'OOP fundamentals, data structures and business logic applied to console and small applications.',
    },
  },
  {
    date: { es: '2023 — 2024', en: '2023 — 2024' },
    title: { es: 'Algoritmos y estructuras de datos', en: 'Algorithms and Data Structures' },
    place: { es: 'PSeInt · Pseudocódigo', en: 'PSeInt · Pseudocode' },
    desc: {
      es: 'Resolución de problemas complejos descomponiéndolos en pasos claros: condicionales, bucles, arreglos y funciones.',
      en: 'Solving complex problems by breaking them into clear steps: conditionals, loops, arrays and functions.',
    },
  },
  {
    date: { es: 'Objetivo', en: 'Goal' },
    title: { es: 'Únete al equipo', en: 'Join the Team' },
    place: {
      es: 'Disponible para prácticas o primer empleo',
      en: 'Available for internship or first job',
    },
    desc: {
      es: 'Listo para aportar valor real, aprender rápido y crecer con profesionales con más experiencia.',
      en: 'Ready to deliver real value, learn fast and grow alongside more experienced professionals.',
    },
  },
]

export default function Experience() {
  const { t, lang } = useLang()

  return (
    <section className="section" id="experiencia">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-eyebrow">{t('exp.eyebrow')}</span>
            <h2 className="section-title">
              {t('exp.titleA')} <span className="gradient-text">{t('exp.titleB')}</span>
            </h2>
            <p className="section-sub">{t('exp.sub')}</p>
          </div>
        </Reveal>

        <div className="timeline">
          {ITEMS.map((item, index) => (
            <Reveal key={item.title.es} delay={index * 100}>
              <article className="timeline-item">
                <span className="timeline-date">{item.date[lang]}</span>
                <h3>{item.title[lang]}</h3>
                <div className="place">{item.place[lang]}</div>
                <p>{item.desc[lang]}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="certs-block">
          <Reveal>
            <h3 className="certs-title">{t('exp.certsTitle')}</h3>
          </Reveal>
          <div className="certs-grid">
            {CERTS.map((cert, index) => {
              const title = cert.title[lang]
              const linkLabel = cert.href.endsWith('.pdf')
                ? t('exp.viewPdf')
                : t('exp.viewImage')
              return (
                <Reveal key={cert.id} delay={index * 130}>
                  <article className="cert-card">
                    <a
                      className="cert-media"
                      href={cert.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t('exp.openCert', { title })}
                    >
                      <img src={cert.image} alt={t('exp.certAlt', { title })} loading="lazy" />
                    </a>
                    <div className="cert-body">
                      <h4>{title}</h4>
                      <a
                        className="btn btn-ghost btn-sm"
                        href={cert.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {linkLabel} ↗
                      </a>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
