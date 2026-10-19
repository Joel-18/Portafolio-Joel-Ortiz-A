import Reveal from './Reveal'
import type { Project } from '../data/projects'
import { projects } from '../data/projects'

type ProjectsProps = {
  onSelect: (project: Project) => void
}

function initials(title: string) {
  const words = title.split(/\s+/).filter(Boolean)
  if (words.length === 1) return (words[0] ?? '').slice(0, 2).toUpperCase()
  return words
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('')
}

export default function Projects({ onSelect }: ProjectsProps) {
  return (
    <section className="section" id="proyectos">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-eyebrow">Proyectos</span>
            <h2 className="section-title">
              Trabajo <span className="gradient-text">seleccionado</span>
            </h2>
            <p className="section-sub">
              Cada proyecto se abre dentro de esta misma página. Puedes verlo en vivo o revisar
              el código en GitHub.
            </p>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 110}>
              <article className="project-card">
                <div className="project-thumb">
                  {project.image ? (
                    <img src={project.image} alt={`Captura de ${project.title}`} />
                  ) : (
                    <span className="thumb-icon">{initials(project.title)}</span>
                  )}
                </div>

                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <button className="btn btn-primary btn-sm" onClick={() => onSelect(project)}>
                      Ver proyecto
                    </button>
                    <a
                      className="btn btn-ghost btn-sm"
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
