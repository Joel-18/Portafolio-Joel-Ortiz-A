import type { CSSProperties } from 'react'
import { SiCss, SiGit, SiHtml5, SiJavascript, SiReact, SiTypescript, SiVite } from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa6'
import type { IconType } from 'react-icons'
import Reveal from './Reveal'

const SKILLS: { Icon: IconType; color: string; name: string; desc: string }[] = [
  { Icon: SiHtml5, color: '#E34F26', name: 'HTML5', desc: 'Estructura semántica y accesible.' },
  { Icon: SiCss, color: '#1572B6', name: 'CSS3', desc: 'Layouts modernos, animaciones y responsive.' },
  { Icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript', desc: 'Lógica, DOM y asíncrono.' },
  { Icon: SiTypescript, color: '#3178C6', name: 'TypeScript', desc: 'Tipado seguro en proyectos reales.' },
  { Icon: SiReact, color: '#61DAFB', name: 'React', desc: 'Componentes, hooks y estado.' },
  { Icon: SiVite, color: '#646CFF', name: 'Vite', desc: 'Build rápido y desarrollo ágil.' },
  { Icon: SiGit, color: '#F05032', name: 'Git & GitHub', desc: 'Control de versiones y flujo de equipo.' },
  { Icon: FaDatabase, color: '#38BDF8', name: 'SQL', desc: 'Consultas y modelado de bases de datos.' },
]

export default function Skills() {
  return (
    <section className="section" id="habilidades">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-eyebrow">Habilidades</span>
            <h2 className="section-title">
              Tecnologías que <span className="gradient-text">domino</span>
            </h2>
            <p className="section-sub">
              Un set práctico para construir productos completos, del diseño al despliegue.
            </p>
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
                <p>{skill.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
