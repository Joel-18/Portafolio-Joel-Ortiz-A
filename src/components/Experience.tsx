import Reveal from './Reveal'

const ITEMS = [
  {
    date: '2024 — Actualidad',
    title: 'Desarrollo Web Full-Stack',
    place: 'Formación autodidacta y proyectos propios',
    desc: 'Domino de HTML, CSS, JavaScript y React mediante proyectos prácticos desplegados en GitHub Pages.',
  },
  {
    date: '2024',
    title: 'Programación orientada a objetos',
    place: 'Java · Academia',
    desc: 'Fundamentos de POO, estructuras de datos y lógica de negocio aplicados a consola y pequeñas aplicaciones.',
  },
  {
    date: '2023 — 2024',
    title: 'Algoritmos y estructuras de datos',
    place: 'PSeInt · Pseudocódigo',
    desc: 'Resolución de problemas complejos descomponiéndolos en pasos claros: condicionales, bucles, arreglos y funciones.',
  },
  {
    date: 'Objetivo',
    title: 'Únete al equipo',
    place: 'Disponible para prácticas o primer empleo',
    desc: 'Listo para aportar valor real, aprender rápido y crecer con profesionales con más experiencia.',
  },
]

export default function Experience() {
  return (
    <section className="section" id="experiencia">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-eyebrow">Trayectoria</span>
            <h2 className="section-title">
              Experiencia y <span className="gradient-text">formación</span>
            </h2>
            <p className="section-sub">
              El camino recorrido hasta hoy y hacia dónde voy.
            </p>
          </div>
        </Reveal>

        <div className="timeline">
          {ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <article className="timeline-item">
                <span className="timeline-date">{item.date}</span>
                <h3>{item.title}</h3>
                <div className="place">{item.place}</div>
                <p>{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
