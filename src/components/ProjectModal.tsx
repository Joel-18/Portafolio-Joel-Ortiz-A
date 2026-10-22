import { useEffect, useRef } from 'react'
import type { Project } from '../data/projects'
import { useLang } from '../i18n/context'
import { initials } from '../utils/initials'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const { t, lang } = useLang()

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

  const title = project.title[lang]
  const canEmbed = Boolean(project.demoUrl)

  return (
    <div
      className="modal-overlay"
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={t('modal.projectAria', { title })}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="modal">
        <header className="modal-head">
          <div>
            <h3>{title}</h3>
            <div className="tags">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label={t('modal.closeAria')}>
            ✕
          </button>
        </header>

        <div className="modal-body">
          {canEmbed ? (
            <iframe
              className="modal-frame"
              src={project.demoUrl}
              title={t('modal.demoTitle', { title })}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          ) : (
            <div className="modal-fallback">
              <div className="thumb-icon">{initials(title)}</div>
              <h4>{title}</h4>
              <p>{project.description[lang]}</p>
              <p>{t('modal.noEmbed')}</p>
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
            {t('modal.repo')} ↗
          </a>
          {canEmbed && (
            <a
              className="btn btn-primary btn-sm"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('modal.openDemo')} ↗
            </a>
          )}
          <button className="btn btn-primary btn-sm" onClick={onClose}>
            {t('modal.close')}
          </button>
        </footer>
      </div>
    </div>
  )
}
