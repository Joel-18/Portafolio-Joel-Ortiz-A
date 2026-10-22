export type Lang = 'es' | 'en'
export type L10n = { es: string; en: string }

export const es = {
  'doc.title': 'Joel Ortiz | Programador Junior',

  'app.skip': 'Saltar al contenido',

  'nav.home': 'Inicio',
  'nav.about': 'Sobre mí',
  'nav.skills': 'Habilidades',
  'nav.process': 'Proceso',
  'nav.projects': 'Proyectos',
  'nav.experience': 'Experiencia',
  'nav.contact': 'Contacto',
  'nav.cta': 'Contáctame',
  'nav.main': 'Navegación principal',
  'nav.openMenu': 'Abrir menú',
  'nav.closeMenu': 'Cerrar menú',
  'nav.toEnglish': 'Switch to English',
  'nav.toSpanish': 'Cambiar a español',

  'hero.badge': 'Disponible para oportunidades',
  'hero.hello': 'Hola, soy',
  'hero.role': 'Programador Junior',
  'hero.desc':
    'Construyo experiencias web rápidas, accesibles y con personalidad. Me enfoco en escribir código limpio y en transformar ideas en proyectos personales que la gente disfrute usando.',
  'hero.viewProjects': 'Ver proyectos',
  'hero.contact': 'Contáctame',
  'hero.avatarAlt': 'Foto de perfil de Joel Ortiz',

  'about.eyebrow': 'Sobre mí',
  'about.titleA': 'Perfil',
  'about.titleB': 'profesional',
  'about.p1':
    'Soy **Joel Ortiz**, programador junior de 26 años, dominicano, en formación con foco en el ecosistema web moderno. Me gusta entender el problema antes de escribir la primera línea de código.',
  'about.p2':
    'Trabajo con **React, TypeScript y Vite** para interfaces rápidas, y cuido los detalles que hacen la diferencia: rendimiento, accesibilidad y una experiencia visual que transmita seriedad.',
  'about.p3':
    'Busco un equipo donde pueda **aprender rápido, aportar desde el día uno** y crecer profesionalmente. Si buscas a alguien comprometido y con ganas de hacer las cosas bien, hablemos.',
  'about.chipAge': '26 años',
  'about.chipCountry': 'Dominicano',
  'about.chipRole': 'Programador Junior',
  'about.chipAvailable': 'Disponible',
  'about.statProjects': 'Proyectos personales',
  'about.statTech': 'Tecnologías manejadas',
  'about.statCommitment': 'Compromiso y puntualidad',

  'skills.eyebrow': 'Habilidades',
  'skills.titleA': 'Tecnologías que',
  'skills.titleB': 'domino',
  'skills.sub': 'Un set práctico para construir productos completos, del diseño al despliegue.',

  'process.eyebrow': 'Cómo trabajo',
  'process.titleA': 'Mi proceso de',
  'process.titleB': 'trabajo',
  'process.sub': 'Cuatro pasos que sigo en cada proyecto, desde la idea hasta el deploy.',

  'projects.eyebrow': 'Proyectos',
  'projects.titleA': 'Trabajo',
  'projects.titleB': 'seleccionado',
  'projects.sub':
    'Cada proyecto se abre dentro de esta misma página. Puedes verlo en vivo o revisar el código en GitHub.',
  'projects.view': 'Ver proyecto',
  'projects.screenshotAlt': 'Captura de {title}',

  'exp.eyebrow': 'Trayectoria',
  'exp.titleA': 'Experiencia y',
  'exp.titleB': 'formación',
  'exp.sub': 'El camino recorrido hasta hoy y hacia dónde voy.',
  'exp.certsTitle': 'Certificados obtenidos',
  'exp.openCert': 'Abrir {title}',
  'exp.certAlt': 'Certificado de {title}',
  'exp.viewPdf': 'Ver PDF',
  'exp.viewImage': 'Ver imagen',

  'contact.eyebrow': 'Contacto',
  'contact.titleA': '¿Hablamos?',
  'contact.titleB': 'Estoy disponible',
  'contact.sub':
    'Escríbeme y te responderé lo antes posible. Me encantará conocer tu proyecto o vacante.',
  'contact.labelName': 'Nombre',
  'contact.labelEmail': 'Email',
  'contact.labelMessage': 'Mensaje',
  'contact.phName': 'Tu nombre',
  'contact.phEmail': 'tu@email.com',
  'contact.phMessage': 'Cuéntame sobre la vacante o el proyecto...',
  'contact.submit': 'Enviar mensaje',
  'contact.toastCopied': '✓ Email copiado al portapapeles',
  'contact.toastEmail': 'Email:',
  'contact.toastSubmit':
    '✓ Email copiado — si tu correo no se abre, pégalo donde prefieras',
  'contact.subject': 'Mensaje de {name} — Portafolio',

  'footer.built': 'Construido con React, TypeScript y Vite.',

  'modal.projectAria': 'Proyecto {title}',
  'modal.closeAria': 'Cerrar proyecto',
  'modal.demoTitle': 'Demo de {title}',
  'modal.noEmbed':
    'Este proyecto se ejecuta desde su repositorio de GitHub: los repositorios no permiten ser embebidos, así que se abre en una pestaña nueva.',
  'modal.repo': 'Ver repositorio',
  'modal.openDemo': 'Abrir demo en pestaña',
  'modal.close': 'Cerrar',
} as const

export type TKey = keyof typeof es

export const en: Record<TKey, string> = {
  'doc.title': 'Joel Ortiz | Junior Developer',

  'app.skip': 'Skip to content',

  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.skills': 'Skills',
  'nav.process': 'Process',
  'nav.projects': 'Projects',
  'nav.experience': 'Experience',
  'nav.contact': 'Contact',
  'nav.cta': 'Contact me',
  'nav.main': 'Main navigation',
  'nav.openMenu': 'Open menu',
  'nav.closeMenu': 'Close menu',
  'nav.toEnglish': 'Switch to English',
  'nav.toSpanish': 'Cambiar a español',

  'hero.badge': 'Available for opportunities',
  'hero.hello': "Hi, I'm",
  'hero.role': 'Junior Developer',
  'hero.desc':
    "I build fast, accessible web experiences with personality. I focus on writing clean code and turning ideas into personal projects that people enjoy using.",
  'hero.viewProjects': 'View projects',
  'hero.contact': 'Contact me',
  'hero.avatarAlt': 'Profile photo of Joel Ortiz',

  'about.eyebrow': 'About me',
  'about.titleA': 'Professional',
  'about.titleB': 'profile',
  'about.p1':
    "I'm **Joel Ortiz**, a 26-year-old junior developer from the Dominican Republic, in training with a focus on the modern web ecosystem. I like understanding the problem before writing the first line of code.",
  'about.p2':
    'I work with **React, TypeScript and Vite** to build fast interfaces, and I care about the details that make the difference: performance, accessibility and a visual experience that conveys professionalism.',
  'about.p3':
    "I'm looking for a team where I can **learn fast, contribute from day one** and grow professionally. If you're looking for someone committed and eager to do things right, let's talk.",
  'about.chipAge': '26 years old',
  'about.chipCountry': 'Dominican',
  'about.chipRole': 'Junior Developer',
  'about.chipAvailable': 'Available',
  'about.statProjects': 'Personal projects',
  'about.statTech': 'Technologies handled',
  'about.statCommitment': 'Commitment and punctuality',

  'skills.eyebrow': 'Skills',
  'skills.titleA': 'Technologies I',
  'skills.titleB': 'master',
  'skills.sub': 'A practical set to build complete products, from design to deployment.',

  'process.eyebrow': 'How I work',
  'process.titleA': 'My work',
  'process.titleB': 'process',
  'process.sub': 'Four steps I follow in every project, from idea to deploy.',

  'projects.eyebrow': 'Projects',
  'projects.titleA': 'Selected',
  'projects.titleB': 'work',
  'projects.sub':
    'Each project opens within this same page. You can view it live or review the code on GitHub.',
  'projects.view': 'View project',
  'projects.screenshotAlt': 'Screenshot of {title}',

  'exp.eyebrow': 'Journey',
  'exp.titleA': 'Experience and',
  'exp.titleB': 'training',
  'exp.sub': 'The path so far and where I am headed.',
  'exp.certsTitle': 'Certificates earned',
  'exp.openCert': 'Open {title}',
  'exp.certAlt': 'Certificate for {title}',
  'exp.viewPdf': 'View PDF',
  'exp.viewImage': 'View image',

  'contact.eyebrow': 'Contact',
  'contact.titleA': 'Shall we talk?',
  'contact.titleB': "I'm available",
  'contact.sub':
    "Write to me and I'll get back to you as soon as possible. I'd love to hear about your project or opening.",
  'contact.labelName': 'Name',
  'contact.labelEmail': 'Email',
  'contact.labelMessage': 'Message',
  'contact.phName': 'Your name',
  'contact.phEmail': 'your@email.com',
  'contact.phMessage': 'Tell me about the opening or the project...',
  'contact.submit': 'Send message',
  'contact.toastCopied': '✓ Email copied to clipboard',
  'contact.toastEmail': 'Email:',
  'contact.toastSubmit':
    "✓ Email copied — if your mail app doesn't open, paste it wherever you prefer",
  'contact.subject': 'Message from {name} — Portfolio',

  'footer.built': 'Built with React, TypeScript and Vite.',

  'modal.projectAria': 'Project {title}',
  'modal.closeAria': 'Close project',
  'modal.demoTitle': 'Demo of {title}',
  'modal.noEmbed':
    "This project runs from its GitHub repository: repositories cannot be embedded, so it opens in a new tab.",
  'modal.repo': 'View repository',
  'modal.openDemo': 'Open demo in new tab',
  'modal.close': 'Close',
}

export const dictionaries: Record<Lang, Record<TKey, string>> = { es, en }
