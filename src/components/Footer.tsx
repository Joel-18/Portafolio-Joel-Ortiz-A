import { EMAIL, GITHUB, LINKEDIN, WHATSAPP } from '../data/contact'
import { useLang } from '../i18n/context'

const YEAR = new Date().getFullYear()

const LINKS = [
  { label: 'GH', href: GITHUB, title: 'GitHub' },
  { label: 'in', href: LINKEDIN, title: 'LinkedIn' },
  { label: 'WA', href: WHATSAPP, title: 'WhatsApp' },
  { label: '✉', href: `mailto:${EMAIL}`, title: 'Email' },
]

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {YEAR} <strong>Joel Ortiz</strong> — {t('footer.built')}
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
