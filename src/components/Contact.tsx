import { useState, type FormEvent } from 'react'
import Reveal from './Reveal'

const EMAIL = 'tu-email@example.com'
const GITHUB = 'https://github.com/tu-usuario'
const LINKEDIN = 'https://www.linkedin.com/in/tu-usuario'

const CONTACTS = [
  { icon: '✉', label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: 'GH', label: 'GitHub', value: 'tu-usuario', href: GITHUB },
  { icon: 'in', label: 'LinkedIn', value: 'tu-usuario', href: LINKEDIN },
]

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Mensaje de ${name} — Portafolio`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section className="section" id="contacto">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="section-eyebrow">Contacto</span>
            <h2 className="section-title">
              ¿Hablamos? <span className="gradient-text">Estoy disponible</span>
            </h2>
            <p className="section-sub">
              Escríbeme y te responderé lo antes posible. Me encantará conocer tu proyecto o
              vacante.
            </p>
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
                >
                  <span className="icon">{contact.icon}</span>
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
                  <label htmlFor="name">Nombre</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntame sobre la vacante o el proyecto..."
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </div>

              <button className="btn btn-primary" type="submit">
                Enviar mensaje
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
