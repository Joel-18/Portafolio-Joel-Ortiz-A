import Reveal from './Reveal'

const SKILLS = [
  { icon: 'HT', name: 'HTML5', desc: 'Estructura semántica y accesible.' },
  { icon: 'CS', name: 'CSS3', desc: 'Layouts modernos, animaciones y responsive.' },
  { icon: 'JS', name: 'JavaScript', desc: 'Lógica, DOM y asíncrono.' },
  { icon: 'TS', name: 'TypeScript', desc: 'Tipado seguro en proyectos reales.' },
  { icon: 'RE', name: 'React', desc: 'Componentes, hooks y estado.' },
  { icon: 'VI', name: 'Vite', desc: 'Build rápido y desarrollo ágil.' },
  { icon: 'GT', name: 'Git & GitHub', desc: 'Control de versiones y flujo de equipo.' },
  { icon: 'SQ', name: 'SQL', desc: 'Consultas y modelado de bases de datos.' },
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
                <div className="skill-icon">{skill.icon}</div>
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
