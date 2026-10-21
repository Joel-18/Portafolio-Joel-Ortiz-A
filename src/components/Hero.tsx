import fotoPerfil from '../assets/avatar.jpg'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div>
          <span className="hero-badge">
            <span className="dot" /> Disponible para oportunidades
          </span>

          <h1>
            Hola, soy <span className="gradient-text">Joel Ortiz</span>
          </h1>

          <p className="hero-role">
            <span className="typewriter">Programador Junior</span>
            <span className="caret" aria-hidden="true" />
          </p>

          <p className="hero-desc">
            Construyo experiencias web rápidas, accesibles y con personalidad. Me enfoco en
            escribir código limpio y en transformar ideas en proyectos personales que la gente
            disfrute usando.
          </p>

          <div className="hero-actions">
            <a href="#proyectos" className="btn btn-primary">
              Ver proyectos
            </a>
            <a href="#contacto" className="btn btn-ghost">
              Contáctame
            </a>
            <a
              href="https://github.com/Joel-18"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-ring">
            <div className="avatar">
              <img src={fotoPerfil} alt="Foto de perfil de Joel Ortiz" />
            </div>
          </div>
          <span className="orbit-chip">React</span>
          <span className="orbit-chip">TypeScript</span>
          <span className="orbit-chip">Vite</span>
        </div>
      </div>
    </section>
  )
}
