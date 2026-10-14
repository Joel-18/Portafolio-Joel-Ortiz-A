const YEAR = new Date().getFullYear()

const LINKS = [
  { label: 'GH', href: 'https://github.com/tu-usuario', title: 'GitHub' },
  { label: 'in', href: 'https://www.linkedin.com/in/tu-usuario', title: 'LinkedIn' },
  { label: '✉', href: 'mailto:tu-email@example.com', title: 'Email' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {YEAR} <strong>Joel Ortiz</strong> — Construido con React, TypeScript y Vite.
        </p>
        <div className="footer-links">
          {LINKS.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              title={link.title}
              aria-label={link.title}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
