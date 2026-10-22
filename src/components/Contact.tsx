import { useEffect, useRef, useState, type FormEvent, type MouseEvent } from 'react'
import type { IconType } from 'react-icons'
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import Reveal from './Reveal'
import { EMAIL, GITHUB, LINKEDIN, WHATSAPP } from '../data/contact'
import { useLang } from '../i18n/context'

type ContactLink = {
  icon: IconType
  label: string
  value: string
  href: string
  copy?: string
}

const CONTACTS: ContactLink[] = [
  { icon: FaEnvelope, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, copy: EMAIL },
  { icon: FaWhatsapp, label: 'WhatsApp', value: '+1 829-276-1619', href: WHATSAPP },
  { icon: FaGithub, label: 'GitHub', value: 'Joel-18', href: GITHUB },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'joel-ortiz-231a3136a', href: LINKEDIN },
]

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [toast, setToast] = useState<string | null>(null)
  const timer = useRef<number | undefined>(undefined)
  const { t } = useLang()

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const showToast = (text: string) => {
    window.clearTimeout(timer.current)
    setToast(text)
    timer.current = window.setTimeout(() => setToast(null), 3400)
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      return false
    }
  }

  const onCopyEmail = async (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const copied = await copyToClipboard(EMAIL)
    showToast(copied ? t('contact.toastCopied') : `${t('contact.toastEmail')} ${EMAIL}`)
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const subject = encodeURIComponent(t('contact.subject', { name }))
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    await copyToClipboard(EMAIL)
    showToast(t('contact.toastSubmit'))
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section className="section" id="contacto">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-eyebrow">{t('contact.eyebrow')}</span>
            <h2 className="section-title">
              {t('contact.titleA')}{' '}
              <span className="gradient-text">{t('contact.titleB')}</span>
            </h2>
            <p className="section-sub">{t('contact.sub')}</p>
          </div>
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            <div className="contact-links">
              {CONTACTS.map((contact) => (
                <a
                  className="contact-item"
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onClick={contact.copy ? onCopyEmail : undefined}
                >
                  <span className="icon" aria-hidden="true">
                    <contact.icon />
                  </span>
                  <span>
                    <span className="label">{contact.label}</span>
                    <br />
                    <span className="value">{contact.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">{t('contact.labelName')}</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={t('contact.phName')}
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">{t('contact.labelEmail')}</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t('contact.phEmail')}
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">{t('contact.labelMessage')}</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t('contact.phMessage')}
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </div>

              <button className="btn btn-primary" type="submit">
                {t('contact.submit')}
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      {toast && (
        <div className="toast" role="status">
          {toast}
        </div>
      )}
    </section>
  )
}
