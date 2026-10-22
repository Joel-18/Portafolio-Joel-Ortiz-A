import { FaCode, FaMagnifyingGlass, FaPenRuler, FaRocket } from 'react-icons/fa6'
import type { IconType } from 'react-icons'
import Reveal from './Reveal'

const STEPS: { num: string; Icon: IconType; title: string; desc: string }[] = [
  {
    num: '01',
    Icon: FaMagnifyingGlass,
    title: 'Entiendo el problema',
    desc: 'Antes de escribir código, defino qué resuelve el proyecto y para quién es.',
  },
  {
    num: '02',
    Icon: FaPenRuler,
    title: 'Planifico',
    desc: 'Diseño la estructura de datos, los componentes y la interfaz paso a paso.',
  },
  {
    num: '03',
    Icon: FaCode,
    title: 'Construyo',
    desc: 'Desarrollo con React y TypeScript en bloques pequeños, con código limpio y claro.',
  },
  {
    num: '04',
    Icon: FaRocket,
    title: 'Despliego y mejoro',
    desc: 'Pruebo, publico en GitHub Pages y ajusto con cada retroalimentación.',
  },
]

export default function Process() {
  return (
    <section className="section" id="proceso">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-eyebrow">Cómo trabajo</span>
            <h2 className="section-title">
              Mi proceso de <span className="gradient-text">trabajo</span>
            </h2>
            <p className="section-sub">
              Cuatro pasos que sigo en cada proyecto, desde la idea hasta el deploy.
            </p>
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
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
