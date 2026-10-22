import Reveal from './Reveal'
import type { Project } from '../data/projects'
import { projects } from '../data/projects'
import { useLang } from '../i18n/context'
import { initials } from '../utils/initials'

type ProjectsProps = {
  onSelect: (project: Project) => void
}

export default function Projects({ onSelect }: ProjectsProps) {
  const { t, lang } = useLang()

  return (
    <section className="section" id="proyectos">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-eyebrow">{t('projects.eyebrow')}</span>
            <h2 className="section-title">
              {t('projects.titleA')} <span className="gradient-text">{t('projects.titleB')}</span>
            </h2>
            <p className="section-sub">{t('projects.sub')}</p>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const title = project.title[lang]
            return (
              <Reveal key={project.id} delay={index * 110}>
                <article className="project-card">
                  <div className="project-thumb">
                    {project.image ? (
                      <img src={project.image} alt={t('projects.screenshotAlt', { title })} />
                    ) : (
                      <span className="thumb-icon" aria-hidden="true">
                        {initials(title)}
                      </span>
                    )}
                  </div>

                  <div className="project-body">
                    <h3>{title}</h3>
                    <p>{project.description[lang]}</p>
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-actions">
                      <button className="btn btn-primary btn-sm" onClick={() => onSelect(project)}>
                        {t('projects.view')}
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
