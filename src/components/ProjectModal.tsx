import { useEffect, useRef } from 'react'
import type { Project } from '../data/projects'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

function initials(title: string) {
  const words = title.split(/\s+/).filter(Boolean)
  if (words.length === 1) return (words[0] ?? '').slice(0, 2).toUpperCase()
  return words
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('')
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!project) return

    const overlay = overlayRef.current
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null

    const focusables = () =>
      overlay
        ? Array.from(
            overlay.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])',
            ),
          ).filter((el) => !el.hasAttribute('disabled'))
        : []

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab') return

      const items = focusables()
      if (items.length === 0) return

      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement
      const inside = active instanceof Node && overlay?.contains(active)

      if (event.shiftKey) {
        if (!inside || active === first) {
          event.preventDefault()
          last.focus()
        }
      } else if (!inside || active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    const frame = requestAnimationFrame(() => {
      overlay?.querySelector<HTMLElement>('.modal-close')?.focus()
    })

    return () => {
      cancelAnimationFrame(frame)
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      previouslyFocused?.focus()
    }
  }, [project, onClose])

  if (!project) return null

  const canEmbed = Boolean(project.demoUrl)

  return (
    <div
      className="modal-overlay"
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Proyecto ${project.title}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="modal">
        <header className="modal-head">
          <div>
            <h3>{project.title}</h3>
            <div className="tags">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Cerrar proyecto">
            ✕
          </button>
        </header>

        <div className="modal-body">
          {canEmbed ? (
            <iframe
              className="modal-frame"
              src={project.demoUrl}
              title={`Demo de ${project.title}`}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          ) : (
            <div className="modal-fallback">
              <div className="thumb-icon">{initials(project.title)}</div>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <p>
                Este proyecto se ejecuta desde su repositorio de GitHub: los repositorios no
                permiten ser embebidos, así que se abre en una pestaña nueva.
              </p>
            </div>
          )}
        </div>

        <footer className="modal-foot">
          <a
            className="btn btn-ghost btn-sm"
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver repositorio ↗
          </a>
          {canEmbed && (
            <a
              className="btn btn-primary btn-sm"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir demo en pestaña ↗
            </a>
          )}
          <button className="btn btn-primary btn-sm" onClick={onClose}>
            Cerrar
          </button>
        </footer>
      </div>
    </div>
  )
}
