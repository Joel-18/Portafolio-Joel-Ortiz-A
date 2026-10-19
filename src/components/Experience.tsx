import Reveal from './Reveal'

const CERTS = [
  {
    id: 'alfabetizacion-ia',
    title: 'Alfabetización en IA',
    image: 'certificados/certificado-alfabetizacion-ia.png',
    href: 'certificados/certificado-alfabetizacion-ia.pdf',
    linkLabel: 'Ver PDF',
  },
  {
    id: 'aws',
    title: 'Fundamentos de AWS',
    image: 'certificados/certificado-aws.jpeg',
    href: 'certificados/certificado-aws.jpeg',
    linkLabel: 'Ver imagen',
  },
  {
    id: 'daxus-ia',
    title: 'Inmersión Agentes de IA en la Práctica',
    image: 'certificados/certificado-daxus-inmersion-ia.png',
    href: 'certificados/certificado-daxus-inmersion-ia.pdf',
    linkLabel: 'Ver PDF',
  },
  {
    id: 'big-school-ia',
    title: 'Iniciación al Desarrollo con IA',
    image: 'certificados/certificado-big-school.jpeg',
    href: 'certificados/certificado-big-school.jpeg',
    linkLabel: 'Ver imagen',
  },
]

const ITEMS = [
  {
    date: '2024 — Actualidad',
    title: 'Programación Web',
    place: 'Formación autodidacta y proyectos personales',
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

        <div className="certs-block">
          <Reveal>
            <h3 className="certs-title">Certificados obtenidos</h3>
          </Reveal>
          <div className="certs-grid">
            {CERTS.map((cert, index) => (
              <Reveal key={cert.id} delay={index * 130}>
                <article className="cert-card">
                  <a
                    className="cert-media"
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir ${cert.title}`}
                  >
                    <img src={cert.image} alt={`Certificado de ${cert.title}`} loading="lazy" />
                  </a>
                  <div className="cert-body">
                    <h3>{cert.title}</h3>
                    <a
                      className="btn btn-ghost btn-sm"
                      href={cert.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {cert.linkLabel} ↗
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
